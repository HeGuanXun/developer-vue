<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="8">
        <img :src="userData.headportraits" style="width: 100%">
      </el-col>
      <el-col :span="16" class="per-cont-user-main">
        <div>
          <span class="per-pet-mar-rig-10">姓名：{{ userData.name }}</span>
          <span v-if="this.openPeopleType == true">&nbsp;&nbsp;|&nbsp;&nbsp;{{ userData.peopleType }}</span>
        </div>
        <div>性别：{{ userData.gender }}</div>
        <div>出生日期：{{ userData.birthday }}</div>
        <div>民族：{{ userData.nation}}</div>
        <div>联系方式：{{ userData.contactWay }}</div>
      </el-col>
      <el-col :span="24" class="per-cont-user-main per-pet-mar-top-20">
        <div>身份证号码：{{ userData.idCard }}</div>
        <div>地址：{{ userData.nativePlace }}</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import '@/assets/css/perStyle.css'
export default {
  name: 'perUser',
  props: ["userId", "openPeopleType"],
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
          this.$emit('redisKeyfun',res.redisKey)
        }
      })
    },
  },
}
</script>
