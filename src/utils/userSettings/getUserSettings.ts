import { AllSearchEngines, SearchEngine } from "../../definitions/SearchEnginesDef";
import {
  AllUaerSettings,
  UserSetting,
  UserSettingsDefault,
  USER_SEARCH_ENGINES,
} from "../../definitions/UserSettingsDef";
import { ActionMap } from "../../redux/actions";

import store from "../../redux/store";

export default function getUserSettings(settingName: UserSetting) {
  // 从 Redux store 获取用户配置
  return store.getState()[settingName];
}

function initUserSettingsFromLocal(settingName: UserSetting) {
  // 从 Local Store 加载用户配置到 Redux store ，同时使用默认配置补全缺失的本地配置
  const settingContent: string | null = window.localStorage.getItem(settingName);
  if (settingContent) {
    try {
      const r = JSON.parse(settingContent);
      store.dispatch(ActionMap[settingName](r));
      // return r;
    } catch (error) {
      console.log(settingName);
      console.log(ActionMap[settingName]);
      store.dispatch(ActionMap[settingName](settingContent));
      // return settingContent;
    }
  } else {
    window.localStorage.setItem(settingName, JSON.stringify(UserSettingsDefault[settingName]));
    store.dispatch(ActionMap[settingName](UserSettingsDefault[settingName]));
    // return UserSettingsDefault[settingName];
  }
}

export function initUserSettings() {
  // Todo: 首先应该判断是否为登录用户，是的话从远程初始化设置，不是的话再本地初始化

  // 本地初始化
  for (const settingName of AllUaerSettings) {
    initUserSettingsFromLocal(settingName);
  }
}

export function getDefaultSearchUrl() {
  const searchEngings: SearchEngine[] = getUserSettings(USER_SEARCH_ENGINES);
  return AllSearchEngines[searchEngings[0]].url;
}
