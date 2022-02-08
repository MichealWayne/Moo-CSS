<!-- 
 广告
 -->

<template>
  <div class="u-ads">
    <section v-if="type === '0'">
      <div class="u-ads__h1">{{ title }}</div>
      <div class="u-ads__ctn">{{ content }}</div>
    </section>
    <section class="u-s-middle" v-else-if="type === '1'">
      <div class="u-ads__left">
        <img :src="imgs[0]" />
      </div>
      <div class="u-ads__right">
        <div class="u-ads__h1">{{ title }}</div>
        <div class="u-ads__ctn">{{ content }}</div>
      </div>
    </section>
    <section v-else-if="type === '2'">
      <div class="u-ads__h1">{{ title }}</div>
      <div class="u-ads__ctn u-w f-ellipsis">{{ content }}</div>
      <div class="u-ads__imgs u-j-middle g-mt20">
        <img :src="img" v-for="(img, index) in imgs" :key="index" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Ads',
  props: {
    title: String,
    content: String,
    imgs: {
      type: Array,
      default: [],
    },
  },

  computed: {
    type() {
      if (!this.imgs) return '0';
      else if (this.imgs.length === 1) return '1';
      else return '2';
    },
  },
};
</script>

<style lang="less" scoped>
:global {
  .u-ads {
    img {
      background-color: #999;
    }
  }
  .u-ads__left img {
    width: 30vw;
    height: 20vw;
  }
  .u-ads__h1 {
    margin-bottom: 0.213rem;
    line-height: 0.667rem;
    font-size: 0.48rem;
  }
  .u-ads__ctn {
    font-size: 0.347rem;
    color: #999;
  }
  .u-ads__right {
    width: 55vw;
  }
  .u-ads__imgs {
    img {
      width: 32%;
      height: 21vw;
    }
  }
}
</style>
