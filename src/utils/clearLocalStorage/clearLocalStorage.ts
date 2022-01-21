const abandonedItemName = ["userWallpaperSetting", "userFavoritesList"];

export default function clearLocalStorage() {
  for (const itemName of abandonedItemName) {
    window.localStorage.removeItem(itemName);
  }
}
