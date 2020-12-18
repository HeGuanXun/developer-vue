<!--<template>-->
<!--  <div :style="auiWrapper" v-loading.fullscreen.lock="loading" :element-loading-text="$t('loading')" class="aui-wrapper">-->
<!--    <main-content />-->
<!--  </div>-->
<!--</template>-->
<template>
  <div :style="auiWrapper" style="min-width: 1280px;" v-loading.fullscreen.lock="loading" :element-loading-text="$t('loading')" class="aui-wrapper">
    <template v-if="!loading">
      <div class="smp_main-t">
        <main-navbar v-if="navbarFlag"/>
      </div>
      <div class="smp_main-b" >
        <div class="smp_main-l">
          <main-sidebar v-if="sidebarFlag"/>
        </div>
        <div class="smp_main-r" :class="{'onClose':$store.state.sidebarFold}">
          <content-crumb></content-crumb>
          <main-content />
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import MainNavbar from './main-navbar'
import MainSidebar from './main-sidebar'
import MainContent from './main-content'
import debounce from 'lodash/debounce'
import ContentCrumb from './main-content-crumb'
export default {
  provide () {
    return {
      // 刷新
      refresh () {
        this.$store.state.contentIsNeedRefresh = true
        this.$nextTick(() => {
          this.$store.state.contentIsNeedRefresh = false
        })
      }
    }
  },
  data () {
    return {
      loading: true,
      navbarFlag: false,
      sidebarFlag: false,
      mainContent: 'aui-content__wrapper',
      auiWrapper: ''
    }
  },
  components: {
    MainNavbar,
    MainSidebar,
    MainContent,
    ContentCrumb
  },
  watch: {
    $route: 'routeHandle'
  },
  created () {
    // this.windowResizeHandle()
    this.routeHandle(this.$route)
    Promise.all([
      // this.getUserInfo(),
      // this.getPermissions()
    ]).then(() => {
      this.loading = false
    })

    this.navbarFlag = window.SITE_CONFIG['isNavbar']
    this.sidebarFlag = window.SITE_CONFIG['isSidebar']
    if (!this.sidebarFlag) {
      this.mainContent = ''
    }
    if (!this.navbarFlag) {
      this.auiWrapper = 'padding-top:0px;'
    }
  },
  methods: {
    // 窗口改变大小
    // windowResizeHandle () {
    //   this.$store.state.sidebarFold = document.documentElement['clientWidth'] <= 992 || false
    //   window.addEventListener('resize', debounce(() => {
    //     this.$store.state.sidebarFold = document.documentElement['clientWidth'] <= 992 || false
    //   }, 150))
    // },
    // 路由, 监听
    routeHandle (route) {
      if (!route.meta.isTab) {
        return false
      }
      var tab = this.$store.state.contentTabs.filter(item => item.name === route.name)[0]
      if (!tab) {
        tab = {
          ...window.SITE_CONFIG['contentTabDefault'],
          ...route.meta,
          'name': route.name,
          'params': { ...route.params },
          'query': { ...route.query }
        }
        this.$store.state.contentTabs = this.$store.state.contentTabs.concat(tab)
      }
      this.$store.state.sidebarMenuActiveName = tab.menuId
      this.$store.state.contentTabsActiveName = tab.name
    },
    // 获取当前管理员信息
    getUserInfo () {
      return this.$http.get('/sys/user/info').then(({ data: res }) => {
        if (res.code !== 0) {
          return this.$message.error(res.msg)
        }
        this.$store.state.user.id = res.data.id
        this.$store.state.user.name = res.data.username
        this.$store.state.user.superAdmin = res.data.superAdmin
      }).catch(() => {})
    },
    // 获取权限
    getPermissions () {
      return this.$http.get('/sys/menu/permissions').then(({ data: res }) => {
        if (res.code !== 0) {
          return this.$message.error(res.msg)
        }
        window.SITE_CONFIG['permissions'] = res.data
      }).catch(() => {})
    }
  }
}
</script>
