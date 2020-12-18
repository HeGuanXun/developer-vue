# security-enterprise-admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### src目录说明
```
src
├─api                    接口
├─assets                 资源
│  ├─css                 样式
│  ├─img                 图片，可依模块划分子文件夹
│  │  ├─common
│  │  ├─demo
│  │  ├─index
│  │  ├─nav
│  │  └─sidebar
│  ├─js
│  └─scss                页面样式
│      ├─modules
│      └─pages
├─components             公用组件
│  ├─chars
│  ├─prints
│  ├─smp-map
│  └─table-tree-column
├─element-ui
│  └─theme
│      └─fonts
├─i18n                   语言包
├─icons
│  └─svg
├─mixins                 混入文件夹
├─mock                   本地测试数据
│  └─modules
├─router                 路由
├─store
│  └─modules
├─utils                  工具类
└─views                  主要页面文件夹
    ├─business           业务页面，可依模块划分子文件夹
    │  ├─home            首页
    │  └─OtherFolders    无用
    ├─main               主框架页面
    ├─modules            功能模块
    │  ├─demo            目前有列表和表单的demo
    │  │  └─listDemo
    │  ├─detailsPage     无用
    │  ├─job             无用
    │  └─sys             系统页面
    └─pages              404和登录页
```