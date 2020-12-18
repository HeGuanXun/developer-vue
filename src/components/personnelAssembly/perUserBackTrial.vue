<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="per-pet-font-24 per-pet-font-bold per-cont-fraction">
          100
        </div>
        <div class="per-pet-mar-top-20 per-pet-center">{{ backNewData.backResults }}</div>
        <div class="per-pet-mar-top-20 per-pet-center">分析时间：{{ backNewData.backTime }}</div>
        <div class="per-pet-center">
          <el-button type="primary" class="el-button big-button el-button--primary el-button--default per-pet-mar-top-20" @click="gotoPerBackgroundReview">
            进入背审
          </el-button>
        </div>
      </el-col>
      <el-col :span="18">
        <el-timeline>
          <template v-for="item in backHistory">
            <el-timeline-item color="#009DD9">
              <div class="per-pet-mar-top-10">
                <span class="per-pet-mar-rig-10">{{ item.date }}</span>
                <el-tag type="danger">{{ item.illegalType }}</el-tag>
              </div>
              <div class="per-pet-mar-top-10">地点：{{ item.address }}</div>
              <div class="per-pet-mar-top-10 per-font-height">详情：{{ item.illegalSituation }}</div>
            </el-timeline-item>
          </template>
        </el-timeline>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import '@/assets/css/perStyle.css'
export default {
  name: 'perUserBackTrial',
  props: ["userId"],
  data() {
    return {
      backNewData: [],
      backHistory: [],
    };
  },
  created() {
    this.qryUserBack();
    this.qryUserBackHistory();
  },
  methods: {
    // 查询最新人员背审情况
    async qryUserBack() {
      let qryParam = {
        fid: this.userId,
      };
      await this.$postReq.queryPerUserBackNew(qryParam).then(res => {
        if (res.status == 200 && res.data != null) {
          this.backNewData = res.data;
          this.$parent.$parent.$parent.$parent.redisKey.push(res.redisKey)
        }
      })
    },
    // 查询人员历史背审情况
    async qryUserBackHistory() {
      let qryParam = {
        id: this.userId,
      };
      await this.$postReq.queryPerUserBackHistory(qryParam).then(res => {
        if (res.status == 200 && res.data != null) {
          this.backHistory = res.data;
          this.$parent.$parent.$parent.$parent.redisKey.push(res.redisKey)
        }
      })
    },
    //跳转至背景审查
    gotoPerBackgroundReview () {
      this.$router.push({path:'/personnelMonitoring/list/perBackgroundReview'})
    }
  },
}
</script>
