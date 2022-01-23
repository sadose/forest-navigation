import { useSelector } from "react-redux";

import { Wallpapers } from "../../definitions/ModelsDef";
import { ReduxState } from "../../definitions/ReduxDef";

import "./index.scss";

export default function Wallpaper() {
  console.log("Wallpaper 被渲染");
  const userWallpaperSetting: Wallpapers = useSelector<ReduxState, any>(
    (state) => state.userWallpaper
  );
  const wallpaperBlurState: boolean = useSelector<ReduxState, any>((state) => state.isSearching);

  // 获取用户设置的壁纸
  const backgroundImageName: Wallpapers = userWallpaperSetting;
  // 获取壁纸图片
  // Todo: 判断是否为用户自定义壁纸
  const backgroundImageUrl: string = require("./assets/" + backgroundImageName + ".jpg");
  const backgroundMinImageUrl: string = require("./assets/" + backgroundImageName + ".min.jpg");

  return (
    <div className="Wallpaper" data-searching={wallpaperBlurState ? "true" : "false"}>
      <img
        src={backgroundMinImageUrl}
        style={{ filter: "blur(6px)" }}
        onLoad={(e) => {
          const tar = e.target as HTMLImageElement;
          tar.style.opacity = "1";
        }}
      />
      <img
        src={backgroundImageUrl}
        onLoad={(e) => {
          const tar = e.target as HTMLImageElement;
          tar.style.opacity = "1";
        }}
      />
    </div>
  );
}
