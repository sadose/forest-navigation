import { UserSetting } from "../../definitions/UserSettingsDef";

export default function setUserSetting(settingName: UserSetting, settingContent: any) {
  // Todo: 将用户的配置信息同步到 Redux store
  window.localStorage.setItem(settingName, JSON.stringify(settingContent));
  // Todo: 判断是否为登录用户，是的话应该还要把配置同步到云端
}
