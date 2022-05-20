<template>
    <div>
        <elem-table :data="tableData" style="width: 100%">
            <elem-table-column prop="date" label="日期2" width="180"></elem-table-column>
            <elem-table-column prop="name" label="姓名2" width="180"></elem-table-column>
            <elem-table-column prop="address" label="地址2"></elem-table-column>
        </elem-table>
    </div>
</template>

<script>
let elem = require('element-ui')
console.log(elem, '==22222=')
export default {
    name: 'zTable',
    components: {
        ElemTable: elem.Table,
        ElemTableColumn: elem.TableColumn,
    },
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
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

<style lang="scss" scoped>
.zTable {
    tr {
        td {
            color: #afa;
        }
    }
}
</style>

