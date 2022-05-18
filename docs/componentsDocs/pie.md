# 饼图

### 示例

公用代码片段

```html
<script>
    export default {
        data() {
            return {
                pieData: [
                    { name: 'cluster', value: 5 },
                    { name: 'User IO', value: 5 },
                    { name: 'Commit', value: 30 },
                    { name: 'Network', value: 20 },
                    { name: 'CPU', value: 10 },
                    { name: 'Other', value: 2 },
                ],
            }
        },
    }
</script>
```

##### 1.饼图

```html
<z-pie :data="pieData" style="width: 400px; height: 300px;"></z-pie>
```

<pie-md :data="pieData" style="width: 400px; height: 300px;"></pie-md>

<script>
  export default {
    data () {
      return {
        pieData: [
            { name: 'cluster', value: 5 },
            { name: 'User IO', value: 5 },
            { name: 'Commit', value: 30 },
            { name: 'Network', value: 20 },
            { name: 'CPU', value: 10 },
            { name: 'Other', value: 2 },
        ]
      }
    }
  }
</script>

##### 2.圆环图(指定配色 pieColor)

```html
<z-pie
    :data="pieData"
    :config="{
            color: 'pieColor',
            title: '总个数\n300',
            type: 'ring'
        }"
    style="width: 400px;height: 500px;"
></z-pie>
```

<pie-md :data="pieData" :config="{color: 'pieColor',title: '总个数\n300',type: 'ring'}"
style="width: 400px;height: 300px;"></pie-md>

##### 3.玫瑰图

```html
<z-pie
    :data="pieData"
    :config="{
        type: 'rose',
        showLegend: true
    }"
    style="width: 50px;height: 300px;"
></z-pie>
```

<pie-md
        :data="pieData"
        :config="{
            type: 'rose',
            showLegend: true
        }"
        style="width: 500px;height: 300px;"
    ></pie-md>

当空间不足饼图文字线条展示不全时， 请参考 echarts 文档进行手动调整
<br/>如下方法可以尝试：

-   直接修改图表宽高使空间变大 （通过 style 修改）
-   修改图表半径 使饼图变小 （通过 option 配置修改）

##### 1.圆环半径修改

```html
<z-pie
    :data="pieData"
    :config="{
        type: 'ring',
        showLegend: false,
        showLabel:false
    }"
    :option="{
        series: [{
            radius: ['50%', '70%']
        }]
    }"
    style="width: 300; height: 200px;"
></z-pie>
```

<pie-md
            :data="pieData"
            :config="{
                type: 'ring',
                showLegend: false,
                showLabel:false
            }"
            :option="{
                series: [{
                    radius: ['50%', '70%']
                }]
            }"
            style="width: 300; height: 200px;"
        ></pie-md>

##### 2.饼图半径修改

```html
<z-pie
    :data="pieData"
    :option="{
                series: [{
                    radius: '60%'
                }]
            }"
    style="width: 300; height: 200px;"
></z-pie>
```

<pie-md
            :data="pieData"
            :option="{
                series: [{
                    radius: '60%'
                }]
            }"
            style="width: 300; height: 200px;"
        ></pie-md>

##### 3.改变线条长度和文字换行

```html
<z-pie
    :data="pieData"
    :option="{
        series: [{
            label: {
                formatter: '{b}\n{c}%'
            },
            labelLine: {
                length: 20,
                length2: 50
            }
        }]
    }"
    style="width: 400; height: 300px;"
></z-pie>
```

<pie-md
            :data="pieData"
            :option="{
                series: [{
                    label: {
                        formatter: '{b}\n{c}%'
                    },
                    labelLine: {
                        length: 20,
                        length2: 60
                    }
                }]
            }"
            style="width: 400; height: 300px;"
        ></pie-md>

#### data 数据

.
| 数据项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data[i].name | 数据项名称 | string | 用于 tooltip 的显示，legend 的图例筛选，必须 |
| data[i].value | 数据值 | number | 必须 |

#### config 配置项

.
| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| color | 颜色 | array，string | 默认使用常规配色， 指定颜色如["#f00", "#00f"]， 或如"pieColor"指定配色 |
| showLegend | 是否显示图例 | boolean | 默认为 false 不显示 |
| showLabel | 是否显示线条文字 | boolean | 默认为 true |
| showNullLabel | showLabel 为 true 时，是否显示无数据项的线条文字| boolean | 默认为 false |
| title | 中间的文字 | string | 默认不显示 |
| type | 形态类型 | string | 实心圆 circle， 圆环 ring， 玫瑰图 rose， 默认为实心圆 |
