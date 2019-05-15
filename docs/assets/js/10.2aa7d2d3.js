(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{187:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("模块化面向对象的css写法规范。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("很多人都感觉，比起弱类型语言，强类型语言因为其严谨性会更容易维护。同样的，Moo-CSS将css样式进行分类，目的也是为了更好得维护。")]),t._v(" "),n("p",[t._v("根据样式属性的特征，将样式分类为以下模块，并根据模块给定命名空间（"),n("router-link",{attrs:{to:"./../nameRule/#基本规则"}},[t._v("命名规则")]),t._v("）：")],1),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("另外两种特殊模块：")]),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("Moo-CSS推荐其中\ngrid, module, unit, component, status, animation通常由类（class）实现；\nskin通常由属性（attribute）实现，*小程序通过class实现；\nfunction大部分由class实现，部分由属性实现。")]),t._v(" "),n("p",[t._v("如：")]),t._v(" "),t._m(6),t._m(7),t._v(" "),n("p",[t._v("根据样式属性的特征，将项目样式分层为以下模块层级：")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),n("p",[t._v("Moo-CSS中的OO（Object-Oriented），面向对象。Moo-CSS的面向对象主要体现在"),n("router-link",{attrs:{to:"./../M/"}},[t._v("Module各层级")]),t._v("的面向对象。")],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"moo-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#moo-css","aria-hidden":"true"}},[this._v("#")]),this._v(" Moo-css")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"m模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#m模块","aria-hidden":"true"}},[this._v("#")]),this._v(" M模块")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Moo-CSS中的M(Module)，模块化。Moo-CSS的模块化主要体现在"),s("strong",[this._v("样式分类")]),this._v("的模块化以及"),s("strong",[this._v("样式层级")]),this._v("的模块化。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"样式分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式分类","aria-hidden":"true"}},[this._v("#")]),this._v(" 样式分类")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("strong",[t._v("reset")]),t._v("："),n("strong",[t._v("重置")]),t._v("。重置浏览器默认样式；")]),t._v(" "),n("li",[n("strong",[t._v("grid")]),t._v("："),n("strong",[t._v("布局")]),t._v("。布局位置相关样式。包含样式属性：margin, position, line-height等；")]),t._v(" "),n("li",[n("strong",[t._v("module")]),t._v("："),n("strong",[t._v("模块")]),t._v("。业务模块，头、导航、菜单、列表等等；")]),t._v(" "),n("li",[n("strong",[t._v("function")]),t._v("："),n("strong",[t._v("功能")]),t._v("。溢出隐藏等功能性样式；包含样式属性：clear, text-align, overflow, font-style, font-weight, font-family, vertical-align, white-space, text-decoration, text-indent等；")]),t._v(" "),n("li",[n("strong",[t._v("unit")]),t._v("："),n("strong",[t._v("单元")]),t._v("。宽高，padding等影响块或元素的常用单元样式；包含样式属性：width, height, padding, display, border, flex等；")]),t._v(" "),n("li",[n("strong",[t._v("component")]),t._v("："),n("strong",[t._v("组件")]),t._v("。图标，蒙层等常用轻量样式组件；")]),t._v(" "),n("li",[n("strong",[t._v("status")]),t._v("："),n("strong",[t._v("状态")]),t._v("。透明度、是否隐藏、层级等显示状态样式（是规定唯一可设置!important的部分）；包含样式属性：visibility, opacity, z-index, transform等；")]),t._v(" "),n("li",[n("strong",[t._v("skin")]),t._v("："),n("strong",[t._v("皮肤")]),t._v("。主题颜色背景色等；包含样式属性：color, background-color, box-shadow等；")]),t._v(" "),n("li",[n("strong",[t._v("animation")]),t._v("："),n("strong",[t._v("动画")]),t._v("。过渡和动画。包含样式属性：animtaion, transition。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("strong",[t._v("JavaScript DOM")]),t._v("："),n("strong",[t._v("DOM操作")]),t._v("。供js操作DOM节点，"),n("strong",[t._v("不作样式使用")])]),t._v(" "),n("li",[n("strong",[t._v("React/Vue/Angular sepcial")]),t._v("："),n("strong",[t._v("框架独有")]),t._v("。供专有框架使用，如过渡动画。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-CSS extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* reset */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("     \n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a,\n    a:hover")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-decoration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* module */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".m-menu")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow-y")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".m-menu li")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("heigth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 60px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 60px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* grid */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".g-pr")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".g-mt10")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.133rem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* function */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".f-unl")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-decoration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" underline"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".f-ellipsis")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("white-space")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-overflow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ellipsis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-o-text-overflow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ellipsis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".f-tc")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* unit */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".u-w10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".u-h10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".u-pt30")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* component */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".u-btn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("cursor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pointer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".u-win_bg")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fixed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("z-index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 18"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".u-icon-circle")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 6px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 6px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* status */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("z-hide")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".z-index_999")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("z-index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 999"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".z-hide_60per")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 60"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alpha")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opacity=60"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* animation */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".a-fadein")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fadein 1s 1 ease"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" fadein")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("to")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* theme */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".s-bgc_red")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[s-cr_blue]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".u-icon-circle[s-big]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 60px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 60px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"样式分层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式分层","aria-hidden":"true"}},[this._v("#")]),this._v(" 样式分层")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("strong",[t._v("Base")]),t._v("：基础层，样式最底层，包含样式重置reset以及极常出现的布局及单样式、展示状态。（通常所有页面共用且不做修改）。")]),t._v(" "),n("li",[n("strong",[t._v("Component")]),t._v("：组件层，包含样式组件和方法组件，简单组件样式，如按钮、蒙层；方法组件包括动画方法和预处理方法如rem单位设置、背景图片设置。可依赖于Base层和Skin层。")]),t._v(" "),n("li",[n("strong",[t._v("Skin")]),t._v("：皮肤层，业务中常出现的颜色，背景色，且提供预处理的颜色变量。常供应于Component层和Module层；")]),t._v(" "),n("li",[n("strong",[t._v("Module")]),t._v("：模块层，根据业务划分的模块，依赖于上面几个模块；")]),t._v(" "),n("li",[n("strong",[t._v("Layout")]),t._v(": 结构层，提供Module层布局样式，构成最终页面。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"oo面向对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oo面向对象","aria-hidden":"true"}},[this._v("#")]),this._v(" OO面向对象")])}],!1,null,null,null);s.default=e.exports}}]);