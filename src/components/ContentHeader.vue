<template>
  <div>
    <div class="m-header flex-space-between">
      <div class="title">
        {{headerName}}
        <!--      <el-link type="primary" class="link">-->
        <!--        <router-link :to="linkPath">（任务号{{headerNameLink}})</router-link>-->
        <!--      </el-link>-->
      </div>
      <div style="display: flex">
        <div class="mr20" v-if="historyBtn">
          <el-button type="primary" size="mini" @click="openHistory">历史快照</el-button>
        </div>
        <div class="back-button" v-if="backBtn">
          <el-button type="primary" size="mini" plain icon="el-icon-back" @click="backToPrev">返回</el-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      headerName: {
        type: String,
        default: ''
      },
      backBtn: {
        type: Boolean,
        default: false
      },
      historyBtn: {
        type: Boolean,
        default: false
      },
      htmlUrl: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    methods: {
      backToPrev() {
        this.$router.go(-1)
      },
      openHistory() {
        let target = window.open('_blank')
        target.location = this.htmlUrl
      }
    }
  }
</script>

<style lang="scss" scoped>
  .m-header {
    width: 100%;
    margin-bottom: 10px;

    .title {
      font-size: 16px;
      color: #232323;
      font-weight: bold;
    }

    .back-button {

    }
  }
</style>
