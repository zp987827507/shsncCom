# 通用组件

### 示例

#### 公用代码片段

```html
<script>
    export default {
        data() {
            return {
                option: {
                    xAxis: {
                        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'],
                    },
                    yAxis: {},
                    series: [
                        {
                            type: 'candlestick',
                            data: [
                                [20, 34, 10, 38],
                                [40, 35, 30, 50],
                                [31, 38, 33, 44],
                                [38, 15, 5, 42],
                            ],
                        },
                    ],
                },
                dashOption: {
                    tooltip: {
                        formatter: '{a} <br/>{b} : {c}%',
                    },
                    series: [
                        {
                            name: 'Pressure',
                            type: 'gauge',
                            detail: {
                                formatter: '{value}',
                            },
                            data: [
                                {
                                    value: 50,
                                    name: 'SCORE',
                                },
                            ],
                        },
                    ],
                },
            }
        },
        methods: {
            handleClick() {
                alert('点击事件')
            },
        },
    }
</script>
```

##### K 线图

```html
<z-chart style="width: 600px;height: 400px;" :option="option" show-option></z-chart>
```

<chart-md style="width: 600px;height: 400px;" :option="option" show-option @click="handleClick"></chart-md>

##### 仪表盘

```html
<z-chart style="width: 600px;height: 400px;" :option="dashOption" show-option></z-chart>
```

<chart-md style="width: 600px;height: 400px;" :option="dashOption" @click="handleClick"></chart-md>

<script>
    export default {
        data() {
            return {
                option: {
                    xAxis: {
                        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
                    },
                    yAxis: {},
                    series: [
                        {
                        type: 'candlestick',
                        data: [
                            [20, 34, 10, 38],
                            [40, 35, 30, 50],
                            [31, 38, 33, 44],
                            [38, 15, 5, 42]
                        ]
                        }
                    ]
                },
                dashOption:{
                    tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                        name: 'Pressure',
                        type: 'gauge',
                        detail: {
                            formatter: '{value}'
                        },
                        data: [
                            {
                            value: 50,
                            name: 'SCORE'
                            }
                        ]
                        }
                    ]
                }

            }
        },
        methods:{
            handleClick (){
                alert("点击事件")
            }
        }
    }
</script>

### 配置

·
| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| option | 替换 echarts 默认配置 | object | -
| show-option | 是否打印 echarts 的配置项(控制台可以查看) | boolean | false

> 备注： <br/>
> 全局配置及统一样式对通用图表组件的影响说明如下：<br/>
> 通用图表自动获取全局配置中的文字样式， 但由于 echarts 中全局字体样式无法作用在所有字体中， 因此部分自定义配置项中的字体样式需要手动调整。<br/>
> 通用图表的坐标轴受坐标轴的统一样式影响， 统一样式优先级低于自定义样式<br/>
> 通用图表的图例样式受图例统一样式影响， 统一样式优先级低于自定义样式<br/>
> 通用图表的自定义配置项中没有配色时， 取统一配色

### 事件

支持以下常用事件：

    'click', 'dblclick', 'mouseover', 'mouseout', 'mousemove', 'mousedown', 'mouseup'

> 备注： 事件参数参考[echarts 文档](https://echarts.apache.org/zh/api.html#events)
