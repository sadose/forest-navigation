import React from "react";
import { useSelector } from "react-redux";

import { ReduxState } from "../../../definitions/ReduxDef";

import SearchButton from "./SearchButton";
import SearchSuggestion from "./SearchSuggestion";

import "./index.scss";

export default function SearchPanel() {
  const isSearching: boolean = useSelector<ReduxState, any>((state) => state.isSearching);
  return (
    <div className="SearchPanel disable-selection" data-close={!isSearching}>
      <SearchButton />
      <SearchSuggestion />
    </div>
  );
}
