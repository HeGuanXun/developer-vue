<template>
  <nav class="smp-navbar">
    <div class="navbar-hd">
<!--      <h1 class="navbar-logo" @click="gotoHome">-->
<!--        <a href="javascript:;"><img :src="navLogo" /></a>-->
<!--      </h1>-->
    </div>
    <div class="navbar-bd">
      <navbar-menu></navbar-menu>
<!--      <navbar-news></navbar-news>-->
      <navbar-user></navbar-user>
    </div>
  </nav>
</template>

<script>
import navLogo from '@/assets/img/nav/nav_logo.png'
import { messages } from '@/i18n'
import { clearLoginInfo } from '@/utils'
import NavbarMenu from './main-navbar-menu'
import NavbarNews from './main-navbar-news'
import NavbarUser from './main-navbar-user'
export default {
  inject: ['refresh'],
  data () {
    return {
      i18nMessages: messages,
      updatePassowrdVisible: false,
      navLogo: navLogo
    }
  },
  components: {
    NavbarMenu,
    NavbarNews,
    NavbarUser
  },
  methods: {
    gotoHome () {
      this.$router.push({ name: 'home' })
    },
    // 修改密码
    updatePasswordHandle () {
      this.updatePassowrdVisible = true
      this.$nextTick(() => {
        this.$refs.updatePassowrd.init()
      })
    },
    // 退出
    logoutHandle () {
      this.$confirm(this.$t('prompt.info', { 'handle': this.$t('logout') }), this.$t('prompt.title'), {
        confirmButtonText: this.$t('confirm'),
        cancelButtonText: this.$t('cancel'),
        type: 'warning'
      }).then(() => {
        this.$http.post('/logout').then(({ data: res }) => {
          if (res.code !== 0) {
            return this.$message.error(res.msg)
          }
          clearLoginInfo()
          this.$router.push({ name: 'login' })
        }).catch(() => {})
      }).catch(() => {})
    }
  }
}
</script>
