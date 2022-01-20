import React from "react";

import Favorites from "./Favorites";
import SearchPanel from "./SearchPanel";

import "./index.scss";

export default function HomeContent() {
  return (
    <div className="HomeContent">
      <Favorites />
      <SearchPanel />
    </div>
  );
}
