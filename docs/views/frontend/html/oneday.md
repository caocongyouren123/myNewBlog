---
title: "Q&A宝典-HTML篇"
date: 2020-10-01
categories:
 - html
tags:
- 复习,面试
isShowComments: true
---

<Boxx/>


# 第一篇
 ##  一. HTML和XHTML的区别？
1. HTML是一种基于Web网页的设计语言，XHTML是一种基于XML、语法严格的标准语言。
2. XHTML语法严格必须要正确的嵌套，元素必须关闭，标签必须小写，必须有根元素。


 ## 二. DOCTYPE，严格模式与混杂模式的意义？
1. DOCTYPE的作用：声明在文档最前面，告诉浏览器以什么样的方式渲染页面。
2. 严格模式：以该浏览器支持的最高标准运行。
3. 混杂模式：向后兼容，防止浏览器出现无法兼容页面的情况。

## 三.语义化的目的
* 使用正确的标签做正确的是，好处在于便于代码的规范和维护。

## 四.锚点的作用，以及锚点的创建
1. 作用：点击锚点可以跳转到对应的位置。
2. 创建
*  第一种：通过给锚点设置name属性`<a name='school'></a> `
*  第二种：通过给锚点设置id属性`<a id='campus'></a> `
   然后通过`<a href='#school'></a>,<a href='#campus'></a>`引入。

## 五.列举常用的结构标签
1. `<header>`:用于定义文档的页眉。
2. `<nav>`:用于定义文档的导航。
3. `<section>`:用于定义文档的节，表示文档的一个具体组成部分
4. `<article>`:用于定义独立于文档的其他内容部分。
5. `<footer>`:用于定义文档的页脚
6. `<aside>`:用于定义文档的侧边栏，广告栏等。

## 六.img标签属性title和alt
1. title: 光标悬浮的时候出现的提示文字。
2. alt: 当图片未正常加载的时候出现的提示文字。

## 七.简述src和href的区别
1. src表示源地址一般用在img,script等标签上面，是页面必不可少的内容。
    href表示超文本引用，一般用在link,a等标签上，可以为空。
2. 简单地说就是引入和引用的区别。

## 八.iframe的优缺点
1. 优点：
    * 可以解决加载缓慢的第三方内容，如图标和广告的加载问题
    * 可以实现安全沙箱
    * 可以并行加载脚本
2. 缺点：
    * 会阻塞页面的onload事件
    * iframe即使里面内容为空，加载也需要时间
    * iframe元素没有语义
    
## 九.常见的块级元素和行内元素，以及区别
1. 块级元素:div,h1-h6,p,ul,ol,table,form,tr,td,th,tbody等
2. 行内元素:a,img,input,span,label,br
   严格的说：img,input属于行内块元素。
3. 之间的区别：
    * 块级元素独占一行可以设置宽高，如果不设置宽高，则默认和父级元素宽度一样。
    * 行内元素在一行显示，不可以设置行高，高度由内容撑开，padding和margin都会失效。
    
    
# 第二篇 HTML5
## 一.html5的新特性
1. 结构标签：`<header>,<nav>,<article>,<section>,<aside>,<footer>,<hgroup>,<figure>`
2. 媒体标签：`<audio>,<video>`
3. 表单控件：date,time,email,url,search,number等。
4. 其他标签：
    * canvas 用于绘制图形
    * process 进度条
    * mark 标注
    * manifest 应用缓存资源清单

## 二.浅谈cookie,sessionStorage,localStorage
1. cookie:
    * 存放的数据量不大一般在4k左右，数据始终在http请求中携带，需要程序员自己封装，原生接口不太安全。
    * 前台的封装与获取：
        * 封装：document.cookie="key=value;expires=有效时间ms;path=路径"
        * 获取：document.cookie  得到字符串形式的cookie值
    * 后台的封装与获取：
        * 封装：setcookie("键","值","有效期","路径")
        * 获取：$_COOKIE  得到一个数组，里面是cookie的键值对
    * 注意，一般都是在后台封装，在前台调用
2. localStorage(通过js操作)
    * 可存放5m左右数据相对于cookie存放数据较多。
    * 数据始终存储在浏览器之中，如果不删除就会一直存在。
    * 数据可以自己封装也可以采用原生接口
    * 自己封装：
        * 存储：localStorage.setItem("键","值");
        * 读取：localStorage.getItem("键");
        * 删除：localStorage.removeItem("键");
3. sessionStorage(通过js操作)
    * 可存放5m左右数据相对于cookie存放数据较多。
    * 数据始终存储在浏览器之中，如果不删除就会一直存在。
    * 数据可以自己封装也可以采用原生接口。
    * 自己封装：
        * 存储：sessionStorage.setItem("键","值");
        * 读取：sessionStorage.getItem("键");
        * 删除：sessionStorage.removeItem("键");
4. 总结：cookie的作用是与服务器进行交互，而localStorage，sessionStorage是无法跨浏览器使用。
   
## 三.html5中怎么嵌入音频和视频
1. 嵌入音频：
```
<audio controls>
    <source src='' type=''>
</audio>
```
1. 嵌入视频：
```
<video controls>
    <source src='' type=''>
</video>
```

## 四.html5通过应用缓存带来的优势
* 离线浏览：用户在没有网络的时候也可以浏览。
* 速度：让已缓存的资源加载的更快。
* 减少服务器负载。

## 五.浏览器懒加载的好处
* 当用户需要的时候再加载，可以减轻服务器的压力，增强用户的体验。

## 六.html5中如何实现应用缓存
* 首先需要指定'manifest'文件，该文件会帮你定义缓存如何工作。


