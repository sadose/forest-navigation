import { FavoritesItem, Wallpapers } from "./ModelsDef";
import { SearchEngine } from "./SearchEnginesDef";

export interface ReduxAction {
  type: String;
  data: any;
}

export interface ReduxState {
  // Wallpaper 相关
  userWallpaper: Wallpapers; // User setting

  // Search 相关
  isSearching: boolean;
  searchText: string;
  userSearchEngines: SearchEngine[]; // User setting

  // Favorites 相关
  userFavorites: FavoritesItem[]; // User setting
}
