<!-- @format -->

<template>
    <div ref="chart"></div>
</template>

<script>
import { renderPie } from '../../../packages/src/util/nomalChart'
import mixin from '../../../packages/src/util/mixin'
export default {
    name: 'ZPie',
    mixins: [mixin],
    data() {
        return {
            businessConfigs: {},
        }
    },
    props: {
        data: {
            type: Array,
            default: function () {
                return []
            },
        },
        business: {
            type: String,
        },
    },
    methods: {
        initChart() {
            let businessConfig = this.businessConfigs[this.business] || {}
            let config = Object.assign({}, businessConfig, this.config)
            return renderPie(this.data, config)
        },
    },
}
</script>

<style scoped></style>
