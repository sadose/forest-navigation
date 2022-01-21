import React from "react";

import Wallpaper from "./components/Wallpaper";
import HomeHeader from "./components/HomeHeader";
import HomeContent from "./components/HomeContent";

import { initUserSettings } from "./utils/userSettings/getUserSettings";
import clearLocalStorage from "./utils/clearLocalStorage/clearLocalStorage";

import "./App.scss";

function App() {
  initUserSettings();
  clearLocalStorage();
  return (
    <div className="App">
      <Wallpaper />
      <HomeHeader />
      <HomeContent />
    </div>
  );
}

export default App;
