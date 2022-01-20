import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReduxState } from "../../../definitions/ReduxDef";

import { isSearchingCreater } from "../../../redux/actions";

import { getDefaultSearchUrl } from "../../../utils/userSettings/getUserSettings";

import useInputValue from "./hooks/useInputValue";

import "./index.scss";

export default function SearchInput() {
  const isSearching = useSelector<ReduxState, any>((state) => state.isSearching);
  const [inputPlaceholder, setInputPlaceholder] = useState("在此处搜索");
  const [inputValue, setInputValue, lastValue] = useInputValue("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!inputValue && lastValue) {
      inputRef.current && inputRef.current.focus();
    }
  }, [inputValue]);

  const defaultSearchUrl = getDefaultSearchUrl();

  return (
    <div className="SearchInput">
      <input
        type="text"
        placeholder={inputPlaceholder}
        value={inputValue}
        ref={inputRef}
        onFocus={(e) => {
          const inp = e.target as HTMLInputElement;
          if (inp.value) {
          } else {
            setInputPlaceholder("");
          }
          dispatch(isSearchingCreater(true));
        }}
        onBlur={(e) => {
          const inp = e.target as HTMLInputElement;
          if (inp.value) {
          } else {
            setInputPlaceholder("在此处搜索");
            dispatch(isSearchingCreater(false));
          }
        }}
        onInput={(e) => {
          // Todo: 应当做防抖
          const inp = e.target as HTMLInputElement;
          setInputValue(inp.value);
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
