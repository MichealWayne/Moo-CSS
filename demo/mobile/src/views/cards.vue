<!-- 
 产品卡
 -->

<template>
  <section class="u-pl4per u-pr4per" s-bg_theme>
    <h3 class="u-h3 f-b_1px bb_1px">移动Vue Demo</h3>

    <div class="u-j-middle" :class="$style.ctn">
      <div :class="$style.item">
        <p>
          <em class="u-iconfont icon-fish g-fs30" s-cr_red></em>
          <strong class="f-bold g-fs28" :class="$style.tit">Moo-css</strong>
        </p>
        <p class="g-fs32 g-mt10">继承的特性</p>
        <p class="f-bold g-mt10" :class="$style.sy" s-cr_yellow>JS</p>
        <p class="g-fs24" s-ft_sub_>样式继承</p>
      </div>

      <div :class="$style.item">
        <p>
          <em class="u-iconfont icon-fish g-fs30" s-cr_red></em>
          <strong class="f-bold g-fs28" :class="$style.tit">Moo-css</strong>
        </p>
        <p class="g-fs32 g-mt10">封装的特性</p>
        <p class="f-bold g-mt10" :class="$style.sy" s-cr_yellow>JS</p>
        <p class="g-fs24" s-ft_sub_>模块分类</p>
      </div>

      <div :class="$style.item">
        <p>
          <em class="u-iconfont icon-fish g-fs30" s-cr_red></em>
          <strong class="f-bold g-fs28" :class="$style.tit">Moo-css</strong>
        </p>
        <p class="g-fs32 g-mt10">多态的特性</p>
        <p class="f-bold g-mt10" :class="$style.sy" s-cr_yellow>JS</p>
        <p class="g-fs24" s-ft_sub_>模块拼装</p>
      </div>
    </div>

    <v-ads
      :title="ads.title"
      :content="ads.content"
      :imgs="ads.imgs"
      class="u-pt50 u-pb50 f-b_1px bt_1px"
    />
  </section>
</template>

<script>
import Ads from './components/ads.vue';

export default {
  name: 'Cards',
  data() {
    return {
      ads: {
        title: '浏览器结构',
        content: '用户界面+浏览器引擎+呈现引擎+网络+用户界面后端+JavaScript 解释器',
        imgs: [
          '//blog.michealwayne.cn/images/notes/20181031/layers.png',
          '//blog.michealwayne.cn/images/notes/20181031/domtree.png',
          '//blog.michealwayne.cn/images/notes/20181031/htmlanalysis.png',
        ],
      },
    };
  },
  components: {
    'v-ads': Ads,
  },
};
</script>

<style lang="less" module>
@import '~moo-css-base/mobileMixins.less';

.ctn {
  padding-top: 2vw;
  padding-bottom: 6vw;
  width: 92%;
  overflow-x: auto;
}

.item {
  margin: 0 1.6vw;
  padding: 4.86vw 2.78vw;
  min-width: 35.42vw;
  min-height: 29.86vw;
  text-align: center;
  box-shadow: 0 0 2.78vw rgba(240, 240, 243, 0.8);

  .tit {
    color: #4359b8;
    line-height: 6.67vw;
  }
  .sy {
    .hh(8.33vw);
    font-size: 7.5vw;
    white-space: nowrap;
  }
}
</style>
