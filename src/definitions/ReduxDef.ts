import { Wallpapers } from "./ModelsDef";

export interface ReduxAction {
  type: String;
  data: any;
}

export interface ReduxState {
  changeWallpaper: Wallpapers;
  isSearching: boolean;
  searchText: string;
}
