<template>
    <div>{{ data[config.prop] }}</div>
</template>

<script>
    export default {
        name: 'ComText',
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
    }
</script>

<style lang="scss" scoped></style>
