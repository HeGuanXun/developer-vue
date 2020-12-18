<template>
  <div class="navbar-user">
    <div class="nu-main">
<!--      <div class="nu-l">-->
<!--        <img v-if="useHeadPictureUrl" :src="useHeadPictureUrl">-->
<!--        <i v-else class="smp-nav-icon-32 smp-ni32-userPic"></i>-->
<!--      </div>-->
      <div class="nu-r">
<!--        <div class="nu-t">省公安厅</div>-->
        <div class="nu-b">
          <div class="navbar-name">默认管理员</div>
          <div class="navbar-open-btn" @click="showUserFunc">
            <i class="el-icon-setting"/>
<!--            <i class="smp-nav-icon-10 smp-ni10-arrow" :class="{'on':isUserFuncOpen}"></i>-->
          </div>
        </div>
      </div>
    </div>
    <div class="nu-list-wraper" v-show="isUserFuncOpen">
      <ul class="nulw-ul">
        <li class="nulw-li">
          <i class="smp-nav-icon-16 smp-ni16-person"></i>
          <span>个人信息</span>
        </li>
        <li class="nulw-li" @click="login">
          <i class="smp-nav-icon-16 smp-ni16-person"></i>
          <span>登录</span>
        </li>
        <li class="nulw-li">
          <i class="smp-nav-icon-16 smp-ni16-pass"></i>
          <span>修改密码</span>
        </li>
        <li class="nulw-li" @click="login_out">
          <i class="smp-nav-icon-16 smp-ni16-out"></i>
          <span>退出</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import store from '@/store'
export default {
  data () {
    return {
      useHeadPictureUrl: '',
      isUserFuncOpen: false
    }
  },
  methods: {
    showUserFunc () {
      this.isUserFuncOpen = !this.isUserFuncOpen
    },
    login_out(){
      this.$router.push("login")
    },
    // 模拟登录
    login () {

      this.$postReq.login({username: 'admin', password: 'Jaow92!2$u'}).then(res => {
          console.log(res);
          this.$alert('登录成功', '提示', {
            confirmButtonText: '确定',
            type: 'success'
          });

          this.$store.commit('SET_SESSION_TOKEN', res.data.sessionToken)

          this.$postReq.getUserInfo().then(infoData => {
            this.$store.commit('SET_USERINFO', infoData.data.userInfo)
          })

          this.$postReq.getAllOrganizationMinimums().then(infoData=>{
            localStorage.setItem('allOrganization',JSON.stringify(infoData.data.allOrganizations))
          })

      })

    }
  }
}
</script>

<style lang="scss">
.navbar-user{

}
</style>
