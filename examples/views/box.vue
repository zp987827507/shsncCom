<template>
    <div class="box">
        <div style="width: 500px; height: 300px">
            <z-box title="饼图" btnText="查看" showBtn :height="200" @checkDetail="checkDetail">
                <div slot="header" class="search-rule">
                    <el-input v-model="name" placeholder="请输入"></el-input>
                </div>
                <template v-slot:content>
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
                </template>
            </z-box>
        </div>
    </div>
</template>

<script>
export default {
  data () {
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
    checkDetail () {
      console.log('/////////')
    }
  }

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