---
title: "supermall"
date: 2020-12-02
visitor: 28
categories:
 - project
tags:
- vue
- vue/cli3
- 组件化
isShowComments: true
---

<Boxx/>

# 项目总结
## 一.划分目录结构
1. 说明：主要是针对源代码src目录结构的划分
2. 具体划分：
    * assets  静态资源文件夹里面一般存放img和一些公共的css样式
    * common  里面存放一些通用的工具js代码，例如Mixin(混入)和utils(工具)
    * components  存放组件代码
        * common  在任意一个项目中都可以使用的组件
        * content  仅在当前项目中可以使用的组件
    * network   存放网络请求相关的js文件
    * router    存放路由配置文件
    * views     存放当前项目的视图组件
    * App.vue   应用主组件
    * main.js   主入口文件

## 二.引入公共css样式
1. base.css 
    * 说明：这个文件是自己配置的全局样式文件。
    * 主要定义了：
        * 文本颜色
        * 文本高亮颜色
        * 导航栏背景颜色
        * 字体大小
        * 字体类型
2. normalize.css
    * 说明：这个文件是在github上面下载来可以直接引用的全局样式文件
    * 功能：初始化margin,padding,标签下划线等等。

## 三.公共组件
1. common  在任意项目中通用的组件
    * NavBar  
        * 说明：导航栏组件,高度一般都是44px(750 iphone的设计稿)
        * 功能：设置了左中右三个插槽`<slot name='left'></slot>,<slot name='center'></slot>,<slot name='right'></slot>`用于随时被替换
    * Scroll
        * 说明：这是一个基于better-scroll的监听滑动组件
        * 功能实现：
            * 导入：import BScroll from 'better-scroll'
            * 创建BScroll对象(在mounted中)：this.scroll=new BScroll()
            * 监听位置: 目的是便于设置底部返回到顶部的按钮
            * 监听上拉事件：目的是为传输数据做准备
    * Swiper
        * 说明：轮播图组件
        * 功能
    * TabBar和TabBarItem   
        * 底部导航栏，TabBar是整体，TabBarItem是里面细分的每一个。
        * TabBarItem设置了三个插槽第一个是未选中时候的图标，第二个是选中后的图标，第三个是下方文字
        * TabBar的高度一般都是49px
        
2. content  仅在本项目中适用的组件
    * BackTop
        * 说明：设置底部返回按钮的组件，采用fixed布局，`right:8px,bottom:50px`
    * GoodsList和GoodsListItem
        * GoodsListItem   展示具体商品的单个组件
            * v-lazy: 设置懒加载
            * this.$bus.$emit: 这里用中央事件总线的方法发射一个事件，在Home组件中监听，只要加载了一张图片就更新ScrollHeight高度
                               主要是解决图片划不动的问题。
            * 给一个点击事件让其点击后可以进入到商品详情页。                  
        * GoodsList       展示商品的整体组件，通过v-for遍历循环展示每一个GoodsListItem
    * MainTabBav   
        * 说明：该项目的tabbar导航栏，我这里分了四个分别是首页、分类、购物车、我的，这里分别要提前下载好tabbar图标包括选中和未选中
                的共8个放到assets文件夹中
        * 使用：分别用对应的图标和文字替换TabBarItem中的插槽
    * TabControl
        * 说明：选项卡控制组件，这里设有流行，新款，精选三个选项卡
        * 如何将选中的选项卡设置对应的样式：设置当前页面的页码编号currentIndex；遍历选项卡index
          当点击后currentIndex===index时，让设置好的动态样式生效即可。

## 四.网络模块    
1. request.js: 
    * 说明：封装axios网络请求
    * 步骤：
        * 创建axios实例
        * 请求拦截
        * 响应拦截
        * 发送网络请求
2. home.js:
    * 说明：封装了一个函数，目的是发送网络请求，获取首页的商品数据
3. detail.js:
    * 说明：封装了一个函数，目的是获取详情页的商品数据，
4. category.js:
    * 说明：封装了一个函数，目的是获取分类页的商品数据
   
## 五.路由模块    
1. 导入路由：import VueRouter from 'vue-router'
2. 安装路由插件：Vue.use(VueRouter)
3. 创建路由实例，配置映射关系：const router=new VueRouter({[路由映射关系，可提取出来写]})
4. 导出然后在入口文件main.js中挂载路由实例：export default router 
5. 懒加载：
```
const Home=()=>import('../views/home/Home')
const Detail=()=>import('../views/detail/Detail')
const Category=()=>import('../views/category/Category')
const Cart=()=>import('../views/cart/Cart')
const Profile=()=>import('../views/profile/Profile')
```

## 六.vuex
1. index.js
    * 说明：配置vuex
    * 使用：
        * 导入vuex: import Vuex from 'vuex'
        * 安装插件：Vue.use(Vuex)
        * 创建store对象：const store=new Vuex.Store({state{},mutations,getters,actions})
        * 导出：export default store
        * 在主入口文件挂载
2. getters.js
    * 说明：计算属性，当数据之间需要进行计算的时候写入getters里面
3. mutations.js
    * 说明：通过mutations来更新state状态，这是更新state的唯一方法
    * 调用：通过在methods中调用`this.$store.commit()`方法来实现state的更新
4. actions.js
    * 说明：直接通过mutations更新state属于同步方法，如果要想执行异步操作就要使用到actions。   
    * 调用：通过在methods中调用`this.$store.dispatch() 或者 mapActions()`
    
## 七.view视图组件
1. home: 首页
* Home.vue: 首页的主组件,组成部分如下：
    * nav-bar标签: 将NavBar组件的中间插槽替换为"购物街"
    * tab-control标签: 选项卡控制标签，设置吸顶效果
        * :title: "['流行','新款','精选']" 向TabControl组件传递数据的
        * @tabCLick: 监听点击事件
        * v-show: 控制这个选项卡的显示与隐藏的
    * scroll标签：滚动标签，一定要设定一个高度范围，表示可以滚动的区域，一定要在外面包裹一个wrap根容器
                  这个滚动范围我是采用绝对定位的方法`top:44px;bottom:49px`
        * :probe-type="3":        指定滑动类型，是2或者3的时候才可以滑动
        * :pull-up-load="true"    表示需要进行上拉监听 
        * @scroll="contentScroll"  监听由scroll发射来的事件，根据上拉的距离来判断BackTop按钮和吸顶的显示与隐藏
        * home-swiper标签：实现轮播图功能
        * tab-control标签: 选项卡控制标签
        * goods-list标签： 展示商品的信息
    * back-top标签：返回顶部按钮        
        * @click.native="backClick"：组件是不可以直接监听的必须加上.native才可以
* HomeSwiper.vue:    存放轮播图的组件   
* HomeRecommend.vue: 存放轮推荐信息的组件   
* HomeFeature.vue:   存放特征图的组件 

2. detail: 首页里面的详情页
* Detail.vue:详情主组件，组成部分如下：
    * detail-nav-bar标签: 详情页的导航组件，将NavBar的左插槽替换成返回图标，中间插槽替换为['商品','参数','评论','推荐']
    * scroll标签：控制滚动范围
        * detail-swiper: 详情页的轮播图标签，数据由Detail组件topImages传过去，然后v-for循环遍历展示
        * detail-base-info：详情页的基本信息标签，数据由Detail组件goods传过去
        * detail-shop-info：详情页的商家信息标签，数据由Detail组件shop传过去
        * detail-goods-info：详情页的商品信息标签，数据由Detail组件detailInfo传过去
        * detail-param-info：详情页的参数信息标签，数据由Detail组件paramInfo传过去
        * detail-comment-info：详情页的评论信息标签，数据由Detail组件commentInfo传过去
        * goods-list：详情页的商品推荐标签，数据由Detail组件recommends传过去
    * back-top标签：返回顶部按钮 
    * detail-bottom-bar标签：底部导航标签，主要是用来设置购物车功能

3. category: 分类页
* Category.vue: 分类主组件，组成部分如下：
    * nav-bar标签：将NavBar组件当中的中间插槽替换为"商品分类"
    * tab-menu标签：左边栏菜单标签
    * tab-control标签：选项卡吸顶标签
    * scroll标签：控制滑动``left:100px;top:44px;bottom:49px``
        * tab-content-category标签：子类别商品数据
        * tab-content-detail标签：子类商品详情数据
    * back-top标签：返回顶部按钮    

4. cart: 购物车页
* Cart.vue: 购物车主组件，组成部分如下：
    * nav-bar标签：将NavBar组件当中的中间插槽替换为"购物车"           
    * scroll标签：控制滑动``top:44px;bottom:93px``
        * cart-list标签：整体展示选中的商品
        * cart-list-item标签：具体地展示选中的每一个商品
    * cart-total标签：查看当前所选商品的总价
* CheckButton标签：用于设置选择商品的按钮
* 全选功能的实现：判断如果商品已经全部选中，则点击后让其全部不选中。反之让其全部选中。

5. profile：我的页面，由于数据的缺失这个页面主要是一些静态功能。
* Profile.vue: 我的主组件，组成部分如下：
    * nav-bar标签:将NavBar组件当中的中间插槽替换为"购物车" 
    * profile-user标签：用户登录与注册，绑定手机号。给登录和注册分别绑定了一个点击事件，点击之后会弹出登录窗口
                        由于缺失这部分的数据只能做一下模拟效果。检测input框输入的文字和密码是不是自己设定的如果
                        两者都一致，则弹出登陆成功，否则弹出登陆失败。
    * profile-list标签：静态功能 
    
## 八.移动端的配置              
1. 在开发环境dev下下载：postcss-px-to-viewport
2. 配置postcss.config.js文件
```
module.exports={
  plugins:{
    autoprefixer:{},
    "postcss-px-to-viewport":{
      viewportWidth:375,   // 视窗的宽度,对应的是我们设计稿的宽度 (iphone 6的标准750*1334高清屏乘以了2
                                // 实际上是375*667 )
      viewportHeight:667,  // 视窗的高度,对应的是我们设计稿的高度
      unitPrecision:5,     // 指定‘px’转换为时窗单位值的小数位数（很多时候无法整除）
      viewpointUnit:'vw',      // 指定需要转换成的视窗单位，建议使用v w(视口宽度，1.vw：1vw等于视口宽度的1%。)
      selectorBlackList:['ignore','tab-bar','tab-bar-item'], // 指定不需要转换的类
      minPixelValue:1,        //  小于或者等于1px不转换为视窗单位
      mediaQuery:false,          // 允许在媒体查询中转换'px'
      exclude:[/TabBar/]
    }
  }
}
```

## 九.项目总结
1. 利用normalize.css,base.css等全局样式进行css初始化，解决css的兼容性问题
2. mixin.js里面定义的两个混入函数，backTopMixin和tabControlMixin
    * 功能：返回顶部和选项卡吸顶。
    * 在用到的地方：
        * import {backTopMixin,tabControlMixin} from 'mixin.js'
        * mixins:[backTopMixin,tabControlMixin]
    * 提高代码复用效率，不需要重复定义函数
3. utils.js里面定义了一个防抖函数debounce(func,delay)
    * 功能：在delay短时间内，多次触发一个事件的时候，只执行第一次或者最后一次，中间的不执行。此处主要是在短时间内滑动的时候避免
            滑动频繁刷新，能够提高代码执行效率，减少内存压力。
4. 吸顶效果的实现：
    实际上这里采用了一个小技巧，在吸顶位置也定义了一个选项卡采用fixed布局只不过给他设置了内联样式隐藏了。当滑动这个位置的时候再让他出来。实际上原
    来的选项卡已经被滑上去了，滑下来的时候再将它隐藏。
5. 大量的采用了封装化的思想，提高了代码的复用率。也便于开发和维护
6. 采用postcss-px-to-viewport将px转换为视口宽高，适配了各种移动端设备
7. 配置别名方便到时候访问文件,例如：`assets':'@/assets`,避免层级过深导致路径书写复杂，出错。