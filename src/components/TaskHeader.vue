<template>
  <div class="m-header">
<!--    <div class="title">-->
<!--      <p>-->
<!--        {{headerName}}-->
<!--        <el-link type="primary" class="link" v-if="linkPath">-->
<!--          <router-link :to="linkPath">（任务号{{headerNameLink}})</router-link>-->
<!--        </el-link>-->
<!--      </p>-->
<!--    </div>-->
<!--    <div class="w-percent-100">-->
<!--      <el-steps :active="activeIndex" align-center simple>-->
<!--        <el-step v-for="(item,index) in stepTitle" :key="index" :title="item"></el-step>-->
<!--      </el-steps>-->
<!--    </div>-->
    <div class="step">
      <div v-for="(item,index) in stepTitle" :key="index" class="step-item" :class="{'is-process': index+1 <= activeIndex}">
        <div :class="{'step-item__arrow-left': index+1 > 1}"></div>
        <div class="step-title">
          <span class="round-wrap" v-if="index+1 <= activeIndex"><i class="el-icon-check"></i></span>
          <span class="round-wrap" v-else><i>{{index+1}}</i></span>
          {{item}}
        </div>
        <div :class="{'step-item__arrow-right': index < stepTitle.length-1}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerName: {
      type: String
    },
    stepTitle: {
      type: Array
    },
    activeIndex: {
      type: Number
    },
    headerNameLink: {
      type: String
    },
    linkPath: {
      type: String
    }
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  //1280f1
.m-header {
  width: 100%;
  /*margin-bottom: 15px;*/
  .step {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .step-item{
      flex:1;
      border-radius: 4px;
      position: relative;
      display: flex;
      margin-right: -31px;
      &:last-child{
        margin-right: 0;
      }
      .step-title{
        color: #aeaeae;
        display: flex;
        align-items: center;
        padding: 0 10px;
        flex: 1;
        background: #efefef;
        .round-wrap{
          width: 18px;
          height: 18px;
          text-align: center;
          line-height: 18px;
          border-radius: 100%;
          background-color: #aeaeae;
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          margin-right: 5px;
          i{
            color: #fff;
          }
        }
      }
      .step-item__arrow-left{
        height: 0;
        width: 0;
        /*background: #000;*/
        border: 18px solid;
        border-color: #efefef #efefef #efefef transparent;
      }
      .step-item__arrow-right{
        height: 0;
        width: 0;
        border: 18px solid;
        border-color: transparent transparent transparent #efefef;
      }
      &.is-process{
        .step-title{
          color: #fff;
          background: #1280f1;
          .round-wrap{
            background-color: #fff;
            margin-right: 5px;
            i{
              color: #1280f1;
            }
          }
        }
        .step-item__arrow-left{
          border-color: #1280f1 #1280f1 #1280f1 transparent;
        }
        .step-item__arrow-right{
          border-color: transparent transparent transparent #1280f1;
        }
      }
    }

  }
}
</style>
