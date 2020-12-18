<template>
  <smpCard
      cardname="文本类线索"
      class="monitorwarn-index-clue"
    >
    <template>
      <clue-hd></clue-hd>
      <img-text :listData="listData"></img-text>
    </template>
  </smpCard>
</template>

<script>
import smpCard from '@/components/smp-card'
import imgText from '@/components/smp-img-text'
import clueHd from './home-clue-hd'
export default {
  data () {
    return {
      listData: [
        {
          imgUrl: ' https://dpic.tiankong.com/jn/he/QJ8656856573.jpg',
          type: '公共环境',
          time: '2020-09-09 09:09:09',
          address: '中国海南省文昌市'
        },
        {
          imgUrl: ' https://dpic.tiankong.com/jn/he/QJ8656856573.jpg',
          type: '公共环境',
          time: '2020-09-09 09:09:09',
          address: '中国海南省文昌市'
        },
        {
          imgUrl: ' https://dpic.tiankong.com/jn/he/QJ8656856573.jpg',
          type: '公共环境',
          time: '2020-09-09 09:09:09',
          address: '中国海南省文昌市'
        }
      ]
    }
  },
  components: {
    smpCard,
    clueHd,
    imgText
  },
  methods: {

  }
}
</script>

<style lang="scss">
.monitorwarn-index-clue{
  padding: 0!important;
}
</style>
