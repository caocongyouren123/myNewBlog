(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{386:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("Boxx"),t._v(" "),a("h2",{attrs:{id:"ajax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[t._v("#")]),t._v(" Ajax")]),t._v(" "),a("p",[t._v("::: details 1. Ajax支持几种数据传递的方式?")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("字符串")]),t._v(" text/plain")]),t._v(" "),a("li",[a("strong",[t._v("xml")]),t._v("\t text/xml")]),t._v(" "),a("li",[a("strong",[t._v("json")]),t._v("\t text/plain")])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("h2",{attrs:{id:"json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[t._v("#")]),t._v(" Json")]),t._v(" "),a("p",[t._v("::: details 1. json的格式?")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("键值对")]),t._v(" {key1:value1,key2:value2..}")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("数组")]),t._v("   [value1,value2..]")])])]),t._v(" "),a("blockquote",[a("p",[t._v("其中key必须是String类型,value支持null,Object,json等")])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("::: details 2. json有哪几种封装方式?")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("可以封装"),a("strong",[t._v("任意类型的数据")])]),t._v(" "),a("p",[t._v('JSONObject jo1 = new JSONObject();\njo1.put("key",value);')])]),t._v(" "),a("li",[a("p",[t._v("用来封装"),a("strong",[t._v("自定义数据类型")]),t._v("和"),a("strong",[t._v("Map")])]),t._v(" "),a("p",[t._v("Map<Integer,String> map = new HashMap<>();"),a("br"),t._v('\nmap.put(1,"王者");\nmap.put(2,"荣耀");'),a("br"),t._v("\nJSONObject jo2 = JSONObject.fromObject(map);")])]),t._v(" "),a("li",[a("p",[t._v("专门用来封装"),a("strong",[t._v("集合")]),t._v("和"),a("strong",[t._v("数组")])]),t._v(" "),a("p",[t._v("List<String> list = new ArrayList<>();"),a("br"),t._v('\nlist.add("飞龙");list.add("在天");'),a("br"),t._v("\nJSONArray jo3 = JSONArray.fromObject(list);")])])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("::: details 3. json如何对自定义数据类型进行有选择性的封装?(hibernate中"),a("code",[t._v("防止")]),t._v("多表级联发生的"),a("code",[t._v("死循环")]),t._v(")")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("引入"),a("strong",[t._v("JsonConfig")])]),t._v(" "),a("p",[t._v('JsonConfig jc = new JsonConfig(new String[]{"不想要的属性1","不想要的属性2"..});'),a("br"),t._v("\nJSONObject jo = JSONObject.fromObject(对象,jc);")])])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("::: details 4. json的包名是?")]),t._v(" "),a("p",[t._v("​    net.sf.json.JSONArray;"),a("br"),t._v("\n​\tnet.sf.json.JSONObject;")]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("h2",{attrs:{id:"jquery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery"}},[t._v("#")]),t._v(" jQuery")]),t._v(" "),a("p",[t._v("::: details 1. jQuery基本选择器")]),t._v(" "),a("ul",[a("li",[t._v("#id、.class")]),t._v(" "),a("li",[t._v("查找所有未选中的input元素："),a("code",[t._v('$("input:not(:checked)");')])]),t._v(" "),a("li",[t._v("选中所有name属性是newsletter的input元素："),a("code",[t._v('$("input[name=\'newsletter\']").attr("checked",true);')])])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("::: details 2. attr和prop的区别")]),t._v(" "),a("p",[a("em",[t._v("attr")]),t._v("：可以获取元素"),a("strong",[t._v("自定义属性")]),t._v("和"),a("strong",[t._v("本身自带的属性")]),a("br"),t._v(" "),a("em",[t._v("prop")]),t._v("：用来获取元素"),a("strong",[t._v("本身属性")])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("::: details 3. disabled和readonly的区别")]),t._v(" "),a("p",[a("em",[t._v("disabled")]),t._v("：样式 灰色，"),a("strong",[t._v("后台请求接收不到参数 始终为null")]),a("br"),t._v(" "),a("em",[t._v("readonly")]),t._v("：样式 白色，"),a("strong",[t._v("后台请求参数可以接收")])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("::: details 3. 简述Css层叠特性与继承特性")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("层叠特性:\n当多种基本选择器出现冲突时优先级问题，"),a("code",[t._v("id选择器>类别选择器>标记选择器")])])]),t._v(" "),a("li",[a("p",[t._v("继承特性:\n当子元素与父元素没有任何冲突时，子元素会完全继承父元素的所有css渲染样式")])])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("::: details 4. 写出至少三种Js选择器的使用方式")]),t._v(" "),a("p",[t._v('document.getElementById("idName");'),a("br"),t._v('\ndocument.getElementsByTagName("tagName");'),a("br"),t._v('\ndocument.getElementsByClassName("className");'),a("br"),t._v('\ndocument.getElementsByName("name");')]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("h2",{attrs:{id:"jsp-el表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsp-el表达式"}},[t._v("#")]),t._v(" Jsp el表达式")]),t._v(" "),a("p",[t._v("::: details 1. 请使用Js脚本在页面显示九九乘法表")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"="')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\t"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<br />"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\t\t\t\t\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("::: details 2. el表达式取值")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("通过属性取值：${param.键}"),a("br"),t._v("\n拿取全局参数：${initParam.键}")])]),t._v(" "),a("li",[a("p",[t._v("四范围取值："),a("br"),t._v("\n${pageScope.elena} 当前页有效"),a("br"),t._v("\n${requestScope.elena} 跳转页面有效"),a("br"),t._v("\n${sessionScope.elena} session范围有效"),a("br"),t._v("\n${application.elena} 时间到期前一直有效")])])]),t._v(" "),a("blockquote",[a("p",[t._v("我们一般只写键,但是当有多个范围的键冲突时,默认拿取范围最小的键值")])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("::: details 3. el表达式的缺陷")]),t._v(" "),a("ol",[a("li",[t._v("EL表达式无法直接取值，必须通过key和提供的四范围取值，"),a("strong",[t._v("如果取值失败,什么都不显示")])]),t._v(" "),a("li",[t._v("解决：空验证，如果取不到值返回true，如果可以取值返回false"),a("br"),t._v("\n如："),a("code",[t._v("${empty sessionScope.key}")])])]),t._v(" "),a("p",[t._v(":::")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);