<template>
  <smpCard
      cardname="预警统计"
      btnname="更多 >"
      @btnClick="gotoMore"
      class="smp-page-dividing-line"
    >
    <div class="monitorwarn-index-statistic-bd">
      <div class="mis-item misi-bg-sy_ryyj" @click="gotoPerHome">
        <span class="misi-num">358</span>
        <span class="misi-name">人员预警</span>
      </div>
      <div class="mis-item misi-bg-sy_clyj">
        <span class="misi-num">69</span>
        <span class="misi-name">车辆预警</span>
      </div>
      <div class="mis-item misi-bg-sy_cbyj">
        <span class="misi-num">40</span>
        <span class="misi-name">船舶预警</span>
      </div>
      <div class="mis-item misi-bg-sy_dxmyj">
        <span class="misi-num">2271</span>
        <span class="misi-name">低小慢预警</span>
      </div>
    </div>
  </smpCard>
</template>

<script>
import smpCard from '@/components/smp-card'
export default {
  data () {
    return {

    }
  },
  components: {
    smpCard
  },
  methods: {
    gotoMore () {
      // some link
    },
    //人员预警跳转
    gotoPerHome () {
      this.$router.push({path:'/personnelMonitoring/perHome'})
    }
  }
}
</script>

<style lang="scss">
.monitorwarn-index-statistic{

}
</style>
