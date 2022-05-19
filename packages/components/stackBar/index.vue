<template>
    <div ref="chart"></div>
</template>

<script>
import { renderStackBar } from '../../src/util/nomalChart'
import mixin from '../../src/util/mixin'
export default {
    name: 'ZStackBar',
    mixins: [mixin],
    methods: {
        initChart() {
            return renderStackBar(this.data, this.config)
        },
    },
}
</script>

<style scoped></style>