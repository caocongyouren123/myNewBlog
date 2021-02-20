---
title: "Q&A宝典-Ajax篇"
date: 2020-10-25
visitor: 28
categories:
 - ajax
tags:
- 复习,面试
isShowComments: true
---

<Boxx/>

# 第一篇 
## 一.Ajax概念
* 是一种创建交互式，由js向服务器发起http异步请求的方法。
* A: 异步
* j: javascript
* a: and
* x: xml
* 产生异步原因：由于ajax的阻塞效应。

## 二.Ajax请求的步骤
1. 创建xhr对象
2. 监听状态
3. 发送http请求
4. 在响应回调函数中获取数据
5. 渲染数据
6. get语法：
```
// 1. 创建xhr对象
var xhr=new XMLHttpRequest();

// 2. 监听状态
xhr.onreadystatechange=function () {
  if(xhr.readyState==4){    // 等于4表示后台已经接收到请求
    if(xhr.status==200){    // 状态码等于200表示前台准备好了接收后台数据
      // 4. 在回调函数中获得数据
      function success() {
        const data=JSON.parse(xhr.responseText)
        console.log(data);
      }
    }
  }
}

// 3. 开始发送
xhr.open('get','01xhr.php?name=beixi&password=123',true)  // true表示异步
xhr.send(null)

// 5.根据需求渲染数据
```
7. post语法：
```
// 1. 创建xhr对象
var xhr=new XMLHttpRequest();

// 2. 监听状态
xhr.onreadystatechange=function () {
  if(xhr.readyState==4){    // 等于4表示后台已经接收到请求
    if(xhr.status==200){    // 状态码等于200表示前台准备好了接收后台数据
      // 4. 在回调函数中获得数据
      function success() {
        const data=JSON.parse(xhr.responseText)
        console.log(data);
      }
    }
  }
}

// 3. 开始发送http请求
xhr.open('post','02post请求.php',true)
    // 构建post表单数据
var datas=new FormData()
    // 往表单里面添加数据
datas.append('user',输入的用户名)
datas.append('pass',输入的密码)
    // 发送
xhr.send(datas)
```

## 三.自定义封装Ajax
```
// 自执行函数 自己执行自己等价于  function test(){test()}
(function () {
    function packageAjax(paramsObj) {
//        1.判断请求类型：如果是get请求将参数拼接到url后面
        if(paramsObj.type.toLocaleLowerCase()=="get"){
            var arr=[];
            for(var key in paramsObj.data){
                var str=key+"="+paramsObj.data[key];   // 将json类型转化为数组类型
                arr.push(str);
            }
            var newStr=arr.join("&");
//          将得到的字符串拼接到url后面
            paramsObj.url+=paramsObj.url.indexOf("?")==-1?"?"+newStr:"&"+newStr;

//          如果是post请求构建formData参数对象
        }else if(paramsObj.type.toLocaleLowerCase()=="post"){
            var formData=new FormData();
            for(var key in paramsObj.data){
                formData.append(key,paramsObj.data[key]);
//           这里如果打印formData是没有结果的，因为formData隐藏了参数
            }
        }else{
            alert("请求类型有误！")
        }

        //  2.构建xhr对象
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function () {
            if(xhr.readyState==4){
                if(xhr.status==200){
                    paramsObj.success(JSON.parse(xhr.responseText));
                }
            }
        }

        //   3.准备发送
        xhr.open(paramsObj.type,paramsObj.url,true);

        //    4.发送请求
        if(paramsObj.type.toLocaleLowerCase()=="get"){
            xhr.send(null);
        }else if(paramsObj.type.toLocaleLowerCase()=="post"){
            xhr.send(formData);
        }
    }
    window.packageAjax=packageAjax;

}());
```

## 四.Ajax存在问题
1. 主要是缓存问题，如果是get请求，请求的结果是默认缓存的。
    * 解决方案：实时改变url,在url中添加时间戳函数（+new Date().getTime()）
2. 不支持浏览器的back按钮
3. 存在安全问题，因为暴露了太多与服务器交互的细节
4. 对搜索引擎不友好，破坏了程序的异常机制
5. 不容易调试

## 五.Ajax的优点
1. 页面无刷新，用户体验好。
2. 使用异步的方式与服务器通信，响应能力更好。
3. 能够被广泛使用，不需要下载插件
4. 方便快捷，按需获取，减少冗余请求而造成服务器压力过大。
