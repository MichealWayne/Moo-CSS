<!-- 
 宫格
 -->

<template>
  <section class="u-pl4per u-pr4per" s-bg_theme>
    <h3 class="u-h3 f-b_1px bb_1px">Moo-CSS</h3>

    <div class="u-s-middle" :class="$style.list">
      <p>
        <em class="u-iconfont icon-burger" :class="$style['icon-size']" s-cr_red></em
        ><span :class="$style.tit">burger</span>
      </p>
      <p>
        <em class="u-iconfont icon-pizza" :class="$style['icon-size']" s-cr_green></em
        ><span :class="$style.tit">pizza</span>
      </p>
      <p>
        <em class="u-iconfont icon-sandwich" :class="$style['icon-size']" s-cr_blue></em
        ><span :class="$style.tit">sandwich</span>
      </p>
      <p>
        <em class="u-iconfont icon-donut" :class="$style['icon-size']" s-cr_gray></em
        ><span :class="$style.tit">donut</span>
      </p>
      <p>
        <em class="u-iconfont icon-ice_cream" :class="$style['icon-size']" s-cr_yellow></em
        ><span :class="$style.tit">ice_cream</span>
      </p>
    </div>
    <div class="u-s-middle" :class="$style.list">
      <p>
        <em class="u-iconfont icon-cherry" :class="$style['icon-size']" s-cr_red></em
        ><span :class="$style.tit">cherry</span>
      </p>
      <p>
        <em class="u-iconfont icon-orange" :class="$style['icon-size']" s-cr_green></em
        ><span :class="$style.tit">orange</span>
      </p>
      <p>
        <em class="u-iconfont icon-apple" :class="$style['icon-size']" s-cr_blue></em
        ><span :class="$style.tit">apple</span>
      </p>
      <p>
        <em class="u-iconfont icon-avocado" :class="$style['icon-size']" s-cr_gray></em
        ><span :class="$style.tit">avocado</span>
      </p>
      <p>
        <em class="u-iconfont icon-strawberry" :class="$style['icon-size']" s-cr_yellow></em
        ><span :class="$style.tit">strawberry</span>
      </p>
    </div>

    <v-ads
      :title="ads.title"
      :content="ads.content"
      :imgs="ads.imgs"
      class="u-pt50 u-pb30 f-b_1px bt_1px"
    />
  </section>
</template>

<script>
import Ads from './components/ads.vue';

export default {
  name: 'Channel',
  data() {
    return {
      ads: {
        title: 'Flex布局的兼容性',
        content: 'flex支持安卓4.4+，ios7+，IE10+...',
        imgs: ['//blog.michealwayne.cn/images/notes/20190104/compatibility.png'],
      },
    };
  },
  components: {
    'v-ads': Ads,
  },
};
</script>

<style lang="less" module>
.list {
  padding: 4vw 0;
}
.tit {
  display: block;
  font-size: 3.47vw;
}
.icon-size {
  font-size: 12vw;
}
</style>
