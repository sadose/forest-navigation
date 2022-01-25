import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ReduxState } from "../../../definitions/ReduxDef";

import "./index.scss";

export default function BeautifulSentence() {
  const [sentenceContent, setSentenceContent] = useState("");
  const [sentenceOrigin, setSentenceOrigin] = useState("");
  const isFavoritesBoxShown: boolean = useSelector<ReduxState, any>(
    (state) => state.isFavoritesBoxShown
  );
  const isSearching: boolean = useSelector<ReduxState, any>((state) => state.isSearching);
  useEffect(() => {
    fetch("https://api.xygeng.cn/one")
      .then((res) => res.json())
      .then((json) => {
        if (json && json["data"] && json["data"]["content"]) {
          setSentenceContent(json["data"]["content"]);
          if (json["data"]["origin"]) setSentenceOrigin(json["data"]["origin"]);
        }
      });
  }, []);
  return (
    <div className="BeautifulSentence disable-selection">
      <div className="sentence" data-show={!(isFavoritesBoxShown || isSearching)}>
        <div className="con">
          {sentenceContent ? <div className="content">「 {sentenceContent} 」</div> : ""}
        </div>
        {sentenceOrigin ? <div className="origin">—— {sentenceOrigin}</div> : ""}
      </div>
    </div>
  );
}
