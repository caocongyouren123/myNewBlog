---
title: "Q&A宝典-Vue篇"
date: 2020-11-15
visitor: 28
categories:
- 前端框架
tags:
- 复习,面试
isShowComments: true
sideBar: true
showSponsor: true
---

<Boxx/>

# 第一篇 
## 一.vue.js的安装
1. 直接cdn引入：
    * 开发环境：`<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`
    * 生产环境：(优化了尺寸和速度)`<script src="https://cdn.jsdelivr.net/npm/vue"></script>`
2. 下载引入：
    * 开发环境：https://vuejs.org/js/vue.js 
    * 生产环境：https://vuejs.org/js/vue.min.js
3. NPM安装：通过npm install vue@版本号 --save

## 二.MVVM
1. M:model
    * 数据模型层，可以是设定的死数据，更多的是来自于服务器，从网络上请求来的数据。
2. V:views
    * 描述：视图层，指的是DOM层
    * 作用：给用户展示各种信息
3. VM:viewModel
    * 描述：视图模型层
    * 作用：连接view和model沟通的桥梁，实现了二者之间的双向绑定。这样在model中修改数据，view里面的
            内容会跟着变化，同理修改view，数据对象也会自动更新。
            
## 三.生命周期
1. 说明：一个vue实例从创建、挂载、渲染、更新到销毁的过程
2. 创建：
    * beforeCreate: 创建之前，此时挂载元素$el和数据对象data都为undefined，还未初始化。
    * created: 数据对象已存在，可以调用methods中的方法，操作data中的元素，但是dom还未生成,$el不存在
3. 挂载：
    * beforeMount: 挂载前，此时$el和data都已经初始化，模板已经在内存中编辑完成，但是未渲染到页面。
    * mounted: 挂载之后，此时实例已经被完全创建，并且渲染到了页面中，用户已经可以看到页面。
4. 更新：
    * beforeUpdate: 更新前，此时页面和data数据不实时同步
    * updated: 更新后，页面和data数据实时同步变化
5. 销毁：
    * beforeDestroy: 销毁前，组件销毁之前调用，在这一步，实例仍然完全可用
    * destroyed: 销毁后，vue实例已经解除了事件监听和dom绑定，对data改变不会再触发周期函数了,但是dom结构依然存在。
6. 当增加了keep-alive功能时，增加以下两个周期
    * activated: 在keep-alive组件激活的时候调用
    * deactivated: 在keep-alive组件停用时候调用
## 四.指令
1. v-once:
    * 说明：view层展示的数据只渲染一次，更改data数据的时候不会发生改变。
    * 语法：` <h2 v-once>{{message}}</h2>`
2. v-html:
    * 说明：解析成html语言
    * 语法：`<h2 v-html='data'></h2>` (将data里面的内容解析成html语言)
3. v-text:(类似于mustache{{}})
    * 说明：将内容显示到页面上
    * 语法：`<h2 v-text='message'></h2>` (将message里面的内容渲染到页面上)
4. v-pre:
    * 说明：将后面的内容不做修改，原封不动的显示出来。
    * 语法：` <h2 v-pre>{{message}}</h2>`  (显示{{message}})
5. v-cloak:
    * 说明：解决初始化慢导致页面闪动的问题
    * 语法：` <h2 v-cloak>{{message}}</h2>`
6. v-bind:
    * 说明：动态绑定一个或者多个属性值,语法糖为":"
    * 语法：` <h2 :class="{active:isActive}"></h2>`
    * 注意： 如果这个属性值过于复杂可以放到data,methods,computed
7. v-on:
    * 说明：一般都是和click一起使用，也就是点击事件，语法糖为"@" @click
    * 语法：` <button @click='btn'></button>`  btn是一个函数需要在methods里面定义
    * @click.stop        阻止事件冒泡
    * @click.prevent     阻止事件默认行为
    * @click.native      监听组件根元素的原生事件
    * @click.once        只触发一次回调
8. v-if,v-else,v-else-if,v-show
    * 说明：条件判断
    * 语法：`<h2 v-if='条件'></h2>` (条件为真渲染，为假不渲染)
    * v-if和v-show的区别：
        * 在v-if中，当条件为false时，压根不会有对应的dom元素。
        * 在v-show中，当条件为false时，有对应的dom元素，只是增加了内联样式display:none;将其隐藏了起来。
        * 使用条件：当需要频繁的切换显示与隐藏的时候选择v-show.否则选择v-if。因为v-if开销相对很大。
        * v-if才是真正意义上的条件渲染。
    
9. v-for:
    * 说明：循环遍历         
    * 语法：`<li v-for='(value,key,index) in books'>{{index+1}}--{{key}}--{{value}}</li>`
            value:值，key:键，index:下标从零开始。这三个根据需要选择使用

10. v-model
    * 说明：实现数据的双向绑定，在input和textarea（文本域）中都能使用

## 五.计算属性
1. 使用条件：当需要处理一些复杂逻辑计算的时候用到计算属性computed
2. 语法：
```
computed:{
    fun:function(){}  // 简写：fun(){}
}
```
3. computed和methods的区别
    * 计算属性里面的函数会进行缓存，多次使用时，只会调用一次。
    * methods里面的函数，会根据页面的需求而被频繁的调用
    * 当页面不需要多次展示，而仅仅是内容发生变化的时候将函数写在computed里面，性能会更高点。

## 六.高阶函数
1. filter(function(){}) 主要作用就是对数组进行过滤，条件为布尔值不是true就是false
2. map(function(){}) 对过滤后的数组进行重新映射
3. reduce(function(){}) 对数组的结果进行汇总，至少需要两个参数

## 七.组件
1. 组件化思想：将页面拆成一个个小的功能块，完成属于自己这部分独立的功能，然后再合并起来，便于代码的书写和维护。
2. 组件的使用：
    * 创建组件构造器： 调用`Vue.extend()方法`
    * 注册组件： 
        * 全局组件：调用`Vue.component()`，在任何Vue实例里面都可以使用
        * 局部组件：写在vue实例里面：components:{cpn(组件名):cpnc(创建的组件的构造器)}
    * 使用组件： 在vue实例的作用范围内使用组件
    * 例如：
```
<div id='app'>
    3. 使用组件
    <my-cpn></my-cpn>   或者使用单标签<my-cpn/>
</div>
<script>
    1. 创建组件
    const cpn=Vue.extend({
        组件模板
        template:`
            <div>
                <h2>我是标题</h2>
                <p>我是内容</p>
            </div>
            `
    })

    2. 全局注册
    Vue.component('my-cpn',cpn)

    vue实例
    let app=new Vue({
        el:'#app',
        data:{
            message:"你好，杜先生"
        },
        局部注册，只在当前vue实例中生效
        components:{
            "my-cpn":cpn
        }
    })

</script>
```
3. 组件的语法糖注册形式
```
1. 全局注册
Vue.component("my-cpn",{
    template:`
        <div>
            <h2>我是标题</h2>
        </div>`
})

2. 局部注册
components:{
    "my-cpn":{
        template:`
            <div>
                <h2>我是标题</h2>
            </div>`
    }
}
```
4. 父子组件
    * 创建子组件
    * 创建父组件
    * 在父组件中注册子组件，并且挂载子组件
    * 在全局注册父组件或者在root下局部注册父组件
    * 在<div id='app'></div>中挂载父组件

```
1. 创建父组件
const cpn1=Vue.extend({
    template:`
    <div>
      <h2>我是父组件哈哈哈</h2>
      <my_cpn2></my_cpn2>    // 子组件使用
    </div>
    `,
    components:{   // 子组件要在父组件当中注册
      'my_cpn2':cpn2
    }
})

2. 创建子组件
const cpn2=Vue.extend({
    template:`
    <div>
      <h2>我是子组件哈哈哈</h2>
    </div>
    `
})

3. 父组件的注册(全局注册)
Vue.component("my_cpn1",cpn1)

vue实例
let app=new Vue({
  el:"#app",
  data:{
    message:"你好，杜先生！"
  },
  components:{    // 父组件在root下注册父组件（局部组件）
    'my_cpn1':cpn1
  }
})

```
5. 模板的分离写法
    * 把模板单独的分离出来
```
<template id="item">
  <div>
    <h2>模板的分离写法</h2>
  </div>
</template>

1. 全局注册
Vue.component('my_cpn',{
  template:'#item'
})

2. 局部注册
let app=new Vue({
  el:"#app",
  data:{
    message:"你好，杜先生！"
  },    
  components:{
    'my_cpn':{
      template:'#item'
  }
})
```
6. 组件当中的数据
    * data在组件中当中必须是一个函数
    * 当一个组件被创建成功之后，可能会在多个地方被用到，为了避免数据之间的相互影响，所以应该放进函数中。
    
7. 父子组件之间的通信
    * 父组件向子组件传递数据: 父组件->props->子组件
    * 具体步骤：
        * 在父组件的模板当中引入子组件标签上通过v-bind的形式绑定要传输的数据，不支持驼峰形式
        * 在子组件当中通过props创建一个对象来接收这个数据
        * 在子组件的模板中根据需求通过{{}}来显示相应的数据
        * 在props中可以指定数据类型
    * 子组件向父组件传递数据: 子组件->$emit(event)->父组件
    * 具体步骤：
        * 在子组件中通过$emit(event)的形式将数据发射出去
        * 在父组件的模板当中引入子组件标签上通过v-on的形式接收子组件传来的数据
        * 根据需求在methods中定义该方法
    
8. 组件之间的访问  
    * 父组件直接访问子组件：使用this.$children或者this.$refs  
    * 子组件直接访问父组件：使用this.$parent
    * this.$children和this.$refs的区别：
        * this.$children获取的是一个数组类型，再访问其中具体的子组件时候需要通过索引值，往往难以确定索引值。
        * this.refs通过绑定一个id值可以获取想要的特定子组件
```
<child_cpn1 ref='child1'></child_cpn1>  // 在子组件中绑定id
this.$refs.child1       // 在父组件中拿到想要的特定的子组件

```
9. 非父子组件之间的通信
    * 采用中央事件总线的方法：
        * 在main.js入口文件中注册中央事件总线：Vue.prototype.$bus=new Vue()
        * 发射想要传输的事件：this.$bus.$emit('事件名自己取一个')
        * 根据需要在对应的地方接收事件：this.$bus.$on('发射的事件名',callback(){在回调函数执行相应的逻辑})
    * vuex vue的集中式状态管理机制

## 八.插槽 
1. 插槽的使用  
    * 说明：在组件当中通过`<slot></slot>`包裹起来的内容称为插槽部分
    * 作用：在组件化开发中，如果用到相同的组件，而只是组件里面的内容不同的时候，就可以使用插槽占位
            然后根据实际需要，在插槽中添加相应的内容。
    
2. 具名插槽：
    * 给插槽指定一个名字，然后根据插槽的名字进行相应的替换。
    * 语法：
```
<div id="app">
    <cpn><span slot="center">标题</span></cpn>     用span标签来替换中间的插槽
    <cpn><button slot="left">标题</button></cpn>   用button标签来替换左边的插槽
</div>

<template id="cpn">
    <div>
      <slot name="left"><span>左边</span></slot>
      <slot name="center"><span>中间</span></slot>
      <slot name="right"><span>右边</span></slot>
    </div>
</template>
```
3. 编译作用域
    * 父组件模板的所有东西都会在父级作用域内编译，子组件模板的所有东西都会在子级作用域内编译。
4. 作用域插槽：`` <template slot-scope="slotProps"> `` 来获取到slotProps属性

## 九.vue脚手架
1. 应用场景：复杂的大型项目
2. 脚手架2
    * 全局安装（建议）：npm install @vue/cli-init -g(init起到一个桥接的作用，便于想继续使用cli2)
    * 当前项目下安装：npm install @vue/cli-init -save
    * 初始化项目：vue init webpack project(自己取一个项目名)
    
3. 脚手架3
    * 全局安装（建议）：npm install @vue/cli -g
    * 当前项目下安装：npm install @vue/cli -save
    * 初始化项目：vue create project(自己取一个项目名)

4. 脚手架2和脚手架3的区别
    * 基于的版本不同：cli2是基于webpack3打造的，cli3是基于webpack4打造的
    * 设计原则不同：cli3的设计原则是0配置，移除配置文件根目录下的build和config
    * cli3提供了vue ui命令，提供了可视化配置，更加的方便直观
    * 移除了static文件夹，新增了public文件夹，并且index.html移到了public文件夹中
5. cli3文件目录
    * public  公共资源
    * src     源代码
        * assets  静态资源文件夹（存放图片和css的一些全局样式）
        * components  存放组件
        * view       视图文件夹
        * router     路由相关文件夹
        * app.vue    应用主组件
        * main.js    主入口文件
    babel.config.js   es语法转换文件
    package.json      相关安装包的配置文件

## 十.vue修饰符
1. .lazy
    * 说明：加lazy修饰符的区别相当于在输入后失去焦点或者摁了enter键视图才更新
    * 语法：`<input v-model.lazy="msg" >`
2. .trim
    * 说明：自动过滤用户输入的首尾空格（中间空格过滤不了）
    * 语法：`<input v-model.trim="msg" >`
3. @click.stop
    * 说明：阻止单击事件冒泡
    * 语法：` <div class="box2" @click.stop="btn1"></div>`
4. @submit.prevent
    * 说明：提交事件不再重载页面
    * 语法：`<form v-on:submit.prevent="onSubmit"></form>`
5. @click.stop.prevent
    * 说明：修饰符可以串联，阻止默认事件
    * 语法：`<a @click.stop.prevent="doThat"></a>`
6. @click.capture
    * 说明：事件捕获
    * 语法：`<div @click.capture="doThis">...</div>`
7. @click.self
    * 说明：只有当事件在该元素本身（而不是在子元素）才去执行
    * 语法：`<div @click.self="doThat">...</div`
8. @click.once
    * 说明：只触发一次，后续不生效
    * 语法：`<a @click.once="doThis"></a>`
    
## 十一.路由
1. 原理：利用url和ui（交互界面）之间的映射关系，即通过url的改变引起ui的更新（无需刷新页面）
2. 实现：
    * hash实现：通过hashchange事件监听url的变化,利用location.hash='xxx'读取属性，本质上就是改变
                window.location的href属性。
    * history实现：
        * history.back()===history.go(-1)      返回到上一级
        * history.forward()===history.go(1)    前进一级  
        * history.pushState({},'','home(路径)') 改变 URL的path部分不会引起页面刷新
        * history.replaceState({},'','home(路径)')  代替，浏览器不能来回切换（切换无效），改变 URL 的 path 部分不会引起页面刷新
        * history也提供了类似于hashchange事件的popstate.通过浏览器前进或者后退改变url会触发popstate事件
          通过pushState和replaceState改变url不会触发popstate事件，好在我们可以拦截pushState和replaceState的调用
          来检测url的变化，只是没有hashchange方便。       
3. vue-router
    * 说明：目前前端流行的三大框架都有自己的路由实现
        * Angular:ngRouter
        * React:ReactRouter
        * Vue:vue-router(着重)
    * vue-router的作用：基于路由和组件，用于设定访问路径，将路径和组件之间映射起来。
    * 使用
        * 安装：npm install vue-router@版本，不写默认安装最新的版本 --save
        * 导入路由对象并安装路由插件(在路由js文件中)
            * import Vue from 'vue'
            * import VueRouter from 'vue-router'
            * Vue.use(VueRouter)
        * 创建路由实例，配置映射关系: ``const router=new VueRouter({[路由映射关系，可提取出来写]})``
        * 导出然后在入口文件main.js中挂载路由实例   
        * 通过`<router-link>`和`<router-view>`的方式来使用路由
            `<router-link>`：内置组件会被渲染成一个a标签
            `<router-view>`: 会根据当前路径动态的渲染出不同的组件
        * 细节处理：
            * 默认路由路径：`{ path:'',redirect:'/home'}`
            * mode:history
            * router-link属性：tag/replace/active-class
    * 路由代码跳转
        * this.$router.push('/home') 
4. 路由参数的传递  
    * params类型：               
       * 配置路由格式："/user/:userId" (动态路由的设定就是在静态路由名称前面加上一个:号)             
    * query类型：               
       * 配置路由格式： "/router?id=123"             
    * 传递方式：         
```
方式一：
<router-link :to="{
    path:'/user/'+userId,
    query:{name:"beixi",age:18}
  }"></router-link>

方式二：
methods:{
  fun(){
    this.$router.push({
      path:'/user/'+userId,
      query:{name:"beixi",age:18}
    })
  }
}
```
5. 路由参数的获取
    * params参数类型：{{$route.params}} 
    * query参数类型：{{$route.query}}
6. $router和$route的区别
    * $router为VueRouter实例，跳转到不同的url
    * $route为当前router跳转对象，可以获取路由参数
7. keep-alive
    * 描述：Vue的内置组件，当离开某一个组件的时候不要让这个组件频繁的被销毁和创建
    * 属性：
        * include:字符串或正则表达，只有匹配的组件会被缓存，其他组件都不会被缓存。
        * exclude:字符串或正则表达，只有匹配的组件不会被缓存，其他组件都会被缓存。
    * 语法：
```
<keep-alive exclude="Detail">  <!--只有Detail组件不会被缓存-->
  <router-view></router-view>
</keep-alive>
```

## 十二.vuex
1. 定义：是vue官方提供的集中式管理vue多组件共享状态数据的插件
    * 原理：实现了一个单向数据流，全局仅有state里面存放数据，想要更改state里面的数据必须通过mutations

2. state：状态，使用方法：$store.state,或者mapState().store是通过vuex创建的对象`const store=new Vuex({})`
    
    * 单一状态树：当state里面有很多的数据的时候可以把它单独抽到一个js文件中，在引入使用
    
3. getters：计算属性，当数据之间需要进行计算的时候写入getters里面，也可以抽离。
    
    * 读取：$store.getters或者映射mapGetters()
    
4. mutations：方法，用来更新store状态，也是唯一的方式，这种更新的state可以通过devtools来实现实时的监控，便于代码检查管理。
    * 两个形参：
        * state:vuex中的state
        * payload:方法再被调用的时候传递的参数
    * 调用：通过在methods中调用`this.$store.commit()`方法来实现state的更新
    
5. actions：直接通过mutations更新state属于同步方法，如果要想执行异步操作就要使用到actions。
    * 两个参数：
        * context 上下文（相对于箭头函数中的this）
        * payload 挂载函数，在挂载函数中通过context.commit()来触发mutations进而更新state
    * 调用方式：通过在methods中调用`this.$store.dispatch() 或者 mapActions()`
    
6. models:
    
    * 当项目非常庞大的时候，在采用模块化管理，models里面在拥有自己的state,getters,mutations,actions                  
    
7. 总结：不管怎么样都是要通过mutations来更新state   
8. 使用场景：中大型的一些项目，要实现应用状态的管理，通过各个组件共享状态数据state,解决一些非父子通信问题
9. 优缺点：
    * 优点：
        * 解决了非父子组件之间的通信问题
        * 减少了Ajax请求次数，可以直接从state中获取相应的数据
    * 缺点：
        * 成本高，比较复杂    
        * 没有持久化存储，每次刷新都会重置所有数据

8. 官方图：(必须要用相对路径)
    ![image](./img/vuex.png)
    
## 十三.computed和watch的区别
1. 相同点：都是观察页面的数据变化,监听的数据都是data中声明过的数据或者是父组件传过来的props数据
2. 不同点：
    * computed支持缓存，只有当数据发生改变的时候才会重新进行计算；watch不支持缓存。
    * computed不支持异步操作，watch支持异步
    * computed属性值是函数，属性都有一个get()和set()方法,默认走get()方法（必须要有返回值），
    * watch函数接收两个参数(new,old) new:最新的值，old:输入之前的值。
    * computed里面的属性是一对一或者一对多的,watch里面的属性是一对多
    * 当在数据变化的时候执行异步操作或者开销较大的时候，使用watch
    * 在watch中当数据变化的时候会触发immediate和deep
        * immediate: 组件加载立即触发回调函数
        * deep: 深度监听，为了发现对象内部值的变化

## 十四.网络封装
1. 网络模块的选择：
    * 传统的ajax：针对不同的需求需要自己封装相应的ajax代码量太大了
    * jquery中的ajax：jquery代码量太大了，为了一个网络请求就引用这种重量级框架，成本太高了
    * vue-resource，随着vue版本的更新已经不在维护了不使用。
    * axios：可以在浏览器中发送XMLHttpRequests请求，可以在node中发送http请求，支持请求和响应拦截
2. axios方法：
    * 请求方法：
        * axios(config)  默认是get请求
        * axios.request(config)
        * axios.get(url,config).then(res=>{}).catch(err=>{})
        * axios.post(url,data,config)
        * axios.put(url,data,config)
        * axios.delete(url,config)
    * 并发请求：axios.all([axios.get(),axios.post(),...]).then(axios.spread(res1,res2,...)=>{})
    * 封装axios：
```
1. 导入axios
import axios from 'axios'
export function request(config){
    2. 创建axios实例：
    const instance=axios.create({
        baseURL:''     // 做全局配置
        timeout:5000   // number类型，超时设置  
    })

    3. 请求拦截
    // 使用用条件: 某些config中的配置信息不符合服务器的要求，或者是想自己在增加改变某些配置。
    instance.interceptors.request.use(config=>{
        return config;
    },error=>{
        console.log(error)
    })

    4. 响应拦截
    instance.interceptors.response.use(config=>{
        return res.data
    })

    5. 发送真正的网络请求
    return instance(config)
}

```  
## 十五.导航钩子
1. 描述：又称为导航守卫
2. 分类：
    * 全局钩子
        * beforeEach
        * beforeResolve
        * afterEach
    * 单个路由共享钩子
        * beforeEnter
    * 组价级钩子
        * beforeRouter
        * beforeRouterUpdate
        * beforeRouterLeave
    * 都有的参数：
        * to  即将要进入的目标路由对象
        * from 当前导航正要离开的路由
        * next 到达下一个路由，如果不用就会遭到拦截
    
## 十六.Vue双向数据绑定的原理
1. 通过递归的方法遍历数据对象，为其设置set和get方法
2. 用compile解析模板指令，添加监听数据的订阅者，一旦数据有变就会收到通知，更新视图
3. 订阅者（watcher）是Observer和compile之间的桥梁。Observer是用来监听model数据的，compile是用来解析模板
4. 利用视图交互技术，一旦视图有变化的时候就更新model里面的数据

## 十七.数据丢失
* 如果在初始化的时候没有定义数据，之后更新的数据是无法触发页面渲染更新的，这部分的数据就是丢失的数据。这种现象
  就称为数据丢失现象。
  
## 十八.检测数据变化
* app.$set()

## 十九.解决页面闪烁问题
* 通过v-cloak指令，这个指令一直保持在元素上，直到关联实例结束编译

## 二十.在循环中实现双向绑定
* 给v-model绑定数组的一个成员
* 语法：
```
<div v-for="(item,index) in arr">
    <input type='text' v-model='arr[index]'>
</div>

```
