import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useDidUpdateEffect, useDebounce } from "../../../hooks";

import { ReduxState } from "../../../definitions/ReduxDef";

import { isSearchingCreater, searchTextCreater } from "../../../redux/actions";

import { getDefaultSearchUrl } from "../../../utils/userSettings/getUserSettings";

import "./index.scss";

export default function SearchInput() {
  const dispatch = useDispatch();
  const isSearching = useSelector<ReduxState, any>((state) => state.isSearching);
  const inputValue = useSelector<ReduxState, any>((state) => state.searchText);

  const [currentInputValue, setCurrentInputValue] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  useDebounce(() => dispatch(searchTextCreater(currentInputValue)), 2000, [currentInputValue]);

  useDidUpdateEffect(() => {
    if (!inputValue) {
      inputRef.current && inputRef.current.focus();
      setCurrentInputValue(inputValue); // 唯一可能由外部改变 inputValue 的情况就是按下了清空按钮
    }
  }, [inputValue]);

  const defaultSearchUrl = getDefaultSearchUrl();

  console.log(currentInputValue);

  return (
    <div className="SearchInput">
      <input
        type="text"
        placeholder={isSearching ? "" : "在此处搜索"}
        value={currentInputValue}
        ref={inputRef}
        onFocus={() => {
          if (!isSearching) dispatch(isSearchingCreater(true));
        }}
        onBlur={(e) => {
          const inp = e.target as HTMLInputElement;
          if (!inp.value) dispatch(isSearchingCreater(false));
        }}
        onInput={(e) => {
          const inp = e.target as HTMLInputElement;
          setCurrentInputValue(inp.value);
        }}
        onKeyPress={(e) => {
          const inp = e.target as HTMLInputElement;
          if (e.key === "Enter") {
            window.open(defaultSearchUrl + encodeURIComponent(inp.value), "_blank");
          }
        }}
        data-focus={isSearching}
      />
    </div>
  );
}
