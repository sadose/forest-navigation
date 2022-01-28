import getScreenWidth from "./getScreenWidth";

export interface FavoritesStyle {
  screenWidth: number;
  gapX: number;
  gapY: number;
  conWidth: number;
  itemWidth: number;
  itemHeight: number;
  outerWidth: number;
  outerHeight: number;
  fontSize: number;
  column: number;
}

export default function getFavoritesStyle(): FavoritesStyle {
  const screenWidth: number = getScreenWidth();
  let r: any;
  if (screenWidth < 400) {
    r = {
      screenWidth,
      gapX: 6,
      gapY: 6,
      itemWidth: 60,
      itemHeight: 72,
      fontSize: 8,
      column: 4,
    };
  } else if (screenWidth < 600) {
    r = {
      screenWidth,
      gapX: 8,
      gapY: 8,
      itemWidth: 64,
      itemHeight: 76,
      fontSize: 10,
      column: 5,
    };
  } else if (screenWidth < 800) {
    r = {
      screenWidth,
      gapX: 12,
      gapY: 12,
      itemWidth: 80,
      itemHeight: 94,
      fontSize: 12,
      column: 6,
    };
  } else {
    r = {
      screenWidth,
      gapX: 18,
      gapY: 16,
      itemWidth: 88,
      itemHeight: 100,
      fontSize: 14,
      column: 7,
    };
  }
  r.outerWidth = r.itemWidth + r.gapX;
  r.outerHeight = r.itemHeight + r.gapY;
  r.conWidth = r.itemWidth * r.column + r.gapX * (r.column - 1);
  return r as FavoritesStyle;
}
