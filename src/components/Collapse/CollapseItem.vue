<template>
  <div class="collapse-item" :class="{'active': isActive }">
    <div class="collapse-item_header">
      <div class="expand_icon" @click="handleHeaderClick">更多<i class="el-icon-arrow-right"></i></div>
      <slot name="header"></slot>
    </div>
    <div class="collapse-item_body">
      <div class="packup_icon" @click="handleHeaderClick">收起<i class="el-icon-arrow-up"></i></div>
<!--      <i class="el-icon-arrow-up packup_icon"></i>-->
      <slot name="content" v-if="isActive"></slot>
    </div>
  </div>
</template>

<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
  name: 'CollapseItem',
  componentName: 'CollapseItem',
  props: {
    name: {
      type: [String, Number]
    }
  },
  data () {

  },
  mixins: [Emitter],
  inject: ['collapse'],
  computed: {
    isActive() {
      let activeNames = JSON.stringify([this.collapse.activeNames])
      // console.log('activeNames',activeNames)
      // console.log('this.collapse.activeNames',this.collapse.activeNames)
     console.log(this.name)
      // console.log(this.collapse.activeNames.indexOf(this.name.toString()) > -1)
      return activeNames.indexOf(this.name.toString()) > -1;
    }
  },
  methods: {
    handleHeaderClick() {
      this.dispatch('CollapsePanel', 'item-click', this);
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
