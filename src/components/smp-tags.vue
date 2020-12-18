<template>
  <div class="smp-tags">
    <span class="smpt-bd">
      <i :class="'smptb-type warn-lv-'+lv"></i>
      <em>{{name}}</em>
    </span>
    <i class="smpt-close" @click="btnClick($event,index)"></i>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    lv: {
      type: String,
      default: '4'
    }
    ,
    index: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  },
  methods: {
    btnClick (event,index) {
      this.$emit('tagClick',index)
    }
  }
}
</script>

<style lang="scss">
.smp-card{

}
</style>
