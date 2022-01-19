import React from "react";

import WebsiteHeader from "./WebsiteHeader";
import Search from "./SearchInput";

import "./index.scss";

export default function Homepage() {
  return (
    <div className="HomeHeader">
      <WebsiteHeader />
      <Search />
    </div>
  );
}
