<template>
    <div class="about">
        <el-button type="primary" @click="commit()">提交</el-button>
        <!-- :check-list.sync="check_list"获取复选框选择得数据 -->
        <z-table :column="column" checkbox :check-list.sync="check_list" :data="tableData">
            <!-- v-slot:operation="slotData" 指定插槽和获取插槽传入得数据 -->
            <template v-slot:operation="slotData">
                <!-- 获取slot传入得数据 -->
                <el-button type="primary" @click="edit(slotData.data)">编辑</el-button>
                <el-button>删除</el-button>
            </template>
        </z-table>
    </div>
</template>

<script>
    export default {
        name: 'about',
        methods: {
            edit(row) {
                //获取编辑数据
                console.log(row)
            },
            commit() {
                console.log(this.check_list, '复选框选择得数据')
            },
        },
        watch: {
            check_list: {
                handler(value) {
                    console.log(value, '-')
                },
            },
        },
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
                        label: '名称',
                        prop: 'name',
                        width: 100,
                        sort: true,
                    },
                    {
                        type: 'switch',
                        label: '地址',
                        prop: 'address',
                    },
                    {
                        label: '性别',
                        prop: 'sex',
                    },
                    {
                        type: 'slot',
                        prop: 'operation',
                        slot_name: 'operation',
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
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄',
                    },
                ],
            }
        },
    }
</script>
