<template>
    <div class="box">
        <p class="box-header">
            <span class="title">{{ title }}</span>
            <elem-button type="primary" plain size="small" @click="checkDetail" v-if="showBtn">{{ '查看明细' }}</elem-button>
        </p>
        <div class="box-content" :style="height ? 'height:' + height : ''">
            <slot></slot>
        </div>
    </div>
</template>

<script>
let elem = require('element-ui')

export default {
  name: 'ZBox',
  components: {
    ElemButton: elem.Button,

  },
  props: {
    title: {
      type: String,
      default: '标题'
    },
    showBtn: {
      type: Boolean,
      default: false
    },
    btnText: {
      type: String,
      default: '查看明细'
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
    padding-bottom: 10px;
    background-color: #fff;
    border-radius: 5px;
    .box-header {
        margin: 0;
        padding: 0 10px;
        height: 39px;
        font-size: 14px;
        border-bottom: 1px #ddd solid;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
            font-size: 14px;
            color: #666;
        }
    }
    .box-content {
        overflow: auto;
    }
    ::v-deep .el-button--small {
        padding: 8px 15px;
    }
}
</style>