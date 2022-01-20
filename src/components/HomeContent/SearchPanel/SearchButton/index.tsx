import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReduxState } from "../../../../definitions/ReduxDef";
import { isSearchingCreater, searchTextCreater } from "../../../../redux/actions";

import "./index.scss";

function searchBtnClick(url: string, text: string) {
  return function () {
    window.open(url + encodeURIComponent(text), "_blank");
  };
}

export default function SearchButton() {
  const searchText: string = useSelector<ReduxState, any>((state) => state.searchText);
  const dispatch = useDispatch();
  // Todo: 动态生成搜索按钮
  const searchEngings = [
    {
      name: "百度",
      nameEn: "baidu",
      url: "https://www.baidu.com/s?wd=",
    },
    {
      name: "必应",
      nameEn: "bing",
      url: "https://cn.bing.com/search?q=",
    },
    {
      name: "Google",
      nameEn: "google",
      url: "https://www.google.com.hk/search?q=",
    },
  ];
  return (
    <div className="SearchButton">
      {searchText ? (
        <div className="btns">
          {searchEngings.map((v) => (
            <div className="search" onClick={searchBtnClick(v.url, searchText)} key={v.nameEn}>
              <img src={require("./assets/" + v.nameEn + ".png")} alt={v.name} />
              <span>{v.name}</span>
            </div>
          ))}
          <div className="clear" onClick={() => dispatch(searchTextCreater(""))}>
            <img src={require("./assets/clear.png")} alt="清空" />
            <span>清空</span>
          </div>
          <div className="close" onClick={() => dispatch(isSearchingCreater(false))}>
            <img src={require("./assets/close.png")} alt="关闭" />
            <span>取消</span>
          </div>
        </div>
      ) : (
        <div className="info">
          您的默认搜索引擎为
          <img src={require("./assets/baidu.png")} alt="百度" />
          <span>百度</span>
        </div>
      )}
    </div>
  );
}
