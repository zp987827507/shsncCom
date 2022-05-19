<!-- @format -->

<!--圆柱图-->
<template>
    <div ref="chart"></div>
</template>

<script>
import { renderCylinderBar } from '../../../packages/src/util/nomalChart'
import mixin from '../../../packages/src/util/mixin'
export default {
    name: 'ZCylinderBar',
    mixins: [mixin],
    methods: {
        initChart() {
            return renderCylinderBar(this.data, this.config)
        },
    },
}
</script>

<style scoped></style>
