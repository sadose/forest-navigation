export type Wallpapers =
  | "userUploaded"
  | "beach"
  | "mountain"
  | "starrySky"
  | "volcano";

export interface UserInfo {
  userType: "user" | "tourist";
  userName: string;
  userWallpaper: Wallpapers;
}

export interface FavoritesItem {
  title: string;
  url: string;
  icon: string;
}
