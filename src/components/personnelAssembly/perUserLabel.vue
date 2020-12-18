<template>
  <div>
    <el-tag type="danger" class="per-pet-mar-rig-10" @click="gotolableDetails">诉求时间长</el-tag>
    <el-tag type="danger" class="per-pet-mar-rig-10" @click="gotolableDetails">表现形式恶化</el-tag>
    <el-tag type="danger" class="per-pet-mar-rig-10" @click="gotolableDetails">矛盾未化解</el-tag>
    <el-tag type="danger" class="per-pet-mar-rig-10" @click="gotolableDetails">诉求价值大</el-tag>
    <el-tag type="warning" class="per-pet-mar-rig-10" @click="gotolableDetails">目前失业</el-tag>
    <el-tag type="warning" class="per-pet-mar-rig-10" @click="gotolableDetails">一年内离婚</el-tag>
    <el-tag type="warning" class="per-pet-mar-rig-10" @click="gotolableDetails">患有重大疾病</el-tag>
    <el-tag class="per-pet-mar-rig-10">是社区矫正人员</el-tag>
    <el-tag class="per-pet-mar-rig-10">一个月内接触易爆品</el-tag>
  </div>
</template>
<script>
import '@/assets/css/perStyle.css'
export default {
  name: 'perUserLabel',
  props: ["userId"],
  data() {
    return {
      userData: [],
    };
  },
  created() {
    //this.qryUser();
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
        }
      })
    },
    //跳转至风险标签详情
    gotolableDetails () {
      this.$router.push({path:'/personnelMonitoring/list/lableDetails'})
    },
  },
}
</script>
