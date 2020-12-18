<template>
  <smpCard
    cardname="我的关注"
    class="smp-page-dividing-line"
  >
    <listTime :listData="listTimeData"></listTime>
  </smpCard>
</template>

<script>
import smpCard from '@/components/smp-card'
import listTime from '@/components/smp-list-time'
export default {
  data () {
    return {
      listTimeData: [
        {
          type: '人员',
          title: '张三可疑行为',
          time: '2020-05-01'
        },
        {
          type: '人员',
          title: '张三可疑行为',
          time: '2020-05-01'
        },
        {
          type: '人员',
          title: '张三可疑行为',
          time: '2020-05-01'
        },
        {
          type: '人员',
          title: '张三可疑行为',
          time: '2020-05-01'
        }
      ]
    }
  },
  components: {
    smpCard,
    listTime
  },
  methods: {

  }
}
</script>

<style lang="scss">
.monitorwarn-index-focus{

}
</style>
