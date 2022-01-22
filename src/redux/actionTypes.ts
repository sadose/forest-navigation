// 与用户配置相关的 ActionType ，其名字为对应配置项的名字后面加上 _SETTING 后缀，其值相等
// 因此用户配置 UserSetting 的值可与 ActionType 兼容

import {
  USER_FAVORITES,
  USER_SEARCH_ENGINES,
  USER_WALLPAPER,
} from "../definitions/UserSettingsDef";

// Wallpaper 相关

export const USER_WALLPAPER_SETTING: string = USER_WALLPAPER; // User setting

// Search 相关

export const IS_SEARCHING = "isSearching";
export const SEARCH_TEXT = "searchText";

export const USER_SEARCH_ENGINES_SETTING: string = USER_SEARCH_ENGINES; // User setting

// Favorites 相关

export const USER_FAVORITES_SETTING: string = USER_FAVORITES; // User setting
