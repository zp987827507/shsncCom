# Table

### 公共代码

### 示例

<br/>
<table-md :column="column" checkbox :check-list.sync="check_list" :data="tableData">
        <!-- v-slot:operation="slotData" 指定插槽和获取插槽传入得数据 -->
        <template v-slot:operation="slotData">
            <!-- 获取slot传入得数据 -->
            <el-button size="mini" type="primary" @click="edit(slotData.data)">编辑</el-button>
            <el-button size="mini">删除</el-button>
        </template>
    </table-md>
<br/>

<script>
    export default {
        data() {
            return {
                column: [
                    {
                        type: 'function',
                        label: 'URL地址',
                        prop: 'url',
                        width: 200,
                        callback: (row) => {
                            //在callback里面自定义格式
                            //如果type是function  则返回每一行得数据
                            //console.log(row)
                            return `<a href="http://www.baidu.com">${row.name}</a>`
                        },
                    },
                    {
                        label: '日期',
                        prop: 'date',
                        width: 200,
                        sort: true, //是否排序
                    },
                    {
                        type: 'slot',
                        prop: 'operation',
                        slot_name: 'operation',
                        width:150,
                        label: '操作',
                    },
                ],
                check_list: [], //复选框勾选得数据
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sex: '男',
                    },
                    {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄',
                    },
                    {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄',
                    },
                ],
            }
        },
    }
</script>

### 代码

```html
<z-table />
```

### Attributes

| 参数  | 说明     | 类型   | 是否必要 | 默认值 |
| ----- | -------- | ------ | -------- | ------ |
| width | 表格宽度 | Number | false    | true   |
