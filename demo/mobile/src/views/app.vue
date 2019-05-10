<template>
    <div :s-type="theme">
        <v-channel/>
        <v-cards class="g-mt20"/>
        <v-foot/>
    </div>
</template>

<script>
    import Channel from './channel.vue'
    import Cards from './cards.vue'
    import Foot from './footer.vue'

    export default {
        data () {
            return {
                theme: ~location.search.indexOf('black') && 'black' || 'default'
            }
        },

        components: {
            'v-channel': Channel,
            'v-cards': Cards,
            'v-foot': Foot
        }
    }
</script>

<style lang="less">
    :global {
        .u-h3 {
            font-size: 4vw;
            line-height: 12.27vw;
            font-weight: normal;
        }
    }
</style>
