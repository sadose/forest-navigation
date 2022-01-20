import React, { useState } from "react";
import { useSelector } from "react-redux";

import { FavoritesItem } from "../../../definitions/ModelsDef";
import { ReduxState } from "../../../definitions/ReduxDef";

import "./index.scss";

function favoritesItemClick(url: string) {
  return function () {
    window.open(url, "_blank");
  };
}

export default function Favorites() {
  let favoritesList: FavoritesItem[] = JSON.parse(
    window.localStorage.getItem("userFavoritesList") || "[]"
  );
  if (!favoritesList.length && !window.localStorage.getItem("userFavoritesListModified")) {
    favoritesList = [
      {
        title: "知乎",
        url: "https://www.zhihu.com/",
        icon: "https://static.zhihu.com/heifetz/favicon.ico",
      },
      {
        title: "哔哩哔哩",
        url: "https://www.bilibili.com/",
        icon: "favicon.ico",
      },
      {
        title: "力扣",
        url: "https://leetcode-cn.com/",
        icon: "favicon.ico",
      },
      {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org/zh-CN/",
        icon: "https://developer.mozilla.org/favicon.ico",
      },
      {
        title: "React中文文档",
        url: "https://react.docschina.org/",
        icon: "favicon.ico",
      },
      {
        title: "大森的博客",
        url: "https://sadose.github.io/",
        icon: "https://sadose.github.io/images/icons/logo-32.png",
      },
    ];
    window.localStorage.setItem("userFavoritesList", JSON.stringify(favoritesList));
  }
  const [favoritesData, setFavoritesData] = useState(favoritesList);
  const [boxShow, setBoxShow] = useState(false);
  const isSearching: boolean = useSelector<ReduxState, any>((state) => state.isSearching);
  return (
    <div className="Favorites disable-selection" data-close={isSearching}>
      <div className="star">
        <img
          src={require("./assets/star.png")}
          alt="star"
          data-active={boxShow}
          onClick={() => setBoxShow(!boxShow)}
        />
      </div>
      <div className="favorites-con" data-show={boxShow}>
        {favoritesData.map((value) => (
          <div className="item" key={value.title} onClick={favoritesItemClick(value.url)}>
            <img
              src={value.icon === "favicon.ico" ? value.url + "favicon.ico" : value.icon}
              alt={value.title}
            />
            <div>{value.title}</div>
          </div>
        ))}
        <div className="add" onClick={() => alert("这个功能还没有做呢……")}>
          <img src={require("./assets/add.png")} alt="添加" />
          <div>添加</div>
        </div>
      </div>
    </div>
  );
}
