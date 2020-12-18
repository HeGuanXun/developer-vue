<template>
  <div>
    <div class="per-pet-font-36">
      {{ userData.riskLevel }}
    </div>
    <div style="margin-top: 40px;">
      <el-row>
        <el-col :span="12">
          <template v-if="userData.mainDemands == '稳控'">
            <img src="@/assets/img/personnelImg/u451.png" class="per-pet-mar-rig-10"/>
            稳控
          </template>
          <template v-if="userData.mainDemands == '基本稳控'">
            <img src="@/assets/img/personnelImg/u338.png" class="per-pet-mar-rig-10"/>
            基本稳控
          </template>
          <template v-if="userData.mainDemands == '失控'">
            <img src="@/assets/img/personnelImg/u375.png" class="per-pet-mar-rig-10"/>
            失控
          </template>
          <template v-if="userData.mainDemands == '失联失访'">
            <img src="@/assets/img/personnelImg/u414.png" class="per-pet-mar-rig-10"/>
            失联失访
          </template>
        </el-col>
        <div :span="12">
          <template v-if="userData.riskTrend == '恶化'">
            <img src="@/assets/img/personnelImg/u410.png" class="per-pet-mar-rig-10"/>
            恶化
          </template>
          <template v-if="userData.riskTrend == '改善'">
            <img src="@/assets/img/personnelImg/u342.png" class="per-pet-mar-rig-10"/>
            改善
          </template>
          <template v-if="userData.riskTrend == '持平'">
            <img src="@/assets/img/personnelImg/u343.png" class="per-pet-mar-rig-10"/>
            持平
          </template>
        </div>
      </el-row>
    </div>
    <div style="margin-top: 30px">评估时间：{{ userData.riskDate }}</div>
  </div>
</template>
<script>
import '@/assets/css/perStyle.css'
export default {
  name: 'perUserRisk',
  props: ["userId"],
  data() {
    return {
      userData: [],
    };
  },
  created() {
    this.qryUser();
  },
  methods: {
    // 查询个人信息
    async qryUser() {
      let qryParam = {
        id: this.userId,
      };
      await this.$postReq.queryPerUser(qryParam).then(res => {
        if (res.status == 200 && res.data != null) {
          this.userData = res.data;
          this.$parent.$parent.$parent.$parent.redisKey.push(res.redisKey)
        }
      })
    },
  },
}
</script>
