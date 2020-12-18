<template>
  <div class="smp-map-func">
    <div class="smpmf-item" v-for="(item,index) in itemArr" :key="index" @click="doTool(item)">
      <i class="smp-icon-20" :class="[item.icon,{'on':item.isOn}]"></i>
      <span :class="{'on':item.isOn}">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
// props:
// list_data{
//   type
//   title
//   time
// }
// titleName:['type','title','time']
export default {
  data () {
    return {
      itemArr: [
        {
          name: '地图工具',
          icon: 'smp-i20-sy_map_dtgj_n',
          isOn: false,
          func: this.mapTool
        },
        {
          name: '专题监测预警',
          icon: 'smp-i20-sy_map_ztjcyj_n',
          isOn: false,
          func: this.mapTool
        },
        {
          name: 'GIS态势配置',
          icon: 'smp-i20-sy_map_gis_n',
          isOn: false,
          func: this.mapTool
        },
        {
          name: '时间轴',
          icon: 'smp-i20-sy_map_sjz_n',
          isOn: false,
          func: this.mapTool
        }
      ]
    }
  },
  methods: {
    mapTool () {
      console.log(123)
    },
    doTool (item) {
      item.isOn = !item.isOn
      item.func()
    }
  }
}
</script>

<style lang="scss">
.smp-map-func{
  // padding: 0!important;
}
</style>
