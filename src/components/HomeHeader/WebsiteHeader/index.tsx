import React from "react";
import { useSelector } from "react-redux";

import { ReduxState } from "../../../definitions/ReduxDef";

import "./index.scss";

export default function WebsiteHeader() {
  const isSearching: boolean = useSelector<ReduxState, any>((state) => state.isSearching);
  return (
    <div
      className="WebsiteHeader disable-selection"
      data-searching={isSearching ? "true" : "false"}
    >
      <img src={require("./assets/icon.png")} alt="森语导航logo" />
      <span>
        <span className="text-sen">森</span>
        <span className="text-yu">语</span>
        <span className="text-dao">导</span>
        <span className="text-hang">航</span>
        <span className="version">v1.2</span>
      </span>
    </div>
  );
}
