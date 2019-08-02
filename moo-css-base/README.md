# Moo-css

![logo.png](http://blog.michealwayne.cn/Moo-CSS/docs/logo.png)

Base Layer, global styles.



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
@import '~moo-css-base/pc.less';	// import stylus pc colors

.u-error
    color $blue
```

