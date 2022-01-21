import { FavoritesItem, Wallpapers } from "./ModelsDef";
import { SearchEngine } from "./SearchEnginesDef";

// 用户配置项

export type UserSetting = "userWallpaper" | "userFavorites" | "userSearchEngines";

export const USER_WALLPAPER: UserSetting = "userWallpaper";
export const USER_FAVORITES: UserSetting = "userFavorites";
export const USER_SEARCH_ENGINES: UserSetting = "userSearchEngines";

export const AllUaerSettings = [USER_WALLPAPER, USER_FAVORITES, USER_SEARCH_ENGINES];

// 默认配置数据

export const UserSettingsDefault = {
  [USER_WALLPAPER]: "beach" as Wallpapers,
  [USER_FAVORITES]: [
    {
      title: "知乎",
      url: "https://www.zhihu.com/",
      icon: "https://static.zhihu.com/heifetz/favicon.ico",
    },
    {
      title: "哔哩哔哩",
      url: "https://www.bilibili.com/",
      icon: "favicon.ico",
    },
    {
      title: "力扣",
      url: "https://leetcode-cn.com/",
      icon: "favicon.ico",
    },
    {
      title: "MDN Web Docs",
      url: "https://developer.mozilla.org/zh-CN/",
      icon: "https://developer.mozilla.org/favicon.ico",
    },
    {
      title: "React中文文档",
      url: "https://react.docschina.org/",
      icon: "favicon.ico",
    },
    {
      title: "大森的博客",
      url: "https://sadose.github.io/",
      icon: "https://sadose.github.io/images/icons/logo-32.png",
    },
  ] as FavoritesItem[],
  [USER_SEARCH_ENGINES]: ["baidu", "bing", "google"] as SearchEngine[],
};
