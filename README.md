# Moo-CSS 模块化面向对象的css写法

- 核心：组件化+面向对象。
- 优点：
	- 重用性强
	- 维护性强
	- 拓展性强
- 缺点：
	- 上手成本~
	
	
```
Moo-CSS
├─css     css Base
├─less    less Base
└─demo    使用案例
```

demo url: http://blog.michealwayne.cn/Moo-CSS/demo/dist/mobileIndex.html
 建议调成手机模式在开发者模式中查看。

----------

## 基本规范
### 1.1 ID、class、attr选择器的使用范围
- ID：不做样式使用，供js DOM操作或作为容器
- class：主要样式
- attr：作为皮肤控制

## 1 M（模块化）
Moo-CSS的模块化主要体现在**样式分类**的模块化以及**样式层级**的模块化。

## 1.1 样式分类
根据样式属性的特征，将样式分类为以下模块：
- **reset**：重置。重置浏览器默认样式；
- **grid**：布局。布局位置相关样式。包含样式属性：margin, position, line-height等；
- **module**：模块。业务模块，头、导航、菜单、列表等等；
- **function**：功能。溢出隐藏等功能性样式；包含样式属性：clear, text-align, overflow, font-style, font-weight, font-family, vertical-align, white-space, text-decoration, text-indent等；
- **unit**：单元。宽高，padding等影响块或元素的常用单元样式；包含样式属性：width, height, padding, display, border, flex等；
- **component**：组件。图标，蒙层等常用轻量样式组件；
- **status**：状态。透明度、是否隐藏、层级等显示状态样式（是规定唯一可设置!important的部分）；包含样式属性：visibility, opacity, z-index, transform等；
- **skin**：皮肤。主题颜色背景色等；包含样式属性：color, background-color, box-shadow等；
- **animation**：动画。过渡和动画。包含样式属性：animtaion, transition。

另外两种特殊模块：
- **JavaScript DOM**：DOM操作。供js操作DOM节点，**不作样式使用**
- **React/Vue/Angular sepcial**：框架独有。供专有框架使用，如过渡动画。

**其中grid, module, unit, component, status, animation通常由类（class）实现，skin通常由属性（attribute）实现。function大部分由类实现，部分由属性实现**。由属性承担一部分的样式，也弥补了大量类导致的问题。

## 1.2 层级分类
一个项目中样式可分为如下层级：
- **Base**：基础层，样式最底层，包含样式重置reset以及极常出现的布局及单样式、展示状态。**通常所有页面共用且不做修改**。
- **Component**：组件层，包含样式组件和方法组件，简单组件样式，如按钮、蒙层；方法组件包括动画方法和预处理方法如rem单位设置、背景图片设置。可依赖于Base层和Skin层。
- **Skin**：皮肤层，业务中常出现的颜色，背景色，且提供预处理的颜色变量。常供应于Component层和Module层；
- **Module**：模块层，根据业务划分的模块，依赖于上面几个模块；
- **Layout**: 结构层，提供Module层布局样式，构成最终页面。


![moocss](https://blog.michealwayne.cn/images/notes/oocss/p-part.jpg)

也就是说，页面是由Base、Component、Skin、Layout这四个层级辅助Module层完成样式开发。

那么1.1的样式在这几层里如何归类呢？


多页面：
- Base：reset、unit（高权重）、function（高权重）、status（高权重）、component（高权重）、theme（高权重），theme attribute（高权重）、grid（高权重）
- Component：component，animation、function
- Skin：skin
- Layout: grid
- Module：页面私有module、component

> *其中Base的样式，其样式属性不建议超过5个标签；Component的选择器层级不建议超过2层，Module的选择器层级不建议超过4层。

Base层可参考less/css目录


单页面（不考虑后续项目使用，较少）：
- Base：reset、unit、function、status
- Component：component，animation
- Skin：skin
- Module：module
- Layout: grid


### 1.3 样式权重计算
公式
```
	1 / （样式资源量 / 样式属性耦合度 * 0.4 + 0.3 / 样式使用率 ^ 2 + 选择器权重 * 0.3）
```

数值越大权重越高，高权重可归入Base层。


> 其中，样式资源量可由样式代码量和引入资源大小进行衡量；样式属性耦合度是指在多样式属性的样式中，属性直接的耦合度，如溢出省略'...'样的耦合度就非常高，单属性为1；样式使用率主要考虑多页面（路由）的样式使用率；选择器权重计算值越小越好。**权重公式仅做参考**




## 2 OO（面向对象）
在Moo-CSS的概念里，CSS“对象”是一个可重复的视图。

CSS“对象”由以下四部分组成：
- HTML，可以是DOM的一个或多个节点；
- CSS声明，关于这些DOM节点样式的CSS声明，所有这些节点都以包装节点的类名开头
- 组件，如背景图片，sprites等用于展示资源的
- 与对象关联的javascript行为、侦听器或方法。

### 2.1 两个原则
#### 2.1.1 分离结构和皮肤
分离结构和皮肤意味着要将重复的样式特征（如背景和边框等样式）定义为单独的“皮肤”，通过和其他各种CSS“对象”的混合及匹配，使得在没有太多代码的情况下实现大量的视觉变化。

比如说一个渐变按钮，那么 .btn 的 class 是不会包含渐变相关的属性的，而是需要单独抽取出一个渐变的 class，然后让 .btn 去扩展从而得到一个渐变的按钮。

#### 2.1.2 区分容器和内容
区分容器和内容意味着将很少使用位置相关的样式，一个CSS“对象”应该不管放到哪里看起来都一样。所以不要用`.myObject h2{ ... }`来设置特定的`<h2>`样式，而是应该创建并应用一个描述与`<h2>`相关的class，如`<h2 class="category">`。

总得来说，就是满足SRP（单一职责）、OCP（开放封闭）

### 2.2 OO特征

#### 2.2.1 封装
按1.1中样式模块分类封装，保持模块之间的独立性

#### 2.2.2 继承
Component层可由页面Module层进行样式继承和拓展

#### 2.2.3 多态
Base层样式可拼接成多种模块容器，这些模块容易包含原有的样式多态性。


### 2.3 三个建议
- 提取可继承的共性样式在父类中

- 扩展样式尽可能在要拓展样式的元素本身添加class而不是它的父类

- 减少在对象中写位置相关的样式

- 尽量保证选择器权重相同


## 3 命名
类名或属性名由小写字母，`_`、`-`符号组成，以标志来确定样式命名空间。

类或属性的写法为：
```
	标志-类/或属性-字母值
```	
或
```	
	标志-类/属性数字值
```

其中标志由样式模块确认：
- `g-`：grid
- `m-`: module
- `f-`: function
- `u-`: component, unit
- `z-`: status
- `s-`: skin

- `a-`: animation
- `j-`: JavaScript DOM

属性简写，如`margin-top` -> `mt`，`background-color` -> `bgc`，属性值单位为px时，省略px；为rem时，数字转为px并省略rem；为`%`时，则`%`换为per，
如`padding-left: 30px` -> `pl30`，`width: 1rem` -> `w75`，`left: 50%` -> `l50per`。

类名为非模块时，名字为标识，如`icon`、`ovhidden`。

结合标志，如下
```
.u-w30per
.g-mt30
.f-blod
.s-bgc_red
[s-cr_red]
```

类名为module时，按照如下命名规则

### 3.1 module命名规则
module分为块（Block）及元素（Element），

Block，即OO中的容器，是用来标识一个具体块的关键字其实就是这个块的名字，如：头->head, 内容->content, 导航->nav, 尾->foot。一个块必须有一个唯一的名字（类），这样才能保证块的独立性。
块由gird来控制其布局。

Element，依赖于块的元素，是用来标识一个元素的关键字也是这个元素的名字。如导航栏链接或菜单的每一项->item
我们在长名称中使用连字符分隔单词（例如，block-name），使用两个下划线来分隔块名和元素名（block-name__element-name）。


如
``` html
<nav class="m-nav">
	<a class="m-nav__item">nav 1</a>
	<a class="m-nav__item">nav 2</a>
</nav>
```

### 3.2 module结合Base层、Component层、Skin层、Layout层完成整个样式，
类class的顺序为：**module Base Component(function) Skin Layout**。

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

## 4 命名词典
module：
```
a - link (<a> tag)
ac - action
add - additional
adv - advertise
aft - after
aux - auxillary

btn - button

cat - catalog | category
cnt - content | container
cnts - contents
col - column

dec - decorate
def - default
del - delete
descr - description
dm - delim
doc - document
dyn - dynamic

el - element
err - error
ext - external

f - footer
fr - friend

gen - general

hl - highlight
hv - hover
hld - holder

img - image
itx - textarea


lbl - label
lk - link
lr - layer

mod - module | modifier

n - name
ntf - notification
num - number

opt - options
ovr - overlay

ph - placeholder
pht - photo
priv - privacy

rfr - refresh

scr - screen | scroll
sel - select
sett - settings
sm - small
spr - sprite

tit - title

wrap - wrapper
```

部分属性：
```
b - bottom
bd - border
bdc - border-color
bdr - border-radius
bg - background
bgc - background-color
bgi - background-image
bgp - background-position
bs - box-shadow

c - clear
cr - color

f - float | front
fs - font-size
fw - font-weight

h - height
il - inline-block

lh - line-height
m - margin
mb - margin-bottom
ml - margin-left
mr - margin-right
mt - margin-top

o - opacity
ov - overflow

p - padding | position
per - %
pb - padding-bottom
pl - padding-left
pr - padding-right
pt - padding-top

t - text-align
ti - text-indent

unl - underline
v - vertical-align | visibility
w - width

```

## 5 其他

### 5.1 主流前端框架中的Component和Module
在使用主流前端框架，如Vue，Module层可根据在路由views文件中各自定义；Component可在组件component中定义，易于区分和维护。可参考demo中mobileNavs.html。

### 5.2 关于预处理的mixins和skins
mixins和skins通常在项目样式Base层，由于预处理定义的方法跟变量不会影响生成后的css体积，因此原则上是越精细越好。


----------

## 反馈
michealwayne@163.com