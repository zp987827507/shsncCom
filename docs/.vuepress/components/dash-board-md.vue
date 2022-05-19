<!-- @format -->

<template>
    <div ref="chart"></div>
</template>

<script>
import { dashboardchart } from '../../../packages/src/util/nomalChart'
import mixin from '../../../packages/src/util/mixin'
export default {
    name: 'ZDashBoard',
    mixins: [mixin],
    props: {
        data: {
            // type: Array,
            default: function () {
                return {}
            },
        },
    },
    methods: {
        initChart() {
            let obj = {
                data: this.data,
            }
            Object.assign(obj, this.config)
            return dashboardchart(obj)
        },
    },
}
</script>

<style scoped></style>
