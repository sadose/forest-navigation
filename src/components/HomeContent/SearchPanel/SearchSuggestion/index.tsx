import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ReduxState } from "../../../../definitions/ReduxDef";
import { getDefaultSearchUrl } from "../../../../utils/userSettings/getUserSettings";

import "./index.scss";

function searchSuggestionClick(url: string, text: string) {
  window.open(url + encodeURIComponent(text), "_blank");
}

export default function SearchSuggestion() {
  const [suggestionList, setSuggestionList] = useState([]);
  const searchText: string = useSelector<ReduxState, any>((state) => state.searchText);
  useEffect(() => {
    fetch(`/api/sugrec?prod=pc&wd=${encodeURIComponent(searchText)}`)
      .then((res) => res.json())
      .then((json) => {
        if (!json || !json["g"]) setSuggestionList([]);
        else {
          const r = json["g"].map((v: any) => v["q"]);
          setSuggestionList(r);
        }
      });
  }, [searchText]);

  const defaultSearchUrl = getDefaultSearchUrl();

  return (
    <div className="SearchSuggestion">
      <div className="suggestions">
        {suggestionList.length ? (
          <div className="suggestion-header">您是否要搜索以下内容：</div>
        ) : (
          ""
        )}
        {suggestionList.map((value) => (
          <div
            className="suggestion-text"
            key={value}
            onClick={() => searchSuggestionClick(defaultSearchUrl, value)}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}
