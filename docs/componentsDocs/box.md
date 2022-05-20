# 边框

### 示例

##### 1.基本用法

```html
<box-md title="饼图" showBtn @checkDetail="checkDetail">
    <z-pie
        :data="pieData"
        style="width: 400px; height: 400px"
        :config="{
            color: 'pieColor',
            type: 'rose',
            title: '总个数\n300',
            showLabel: false,
            showLegend: true,
            showNullLabel: true,
        }"
    ></z-pie>
</box-md>
```

```html
<script>
    export default {
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
            }
        },
        methods: {
            checkDetail() {
                alert('查看明细')
            },
        },
    }
</script>
```

<div style="padding:20px;background-color:#ddd">
    <box-md title="饼图" showBtn @checkDetail="checkDetail">
        <pie-md
            :data="pieData"
            style="width: 400px; height: 400px"
            :config="{
                color: 'pieColor',
                type: 'rose',
                title: '总个数\n300',
                showLabel: false,
                showLegend: true,
                showNullLabel: true,
            }"
        ></pie-md>
    </box-md>
</div>

<script>
    export default {
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
            }
        },
        methods: {
            checkDetail() {
                alert('查看明细')
            },
        },
    }
</script>

#### 参数配置项

| 配置项  | 简介             | 类型          | 备注                                                                                   |
| ------- | ---------------- | ------------- | -------------------------------------------------------------------------------------- |
| title   | 标题             | string        | 默认标题                                                                               |
| showBtn | 是否显示右侧按钮 | Boolean       | 默认不显示                                                                             |
| btnText | 按钮文字         | string        | 默认‘查看明细’                                                                         |
| height  | 内容的高度       | string/number | 默认为'',可以传以 px 为单位的字符串或数字，例如：400px ,一般不建议传值，由内容撑开高度 |

#### 事件

| 事件名      | 说明                           | 参数 |
| ----------- | ------------------------------ | ---- |
| checkDetail | 当用户点击右侧按钮时触发的事件 | 无   |
