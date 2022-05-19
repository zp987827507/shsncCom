# 堆叠图

### 示例

##### 1.基本

```html
<z-stack-bar :data="stackData" style="width: 500px; height: 300px;"></z-stack-bar>
<script>
    export default {
        data() {
            return {
                data: {
                    xAxis: ['2019年', '2020年', '2021年'],
                    series: [
                        { name: '剩余', data: [20, 25, 30] },
                        { name: '数据库', data: [20, 25, 30] },
                        { name: '其他', data: [60, 50, 40] },
                    ],
                },
            }
        },
    }
</script>
```

<stack-bar-md :data="data" style="width: 600px; height: 300px;"></stack-bar-md>

##### 2.横向展示

```html
<z-stack-bar :data="dataTwo" style="width: 600px; height: 300px;"></z-stack-bar>
<script>
    export default {
        data() {
            return {
                dataTwo: {
                    yAxis: ['2019年', '2020年', '2021年'],
                    series: [
                        { name: '剩余', data: [20, 25, 30] },
                        { name: '数据库', data: [20, 25, 30] },
                        { name: '其他', data: [60, 50, 40] },
                    ],
                },
            }
        },
    }
</script>
```

<stack-bar-md :data="dataTwo" style="width: 600px; height: 300px;"></stack-bar-md>

##### 3.指定颜色

```html
<z-stack-bar
    :data="data"
    style="width: 600px; height: 300px;"
    :config="{
        color: 'alarmColor'
    }"
></z-stack-bar>
<script>
    export default {
        data() {
            return {
                data: {
                    xAxis: ['2019年', '2020年', '2021年'],
                    series: [
                        { name: '剩余', data: [20, 25, 30] },
                        { name: '数据库', data: [20, 25, 30] },
                        { name: '其他', data: [60, 50, 40] },
                    ],
                },
            }
        },
    }
</script>
```

<stack-bar-md 
    :data="data" 
    style="width: 600px; height: 300px;"
    :config="{
        color: 'alarmColor'
    }"
    ></stack-bar-md>

<script>
  export default {
    data () {
      return {
        data: {
            xAxis: ['2019年', '2020年', '2021年'],
            series: [
                { name: '剩余', data: [20, 25, 30] },
                { name: '数据库', data: [20, 25, 30] },
                { name: '其他', data: [60, 50, 40] },
            ],
        },
        dataTwo:{
            yAxis: ['2019年', '2020年', '2021年'],
            series: [
                { name: '剩余', data: [20, 25, 30] },
                { name: '数据库', data: [20, 25, 30] },
                { name: '其他', data: [60, 50, 40] },
            ],
        }
      }
    }
  }
</script>

#### data 数据

.
| 数据项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| data.xAxis | x 轴类目数据 | array | data.xAxis 与 data.yAxis 二选一 |
| data.yAxis | y 轴类目数据 | array | data.xAxis 与 data.yAxis 二选一 |
| data.series | 系列数据 | array | 必须 |
| data.series[i].name | 系列名称 | string | 必须 |
| data.series[i].data | 系列中的数据内容数组 | array | 必须 |

#### config 配置项

.
| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| color &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 颜色 | array，string | 默认使用常规配色， 指定颜色如["#f00", "#00f"]， 或如"alarmColor"指定使用告警等级颜色 |
| unit | 数值轴单位 | string | 默认为 "%" 图表为纵向时显示在 y 轴末端，横向时显示在 x 轴末端, 不需要时设置为""。|
