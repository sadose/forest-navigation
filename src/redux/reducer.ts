import { combineReducers } from "redux";

import { ReduxAction } from "../definitions/ReduxDef";
import { USER_WALLPAPER } from "../definitions/UserSettingsDef";

import getUserSettings from "../utils/userSettings/getUserSettings";

import { CHANGE_WALLPAPER, IS_SEARCHING, SEARCH_TEXT } from "./actionTypes";

// Wallpaper 相关

function changeWallpaper(state: string = "", action: ReduxAction) {
  if (!state) {
    state = getUserSettings(USER_WALLPAPER);
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
