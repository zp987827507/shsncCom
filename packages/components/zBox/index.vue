<template>
    <div class="box">
        <h3 class="box-header">
            <span>{{ title }}</span>
            <el-button type="primary" plain size="small" @click="checkDetail" v-if="showBtn">查看明细</el-button>
        </h3>
        <div class="box-content" :style="height ? 'height:' + height : ''">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'z-box',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    showBtn: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: ''
    }

  },
  methods: {
    checkDetail () {
      this.$emit('checkDetail')
    }
  }

}
</script>

<style lang="scss" scoped>
.box {
    // width: 100%;
    padding: 0px 10px 10px;
    background-color: #fff;
    border: 1px #e4e4e4 solid;
    border-radius: 5px;
    .box-header {
        font-size: 14px;
        border-bottom: 1px #e4e4e4 solid;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
    }
    .box-content {
        overflow: auto;
    }
    ::v-deep .el-button--small {
        padding: 8px 15px;
    }
}
</style>