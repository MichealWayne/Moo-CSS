# Moo-CSS 模块化面向对象的css写法

组件化+面向对象

```
Moo-CSS
├─less    less demo
└─demo    使用案例
```

----------

## 基本规范
### 1.1 ID、class、attr选择器的使用范围
- ID：不做样式使用，供js DOM操作或作为容器
- class：主要样式
- attr：作为皮肤控制

## 1 M（模块化）
Moo-CSS的模块化主要体现在样式分类的模块化以及样式层级的模块化。

## 1.1 样式分类
根据样式属性的特征，将样式分类为以下模块：
- **reset**：重置。重置浏览器默认样式；
- **grid**：布局。margin，position等布局位置相关样式；
- **module**：模块。业务模块，头、导航、菜单、列表等等；
- **function**：功能。溢出隐藏等功能性样式；
- **unit**：单元。宽高，padding等影响块或元素的常用单元样式；
- **component**：组件。图标，蒙层等常用轻量样式组件；
- **status**：状态。透明度，是否隐藏，层级等显示状态样式；
- **skin**：皮肤。主题颜色背景色等；
- **animation**：动画。过渡和动画
- **JavaScript DOM**：DOM操作。供js操作DOM节点，**不作样式使用**
- **React/Vue/Angular sepcial**：框架独有。供专有框架使用，如过渡动画。

## 1.2 层级分类
- Base：基础层，包含样式重置reset，极常出现的布局及单样式，展示状态；
- Component：组件层，高频率出现的简单组件样式，如按钮、蒙层。可依赖于基础层，不考虑继承的组件不依赖于基础层；
- Skin：皮肤层，业务中常出现的颜色，通常为预处理的变量。常供应于组件层和模块层；
- Module：模块层，根据业务划分的模块，依赖于上面几个模块
- Layout: 结构层，安排模块层布局，构成最终页面。

组件层可直接嵌入页面，或通过样式容器（由基础层、皮肤层）包装组件嵌入页面，或通过模块层包装组件嵌入页面。

那么上述的样式在这几层里如何归类呢？

单页面：
- Base：reset、unit、function、status
- Component：component class，animation
- Skin：theme class，theme attribute
- Module：module
- Layout: grid

多页面：
- Base：reset、unit（高频率共用）、function（高频率共用）、status、component（高频率共用）、theme（高频率共用），theme attribute（高频率共用）、grid（高频率共用）
- Component：component（页面独有），animation
- Skin：theme class，theme attribute
- Module Common：module class，多页面公共模块
- Module Private：module class，页面私有模块
- Layout: grid

其中Base的样式，其内容语句不建议超过5句。Component的层级不建议超过2层。

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

### 2.2 三个建议
#### 2.2.1 提取可继承的共性样式在父类中

#### 2.2.2 扩展样式尽可能在要拓展样式的元素本身添加class而不是它的父类

#### 2.2.3 减少在对象中写位置相关的样式

#### 2.2.4 尽量保证选择器权重相同

## 3 命名
类名或属性名由小写字母，`_`、`-`符号组成

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

### 3.2 module结合Base层、Component层、Skin层、Layout层完成整个样式，如
``` html
	<section class="g-pr">
		<nav class="m-nav f-tc g-pa g-t50l100" u-size="big" s-bgc_yellow>
			<a class="m-nav__item">nav 1</a>
			<a class="m-nav__item nav_type_selected">nav 2</a>
		</nav>
	</section>
```


## 样式权重计算
```
	（样式复杂度 + 样式属性量）* 项目使用次数 / （完全重复次数 * 样式选择器层级数）
```

----------

## 反馈
michealwayne@myhexin.com