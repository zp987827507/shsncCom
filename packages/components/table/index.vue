<template>
    <div class="zTableCom">
        <el-table
            :data="data"
            :max-height="maxHeight"
            :border="isShowborder"
            @selection-change="handleSelectionChange"
            style="width: 100%"
        >
            <el-table-column v-if="checkbox" type="selection" width="50"></el-table-column>
            <el-table-column v-if="index" type="index" width="50"> </el-table-column>
            <el-table-column
                v-for="item in column"
                :key="item.prop"
                :prop="item.prop"
                :label="item.label"
                :width="item.width"
                :sortable="item.sort"
            >
                <template slot-scope="scope">
                    <slot v-if="item.type === 'slot'" :name="item.slot_name" :data="scope.row"></slot>
                    <component
                        v-else
                        :data="scope.row"
                        :config="item"
                        :is="!item.type ? 'com-text' : `com-${item.type}`"
                    ></component>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    //自动化规则，通过type属性自动获取目录组件
    //true会去读取子目录下得文件  false不会读取
    //第3个参数  /index.vue$/ 表示指定读取index.vue得文件
    let modules = {} //引入得组件
    const files = require.context('./control', true, /index.vue$/)
    files.keys().forEach((item) => {
        const key = item.split('/')
        const name = key[1]
        const component = files(item).default
        modules[`com-${name}`] = component
    })
    //let elem = require('element-ui')
    export default {
        name: 'zTable',
        // components: {
        //     ElemTable: elem.Table,
        //     ElemTableColumn: elem.TableColumn,
        // },
        props: {
            checkList: {
                type: Array,
                default: () => [],
            },
            column: {
                //显示每一列得字段属性
                type: Array,
                default: () => [],
            },
            data: {
                //table数据
                type: Array,
                default: () => [],
            },
            checkbox: Boolean, //是否显示复选框
            index: Boolean, //是否显示排序
            isShowborder: Boolean, //是否显示边框
            maxHeight: {
                //表格最大高度  number类型
                type: Number,
                //default: () => 200,
            },
        },
        components: {
            //'com-function': () => import('./control/function/index.vue'),
            ...modules,
        },
        mounted() {},
        data() {
            return {}
        },
        methods: {
            handleSelectionChange(row) {
                this.$emit('update:checkList', row)
            },
        },
    }
</script>

<style lang="scss" scoped></style>
