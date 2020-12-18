<template>
  <div>
    <div class="search-text">
      <span>已选条件：</span>
      <div class="condition" @click="showMoreClick">
                            <span v-for="item in chooseLabelArr" v-if="Object.prototype.toString.call(item)=='[object Array]'&&item.length>0">
                                   【<span v-for="(label,index) in item">
                                       {{label}} <span v-if="index!=item.length-1">,</span>
                                   </span>】
                            </span>
                            <span v-for="item in chooseLabelArr" v-if="Object.prototype.toString.call(item)=='[object String]'&&item.length>0">
                                【{{item}}】
                            </span>
      </div>
      <span @click="showMoreClick" class="arrow">
                               <i class="el-icon-arrow-down" :class="{'anima':isShowMore}"></i>
                       </span>
    </div>
    <div class="search-content" v-show="isShowMore">
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
   name: "searchConditionShow",
   props:['chooseLabelArr'],
   data:function(){
       return {
          isShowMore:false
       }
   },
   methods:{
     showMoreClick(){
         this.isShowMore=!this.isShowMore;
     }
   }
}
</script>

<style lang="scss" scoped>
  .search-content {
    .text-line3 {
      align-items: flex-start;
      > .text-label {
        height: 50px;
      }
    }
  }
  .search-text{
    display: flex;
    align-items: center;
    width:100%;
    span{
      width:82px;
      text-align: left;
    }
    .condition{
      flex: 1;
      background: transparent;
      border: 1px solid #dddddd;
      height: 36px;
      line-height: 36px;
      span{
        color: #1882F8;
      }
    }
    .arrow{
      width:36px;
      height: 36px;
      background:#1882F8;
      text-align: center;
      color:#fff;
      line-height: 36px;
      i{
        transition: all 0.3s ease;
        &.anima{
          transform: rotate(180deg);
        }
      }
    }
  }
  .search-content{
    border: 1px solid #dddddd;
    border-top:none;
    margin-left: 82px;
    padding: 5px 10px;
    .text-label{
      //white-space: nowrap;
      background: #dddddd;
      display: inline-flex;
      align-items: center;
      padding-left: 5px;
      width:80px;
    }
  }
</style>
