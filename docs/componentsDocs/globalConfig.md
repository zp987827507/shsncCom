# 全局配置

### 示例

<bar-md style="width: 500px;height: 400px;":data="data"></bar-md>

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
        created (){
            console.log(this.$zChart,"------")
            // this.$zChart.setChartConfig({
            //     FONT_COLOR: '#faf',
            //     BORDER_COLOR: '#afa',
            //     FONT_S: 18,
            //     SHOW_TOOLBOX: true,
            // })
        }
    }
</script>

```html
<z-bar style="width: 500px;height: 400px;" :data="data"></z-bar>

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
        created() {
            this.$zChart.setChartConfig({
                FONT_COLOR: '#666',
                BORDER_COLOR: '#D8D8D8',
                FONT_S: 13,
                SHOW_TOOLBOX: true,
            })
        },
    }
</script>
```

#### setChartConfig() 配置项

`
| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| FONT_S | 常规字体大小 | number | 默认值 13
| FONT_COLOR | 常规字体颜色 | string | 默认值 "#666"
| BORDER_COLOR | 轴线颜色 | string | 默认值 "#D8D8D8"
| COLOR | 图表配色 | array |
| SHOW_TOOLBOX | 是否显示工具栏 | boolean | 默认值 true
| BG_COLOR | 保存为图片时的填充背景色 | string | 默认值 "rgba(0,0,0,0)"
| IMG_NONE | 无数据时的替代图片 | string |
| IMG_NONE_W | 无数据图片的宽度 | Number | 默认值 150
| IMG_NONE_H | 无数据图片的高度 | Number | 默认值 150

> 备注： <br/>setChartConfig 仅支持全局配置， 设置后即公用。 <br/> 因为 echarts 全局字体样式本身无法覆盖所有字体， 因此添加自定义配置时存在字体样式不一致的情况， 需要手动调整。
