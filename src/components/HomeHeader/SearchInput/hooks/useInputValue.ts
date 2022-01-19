import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../../../definitions/ReduxDef";
import { searchTextCreater } from "../../../../redux/actions";

export default function useInputValue(initValue: string) {
  const [inputValue, setInputValue] = useState(initValue);
  const searchText: string = useSelector<ReduxState, any>((state) => state.searchText);
  const dispatch = useDispatch();
  return [
    searchText,
    function (newValue: string) {
      dispatch(searchTextCreater(newValue));
      setInputValue(newValue);
    },
  ] as [string, (newValue: string) => void];
}
