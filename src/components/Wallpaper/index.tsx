import React from "react";
import { useSelector } from "react-redux";

import { Wallpapers } from "../../definitions/ModelsDef";
import { ReduxState } from "../../definitions/ReduxDef";

import "./index.scss";

export default function Wallpaper() {
  const userWallpaperSetting: Wallpapers = useSelector<ReduxState, any>(
    (state) => state.userWallpaper
  );
  const wallpaperBlurState: boolean = useSelector<ReduxState, any>((state) => state.isSearching);

  // 获取用户设置的壁纸
  const backgroundImageName: Wallpapers = userWallpaperSetting;
  // 获取壁纸图片
  // Todo: 判断是否为用户自定义壁纸
  const backgroundImageUrl: String = require("./assets/" + backgroundImageName + ".jpg");

  return (
    <div
      className="Wallpaper"
      data-searching={wallpaperBlurState ? "true" : "false"}
      style={{
        backgroundImage: "url(" + backgroundImageUrl + ")",
      }}
    ></div>
  );
}
