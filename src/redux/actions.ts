import { CHANGE_WALLPAPER, IS_SEARCHING, SEARCH_TEXT } from "./actionTypes";

import { Wallpapers } from "../definitions/ModelsDef";
import { ReduxAction } from "../definitions/ReduxDef";

// Wallpaper 相关

export const changeWallpaperCreater: (wallpaperName: Wallpapers) => ReduxAction = (
  wallpaperName: Wallpapers
) => ({
  type: CHANGE_WALLPAPER,
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
