<!-- 
 产品卡
 -->

<template>
    <section class="m-cards u-pl4per u-pr4per" s-bg_theme>
        <h3 class="u-h3 f-b_1px bb_1px">卡片</h3>

        <div class="m-cards__ctn u-j-middle">
            <div class="m-cards__item">
                <p>
                    <em class="u-iconfont icon-fish g-fs30" s-cr_red></em>
                    <strong class="m-ri_tit f-bold g-fs28">中信百信银行</strong>
                </p>
                <p class="g-fs32 g-mt10">智惠存2号</p>
                <p class="m-ri_sy f-bold g-mt10" s-cr_yellow>JS</p>
                <p class="g-fs24" s-ft_sub_>今日支取收益率</p>
            </div>

            <div class="m-cards__item">
                <p>
                    <em class="u-iconfont icon-fish g-fs30" s-cr_red></em>
                    <strong class="m-ri_tit f-bold g-fs28">中信百信银行</strong>
                </p>
                <p class="g-fs32 g-mt10">智惠存2号</p>
                <p class="m-ri_sy f-bold g-mt10" s-cr_yellow>JS</p>
                <p class="g-fs24" s-ft_sub_>今日支取收益率</p>
            </div>

            <div class="m-cards__item">
                <p>
                    <em class="u-iconfont icon-fish g-fs30" s-cr_red></em>
                    <strong class="m-ri_tit f-bold g-fs28">中信百信银行</strong>
                </p>
                <p class="g-fs32 g-mt10">智惠存2号</p>
                <p class="m-ri_sy f-bold g-mt10" s-cr_yellow>JS</p>
                <p class="g-fs24" s-ft_sub_>今日支取收益率</p>
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
    import Ads from './components/ads.vue'

    export default {
        name: 'Cards',
        data () {
            return {
                ads: {
                    title: 'card title',
                    content: 'card content',
                    imgs: ['//blog.michealwayne.cn/images/notes/20181031/layers.png', '//blog.michealwayne.cn/images/notes/20181031/domtree.png', '//blog.michealwayne.cn/images/notes/20181031/htmlanalysis.png']
                }
            }
        },
        components: {
            'v-ads': Ads
        }
    }
</script>

<style lang="less">
    @import '../../../less/mobile/base.less';

    .m-cards__ctn {
        padding-top: .2rem;
        padding-bottom: .6rem;
        width: 92%;
        overflow-x: auto;
    }
    .m-cards__item {
        margin: 0 0.16rem;
        padding: 0.486rem 0.278rem;
        min-width: 3.542rem;
        min-height: 2.986rem;
        text-align: center;
        box-shadow: 0 0 0.278rem rgba(240, 240, 243, 0.8);

        .m-ri_tit {
            color: #4359b8;
            line-height: 0.667rem;
        }
        .m-ri_sy {
            .hh(0.833rem);
            font-size: 0.75rem;
            white-space: nowrap;
        }
    }
</style>