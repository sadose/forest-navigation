import { combineReducers } from "redux";

import { ReduxAction } from "../definitions/ReduxDef";

import { CHANGE_WALLPAPER, IS_SEARCHING, SEARCH_TEXT } from "./actionTypes";

// Wallpaper 相关

function changeWallpaper(state: string = "", action: ReduxAction) {
  if (!state) {
    const userWallpaperSetting: string | null = window.localStorage.getItem("userWallpaperSetting");
    if (userWallpaperSetting) {
      state = userWallpaperSetting;
    } else {
      // Todo: 如果刚加载页面且本地存储没有壁纸信息，应当判断是否已登录来从服务端请求壁纸设置
      state = "beach";
      window.localStorage.setItem("userWallpaperSetting", "beach");
    }
  }
  switch (action.type) {
    case CHANGE_WALLPAPER:
      return action.data;
    default:
      return state;
  }
}

// Search 相关

function isSearching(state: boolean = false, action: ReduxAction) {
  switch (action.type) {
    case IS_SEARCHING:
      return action.data;
    default:
      return state;
  }
}

function searchText(state: string = "", action: ReduxAction) {
  switch (action.type) {
    case SEARCH_TEXT:
      return action.data;
    default:
      return state;
  }
}

// 导出

export const finalReducer = combineReducers({
  changeWallpaper,
  isSearching,
  searchText,
});
