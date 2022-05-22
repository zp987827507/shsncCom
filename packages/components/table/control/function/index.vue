<template>
    <div v-html="config.callback && config.callback(data)"></div>
</template>

<script>
    export default {
        name: 'ComFuction',
        props: {
            data: {
                type: Object,
                default: () => ({}),
            },
            config: {
                type: Object,
                default: () => ({}),
            },
        },
        data() {
            return {}
        },
    }
</script>

<style lang="scss" scoped></style>
