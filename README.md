# Moo-CSS 模块化面向对象的css写法规则策略
[文档地址>>](http://blog.michealwayne.cn/Moo-CSS/docs/)

<p align="center">
  <a href="http://blog.michealwayne.cn/Moo-CSS/docs/" target="_blank">
    <img alt="antd-admin" height="150" src="./docs/logo.png">
  </a>
</p>

- [English](./README_en.md)
- 核心：组件模块化+面向对象。
- 优点：
	- 重用性强
	- 维护性强
	- 拓展性强
- 缺点：
	- 上手成本~
	

```
Moo-CSS
├─moo-css-base
│   ├─less	// less base
│   ├─sass	// sass base
│   └─stylus	// stylus base
├─docs		// documents
└─demo      // demos
```

## guide
![Moo-CSS structure](http://blog.michealwayne.cn/images/notes/oocss/p-part.jpg)


- [npm moo-css-base](https://www.npmjs.com/package/moo-css-base)
- demo url: [移动端](http://blog.michealwayne.cn/Moo-CSS/demo/mobile/dist/mobileIndex.html),[PC端](http://blog.michealwayne.cn/Moo-CSS/demo/pc/dist/index.html)。
 移动端demo建议调成手机模式在开发者模式中查看。

----------


## 基本规范
### 1.1 ID、class、attribute选择器的使用范围
- ID：不做样式使用，仅作js DOM操作或作为容器
- class：主要样式
- attr：作为皮肤控制

## 1 M（模块化）
Moo-CSS中的M(Module)，模块化。Moo-CSS的模块化主要体现在**样式属性**的模块化以及**样式层级**的模块化。

### 1.1 样式属性分类
根据样式属性的特征，Moo-CSS将样式属性分类样式划分为以下模块，并根据模块特征给定命名前缀（[命名规则-标志前缀](http://blog.michealwayne.cn/Moo-CSS/docs/nameRule/#基本规则)）：
- **grid**：**布局样式**。布局、位置相关样式。如margin, position, line-height等；
- **function**：**功能样式**。文字居中、溢出隐藏等功能性样式。如clear, text-align, overflow, font-style, font-weight, font-family, vertical-align, white-space, text-decoration, text-indent等；
- **unit**：**单元样式**。宽高、padding等影响块或元素的常用单元样式。如width, height, padding, display, border, flex等；
- **status**：**状态样式**。透明度、是否隐藏、层级等显示状态样式（是唯一可设置!important的部分）。如visibility, opacity, z-index, transform等；
- **skin**：**皮肤样式**。主题颜色背景色等。如color, background-color, box-shadow等；
- **animation**：**动画样式**。过渡和动画。如animtaion, transition。


另外两种特殊模块：
- **JavaScript DOM**：**DOM操作样式**。供js操作DOM节点，**建议不带有样式属性**；
- **React/Vue/Angular sepcial**：**框架独有样式**。供专有框架使用，如过渡动画。



更多样式属性归类可参考[样式模块词典>>](http://blog.michealwayne.cn/Moo-CSS/docs/nameDictionary/#样式模块词典)

> 注意，Moo-CSS推荐其中
grid, module, unit, component, status, animation通常由className实现；
skin通常由属性(attribute)实现，*小程序通过className实现；
function大部分由className实现，部分低权重样式由属性实现。

> 使用className以及attribute来确认样式可以较好避免权重问题，且从中我们可以得知skin作为辅助样式而样式权重相比较低。Moo-CSS推荐避免ID以及!important进行样式开发，有且仅有一个!important样式用于元素隐藏(`.z-hide { display: none !important }`)。


### 1.2 样式分层
### 样式分层
根据样式属性的特征，将项目样式分层为以下模块层级：
- **Base**：基础层。样式最底层，包含样式重置reset、提供样式变量及方法、供给极常出现的样式库。（通常所有页面共用且不做修改操作）。
- **Component**：组件层。包含样式组件和方法组件，简单组件样式。如按钮、蒙层；方法组件包括动画方法和mixins方法。可依赖于Base层和Skin层。
- **Skin**：皮肤层。设置颜色、背景色、屏幕媒体查询设置等皮肤，且提供项目独有颜色变量。常供应于Component层和Module层；
- **Module**：模块层。根据业务划分的模块，常作为Component的容器。依赖于上面几个模块以及Layout层；
- **Layout**: 结构层。提供Module层和其中的Component布局样式，构成最终页面。

其中，Base、Component、Skin、Layout中样式作用域为全局，Module层样式保持私有性。各层级保持独立性，满足SRP(单一功能原则)。

详细介绍可见[文档-样式分层](http://blog.michealwayne.cn/Moo-CSS/docs/moocss/#样式分层)




### 1.3 Base层样式权重计算
权重计算参考公式：
```
1 / （样式资源量 / 样式属性耦合度 * 0.4 + 0.3 / 样式使用率 ^ 2 + 选择器权重 * 0.3）
```

数值越大权重越高，高权重可归入Base层。

其中，样式资源量可由样式代码量和引入资源大小进行衡量；样式属性耦合度是指在多样式属性的样式中，属性直接的耦合度，如溢出显示'...'这样的耦合度就非常高；样式使用率主要考虑多页面（包括路由页面）的样式使用率；选择器权重计算值越小越好。**权重公式仅做参考，简单来说就是提取高频使用且不占用大量资源的原子样式/方法。**


## 2 OO（面向对象）
Moo-CSS中的OO(Object-Oriented)，面向对象。Moo-CSS的面向对象主要体现在Component和Module层。

同OOCSS，Moo-CSS中的CSS对象由以下4部分内容组成：
- HTML，可以是DOM的一个或多个节点；
- CSS声明，关于这些DOM节点样式的CSS声明，其中部分CSS声明满足私立性；
- 资源组件，如背景图片，sprites等用于展示资源的；
- 事件，与对象关联的javascript行为、侦听器或方法。

### 2.1 两个原则
#### 2.1.1 分离结构和皮肤
分离结构和皮肤意味着要将重复的样式特征（如背景和边框等样式）定义为单独的“皮肤”，通过和其他各种CSS“对象”的混合及匹配，使得在没有太多代码的情况下实现大量的视觉变化。

比如说一个渐变按钮，那么 .btn 的 class 是不会包含渐变相关的属性的，而是需要单独抽取出一个渐变的 class，然后让 .btn 去扩展从而得到一个渐变的按钮。

#### 2.1.2 区分容器和内容
区分容器和内容意味着将很少使用位置相关的样式，一个CSS“对象”应该不管放到哪里看起来都一样。所以不要用`.myObject h2{ ... }`来设置特定的`<h2>`样式，而是应该创建并应用一个描述与`<h2>`相关的class，如`<h2 class="category">`。

总得来说，就是满足SRP（单一职责）、OCP（开放封闭）

### 2.2 OO特征

#### 2.2.1 封装
Moo-CSS的封装特性一方面体现在Module/Component中对象内容的封装，保持对象之间的独立性；
另一方面，各样式属性/方法的封装以及各样式层级的封装均体现了其封闭性。

#### 2.2.2 继承
页面Module层/Component层可由其他Component层进行样式继承和拓展，各模块符合开闭原则(The Open/Closed Principle)

#### 2.2.3 多态
Moo-CSS所说的多态一方面是指对应平台的多态样式/方法。比如[moo-css-base](https://www.npmjs.com/package/moo-css-base)移动端和PC端的Component层分别提供了rem换算方法`torem`，调用方式相同而移动端进行了1:75的单位换算，而PC端进行了1:54的单位换算。



## 3 命名
选择器命名由小写字母，`_`、`-`符号组成，并通过标志前缀来确定样式命名空间。

className或attribute的写法为：
```
标志前缀-className/attribute_字母值
``` 
或
``` 
标志前缀-className/attribute数字值
```

### 基本规则
- 类名或属性名由小写字母、数字、`_`、`-`符号组成，不包含大写字母；
- 连字符分隔单词(`-`)，以代替驼峰式命名。如：head-menu；
- 单下划线分隔属性和英文值(`_`)。如：color_red；
- 双下划线分隔模块和元素(`__`)。如：nav__item。



其中标志前缀由样式模块确认：
- `g-`：grid
- `f-`: function
- `u-`: unit、Component unit
- `z-`: status
- `s-`: skin
- `a-`: animation
- `m-`: Module


特殊样式模块前缀：
- `j-`: JavaScript DOM
- `v*-`: VueJS专用，如VueJS专用动画`.va-fadein`
- `r*-`: ReactJS专用，如ReactJS专用宽度`.ru-w100`
- `a*-`: Angular专用，如Angular专用皮肤`.as-cr_red`


属性简写规则，通常由属性单词首字母组成，部分较长的样式属性单词或避免重复可取首字母和中间字母。如`margin-top` -> `mt`，`background-color` -> `bgc`；属性值单位值为px时，省略px；为rem/vw时，数值转为px并省略rem/vw；为`%`时，则`%`换为`per`，
如`padding-left: 30px` -> `pl30`，`width: 1rem` -> `w75`，`margin-top: 2vw` -> `mt15`，`left: 50%` -> `l50per`。更多属性简写可参考[样式属性命名>>](http://blog.michealwayne.cn/Moo-CSS/docs/nameDictionary/#样式属性命名)

属性值为非模块时，名字为标识，如`icon`、`ovhidden`。

结合标志，如下
```
.u-w30per
.g-mt30
.f-blod
.s-bgc_red
[s-cr_red]
```

类名为module时，按照如下命名规则


### 3.1 Module命名规则
Module结合Base层、Component层、Skin层、Layout层完成整个样式。其命名通常与项目业务耦合，部分命名可参考[Module命名词典>>](http://blog.michealwayne.cn/Moo-CSS/docs/nameDictionary/#module命名词典)

#### 方式1：BEM的BE
```
(标志前缀)-类块__类元素
```
其中标识前缀可省略

Module分为块（Block）及元素（Element），

Block，即OO中的容器，是用来标识一个具体块的关键字其实就是这个块的名字，如：头->head, 内容->content, 导航->nav, 尾->foot。一个块必须有一个唯一的名字（类），这样才能保证块的独立性。
块由gird来控制其布局。

Element，**依赖于块的元素**。是用来标识一个元素的关键字也是这个元素的名字。如导航栏链接或菜单的每一项->item
我们在长名称中使用连字符分隔单词（例如，block-name），使用两个下划线来分隔块名和元素名（block-name__element-name）。
块名称为其元素和专属修饰符定义命名空间。



如
``` html
<nav class="m-nav">
    <a class="m-nav__item">nav 1</a>
    <a class="m-nav__item">nav 2</a>
</nav>
```

#### 结合其它层完成整个样式

如
``` html
<section class="g-pr">
    <nav class="m-nav f-tc g-pa g-t50l100" u-size="big" s-bgc_yellow>
        <a class="m-nav__item">nav 1</a>
        <a class="m-nav__item nav_type_selected">nav 2</a>
    </nav>
</section>
```

``` css
/* layout */
.g-pr { position: relative; }
.g-pa { position: absolute; }

/* function */
.f-tc { text-align: center; }

/* unit */
[u-size="big"] { width: 500px; font-size: 30px }
[u-size="small"] { width: 50px; font-size: 10px }

/* skin */
[s-bgc_yellow] { background-color: yellow }

/* module */
.m-nav { /*...*/ }
.m-nav__item { /*...*/ }
```

#### 方式2：css modules/CSS in JS

> 如果使用了CSS in JS或者css modules来指定Module的话，则可避免模块元素及修饰符的依赖式写法。（避免BE写法）

VueJS(vue-cli)可直接在style标签中设置module属性完成css module的设置（可见[文档](https://vue-loader.vuejs.org/zh/guide/css-modules.html#%E7%94%A8%E6%B3%95)）
ReactJS需要设置webpack配置文件中cssOptions参数的modules为true。

如：
``` vue
<template>
    <section :class="$style.foot">
        <p>
            <img :class="$style.img" src="@/images/i-logo_b.png">
        </p>
        <p>@All right reserved | Design by <a href="https://github.com/MichealWayne/">Micheal Wayne</a></p>
    </section>
</template>

<style lang="less" module>
    .foot {
        line-height: 10vw;
        word-break: keep-all;
        white-space: nowrap;
		
		.img {
			width: 10px;
			height: 10px;
		}
    }
</style>

```

#### 结合其它层完成整个样式
``` vue
<template>
    <section :class="[$style.foot, 'f-tc']">
        <p class="u-pt80">
            <img :class="[$style.img, 'g-mb20']" src="@/images/i-logo_b.png">
        </p>
        <p class="g-fs22 u-pb100" s-cr_sub>@All right reserved | Design by <a class="f-unl" s-cr_blue href="https://github.com/MichealWayne/">Micheal Wayne</a></p>
    </section>
</template>

<style lang="less" module>
    .foot {
        line-height: 10vw;
        word-break: keep-all;
        white-space: nowrap;
		
		.img {
			width: 10px;
			height: 10px;
		}
    }
</style>

```

#### react 例子
``` jsx
import React, {Component} from 'react';
import style from './index.scss'
import classnames from 'classnames'

export default class Footer extends Component {
    render () {
        return (
            <footer className={classnames(style.foot, 'f-tc g-fs12 f-b_1px bt_1px g-mt60')} s-theme__foot="1">
				<p class="u-pt80">
					<img className={classnames(style.img, 'g-mb20')} src={require('@/images/i-logo_b.png')}>
				</p>
                MIT Licensed | Copyright © 2019-present MichealWayne
            </footer>
        )
    }
}
```

``` scss
// index.scss
.foot {
    padding: 40px;
	
	.img {
	    width: 10px;
		height: 10px;
	}
}
```
```

## 4 命名词典以及moo-css-base查询词典
- [帮助：词典>>](http://blog.michealwayne.cn/Moo-CSS/docs/nameDictionary/#module命名词典)
- [npm moo-css-base](https://www.npmjs.com/package/moo-css-base)

[更多详细内容请见文档>>](http://blog.michealwayne.cn/Moo-CSS/docs/)

## 5 系列文章
- [(一)：致敬OOCSS、BEM、SMACSS、ACSS、ITCSS...css modules、CSS in JS](https://blog.csdn.net/qq_24357165/article/details/90695277)
- [(二)：Moo，模块与面向对象](https://blog.csdn.net/qq_24357165/article/details/90695635)
- [(三)：Base层的划分以及moo-css-base](https://blog.csdn.net/qq_24357165/article/details/90700803)
- [(四)：Moo-CSS的选择器命名规范](https://blog.csdn.net/qq_24357165/article/details/90701291)


----------------

## 反馈
- [mail: michealwayne@163.com](mailto:michealwayne@163.com)
- [github: Moo-css/issues](https://github.com/MichealWayne/Moo-css/issues)