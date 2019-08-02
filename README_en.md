# Moo-css

Base Layer, global styles.[Document>>](http://blog.michealwayne.cn/Moo-CSS/docs/)

<p align="center">
  <a href="http://blog.michealwayne.cn/Moo-CSS/docs/" target="_blank">
    <img alt="Moo-CSS" height="150" src="./docs/logo.png">
  </a>
</p>

- [中文](./README.md)
- keys: modularization + object-oriented
- advantage:
	- reusability
	- maintainability
	- expansibility
- weakness:
	- learning cost~


```
Moo-CSS
├─moo-css-base
│   ├─css	// css base
│   ├─less	// less base
│   ├─sass	// sass base
│   └─stylus	// stylus base
├─docs		// documents
└─demo      // demos
```

## guide
![Moo-CSS structure](http://blog.michealwayne.cn/images/notes/oocss/p-part.jpg)

- [npm moo-css-base](https://www.npmjs.com/package/moo-css-base)
- demo url: [Mobile web](http://blog.michealwayne.cn/Moo-CSS/demo/mobile/dist/mobileIndex.html),[PC web](http://blog.michealwayne.cn/Moo-CSS/demo/pc/dist/index.html)。

## install
``` sh
npm i -D moo-css-base
```

## use
### style init

``` less
@import '~moo-css-base/mobile.less';	// init less mobile style
@import '~moo-css-base/pc.less';	// init less pc style
```

``` sass
@import '~moo-css-base/mobile.scss';	// init sass mobile style
@import '~moo-css-base/pc.scss';	// init sass pc style
```

``` stylus
@import '~moo-css-base/mobile.styl';	// init stylus mobile style
@import '~moo-css-base/pc.styl';	// init stylus pc style
```

### use mixins functions
``` less
@import '~moo-css-base/mobileMixins.less';	// import less mobile functions

.m-test {
	.wh(1vw, 1vh);
}
```
``` less
@import '~moo-css-base/pcMixins.less';	// import less pc functions

.m-test {
	.opacity(0.5);
}
```


``` sass
@import '~moo-css-base/mobileMixins.scss';	// import sass mobile functions

.m-test {
	@include wh(1vw, 1vh);
}
```
``` sass
@import '~moo-css-base/pcMixins.scss';	// import sass pc functions

.m-test {
	@include opacity(0.5);
}
```

``` stylus
@import '~moo-css-base/mobileMixins.styl';	// import sass mobile functions

.m-test
	wh(1vw, 1vh);
```

``` stylus
@import '~moo-css-base/pcMixins.styl';	// import sass pc functions

.m-test 
	opacity(0.5);

```

### use colors
``` less
@import '~moo-css-base/mobileColors.less';	// import less mobile colors

.u-error {
    color: @red;
}
```

``` less
@import '~moo-css-base/mobileColors.less';	// import less pc colors

.u-error {
    color: @blue;
}
```

``` sass
@import '~moo-css-base/mobileColors.less';	// import sass mobile colors

.u-error {
    color: $red;
}
```

``` sass
@import '~moo-css-base/mobileColors.less';	// import sass pc colors

.u-error {
    color: $blue;
}
```

``` stylus
@import '~moo-css-base/mobileColors.less';	// import stylus mobile colors

.u-error
    color $red
```

``` stylus
@import '~moo-css-base/pcColors.less';	// import stylus pc colors

.u-error
    color $blue
```

