<!-- @format -->

<template>
    <div ref="chart"></div>
</template>

<script>
import { renderLine } from '../../../packages/src/util/nomalChart'
import mixin from '../../../packages/src/util/mixin'
export default {
    name: 'ZLine',
    mixins: [mixin],
    data() {
        return {
            businessConfigs: {},
        }
    },
    props: {
        business: {
            type: String,
        },
    },
    methods: {
        initChart() {
            let businessConfig = this.businessConfigs[this.business] || {}
            let config = Object.assign({}, businessConfig, this.config)
            return renderLine(this.data, config)
        },
    },
}
</script>

<style scoped></style>
