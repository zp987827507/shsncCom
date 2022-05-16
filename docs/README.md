# 快速开始

### 安装组件库

```bash
npm i shsnc-com 或 yarn add shsnc-com
```

#### 引用组件库

在 main.js 中引用组件库

```js
import 'shsnc-com/dist/myLib.css'
import shsncCom from 'shsnc-com'
Vue.use(shsncCom)

//按需引入
import 'shsnc-com/dist/myLib.css'
import { zBar } from 'shsnc-com'
Vue.use(zBar)
```

### .vuepress 目录介绍

```js
1.在 components 下定义的组件为全局组件 可以全局使用
2.在 public 下的图片登静态资源 可全局使用
3.config.js中 配置菜单  标题等
```
