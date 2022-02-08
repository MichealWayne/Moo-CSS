# Moo-css

<a href="https://github.com/MichealWayne/Moo-css">
	<img style="width: 100%; max-width: 200px;" src="http://blog.michealwayne.cn/Moo-CSS/docs/logo.png"/>
</a>

moo-css-base: Base Layer, global styles.

## update info

- 2022.01.31(`v0.9.5`): code formatted; bug fix.
- 2020.06.11(`v0.9.4`): moo-css-base fixed; prepare for auto-Moo.
- 2019.12.05(`v0.9.3`): add styles.

## install

``` sh
npm i --save moo-css-base
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

## feedback

- [michealwayne@163.com](mailto:michealwayne@163.com)