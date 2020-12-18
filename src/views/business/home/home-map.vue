<template>
  <div class="monitorwarn-map">
    <baidu-map class="mw-map-inner" @ready="handler" :zoom="11">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    </baidu-map>
  </div>
</template>

<script>
export default {
  data () {
    return {
      map: ''
    }
  },
  methods: {
    handler ({ map }) {
      this.map = map
      // this.map.centerAndZoom('海口', 10)
      this.map.centerAndZoom(new BMap.Point(110.426366, 19.878895), 11)
    }
  }
}
</script>

<style lang="scss">
.monitorwarn-map{
  padding: 0!important;
}
</style>
