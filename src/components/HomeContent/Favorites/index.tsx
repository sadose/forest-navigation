import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FavoritesItem } from "../../../definitions/ModelsDef";
import { ReduxState } from "../../../definitions/ReduxDef";
import { USER_FAVORITES } from "../../../definitions/UserSettingsDef";

import { isFavoritesBoxShownCreater } from "../../../redux/actions";

import getUserSetting from "../../../utils/userSettings/getUserSettings";

import "./index.scss";

function favoritesItemClick(url: string) {
  return function () {
    window.open(url, "_blank");
  };
}

export default function Favorites() {
  let favoritesList: FavoritesItem[] = getUserSetting(USER_FAVORITES);
  const [favoritesData, setFavoritesData] = useState(favoritesList);
  const isFavoritesBoxShown: boolean = useSelector<ReduxState, any>(
    (state) => state.isFavoritesBoxShown
  );
  const isSearching: boolean = useSelector<ReduxState, any>((state) => state.isSearching);
  const dispatch = useDispatch();
  return (
    <div className="Favorites disable-selection" data-close={isSearching}>
      <div className="star">
        <img
          src={require("./assets/star.png")}
          alt="star"
          data-active={isFavoritesBoxShown}
          onClick={() => dispatch(isFavoritesBoxShownCreater(!isFavoritesBoxShown))}
        />
      </div>
      <div className="favorites-con" data-show={isFavoritesBoxShown}>
        {favoritesData.map((value) => (
          <div className="item" key={value.title} onClick={favoritesItemClick(value.url)}>
            <img
              src={value.icon === "favicon.ico" ? value.url + "favicon.ico" : value.icon}
              alt={value.title}
            />
            <div>{value.title}</div>
          </div>
        ))}
        <div className="add" onClick={() => alert("这个功能还没有做呢……")}>
          <img src={require("./assets/add.png")} alt="添加" />
          <div>添加</div>
        </div>
      </div>
    </div>
  );
}
