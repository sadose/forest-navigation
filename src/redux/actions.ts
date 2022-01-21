import {
  USER_WALLPAPER_SETTING,
  IS_SEARCHING,
  SEARCH_TEXT,
  USER_SEARCH_ENGINES_SETTING,
  USER_FAVORITES_SETTING,
} from "./actionTypes";

import { FavoritesItem, Wallpapers } from "../definitions/ModelsDef";
import { ReduxAction } from "../definitions/ReduxDef";
import { SearchEngine } from "../definitions/SearchEnginesDef";

// Action 函数的名称为对应 ActionType 的名称改为小驼峰后 SETTING 后缀改为 Creater 后缀

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
