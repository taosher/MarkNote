
# MarkNote
a single page app powered by Vue.js

一个使用Vue.js开发的SPA

一个易用的笔记应用

1. 使用Vuex实现组件间通信
2. 全部使用`vw`布局
3. 使用vue-router实现前端路由
4. 专为移动端开发
5. 全部数据使用localStorage储存在本地

 
> 图片见images目录


TODO: 使用Cordova打包成Hybrid App

##Get Start:

1.安装依赖：
```bash
npm install
```
2.开发环境： 
```bash
npm run dev
```
3.生产环境：
```bash
npm build
```

##目录结构
<pre>
│  .gitignore          # 忽略文件,比如 node_modules
│  package.json        # 项目配置
│  README.md           # 项目说明
│  index.html          # 首页
│
├─ webpack.base.config.js         # webpack 基础配置
├─ webpack.dev.config.js          # webpack 开发配置
├─ webpack.prod.config.js         # webpack 生产配置
│
│
├─node_modules
│
├─dist                 # 打包完的文件会自动放在这里
│
└─src
    ├─ main.js         # 启动配置
    │
    ├─components       # 组件
    │       │
    │       └─ app.vue # 入口组件,内含路由和公共部分
    │
    ├─routers          # 路由
    │
    ├─directives       # 自定义指令
    │
    ├─filters          # 自定义过滤器
    │
    ├─config           # 放置一些配置文件
    │
    ├─libs             # 放置一些工具函数
    │
    ├─images           # 放置图片
    │
    ├─styles           # 放置css
    │    │
    │    ├─ common.css # 通用css
    │    │
    │    └─ reset.css  # 页面初始化css
    │
    ├─fonts            # 放置iconfont字体
    │
    │
    └─template         # 放置html模板,webpack依赖此文件生成所需的html
         │
         │
         └─ index.html # 默认的html模板

</pre>

####访问
在浏览器地址栏输入http://127.0.0.1:8080
