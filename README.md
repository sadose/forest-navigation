# ✨ 森语导航

![GitHub](https://img.shields.io/github/license/sadose/forest-navigation)
![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/sadose/forest-navigation)
![GitHub last commit](https://img.shields.io/github/last-commit/sadose/forest-navigation)
![GitHub repo size](https://img.shields.io/github/repo-size/sadose/forest-navigation)

**一个为（前端）程序员设计的导航页。(≧∀≦)ゞ**

您可以通过[预览地址](http://www.dasenbuling.cn/forest-navigation/)来直接使用最新的开发成果，但项目仍在开发中，并不保证该地址一直可用或不被迁移。

推荐您通过最新版的 Chrome 浏览器访问使用。

项目尚在施工中，更多内容敬请期待。


# 🏃 本地运行

在此之前，请确保您已安装了 [Node.js](https://nodejs.org/zh-cn/) 环境以使用 [npm](https://www.npmjs.com/) 包管理器。

本项目通过 [yarn](https://www.npmjs.com/package/yarn) 构建，请确认您是否安装了 yarn ，如未曾安装，请通过以下命令来安装它：

```
npm i yarn -g
```

您需要将仓库 clone 到您的计算机，通过命令行进入本地仓库目录，使用以下命令来安装包依赖：

```
yarn install
```

安装依赖完成后，您可使用以下命令来运行项目：

```
yarn start
```

此时项目将运行在 http://localhost:8080/ ，您可通过该地址访问到本地项目。

如果您不希望使用 8080 端口访问它，您可在项目根目录的 `.env` 文件中修改它。


# 🔮 功能说明

作为一个可以设置为浏览器主页的导航页，它（开发完成后）可以满足您的以下需求：

**1. 集成的搜索引擎**

您可以方便地切换多种搜索引擎来搜索您希望搜索的内容，且您可以配置这些搜索引擎，包括但不限于百度/谷歌等常规搜索引擎、搜狗微信公众号搜索等特色搜索引擎以及GitHub搜索等程序员常用搜索引擎。

**2. 自定义的收藏夹内容**

您可以添加您常用的网站到导航页的收藏栏来快速打开这些网站。

**3. 创建和管理便签**

您可以方便地创建便签来记录内容，并可以为它们设置提醒日期，当您在这些日期打开森语导航时，它们会向您发出提醒。

**4. 文档合集**

森语导航将收录程序员常用的技术文档，方便您在开发中快速找到您需要的参考文档。

**5. 前端工具箱**

森语导航将以外链或者集成的方式提供前端程序员常用的在线工具，包括但不限于图片压缩、配色方案、色值转换以及URL编码等工具。

**6. 每日推荐**

您可配置每日向您展示的推荐内容，也可选择关闭推荐。推荐的内容包括但不限于音乐、新闻、知乎热榜、微博热搜以及 GitHub 热门仓库等。


# 🔨 Todo

- 用户管理
    - [ ] 用户注册与登录
    - [ ] 用户自定义配置
- 壁纸
    - [x] 壁纸效果
    - [ ] 更换壁纸
    - [ ] 自定义壁纸
- 搜索引擎集成
    - [x] 搜索功能
    - [x] 搜索内容建议
    - [ ] 用户配置搜索引擎
- 收藏夹
    - [x] 收藏夹主体
    - [ ] 收藏夹项目拖拽
    - [ ] 用户自定义收藏夹内容
- 侧边栏
    - [ ] 侧边栏设计
    - [ ] 用户定义侧边栏内容
- 便签
    - [ ] 便签展示
    - [ ] 创建、修改和删除便签
- 文档合集
    - [ ] 文档合集面板
- 前端工具箱
    - [ ] 色值转换
    - [ ] URL 编码工具
    - [ ] Unicode 编码工具
    - [ ] ……
    - [ ] 其他外链形式的工具
- 弹窗与消息框
    - [ ] 屏幕中央弹窗
    - [ ] 屏幕右上方消息框
- 其他
    - 添加更多壁纸
    - 添加更多搜索引擎
    - 添加更多技术文档
    - 添加更多工具（外链）到前端工具箱


# 💰 捐赠

欢迎 Star 或 Fork 本仓库。，或者您可通过以下二维码来向作者捐赠。

|支付宝支付|微信支付|
|:-:|:-:|
|<img src="https://sadose.github.io/images/qrcode/alipay.jpg" alt="alipay" width=200>|<img src="https://sadose.github.io/images/qrcode/wechat.jpg" alt="wechat" width=200>|
