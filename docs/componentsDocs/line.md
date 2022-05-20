# 折线图

### 示例

#### 公用代码片段

```html
<script>
    export default {
        data() {
            return {
                lineData: {
                    xAxis: ['1月', '2月', '3月', '4月', '5月', '6月'],
                    series: [
                        {
                            name: '2021',
                            data: [22, 33, 28, 36, 28, 35],
                        },
                        {
                            name: '2022',
                            data: [28, 36, 28, 35, 22, 33],
                        },
                    ],
                },
                lineData1: {
                    xAxis: ['1月', '2月', '3月', '4月', '5月', '6月'],
                    series: [
                        {
                            name: '2019',
                            type: 'bar',
                            data: [22, 33, 28, 36, 28, 35],
                        },
                        {
                            name: '2021',
                            type: 'line',
                            data: [28, 36, 28, 35, 22, 33],
                        },
                        {
                            name: '2022',
                            type: 'line',
                            data: [32, 39, 28, 50, 10, 30],
                        },
                    ],
                },
                config1: {
                    showLabel: true,
                    color: ['#aaa', '#afa'],
                    showFillArea: true,
                },
                config2: {
                    markLine: [{ name: '目标值', value: 30, color: 'red' }],
                },
            }
        },
    }
</script>
```

##### 1.基本

```html
<z-line :data="lineData" style="width: 600px; height: 400px;"></z-line>
```

<line-md :data="lineData" style="width: 600px; height: 400px;"></line-md>

##### 2.设置颜色、显示填充色、显示数值

```html
<z-line style="width: 600px;height: 400px;" :data="lineData" :config="config1"> </z-line>
```

<line-md
    style="width: 600px;height: 400px;"
    :data="lineData"
    :config="config1">
</line-md>

##### 3.线柱混合

```html
<z-line style="width: 600px;height: 400px;" :data="lineData1"> </z-line>
```

<line-md style="width: 600px;height: 400px;" :data="lineData1"> </line-md>

##### 4.标准线

```html
<z-line style="width: 600px;height: 400px;" :data="lineData1" :config="config2"> </z-line>
```

<line-md style="width: 600px;height: 400px;" :data="lineData" :config="config2"> </line-md>

<script>
export default {
    data() {
        return {
            lineData: {
                xAxis: ['1月', '2月', '3月', '4月', '5月', '6月'],
                series: [
                    {
                        name: '2021',
                        data: [22, 33, 28, 36, 28, 35],
                    },
                    {
                        name: '2022',
                        data: [28, 36, 28, 35, 22, 33],
                    },
                ],
            },
            lineData1: {
                xAxis: ['1月', '2月', '3月', '4月', '5月', '6月'],
                series: [
                    {
                        name: '2019',
                        type: 'bar',
                        data: [22, 33, 28, 36, 28, 35],
                    },
                    {
                        name: '2021',
                        type: 'line',
                        data: [28, 36, 28, 35, 22, 33],
                    },
                    {
                        name: '2022',
                        type: 'line',
                        data: [32, 39, 28, 50, 10, 30],
                    },
                ],
            },
            config1:{
                showLabel:true,
                color:['#aaa','#afa'],
                showFillArea:true,
                legentConfig:'right'
            },
            config2:{
                markLine: [{ name: '目标值', value: 30, color: 'red' }],
            }
        }
    },
}
</script>

### data 数据

.
| 数据项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data.xAxis | x 轴类目数据 | array | 必须 |
| data.series | 系列数据 | array | 必须 |
| data.series[i].name | 系列名称 | string | 必须 |
| data.series[i].type | 系列类型 | string | 设置为'bar'时指定对应数据按柱形展示 可选 |
| data.series[i].data | 系列中的数据内容数组 | array | 必须 |

### config 配置项

.
| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| color | 颜色 | array，string | 默认使用常规配色， 指定颜色如["#f00", "#00f"] |
| showFillArea | 是否显示填充颜色 | boolean | 默认为 false |
| showLabel | 是否显示数值文字 | boolean | 默认为 false |
| unit | y 轴数值单位 | string | 默认不显示 |
| markLine | 标准线数据 | array | 默认不显示标准线 可选 |
| markLine[i].name | 标准线名称 | string | |
| markLine[i].value | 标准线数值 | number | |
| markLine[i].color | 标准线颜色 | 默认红色 | |
| legentConfig | legend 图例显示位置 | string | 默认 top 值有 'top','bottom','right' |
