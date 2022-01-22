import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { SearchEngine, AllSearchEngines } from "../../../../definitions/SearchEnginesDef";
import { ReduxState } from "../../../../definitions/ReduxDef";
import { USER_SEARCH_ENGINES } from "../../../../definitions/UserSettingsDef";

import { isSearchingCreater, searchTextCreater } from "../../../../redux/actions";

import getUserSetting from "../../../../utils/userSettings/getUserSettings";

import "./index.scss";

function searchBtnClick(url: string, text: string) {
  return function () {
    window.open(url + encodeURIComponent(text), "_blank");
  };
}

export default function SearchButton() {
  const searchText: string = useSelector<ReduxState, any>((state) => state.searchText);
  const dispatch = useDispatch();
  const searchEngings: SearchEngine[] = getUserSetting(USER_SEARCH_ENGINES);
  return (
    <div className="SearchButton">
      {searchText ? (
        <div className="btns">
          {searchEngings.map((v: SearchEngine) => (
            <div
              className="search"
              onClick={searchBtnClick(AllSearchEngines[v].url, searchText)}
              key={v}
            >
              <img src={require("./assets/" + v + ".png")} alt={AllSearchEngines[v].name} />
              <span>{AllSearchEngines[v].name}</span>
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
          <img
            src={require("./assets/" + searchEngings[0] + ".png")}
            alt={AllSearchEngines[searchEngings[0]].name}
          />
          <span>{AllSearchEngines[searchEngings[0]].name}</span>
        </div>
      )}
    </div>
  );
}
