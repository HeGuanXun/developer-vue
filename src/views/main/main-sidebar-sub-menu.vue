<template>
  <el-submenu v-if="menu.children && menu.children.length >= 1" :index="menu.id" :popper-append-to-body="false" default-active="1">
    <template slot="title">
      <i :class="['smp-nav-icon',menu.icon]"></i>
      <span>{{ menu.name }}</span>
    </template>
    <div v-if="menuClose" class="smpsm-close-hd">
      <span>{{menu.name}}</span>
      <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
    </div>
    <sub-menu v-for="item in menu.children" :key="item.id" :menu="item"></sub-menu>
  </el-submenu>
  <el-menu-item v-else :index="menu.id" @click="gotoRouteHandle(menu)" :class="[{'smpsbm-lv2':menu.lv===2}]">
    <i v-if="menu.lv===1" :class="['smp-nav-icon',menu.icon]"></i>
    <em class="smpsbm-point" v-if="menu.lv===2">&middot;</em>
    <span class="smpsbm-name">
      {{ menu.name }}
    </span>
  </el-menu-item>
</template>

<script>
import SubMenu from './main-sidebar-sub-menu'
export default {
  name: 'sub-menu',
  data () {
    return {
      menuClose: this.$store.state.sidebarFold
    }
  },
  props: {
    menu: {
      type: Object,
      required: true
    },
    activeIndex: {
      type: String,
      default: ''
    }
  },
  components: {
    SubMenu
  },
  methods: {
    gotoRouteHandle (item) {
      if (item.url) {
        this.$router.push({ path: item.url })
      }
    }
  }
}
</script>
