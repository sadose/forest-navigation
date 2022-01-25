import React from "react";

import Favorites from "./Favorites";
import SearchPanel from "./SearchPanel";
import BeautifulSentence from "./BeautifulSentence";

import "./index.scss";

export default function HomeContent() {
  return (
    <div className="HomeContent">
      <Favorites />
      <SearchPanel />
      <BeautifulSentence />
    </div>
  );
}
