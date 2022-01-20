import { UserSetting } from "../../definitions/UserSettingsDef";

export default function setUserSettings(settingName: UserSetting, settingContent: any) {
  window.localStorage.setItem(settingName, JSON.stringify(settingContent));
  // Todo: 判断是否为登录用户，是的话应该还要把配置同步到云端
}
