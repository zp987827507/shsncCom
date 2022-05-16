# 事件

支持以下常用事件：

    'click', 'dblclick', 'mouseover', 'mouseout', 'mousemove', 'mousedown', 'mouseup'

> 备注： 事件参数参考[echarts 文档](https://echarts.apache.org/zh/index.html)

#### 示例

<bar-md style="width: 500px;height: 400px;":data="data" @click="handleClick"></bar-md>

<script>
    export default {
        data () {
            return {
                data: {
                    xAxis: ['5月', '6月', '7月', '8月', '9月', '10月'],
                    series: [
                        {
                            name: '2022年',
                            type: 'bar',
                            data: [22, 33, 28, 36, 28, 35]
                        },
                    ],
                }
            }
        },
        methods:{
            handleClick (params){
                alert(`名称${params.name}值${params.value}`)
            }
        }
    }
</script>

```html
<z-bar style="width: 500px;height: 400px;" :data="data" @click="handleClick"></z-bar>
<script>
    export default {
        data() {
            return {
                data: {
                    xAxis: ['5月', '6月', '7月', '8月', '9月', '10月'],
                    series: [
                        {
                            name: '2022年',
                            type: 'bar',
                            data: [22, 33, 28, 36, 28, 35],
                        },
                    ],
                },
            }
        },
        methods: {
            handleClick(params) {
                alert(`名称${params.name}值${params.value}`)
            },
        },
    }
</script>
```
