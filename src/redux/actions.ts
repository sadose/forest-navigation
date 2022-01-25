import {
  USER_WALLPAPER_SETTING,
  IS_SEARCHING,
  SEARCH_TEXT,
  USER_SEARCH_ENGINES_SETTING,
  USER_FAVORITES_SETTING,
  IS_FAVORITES_BOX_SHOWN,
} from "./actionTypes";

import { FavoritesItem, Wallpapers } from "../definitions/ModelsDef";
import { ReduxAction } from "../definitions/ReduxDef";
import { SearchEngine } from "../definitions/SearchEnginesDef";

// 用户配置的 Action 函数的名称为对应 ActionType 的名称改为小驼峰后 SETTING 后缀改为 Creater 后缀
// 其余 state 的 Action 函数的名称为对应 ActionType 的名称加上 Creater 后缀

// Wallpaper 相关

export const userWallpaperCreater: (wallpaperName: Wallpapers) => ReduxAction = (
  wallpaperName: Wallpapers
) => ({
  type: USER_WALLPAPER_SETTING,
  data: wallpaperName,
});

// Search 相关

export const isSearchingCreater: (isSearching: boolean) => ReduxAction = (
  isSearching: boolean
) => ({
  type: IS_SEARCHING,
  data: isSearching,
});

export const searchTextCreater: (searchText: string) => ReduxAction = (searchText: string) => ({
  type: SEARCH_TEXT,
  data: searchText,
});

export const userSearchEnginesCreater: (
  userSearchEnginesSetting: SearchEngine[]
) => ReduxAction = (userSearchEnginesSetting: SearchEngine[]) => ({
  type: USER_SEARCH_ENGINES_SETTING,
  data: userSearchEnginesSetting,
});

// Favorites 相关

export const isFavoritesBoxShownCreater: (isFavoritesBoxShown: boolean) => ReduxAction = (
  isFavoritesBoxShown: boolean
) => ({
  type: IS_FAVORITES_BOX_SHOWN,
  data: isFavoritesBoxShown,
});

export const userFavoritesCreater: (userFavorites: FavoritesItem[]) => ReduxAction = (
  userFavorites: FavoritesItem[]
) => ({
  type: USER_FAVORITES_SETTING,
  data: userFavorites,
});

// User settings 的 ActionType 与 Action 的映射

export const ActionMap: Record<string, (para: any) => ReduxAction> = {
  [USER_WALLPAPER_SETTING]: userWallpaperCreater,
  [USER_SEARCH_ENGINES_SETTING]: userSearchEnginesCreater,
  [USER_FAVORITES_SETTING]: userFavoritesCreater,
};
