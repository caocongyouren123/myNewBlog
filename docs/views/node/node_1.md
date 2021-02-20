---
title: "Q&A宝典-Node篇"
date: 2020-11-01
visitor: 28
categories:
 - node
tags:
- 复习,面试
isShowComments: true
---

<Boxx/>

# 第一篇 
## 一.node概念
1. 是一个基于Chrome V8引擎的js运行环境。
2. 是一个事件驱动，非阻塞式I/O模型，可以实现宏观上的并发。
3. node的包管理器npm(node package manager)是全球最大的开源库生态系统，可用于安装、卸载、查看、发布

## 二.应用场景
1. 高并发
2. 实时聊天
3. 实时消息推送
4. 客户端逻辑强大单页面应用程序

## 三.node的优劣势
1. 优点：
    * 功能强大，非阻塞I/O模式擅长访问高并发
    * 在较慢的网络环境中，可以分块传输数据，事件驱动
    * 轻量级，Node本身既是代码又是服务器，前后端使用同一种语言
    * 可扩展，可以轻松应对多实例，多服务器架构，同时拥有海量的第三方应用组件
2. 缺点：
    * 是一个相对新的开源项目，不太稳定，变化速度快
    * 不适合cpu密集型应用，不适合长时间计算。

## 四.node中的全局对象
1. global
2. process
3. console
4. module
5. exports

## 五.node中的定时
1. setTimeout/clearTimeout
2. setInterval/clearInterval
3. setImmediate/clearImmediate
4. process.nextTick

## 六.事件循环
1. 描述：事件循环其实就是事件队列，先加入先执行，执行完了之后再次循环遍历，看看有没有新事件加入队列。
2. 执行中的事件称为IO事件
3. setImmediate在当前队列中立即执行；setTimeout/setInterval把执行定时到下一个队列；
    process.nextTick在当前队列执行完，下次遍历前执行。
4. 总顺序：setImmediate -> setTimeout/setInterval -> process.nextTick

## 七.异步和同步
1. 异步：node是单线程的，通过一次次的循环事件队列来实现异步,用于高并发环境
2. 同步：阻塞式的IO,用于基础框架启动，加载配置文件，初始化程序。

## 八.什么是EventEmitter
1. 描述：是node中一个实现观察者模式的类
2. 作用：订阅和发布消息，用于解决多模块交互而产生的模块之间的耦合问题。

## 九.node中的流
1. 描述：是基于EventEmitter的数据管理模式，用于各种不同的抽象接口组成，主要包括可写，可读，可读写，可转换。
2. 优点：非阻塞数据处理模式，可以提升效率，节省内存。
3. 应用：文件读写，网络请求，数据转换，音视频方面。
4. 错误事件的捕获：监听error。

## 十.express项目
1. 目录结构：
    * ./app.js           入口文件
    * ./bin              启动项目的脚本文件
    * ./package.json     存储项目信息以及模块依赖
    * ./public           静态文件
    * ./router           路由文件
    * ./views            页面文件
2. 常用函数：
    * express.Router    路由组件
    * app.get           路由定向
    * app.configure     配置
    * app.set           设定参数
    * app.use           使用中间件   
3. response常用方法：
    * res.download()    弹出文件下载
    * res.end()         结束响应
    * res.json()        返回json
    * res.jsonp()       返回jsonp
    * res.redirect()    重定向请求
    * res.render()      渲染模板
    * res.send()        返回多种形式数据
    * res.sendFile      返回文件
    * res.sendStatus()  返回状态
 

## 十一.Nginx和Apache
1. Nginx:
    * 轻量级，反向代理服务器
    * 处理请求的方式是异步非阻塞
    * 负载能力高
    * 低消耗、高性能更加适用于处理静态文件
2. Apache:
    * 功能强大，模块丰富
    * 发展的更为成熟，bug很少
    * 请求方式是阻塞的
    * 更加适用于动态请求
    * 拥有丰富的特性，成熟的技术和开发社区

## 十二.线程和进程