import { combineReducers } from "redux";
import { FavoritesItem, Wallpapers } from "../definitions/ModelsDef";

import { ReduxAction } from "../definitions/ReduxDef";
import { SearchEngine } from "../definitions/SearchEnginesDef";

import {
  USER_WALLPAPER_SETTING,
  IS_SEARCHING,
  SEARCH_TEXT,
  USER_SEARCH_ENGINES_SETTING,
  USER_FAVORITES_SETTING,
  IS_FAVORITES_BOX_SHOWN,
} from "./actionTypes";

// Reducer 函数用来处理各个状态的变动，其函数名称为对应 Action 函数去掉 Creater 后缀

// Wallpaper 相关

function userWallpaper(state: Wallpapers = "beach", action: ReduxAction) {
  switch (action.type) {
    case USER_WALLPAPER_SETTING:
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

function userSearchEngines(state: SearchEngine[] = [], action: ReduxAction) {
  switch (action.type) {
    case USER_SEARCH_ENGINES_SETTING:
      return action.data;
    default:
      return state;
  }
}

// Favorites 相关

function isFavoritesBoxShown(state: boolean = false, action: ReduxAction) {
  switch (action.type) {
    case IS_FAVORITES_BOX_SHOWN:
      return action.data;
    default:
      return state;
  }
}

function userFavorites(state: FavoritesItem[] = [], action: ReduxAction) {
  switch (action.type) {
    case USER_FAVORITES_SETTING:
      return action.data;
    default:
      return state;
  }
}

// 组合导出

export const finalReducer = combineReducers({
  userWallpaper,

  isSearching,
  searchText,
  userSearchEngines,

  isFavoritesBoxShown,
  userFavorites,
});
