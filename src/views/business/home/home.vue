<template>
  <div class="home">
    <page-left>
      <index-focus></index-focus>
      <statistic-echart></statistic-echart>
      <index-duty></index-duty>
    </page-left>
    <page-right>
      <index-statistic></index-statistic>
      <trend-echart></trend-echart>
      <index-clue></index-clue>
    </page-right>
    <map-search></map-search>
    <map-func></map-func>
    <monitorwar-map></monitorwar-map>
  </div>
</template>

<script>
import pageLeft from '@/components/smp-page-left'
import pageRight from '@/components/smp-page-right'
// import smpCard from '@/components/smp-card'
// import listTime from '@/components/smp-list-time'
import mapSearch from '@/components/smp-map/smp-map-search'
import mapFunc from '@/components/smp-map/smp-map-func'
import indexFocus from './home-focus'
import indexDuty from './home-duty'
import indexStatistic from './home-statistic'
import statisticEchart from './home-statistic-echart'
import trendEchart from './home-trend-echart'
import indexClue from './home-clue'
import monitorwarMap from './home-map'
export default {
  data () {
    return {
      listTimeData: [

      ]
    }
  },
  components: {
    pageLeft,
    pageRight,
    mapSearch,
    mapFunc,
    indexFocus,
    indexDuty,
    indexStatistic,
    statisticEchart,
    trendEchart,
    indexClue,
    monitorwarMap
  },
  methods: {

  }
}
</script>

<style lang="scss">
.home{
  padding: 0!important;
}
</style>
