<template>
  <div class="smp-map-func">
    <div class="smpmf-item" v-for="(item,index) in itemArray" :key="index" @click="doTool(item)">
      <i class="smp-icon-20" :class="[item.icon,{'on':item.isOn}]"></i>
      <span :class="{'on':item.isOn}">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      itemArr: {
        type: Array,
        default: []
      },
      selectionMode:{
        type: String,
        default: 'single'//选择模式：single为单选，multiple为多选
      }
    },
    data () {
      return {
        tempArray:[]
      }
    },
    computed: {
      itemArray: {
        get () {
          return this.itemArr
        },
        set (val) {
          this.tempArray = val
        }
      }
    },
    methods: {
      mapTool () {
        console.log(123)
      },
      gotoRouteHandle(item) {
        if (item.url) {
          this.$router.push({path: item.url})
        }
      },
      doTool (item) {
        if(item.url){
          if(this.selectionMode == 'single'){
            this.itemArray.forEach((item,index)=>{
              this.$set(this.itemArray[index],'isOn',false)
            })
            item.isOn = !item.isOn
          }
          else if(this.selectionMode == 'multiple'){
            item.isOn = !item.isOn
          }

          this.gotoRouteHandle(item)
        }

        if(item.func){
          this.$emit('call-method',item.func)
        }
      }
    }
  }
</script>

<style lang="scss">
  .smpmf-item {
    cursor: pointer;
  }
</style>
