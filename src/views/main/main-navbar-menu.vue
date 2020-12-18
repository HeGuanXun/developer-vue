<template>
  <div class="navbar-menu">
    <div class="nbm-wraper" ref="nbm-wraper" :class="{'nbmw-open':menuOpen}">
      <div class="nbm-item" :class="{'on':item.on}" v-for="(item,index) in menuList" :key="index" @click="gotoPage(item)">
        <span>{{item.name}}</span>
<!--        <i class="smp-nav-icon" :class="[item.icon,{'on':item.on}]"></i>-->
      </div>
    </div>
    <div class="nbm-switch">
      <div class="nbm-item" v-if="menuOpen" @click="changeMenuStatus">
        <i class="smp-nav-icon smp-ni-back"></i>
        <span>返回</span>
      </div>
<!--      <div class="nbm-item" v-else @click="changeMenuStatus">-->
<!--        <i class="smp-nav-icon smp-ni-more"></i>-->
<!--        <span>更多</span>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/utils/BUS'
export default {
  data () {
    return {
      lineWrapIndex: '',
      menuOpen: false,
      menuList: [
        {
          name: '首页',
          url: '/home',
          on: false,
          icon: 'smp-ni-nav_sy_n'
        },
        {
          name: '用户管理',
          url: '/home',
          on: true,
          icon: 'smp-ni-nav_jczj_n'
        },
        {
          name: '开发者中心',
          url: '/home',
          on: false,
          icon: 'smp-ni-nav_jcyj_n'
        },
        {
          name: '基础组件',
          url: '/home',
          on: false,
          icon: 'smp-ni-nav_jczj_n'
        },
      ]
    }
  },
  methods: {
    changeMenuStatus () {
      this.menuOpen = !this.menuOpen
    },
    gotoPage (item) {
      this.upMenuItem(item)
      this.menuList.forEach((e, i) => {
        e.on = false
      })
      item.on = true
      this.$router.push({ path: item.url });
      if (item.name == '用户管理'){
        eventBus.$emit("sidebarMenuList",this.$store.state.sidebarMenuList_t,'用户')
      }
      if (item.name == '开发者中心'){
        eventBus.$emit("sidebarMenuList",this.$store.state.sidebarMenuList_m,'开发者中心')
      }
    },
    upMenuItem (item) {
      let wraper = this.$refs['nbm-wraper']
      let wraperW = wraper.getBoundingClientRect().width
      let itemW = 120
      this.lineWrapIndex = Math.floor(wraperW / itemW) - 1
      let spliceItemIndex = ''
      this.menuList.forEach((e, i) => {
        if (i <= this.lineWrapIndex) {
          return
        }
        if (e.name === item.name) {
          spliceItemIndex = i
        }
      })
      if (spliceItemIndex !== '') {
        this.menuList[spliceItemIndex] = this.menuList.splice(this.lineWrapIndex, 1, item)[0]
      }
    }
  }
}
</script>

<style lang="scss">
.navbar-menu{
  // padding: 0!important;
}
</style>
