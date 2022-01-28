import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSprings, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";

import { FavoritesItem } from "../../../definitions/ModelsDef";
import { ReduxState } from "../../../definitions/ReduxDef";
import { USER_FAVORITES } from "../../../definitions/UserSettingsDef";

import { isFavoritesBoxShownCreater } from "../../../redux/actions";

import getUserSetting from "../../../utils/userSettings/getUserSettings";
import setUserSetting from "../../../utils/userSettings/setUserSettings";
import { adjustPos, clamp } from "../../../utils/toolFunction";
import getFavoritesStyle, { FavoritesStyle } from "../../../utils/screenAdapter/favoritesAdapter";

import "./index.scss";

// 工厂函数：
//   参数：当前的元素顺序、是否正在被拖拽、源索引（发生拖拽事件的DOM的唯一编号）、当前索引（源索引在顺序数组中的下标）、位移量
//   返回如下的函数用来为各个拖拽元素计算当前状态：
//     参数：源索引  返回：该元素状态
const fn =
  (
    style: FavoritesStyle,
    order: number[],
    active = false,
    originalIndex = 0,
    curIndex = 0,
    x = 0,
    y = 0
  ) =>
  (index: number) =>
    active && index === originalIndex
      ? {
          x: (curIndex % style.column) * style.outerWidth + x,
          y: Math.floor(curIndex / style.column) * 100 + y,
          scale: 1.1,
          zIndex: 1,
          shadow: 15,
          immediate: (key: string) => key === "x" || key === "y" || key === "zIndex",
        }
      : {
          x: (order.indexOf(index) % style.column) * style.outerWidth,
          y: Math.floor(order.indexOf(index) / style.column) * style.outerHeight,
          scale: 1,
          zIndex: 0,
          shadow: 1,
          immediate: false,
        };

// 收藏项的点击打开事件函数
function favoritesItemClick(url: string) {
  window.open(url, "_blank");
}

export default function Favorites() {
  let favoritesList: FavoritesItem[] = getUserSetting(USER_FAVORITES);
  const [favoritesData, setFavoritesData] = useState(favoritesList); // Todo: 状态要在添加或编辑内容时（根据order数组和改变的内容）更新

  const [favoritesStyle, setFavoritesStyle] = useState(getFavoritesStyle());

  const isFavoritesBoxShown: boolean = useSelector<ReduxState, any>(
    (state) => state.isFavoritesBoxShown
  );
  const isSearching: boolean = useSelector<ReduxState, any>((state) => state.isSearching);
  const dispatch = useDispatch();

  const order = useRef(favoritesData.map((_, index) => index)); // 元素的顺序数组
  const isClick = useRef(false); // 元素是否被点击
  const dragBound = useRef(null); // 元素拖拽边界
  const [springs, api] = useSprings(favoritesData.length, fn(favoritesStyle, order.current));
  const bind = useDrag(
    ({ args: [originalIndex], active, movement: [x, y], event }) => {
      const curIndex = order.current.indexOf(originalIndex);
      const countRows = Math.floor((favoritesData.length - 1) / favoritesStyle.column) + 1;
      const countColumns = clamp(favoritesData.length, 0, favoritesStyle.column);
      const curRow = clamp(
        Math.floor(curIndex / favoritesStyle.column) + Math.round(y / favoritesStyle.outerHeight),
        0,
        countRows - 1
      );
      const curColumn = clamp(
        (curIndex % favoritesStyle.column) + Math.round(x / favoritesStyle.outerWidth),
        0,
        countColumns - 1
      );
      const newOrder = adjustPos(
        order.current,
        curIndex,
        curRow * favoritesStyle.column + curColumn
      );
      api.start(fn(favoritesStyle, newOrder, active, originalIndex, curIndex, x, y)); // 提供基于源索引的状态更新函数，更新各个源状态，开始动画
      if (!active) {
        let mark = false;
        for (let i = 0; i < newOrder.length; ++i) {
          if (order.current[i] !== newOrder[i]) {
            mark = true;
            break;
          }
        }
        if (mark) {
          // 拖拽结束且顺序数组有改变
          order.current = newOrder; // 更新顺序数组
          const newFavoritesList = newOrder.map((v) => favoritesData[v]);
          setUserSetting(USER_FAVORITES, newFavoritesList); // 更新用户配置
          // setFavoritesData(newFavoritesList); // 不能在这里更新组件状态！
        }
        if (isClick.current) favoritesItemClick(favoritesData[originalIndex].url); // 如果是单击，则打开链接
      } else if (event.type === "pointermove") {
        isClick.current = false; // 如果鼠标移动了，则不是单击而是拖动
      } else if (event.type === "pointerdown") {
        isClick.current = true; // 如果鼠标按下了，则假设动作为单击
      }
    },
    { bounds: dragBound }
  );

  const updateFavoritesStyle = () => {
    setFavoritesStyle(getFavoritesStyle());
    api.start(fn(getFavoritesStyle(), order.current, false, 0, 0, 0, 0));
  };

  useEffect(() => {
    window.addEventListener("resize", updateFavoritesStyle);
    return () => {
      window.removeEventListener("resize", updateFavoritesStyle);
    };
  }, []);

  const countRows = Math.floor((favoritesData.length - 1) / favoritesStyle.column) + 1;
  const countColumns = clamp(favoritesData.length, 0, favoritesStyle.column);
  const conFull =
    countColumns >= favoritesStyle.column
      ? countRows * countColumns === favoritesData.length
      : false;
  const lastColumn = favoritesData.length % favoritesStyle.column;

  return (
    <div className="Favorites disable-selection" data-close={isSearching}>
      <div className="star">
        <img
          src={require("./assets/star.png")}
          alt="star"
          data-active={isFavoritesBoxShown}
          onClick={() => dispatch(isFavoritesBoxShownCreater(!isFavoritesBoxShown))}
        />
      </div>
      <div
        className="favorites-con"
        style={{
          width: favoritesStyle.conWidth + (favoritesStyle.screenWidth > 600 ? 60 : 38) + "px",
          height:
            favoritesStyle.outerHeight * (conFull ? countRows + 1 : countRows) -
            favoritesStyle.gapY +
            60 +
            "px",
          padding: favoritesStyle.screenWidth > 600 ? "30px" : "25px 19px",
        }}
        data-show={isFavoritesBoxShown}
      >
        <div className="content" ref={dragBound}>
          {springs.map(({ zIndex, shadow, x, y, scale }, i) => (
            <animated.div
              {...bind(i)}
              key={favoritesData[i].title}
              style={{
                zIndex,
                boxShadow: shadow.to((s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 1px`),
                x,
                y,
                scale,
                fontSize: favoritesStyle.fontSize + "px",
                width: favoritesStyle.itemWidth + "px",
                height: favoritesStyle.itemHeight + "px",
              }}
            >
              <img
                draggable="false"
                src={
                  favoritesData[i].icon === "favicon.ico"
                    ? favoritesData[i].url + "favicon.ico"
                    : favoritesData[i].icon
                }
                alt={favoritesData[i].title}
              />
              <div
                className="title"
                style={{ padding: favoritesStyle.screenWidth > 600 ? "10px 0" : "2px 0" }}
              >
                {favoritesData[i].title}
              </div>
            </animated.div>
          ))}
          <div
            className="add"
            onClick={() => alert("这个功能还没有做呢……")}
            style={{
              width: favoritesStyle.itemWidth + "px",
              height: favoritesStyle.itemHeight + "px",
              fontSize: favoritesStyle.fontSize + "px",
              zIndex: 0,
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 1px 2px 1px",
              transform: conFull
                ? `translate3d(0px, ${countRows * favoritesStyle.outerHeight}px, 0px)`
                : `translate3d(${lastColumn * favoritesStyle.outerWidth}px, ${
                    (countRows - 1) * favoritesStyle.outerHeight
                  }px, 0px)`,
            }}
          >
            <img src={require("./assets/add.png")} alt="添加" />
            <div
              className="title"
              style={{ padding: favoritesStyle.screenWidth > 600 ? "10px 0" : "2px 0" }}
            >
              添加
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
