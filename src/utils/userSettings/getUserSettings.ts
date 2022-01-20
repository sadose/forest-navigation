import { AllSearchEngines, SearchEngine } from "../../definitions/SearchEnginesDef";
import { AllUaerSettings, UserSetting, UserSettingsDefault, USER_SEARCH_ENGINES } from "../../definitions/UserSettingsDef";

export default function getUserSettings(settingName: UserSetting) {
  const settingContent: string | null = window.localStorage.getItem(settingName);
  if (settingContent) {
    try {
      return JSON.parse(settingContent);
    } catch (error) {
      return settingContent;
    }
  } else {
    window.localStorage.setItem(settingName, JSON.stringify(UserSettingsDefault[settingName]));
    return UserSettingsDefault[settingName];
  }
}

export function initUserSettings() {
  // Todo: 首先应该判断是否为登录用户，是的话从远程初始化设置，不是的话再本地初始化
  // 本地初始化
  for (const settingName of AllUaerSettings) {
    getUserSettings(settingName);
  }
}

export function getDefaultSearchUrl() {
  const searchEngings: SearchEngine[] = getUserSettings(USER_SEARCH_ENGINES);
  return AllSearchEngines[searchEngings[0]].url;
}
