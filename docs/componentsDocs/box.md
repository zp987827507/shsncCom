# 边框

### 示例

##### 1.基本用法

```html
<z-box title="饼图" showBtn @checkDetail="checkDetail">
    <div slot="header" class="search-rule">
        <el-input v-model="name" placeholder="请输入"></el-input>
    </div>
    <z-pie
        slot="content"
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
</z-box>
```

```html
<script>
    export default {
        data() {
            return {
                name: '',
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
        <div slot="header" class="search-rule">
            <el-input v-model="name" placeholder="请输入"></el-input>
        </div>
        <pie-md
             slot="content"
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
                name:'',
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
<style lang="scss" scoped>
.search-rule {
    width: 100%;
    text-align: right;
    padding-right: 10px;
    .el-input {
        width: 200px;
    }
    ::v-deep .el-input__inner {
        height: 30px;
        line-height: 30px;
    }
}
</style>

#### 参数配置项

| 配置项  | 简介             | 类型          | 备注                                                                                   |
| ------- | ---------------- | ------------- | -------------------------------------------------------------------------------------- |
| title   | 标题             | string        | 默认标题                                                                               |
| showBtn | 是否显示右侧按钮 | Boolean       | 默认不显示                                                                             |
| btnText | 按钮文字         | string        | 默认‘查看明细’                                                                         |
| height  | 内容的高度       | string/number | 默认为'',可以传以 px 为单位的字符串或数字，例如：400px ,一般不建议传值，由内容撑开高度 |
| slot    | 插槽             | string        | 传值支持 header/content,header 为标题栏插槽，content 为内容插槽                        |

#### 事件

| 事件名      | 说明                           | 参数 |
| ----------- | ------------------------------ | ---- |
| checkDetail | 当用户点击右侧按钮时触发的事件 | 无   |
