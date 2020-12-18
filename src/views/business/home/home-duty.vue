<template>
  <smpCard
    cardname="值班管理"
  >
    <miniTable :tableData="tableData" :tableType="tableType"></miniTable>
    <miniTable :tableData="tableData2" :tableType="tableType"></miniTable>
  </smpCard>
</template>

<script>
import smpCard from '@/components/smp-card'
import miniTable from '@/components/smp-mini-table'
export default {
  data () {
    return {
      tableType: [
        {
          label: '联动单位',
          width: 100,
          prop: 'danwei'
        },
        {
          label: '值班领导',
          width: 80,
          prop: 'lingdao'
        },
        {
          label: '联系方式',
          width: 100,
          prop: 'lianxi'
        },
        {
          label: '值班人数',
          width: '',
          prop: 'renshu'
        }
      ],
      tableData: [
        {
          danwei: '工信12',
          lingdao: '张三',
          lianxi: '13412345678',
          renshu: '1人'
        },
        {
          danwei: '工信12',
          lingdao: '张三',
          lianxi: '13412345678',
          renshu: '1人'
        },
        {
          danwei: '工信12',
          lingdao: '张三',
          lianxi: '13412345678',
          renshu: '1人'
        }
      ],
      tableData2: [
        {
          danwei: '工信12',
          lingdao: '张三',
          lianxi: '13412345678',
          renshu: '1人'
        },
        {
          danwei: '工信12',
          lingdao: '张三',
          lianxi: '13412345678',
          renshu: '1人'
        },
        {
          danwei: '工信12',
          lingdao: '张三',
          lianxi: '13412345678',
          renshu: '1人'
        },
        {
          danwei: '工信12',
          lingdao: '张三',
          lianxi: '13412345678',
          renshu: '1人'
        }
      ]
    }
  },
  components: {
    smpCard,
    miniTable
  },
  methods: {

  }
}
</script>

<style lang="scss">
.monitorwarn-index-duty{

}
</style>
