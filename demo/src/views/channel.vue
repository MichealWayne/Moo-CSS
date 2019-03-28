<!-- 
 宫格
 -->

<template>
    <section class="m-channel u-pl4per u-pr4per" s-bg_theme>
        <h3 class="u-h3 f-b_1px bb_1px">广场</h3>

        <div class="m-channel__list u-s-middle">
            <p><em class="u-iconfont icon-burger" s-cr_red></em><span class="m-channel__tit">burger</span></p>
            <p><em class="u-iconfont icon-pizza" s-cr_green></em><span class="m-channel__tit">pizza</span></p>
            <p><em class="u-iconfont icon-sandwich" s-cr_blue></em><span class="m-channel__tit">sandwich</span></p>
            <p><em class="u-iconfont icon-donut" s-cr_gray></em><span class="m-channel__tit">donut</span></p>
            <p><em class="u-iconfont icon-ice_cream" s-cr_yellow></em><span class="m-channel__tit">ice_cream</span></p>
        </div>
        <div class="m-channel__list u-s-middle">
            <p><em class="u-iconfont icon-cherry" s-cr_red></em><span class="m-channel__tit">cherry</span></p>
            <p><em class="u-iconfont icon-orange" s-cr_green></em><span class="m-channel__tit">orange</span></p>
            <p><em class="u-iconfont icon-apple" s-cr_blue></em><span class="m-channel__tit">apple</span></p>
            <p><em class="u-iconfont icon-avocado" s-cr_gray></em><span class="m-channel__tit">avocado</span></p>
            <p><em class="u-iconfont icon-strawberry" s-cr_yellow></em><span class="m-channel__tit">strawberry</span></p>
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
    import Ads from './components/ads.vue'

    export default {
        name: 'Channel',
        data () {
            return {
                ads: {
                    title: 'test tit',
                    content: 'test content',
                    imgs: [ '//blog.michealwayne.cn/images/notes/20190104/compatibility.png' ]
                }
            }
        },
        components: {
            'v-ads': Ads
        }
    }
</script>

<style lang="less">
    .m-channel {
        .m-channel__list {
            padding: 0.4rem 0;
        }
        .m-channel__tit {
            display: block;
            font-size: 0.347rem;
        }
        .u-iconfont {
            font-size: 1.2rem;
        }
    }
</style>