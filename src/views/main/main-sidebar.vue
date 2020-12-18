<template>
  <aside class="smp-sidebar" :class="{ 'smps-close': menuClose }">
    <div class="smps-hd" :class="{ 'smps-hdclose': menuClose }">
      <div class="smpsh-title">{{ menuName }}</div>
      <div class="smpsh-switch" :class="{ on: menuClose }" @click="switchMenu">
        <i class="smp-nav-icon-16 smp-ni16-slidebar-switch"></i>
      </div>
    </div>
    <div class="smps-bd">
      <el-menu
        :unique-opened="true"
        :collapseTransition="false"
        :collapse="menuClose"
        class="smps-menu"
      >
        <sub-menu v-for="menu in sidebarMenuList" :key="menu.id" :menu="menu" style="margin: 20px;color: #1e6abc"/>
      </el-menu>
    </div>
  </aside>
</template>

<script>
import SubMenu from "./main-sidebar-sub-menu";
import { eventBus } from "@/utils/BUS";
export default {
  data() {
    return {
      menuClose: this.$store.state.sidebarFold,
      menuName: "",
      //M模块菜单
      sidebarMenuList_m: [
        {
          name: "日报",
          id: "3",
          lv: 1,
          url: "/rentingHouse/index",
        },
        {
          name: "周报",
          id: "4",
          lv: 1,
          url: "/rentingHouse/index",
        },
        {
          name: "月报",
          id: "5",
          lv: 1,
          url: "/rentingHouse/index",
        },
      ],
      sidebarMenuList_t: [
        {
          name: "用户中心",
          id: "116",
          lv: 2,
          url: "/clueCollection/clue-classify",
        }
      ],
      sidebarMenuList: [],
    };
  },
  components: {
    SubMenu,
  },
  created() {
    // this.$store.state.sidebarMenuList = window.SITE_CONFIG['menuList'];
  },
  mounted() {
    this.$store.state.sidebarMenuList = this.sidebarMenuList_t;
    this.sidebarMenuList = this.sidebarMenuList_t;
    this.$store.state.sidebarMenuList_t = this.sidebarMenuList_t;
    this.$store.state.sidebarMenuList_m = this.sidebarMenuList_m;
    eventBus.$on("sidebarMenuList", (sidebarMenuList, menuName) => {
      this.menuName = menuName;
      this.$store.state.sidebarMenuList = sidebarMenuList;
      this.sidebarMenuList = this.$store.state.sidebarMenuList;
    });
  },
  beforeDestroy() {
    eventBus.$off("sidebarMenuList");
  },
  methods: {
    switchMenu() {
      this.menuClose = !this.menuClose;
      this.$store.state.sidebarFold = !this.$store.state.sidebarFold;
    },
  },
};
</script>
