<template>
    <div class="box">
        <p class="box-header">
            <span class="title">{{ title }}</span>
            <slot name="header" class="header-slot"></slot>
            <el-button type="primary" plain size="small" @click="checkDetail" v-if="showBtn">{{ btnText }}</el-button>
        </p>
        <div class="box-content" :style="contentHeight ? 'height:' + contentHeight : ''">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ZBox',
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
      type: [ String, Number ],
      default: ''
    }
  },
  data () {
    return {
      contentHeight: ''
    }
  },
  watch: {
    height: {
      handler: function (val) {
        if (typeof val === 'number' && !isNaN(val)) {
          this.contentHeight = val + 'px'
        } else {
          this.contentHeight = val
        }
      },
      immediate: true
    },
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
            white-space: nowrap;
        }
        .header-slot {
            flex: 1;
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