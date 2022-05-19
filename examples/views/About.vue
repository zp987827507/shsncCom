<template>
    <div class="about">
        <z-dash-board style="width: 150px;height: 150px;" :data="{ value: 70 }" :config="{
              color: '#afa',
          }"></z-dash-board>

        <z-cylinder-bar
            :data="data"
            :config="{
            color: 'normalColor',
            barWidth: 30,
            unit: '%'
        }"
            style="width: 600px; height: 400px;"
        ></z-cylinder-bar>
    </div>
</template>

<script>
export default {
    name: 'about',
    data() {
        return {
            data: {
                xAxis: ['system io', 'user io', 'cluster', 'commit', 'cpu'],
                data: [26, 22, 15, 8, 5],
            },
        }
    },
}
</script>