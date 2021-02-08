---
title: "Q&A宝典-CSS篇"
date: 2020-10-02
tags:
- 复习,面试
categories:
- css
isShowComments: true
---

<Boxx/>
 
# 第一篇 
## 一.CSS的基本选择器，权重
1. ID选择器>Class选择器>伪类，伪元素选择器>元素选择器>全局选择器*{}
2. !import本身不属于选择器，而是针对选择器内的单一样式设置，以提高权重，在不同的选择器中
    使用!import的权重也是不一样的
3. 选择器是可以组合的，组合后权重可以叠加。
4. 内联样式的权重最高可以看为1000；id选择器权重为100；类，伪类，属性选择器的权重为10；
    元素选择器的权重为1。

## 二.CSS的引入方式
    内联式（行内式）>内嵌式（在在style里面）=外链式（通过link在头部引用）
 
## 三.link和@import的区别
1. 兼容性：
    * link属于html标签，没有兼容性问题；@import属于css范畴，不支持低浏览器版本。
2. 加载方式：
    * 通过link引用的css文件会在页面载入的同时加载，通过@import引入的css文件会在页面载入之后在加载。
3. 改变样式：
    * 通过link引用的css文件是DOM元素，支持javascript修改。@import引入的css文件不可以。
4. 加载资源的限制
    * link除了可以加载css文件还可以加载RSS等其他事务，例如加载模板。@import只能加载css文件
    
## 四.浮动引起的问题和解决办法
1. 引起问题：
* 父元素的高度无法被撑开，影响和父元素同级的元素。
* 与浮动元素同级的元素会紧随其后，可能会造成遮盖显现。
* 如果一个元素浮动那么他之前的元素也需要浮动，否则会造成串行现象。
2. 解决办法：
* 为父元素设置固定高度。
* 为父元素设置overflow:hidden。
* 用clear:both样式属性清除元素浮动。（如果只有左浮动可以直接用clear:left,如果只有左浮动可以直接用clear:right）
  注意：clear:both的使用地方有两个
  * 外墙法：在父元素外面设置clear:both
  * 内墙法：在父元素内部，浮动元素的后面设置clear:both
* 通过使用类clearfix :
```
.clearfix::after{
    content: '';
    display: block; 
    clear: both;
}
```

## 五.position的取值
1. relative: 相对定位，相对于他本身现在的位置进行定位，占据空间
2. absolute: 绝对定位，相对于父级元素，(向上寻找)，子绝父相，脱离文档流不占据空间
3. fixed: 固定定位，相对于浏览器的窗口是固定的，脱离文档流不占据空间
4. static: 默认定位，没有定位，元素正常的出现在文档流之中。
5. sticky: 粘性定位，容器的位置根据正常文档流计算得出。

## 六.position的absolute定位和float的区别
* absolute脱离文档流不占据空间。
* float脱离文档流但是还在文档结构之中占据空间。

## 七.个人用过的css选择器
* ID选择器
* Class选择器
* 伪类选择器：(a:hover,li:nth-child)
* 伪元素选择器：(li:before,li:after)
* 子选择器：div>p
* 兄弟选择器：div+p
* 后代选择器：div p
* 标签选择器：a img,ul li等
* 属性选择器：(button[disabled='true'])

## 八.css的继承
1. 可继承：
  *`font-size,font-family,color(a标签除外),text-align,text-indent`
2. 不可继承：
  *`border,padding,margin,width,height,背景属性,定位属性`
  
## 九.css的初始化
1. 原因：浏览器的兼容性问题，css的初始化可以解决页面在不同的浏览器出现的差异。
2. 解决：最简单的一种就是``` *{margin:0;padding:0}```

## 十.盒子水平垂直居中
1. 绝对定位法：
```
.box {
	width: 200px;
	height: 200px;
	border: 1px solid #000000;
	position: relative;
}
.chl_box {
	width: 100px;
	height: 100px;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	background: #00FFFF;
}
```
* 总结：
  * 给父元素设置宽高和position:relative
  * 给子元素设置position:absolute,将top,bottom,left,right全部设置为0.
  * 如只将top、bottom设置为0则垂直居中。只将left、right设置为0则水平居中
2. 负margin法：(传统方法)
```
.box {
	width: 200px;
	height: 200px;
	border: 1px solid #000000;
	position: relative;
}

.chl_box {
	width: 100px;
	height: 100px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -50px;
	margin-left: -50px;
	background: #00FFFF;
}
```
* 总结：
  * 给父元素设置宽高和position:relative
  * 给子元素设置position:absolute,将top,left设置为50%。即top:50%,left:50%。
  * 向上和右移动宽高的一半。`margin-top: -(height/2)px;margin-left: -(width/2)px;`
3. 固定宽高法：
```
.box {
	width: 200px;
	height: 200px;
	border: 1px solid #000000;
}

.chl_box {
	width: 100px;
	height: 100px;
	margin: 50px 50px;
	background: #00FFFF;
}
```
* 总结：这种定位方法，得需要知道宽高，不灵活。
4. transform居中：
```
.box {
	width: 200px;
	height: 200px;
	border: 1px solid #000000;
	position: relative;
}

.chl_box {
	width: 100px;
	height: 100px;
	background: #00FFFF;
	position: relative;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
```
* 总结：
  * 给父元素设置宽高和position:relative
  * 给子元素设置position:absolute,将top,left设置为50%。即top:50%,left:50%。
  * `transform:translate(-50%,-50%)`
  * 缺点IE9以下不支持
5. flex弹性布局：
```
.box {
	width: 200px;
	height: 200px;
	border: 1px solid #000000;
	display: flex;
	justify-content: center;
	align-items: center;
}

.chl_box {
	width: 100px;
	height: 100px;
	background: #00FFFF;
}
```
* 总结：
  * 给父元素设置:
  ```
  display: flex;
  justify-content: center;    /*水平居中*/
  align-items: center;   /*垂直居中*/
  ```
7. 不确定宽高
```
.box {
	width: 200px;
	height: 200px;
	border: 1px solid #000000;
	position: relative;
}

.chl_box {
	background: #00FFFF;
	position: absolute;
	left: 25%;
	right: 25%;
	top: 25%;
	bottom: 25%;
}
```
* 总结：
  * 给父元素设置宽高和position:relative
  * 给子元素设置position:absolute,将top,left,left,right全部设置为25%。
  
## 十一.双飞翼布局（两端固定，中间自适应）
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>css</title>
	</head>
	 <style type="text/css">
	 	*{
	 		margin:0;
	 		padding: 0;
	 	}
	 	.main>div{
	 	 float: left;
	 	}
	 	.left {
	 		width: 200px;
	 		background: red;
	 		margin-left: -100%;
	 	}
	 	.right{
	 		width: 200px;
	 		background: blue;
	 		margin-left: -200px;
	 	}
	 	.middle{
	 		width: 100%;
	 		background: yellow;
	 	
	 	}
	 	.content{
	 		margin-left: 200px;
	 		margin-right: 200px;
	 	}
	 </style>
	<body>
	<div class="main">
		<div class="middle">
	 		<div class="content">
	 		中间
		 	</div>
		 </div>
		<div class="left">
			左边
		</div>
		<div class="right">
			右边
		</div>
	</div>
	</body>
</html>
```
* 总结：
  * 给左中右的三个div设置向左浮动
  * 给左右的两个容器设置固定的宽度例如200px
  * 给中间的容器设置` margin-left:200px;margin-right:200px`
  
## 十二.浅谈display:none,visibility:hidden,opacity=0
1.display:none.表示完全隐藏（可以理解为删除），脱离文档流，不占据空间，会改变页面布局
2.visibility:hidden 视觉隐藏，占据空间，不会改变页面布局，不会触发该元素绑定的事件
3.opacity=0，表示透明度为0，占据空间，不会改变页面布局，会触发该元素绑定的事件

## 十三.将超出宽度的字设置为省略号
```
{
  width:xxx;   /* 设置一个宽度 */
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis
}
```

## 十四.px,em,rem
1. 相同点：三者都是表示长度单位
2. 不同点：
* px是固定值指定为多少就是多少，便于计算。
* em相对父级元素的字体大小默认1em=16px.
* rem相对于根元素（通常指的是html元素）的字体大小。

## 十五.css的content属性
* 专门用在before/after伪元素上面，用于插入生成的内容，最常见的的应用是利用伪类清除浮动。

## 十六.浅谈BFC
* 概念：块级格式化上下文
* 作用：创建的区域是一个独立的区域，不会收到上下元素的干扰
* 注意：在同一个BFC中，两个毗邻的块级元素在垂直方向上的margin会发生折叠

## 十七.margin塌陷
1. 形成条件：在正常情况下，父元素的高度默认是由子元素撑开的，此时给子元素设置浮动
2. 影响：导致父元素高度塌陷，此时给子元素设置margin-top不会生效，但是当margin-top超过一定限度
  就会带着父元素一起向下移动。
3. 解决方案：触发bfc，给父元素设置以下属性（其中之一就行）
* position:absolute
* display:inline-block
* float:left/right
* overflow:hidden

## 十八.margin合并
* 处于上下位置关系的两个块级元素，他们之间的距离是上容器的margin-bottom和下容器的margin-top之间
  的最大值。

## 十九.letter-sapcing 
* 增加或者较少字符之间的间距。正值表示增加，负值表示减少。

## 二十.常用的自适应单位
* 百分比：%
* em：相对于父级元素的字体大小默认为1em=16px.
* rem: 相对于根元素（html）的字体大小。
* vw:相对于视口宽度。
* vh:相对于视口高度
* vm:相对于视口宽度或者视口高度中的较小值

# 第二篇：CSS3
## 一.css3新增特性
* 圆角 border-radius
* 阴影 box-shadow
* 文字特效 text shadow
* 线性渐变 gradient
* 变换 transform
* 更多的选择器 
* 多背景设置
* 色彩模式 rgba()
* 媒体查询
* 多栏布局
* 图片边框 border-image

## 二.css3新增伪类
1. p:first-of-type  选择属于父元素的第一个p元素
2. p:last-of-type   选择属于父元素的最后一个p元素
3. p:first-child    选择属于父元素的第一个元素，这这里如果不是p元素则匹配不到
4. p:nth-child(2)   选择属于父元素的第二个元素，这这里如果不是p元素则匹配不到

## 三.transition和animation
1. 相同点：都是随着时间改变元素的属性值来实现动画效果。
2. 不同点：
    * transition着重在属性的开始和结束状态，不能实现比较复杂的动画效果。
    * animation着重在于帧的创建，通过@keyframes来定义多个帧。能实现比较复杂的动画效果。

## 四.animation的必要属性值
1. animation-name: 动画名称。
2. animation-duration: 动画的持续时间。

## 五.媒体查询
* 一般用于移动端，使用em,rem适配问题。通过不同的屏幕大小设置不同的font-size.以改变
  对应的em,rem
```
@media (min-width:320px){
  html{
    font-size:12px
  }
}
```

## 六.盒模型和怪异盒模型
1. 组成：`content+padding+border+margin`
2. 盒模型：` width=content的宽度,height=content的高度`
3. 怪异盒模型：` width=content+padding+border，height=content+padding+border` 
   * ``box-sizing:border-box``
   
## 七.css3动画的优缺点
1. 优点：
    * 性能好
    * 代码相对简单
2. 缺点：
    * 灵活度不够
    * 兼容性不好
    * 部分动画功能不能实现，不能实现复杂动画