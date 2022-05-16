<template>
    <!-- home页面 -->
    <div class="home">
        <z-bar
            style="width: 500px;height: 400px;"
            :option="option"
            :config="{
              unit:'ml',
              showLabel:true
            }"
            :data="{
                xAxis: ['1月', '2月', '3月', '4月', '5月', '9月'],
                series: [
                    {
                        name: '2018年',
                        type: 'line',
                        yAxisIndex:1,
                        data: [22, 33, 28, 36, 28, 35]
                    },
                    {
                        name: '2019年',
                        type: 'bar',
                        yAxisIndex:0,
                        data: [28, 36, 28, 35, 22, 33]
                    }
                ]
            }"
        ></z-bar>

        <z-line
            style="width: 600px;height: 400px;"
            :data="lineData"
            :config="{
                markLine: [{ name: '目标值', value: 30, color: 'red' }],
                showLabel:true,
                color:['#aaa','#afa'],
                showFillArea:true
            }"
        ></z-line>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            option: {
                xAxis: {
                    axisLabel: {
                        color: 'red',
                        fontSize: 20,
                    },
                },
                yAxis: [
                    {
                        type: 'value',
                        name: '水量',
                    },
                    {
                        type: 'value',
                        name: '年龄',
                    },
                ],
                tooltip: {},
            },
            lineData: {
                xAxis: ['1月', '2月', '3月', '4月', '5月', '6月'],
                series: [
                    {
                        name: '2018年',
                        data: [22, 33, 28, 36, 28, 35],
                    },
                    {
                        name: '2019年',
                        data: [28, 36, 28, 35, 22, 33],
                    },
                ],
            },
        }
    },
    created() {
        this.$zChart.setChartConfig({
            FONT_COLOR: '#faf',
            BORDER_COLOR: '#afa',
            FONT_S: 18,
            SHOW_TOOLBOX: true,
        })
    },
}
</script>
