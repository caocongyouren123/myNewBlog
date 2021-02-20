---
title: "Q&A宝典-JQuery篇"
date: 2020-10-15
visitor: 28
categories:
 - 前端框架
tags:
- 复习,面试
isShowComments: true
---

<Boxx/>

# 第一篇 
## 一.jq对象
1. jquery()====$(),函数的执行结果是一个jq对象，包含满足条件的元素节点信息集合，可以像数组一样使用。
2. 例如：
```
var $divs=$('div');        // 获取所有的div标签形成一个信息集合
$divs[0] = $divs.get(1)    // 获取到集合中的第一个div标签
```
3. 说明：jq对象只能调用自己的属性和方法,对选择器都支持而且没有兼容性

## 二.size()和length
1. 描述：是jq对象所有，表示jq对象中包含了多少个js元素点
2. 语法：$divs.size()/$divs.length

## 三.伪类
1. $divs.first   获取到集合中的第一个div标签
2. $divs.last    获取到集合中的最后一个div标签
3. $divs.eq(n)   获取到集合中的第n+1个div标签(n从0开始取值)
4. $divs.lt(n)   获取到集合中的第n+1个div标签之前的所有div标签
5. $divs.gt(n)   获取到集合中的第n+1个div标签之后的所有div标签
6. $divs.odd     获取到集合中所有奇数序列div标签
7. $divs.even    获取到集合中所有偶数序列div标签

## 四.事件监听
1. $('选择器').click(function(){});
2. $('选择器').on('click',function(){});
3. $('选择器').bind('事件1','事件2',...function(){});
4. $('选择器').one('click',function(){});   这种方法只能执行一次
5. $('选择器').off('click');    取消click事件
6. 单击：click()
7. 双击：dbclick()
8. 鼠标进入: mouseenter()
9. 鼠标离开: mouseleave()
10. 文本框失去焦点: focus()
11. 失去焦点: blur()
12. 链式添加：$("div").click(function(){}).click(function(){});
* 注意：以上都不用加上'on',可以给同一个元素添加不同类型的事件，并且互相触发不受影响，也可以给同一个元素添加相同事件，触发的顺序就是代码书写的顺序。

## 五.jq中的css方法
1. 描述：读写css样式
2. 语法：$().css('key','value')
3. 注意：一次性修改多个样式要采用json格式

## 六.show(),hide()
1. 描述：show()表示jquery对象显示相当于display:block;hide()相当于display:none
2. 语法：$().show(time)
    * time表示过渡时间，不写默认等于0
3. 隐藏和显示的过程其实宽高和透明度渐变的过程。

## 七.slideUp(),slideDown()
1. slideDown(time) 下拉显示（只有在原本隐藏的时候才能使用）
2. slideUp(time) 上滑隐藏（只有在原本显示的时候才能使用）
3. 在这两个状态中都是宽高和透明度渐变的一个过程
4. 默认的边界是上边界
5. 例如：
```
var $box=$('.box')
var $show=$('.show')
$box.mouseenter(function(){
    $show.stop(true).slideDown(time)   // 加入stop()的目的是为了杀死动画积累
})

$box.mouseleave(function(){
    $show.stop(true).slideUp(time)
})
``` 

## 八.fadeIn(),fadeOut()
1. $('').fadeIn(time): 淡入，time表示过渡时间,起点是display:none
2. $('').fadeOut(time): 淡出，终点是display:none

## 九.类的添加与删除
1. 添加类：$('').addClass('类名')
2. 删除类：$('').removeClass('类名')
3. 添加属性：$('').attr('属性名','属性值')
    * 说明：用来修改jq对象的属性，会覆盖原来的属性
    * 第二个参数是可选参数，如果不写代表读取这个属性
4. $('').html('为标签里面添加内容')

## 十.animate()
1. 描述：执行jq动画
2. 语法：animate(参数一,参数二,function(){},参数四)
    * 参数一：是一个json格式例如：{"width":500,"height":300}（必选）
    * 参数二：过渡时间（可选）
    * 参数三：回调函数（可选）
    * 参数四：渐变形式，例如'linear',默认是先加速后减速（可选）
3. 注意：
    * 属性必须写成json格式
    * 能够变化的属性例如：width,height,opacity。background-color,background-position等不能改变，可以放在
                        function里面通过.css来修改css属性完成
    * 动画执行顺序：
        * 同一个元素添加多个animate()属性，则按照添加顺序执行。
        * 不同元素添加animate()属性，异步执行

## 十.stop()
1. 描述：停止元素动画效果，一般用于频繁操作，杀死动画积累
2. 语法：stop(参数一,参数二)
    * 参数一：可选项，默认为false不清除
    * 参数二：可选项，默认为false表示不立即停止
## 十一.防止动画积累
1. 方法一：立即结束当前动画，执行新的操作
```
$('').stop(true).animate()
```
2. 方法二：如果当前正在运动那么不接受新的命令
```
if( $('').is('.animated')){
    return;
}
```  

## 十二.节点关系
1. $("div").children()  选中div标签下面的所有子节点
2. $("div").children(".box")  选中div标签下面的所有class为.box的子节点
3. find()
    * 描述：children只能找到子代节点，而find可以找到后代当中的任意一个节点
    * 语法：$("div").find(".box") 查找div后代box节点
4. parent()
    * 描述：查找当前节点的直属父节点
    * 语法：$("div").parent()  查找div的父节点
5. parents()
    * 描述：如果不写参数查找当前节点的所有祖先节点直到html为止，写的话，写什么查找的就是哪一个
    * 语法：$("div").parents()
6. siblings()
    * 描述：访问除了自身以外所有的兄弟节点 （写了参数的话就表示满足条件的兄弟节点）
    * 语法：$("div").siblings()
7. $("div").next()后一个亲兄弟
8. $("div").prev()前一个亲兄弟
9. $("div").closest()匹配最近的元素
10. $("div").nextAll()后面所有的亲兄弟
11. $("div").prevAll()前面所有的亲兄弟
12. index()
    * 描述：用来获取当前元素在其兄弟节点中的排名，从0开始，也就是序号
    * 语法：$("selector").index()   获取selector元素在其兄弟节点中的排名
    * 注意：一般不单独使用，会配合使用
13. each() 
    * 描述：遍历每一个节点，然后执行里面的回调函数
    * 语法：$("").each(function(){})
14. 节点的内部插入
    * A.append(B)       在A之后追加B（子代之间）
    * B.appendTo(A)     将B追加到A之后
    * A.prepend(B)      在A之前追加B
    * B.prependTo(A)    将B追加到A之前
15. 节点的外部插入
    * A.after(B)        在A节点之后添加同级B节点（兄弟节点）
    * A.before(B)       在A节点之前添加同级B节点
    * A.insertAfter(B)  把A添加到B的后面
    * A.insertBefore(B) 把A添加到B的之前
16. 删除节点
    * empty():
        * 描述：删除指定节点中的内容
        * 语法：$('').empty()等价于$('').html('')
    * remove()
        * 描述：删除整个节点
        * 语法：$('').remove()
    * detach()
        * 描述：删除元素自身，但是不会删除数据和绑定的事件
        * 语法：$('').detach()
17.节点克隆
    * 描述：通过复制一个节点，克隆的节点在页面中没有自己的位置需要通过append追加
    * 语法：$("A").append($("B").clone)
    * 说明：是一种深拷贝
    
## 十三.onload()和ready()
1. $('').onload() 只能使用一次，$('').ready() 可以使用多次
2. $('').onload() 在页面渲染完毕后调用，$('').ready() 只在DOM加载完成后就调用。
3. $('').onload() 要晚于 $('').ready()

## 十四.$.ajax()
1. 语法：
```
$('.btn').click(function(){
    $.ajax({
        type:'post'       // 请求方式，默认是get
        url:'后台文件'     // 请求地址
        dataType:'json'   // 请求格式
        data:{            // 请求数据，因为这里是post请求所以是请求体格式
            uname:'beixi',
            upassword:'123'
        },
        success:function(res){     // 请求成功后的回调函数
            console.log(res)
        }
    })
})
```
2. 和$.get(),$.post()的区别
    * $.get(),$.post()是$.ajax的简化方法
    * 当需要涉及到回调函数和错误机制处理的时候应该使用$.ajax

## 十五.jq的优点
1. 强大的选择器（没有兼容问题） 
2. 可靠的事件处理机制
3. 完善的Ajax,比原生ajax封装的要好，不用考虑兼容性问题。

## 十六.beforeSend
* 用于验证ajax请求，若果返回的值是false则取消这次ajax请求。

## 十七.$(this)和this
1. $(this): 返回一个jq对象可以对它调用多个jq方法
2. this: 中的关键词，指向的是函数的调用者

## 十八.jq如何处理缓存
1. 说明：要处理缓存就要禁用缓存
2. 方法：
    * $.post()方式获取数据，默认禁用缓存
    * $.get() 默认缓存可以通过添加时间戳的方式来禁用缓存，例如：`` $.get(url+(new Date()))``
    * $.ajax() 设置cache:false
    
## 十九.$.getScript(),$.getJson()
1. $.getScript() 可以直接加载js文件，不需要处理
2. $.getJson()  可以直接加载json文件，不需要处理

## 二十.$.map()和$.each()
1. $.map() 主要用来遍历操作数组和对象，返回的是一个新数组
2. $.each() 主要用来遍历jq对象，返回的是原来的数组，不是新的数组
