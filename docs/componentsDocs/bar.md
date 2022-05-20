# 柱状图

### 示例

#### 公共代码片段

```html
<script>
    export default {
        data() {
            return {
                data: {
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
                data2: {
                    xAxis: ['1月', '2月', '3月', '4月', '5月', '6月'],
                    series: [
                        {
                            name: '2018年',
                            type: 'line',
                            data: [22, 33, 28, 36, 28, 35],
                        },
                        {
                            name: '2019年',
                            type: 'bar',
                            data: [28, 36, 28, 35, 22, 33],
                        },
                    ],
                },
                option: {
                    xAxis: {
                        axisLabel: {
                            color: '#666',
                            fontSize: 13,
                        },
                    },
                    yAxis: {},
                    tooltip: {},
                },
                config: {
                    unit: 'mg/L',
                    showLabel: true,
                    legentConfig: 'right',
                },
            }
        },
    }
</script>
```

##### 1.基本

```html
<z-bar style="width: 500px;height: 400px;" :data="data"></z-bar>
```

<bar-md style="width: 500px;height: 400px;" :data="data"></bar-md>

##### 2.显示数值和单位

```html
<z-bar style="width: 500px;height: 400px;" :data="data" :config="config"></z-bar>
```

<bar-md style="width: 500px;height: 400px;" :data="data" :config="config"></bar-md>

##### 3.线柱混合

```html
<z-bar style="width: 500px;height: 400px;" :data="data2"></z-bar>
```

<bar-md style="width: 500px;height: 400px;" :data="data2"></bar-md>

<script>
    export default {
        data() {
            return {
                data: {
                    xAxis: ['1月', '2月', '3月', '4月', '5月', '6月'],
                    series: [
                        {
                            name: '2018年',
                            type: 'bar',
                            data: [22, 33, 28, 36, 28, 35],
                        },
                        {
                            name: '2019年',
                            type: 'bar',
                            data: [28, 36, 28, 35, 22, 33],
                        },
                    ],
                },
                data2: {
                    xAxis: ['1月', '2月', '3月', '4月', '5月', '6月'],
                    series: [
                        {
                            name: '2018年',
                            type: 'line',
                            data: [22, 33, 28, 36, 28, 35],
                        },
                        {
                            name: '2019年',
                            type: 'bar',
                            data: [28, 36, 28, 35, 22, 33],
                        },
                    ],
                },
                option: {
                    xAxis: {
                        axisLabel: {
                            color: '#666',
                            fontSize: 13,
                        },
                    },
                    yAxis: {},
                    tooltip: {},
                },
                config: {
                    unit: 'mg/L',
                    showLabel: true,
                    legentConfig: 'right',
                },
            }
        },
    }
</script>

### data 数据

`
| 数据项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data.xAxis | x 轴类目数据 | array | 必须 |
| data.series | 系列数据 | array | 必须 |
| data.series[i].name | 系列名称 | string | 必须 |
| data.series[i].type | 系列类型 | string | 设置为'line'时指定对应数据按折线展示 可选 |
| data.series[i].data | 系列中的数据内容数组 | array | 必须 |

### config 配置项

`
| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| color | 颜色 | array，string | 默认使用常规配色， 指定颜色如["#f00", "#00f"]|
| showLabel | 是否显示数值文字 | boolean | 默认为 false |
| unit | y 轴数值单位 | string | 默认不显示 |
| legentConfig | legend 图例显示位置 | string | 默认 top 值有 'top','bottom','right' |
