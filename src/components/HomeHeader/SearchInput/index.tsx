import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../../definitions/ReduxDef";

import { isSearchingCreater } from "../../../redux/actions";

import useInputValue from "./hooks/useInputValue";

import "./index.scss";

export default function SearchInput() {
  const isSearching = useSelector<ReduxState, any>((state) => state.isSearching);
  const [inputPlaceholder, setInputPlaceholder] = useState("在此处搜索");
  const [inputValue, setInputValue] = useInputValue("");
  const dispatch = useDispatch();
  return (
    <div className="SearchInput">
      <input
        type="text"
        placeholder={inputPlaceholder}
        value={inputValue}
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
        data-focus={isSearching}
      />
    </div>
  );
}
