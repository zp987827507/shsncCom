<template>
    <!-- home页面 -->
    <div class="home">
        <z-pie
            :data="pieData"
            style="width: 400px;height: 400px;"
            :config="{
            color: 'pieColor',
            type: 'rose',
            title: '总个数\n300',
            showLabel:false,
            showLegend: true,
            showNullLabel:true
        }"
        ></z-pie>
        <z-stack-bar :data="stackData" style="width: 600px; height: 400px;"></z-stack-bar>
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

        <!-- <z-line
            style="width: 600px;height: 400px;"
            :data="lineData"
            :config="{
                markLine: [{ name: '目标值', value: 30, color: 'red' }],
                showLabel:true,
                color:['#aaa','#afa'],
                showFillArea:true
            }"
        ></z-line>

        <z-chart style="width: 600px;height: 400px;" :option="option2"></z-chart>-->
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            pieData: [
                { name: 'Ⅰ类', value: 5 },
                { name: 'Ⅱ类', value: 5 },
                { name: 'Ⅲ类', value: 30 },
                { name: 'Ⅳ类', value: 20 },
                { name: 'Ⅴ类', value: 10 },
                { name: '劣Ⅴ类', value: 2 },
            ],
            option: {
                xAxis: {
                    axisLabel: {
                        color: 'red',
                        fontSize: 20,
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            type: 'dashed',
                        },
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
            option2: {
                title: {
                    text: 'Basic Graph',
                },
                tooltip: {},
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series: [
                    {
                        type: 'graph',
                        layout: 'none',
                        symbolSize: 50,
                        roam: true,
                        label: {
                            show: true,
                        },
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [4, 10],
                        edgeLabel: {
                            fontSize: 20,
                        },
                        data: [
                            {
                                name: 'Node 1',
                                x: 300,
                                y: 300,
                            },
                            {
                                name: 'Node 2',
                                x: 800,
                                y: 300,
                            },
                            {
                                name: 'Node 3',
                                x: 550,
                                y: 100,
                            },
                            {
                                name: 'Node 4',
                                x: 550,
                                y: 500,
                            },
                        ],
                        // links: [],
                        links: [
                            {
                                source: 0,
                                target: 1,
                                symbolSize: [5, 20],
                                label: {
                                    show: true,
                                },
                                lineStyle: {
                                    width: 5,
                                    curveness: 0.2,
                                },
                            },
                            {
                                source: 'Node 2',
                                target: 'Node 1',
                                label: {
                                    show: true,
                                },
                                lineStyle: {
                                    curveness: 0.2,
                                },
                            },
                            {
                                source: 'Node 1',
                                target: 'Node 3',
                            },
                            {
                                source: 'Node 2',
                                target: 'Node 3',
                            },
                            {
                                source: 'Node 2',
                                target: 'Node 4',
                            },
                            {
                                source: 'Node 1',
                                target: 'Node 4',
                            },
                        ],
                        lineStyle: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0,
                        },
                    },
                ],
            },
            stackData: {
                xAxis: ['2019年', '2020年', '2021年'],
                series: [
                    { name: '剩余', data: [20, 25, 30] },
                    { name: '数据库', data: [20, 25, 30] },
                    { name: '其他', data: [60, 50, 40] },
                ],
            },
        }
    },
    created() {
        //全局配置
        // this.$zChart.setChartConfig({
        //     FONT_COLOR: '#faf',
        //     //BORDER_COLOR: '#afa',
        //     FONT_S: 18,
        //     SHOW_TOOLBOX: true,
        // })
    },
}
</script>
