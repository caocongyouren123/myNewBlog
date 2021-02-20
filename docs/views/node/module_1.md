---
title: "Q&A宝典-Module篇"
date: 2020-11-02
visitor: 28
categories:
 - node
tags:
- 复习,面试
isShowComments: true
---

<Boxx/>

# 第一篇 
## 一.requireJS
1. 优点：
    * 异步加载不会阻塞页面
    * 按需加载，一个模块就是一个文件，当需要用到的时候在加载它，便于代码的编写和维护
2. 缺点：
    * 模块和模块之间的加载顺序不是固定的
3. 作用：
    * 主要是为了解决html文件引入过多的js文件造成浏览器失去响应，代码的编写和维护都变得艰难。
4. 使用步骤：
    * 新建一个js文件夹，去requireJS官网下载requireJS文件放入其中。
    * 在html文件的底部引入` <script src="js/require.JS" defer async="true"></script>`
    * ``<script src="js/require.JS" defer async="true" date-main='js/main'></script>``
    * 配置模块和加载：（main.js里面）
```
require.config({
    baseUrl:"基路径",
    paths:{
    // 按需加载
        'index':'相对路径',
        'jquery':'相对路径'
        ...
    }
})  
```
5. 加载：requirejs(['index','jquery',...])  (类似于导入)

## 二.AMD
1. 描述：依赖前置（在使用之前已经加载完成）实际上AMD就是requireJS的规范写法，通过define()来写，属于异步模块
2. 定义模块 简单的名称/键值对,没有依赖关系
```
define({
     uname:'beixi',
      age:20
})
```
3. 定义函数，没有依赖关系
````
define(function () {
  var obj={
    username:'beixi',
    age:18
  }
  return {
    obj,
  }
})
````
4. 定义函数，具有依赖关系
````
define(['module'],function (module) {
  console.log(module);
})
````
5. 定义和简体commonJS类似的
```
define(function (require,exports,module) {
  var data=require('data')
  console.log(data);
})
```
6. 引入：`requirejs(['index','jquery',...])`
7. 定义：define() 
7. 暴露：module transport

## 三.CMD
1. 描述：是SeaJS的规范写法，由淘宝团队开发的框架16年已经不维护了，很少使用
2. 依赖就近（随用随加在），通用模块
3. 引入：
    * 同步：require()
    * 异步：require.async()
4. 暴露：module.exports={}或者exports.想要暴露的对象

## 四.CommonJS
1. 描述：是NodeJS的规范写法,在node环境中使用,是服务器端模块的规范，同步模块.
2. 暴露：使用module.exports={}或者exports.想要暴露的对象
3. 引入：require()

## 五.模块化的优点
1. 避免命名冲突
2. 可以按需加载
3. 将不同功能的代码分开写，有利于模块之间的管理，代码的书写以及维护。
4. 高内聚，低耦合，有利于团队化开发

## 六.ES6中的模块化
1. 和commonjs的两大差异：
    * commonjs模块输出的是一个值的复制，es6模块输出的是一个值的引用。
    * commonjs模块是运行时加载，es6模块是编译时输出接口
2. 说明：commonjs模块加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成，会缓存值。
        而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成，不会缓存值。
