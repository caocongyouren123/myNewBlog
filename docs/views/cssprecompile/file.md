---
title: "Q&A宝典-Css预编译篇"
date: 2020-11-25
visitor: 28
categories:
 - css
tags:
- css预编译
isShowComments: true
---

<Boxx/>

# 第一篇 
## 一.Less
1. 概念：一种css预处理语言，增加了变量函数等特性，使得css变得更加容易维护。
2. 浏览器能解析的文件：html,css,javascript
3. less文件最终也要被编译成css文件才能被运行
4. 编译方式：
    * 方法一：
        * 环境搭配：npm install less -g
        * 终端运行：lessc .\style.less(原less文件名)  style.css(新css文件)
    * 方法二：软件自动编译
        * 考拉软件：装到一个空的文件夹下面，拖动文件进入然后编译就行(推荐使用)
        * webstorm: 配置相关文件
        * 构建工具：glup,webpack
5. 导入：
    导入css文件：@import  './style.css'        
    导入css文件：@import  './style.less'   
6. 语法
```
1. 赋值
@w:100;
@h:100;
.box{
    width:@w;
    height:@h;
}

2. 嵌套
.box{
    ul{
        li{
            a{}
        }
    }
}

3.Mixins
  .size(@width:100px,@height:100px){
    width:@width;
    height:@height
  }
  .box2{
    .size();
  }
  .box3{
    .size(100px,150px); //可以动态传参但是必须一一对应
  }

4. 计算：提供加减乘除等运算，注意运算符号前后都要加上一个空格

5. 函数
.box{
    font-size:floor(15.6px) 向下取整
  }

6. 继承
.box{
  width: @w-500;
  height: @h-500;
}
.box1{
  &:extend(.box);  // .box1继承了.box里面的属性值
  color:red;   // 也可以增加自己的属性
}
注意：
  （1）在嵌套中不能使用继承
  （2）继承嵌套结构的话，只能继承父级
``` 
## 二.Sass    
1. 说明：和less的语法基本上一样的，只是将@换成了$

## 三.Less和Sass的区别
1. 编译环境不同：
    * sass的编译需要安装Ruby环境，在服务器端处理；less需要安装less然后在终端运行。（都用考拉软件很方便）
    * 变量名不一样less用@，sass用$
    * 差值语法不一样less用@{key},sass用#{$key}
    * sass的继承相当于less的混合，less的混合相当于sass的继承
    * less不支持if,for语句,sass支持
    * less引入文件用@import，sass引入外部文件必须以"_"开头