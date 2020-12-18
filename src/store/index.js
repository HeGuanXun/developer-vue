import Vue from 'vue'
import Vuex from 'vuex'
import cloneDeep from 'lodash/cloneDeep'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    // 导航条, 布局风格, defalut(白色) / colorful(鲜艳)
    navbarLayoutType: 'colorful',
    // 侧边栏, 布局皮肤, default(白色) / dark(黑色)
    sidebarLayoutSkin: 'dark',
    // 侧边栏, 折叠状态
    sidebarFold: false,
    // 侧边栏, 菜单
    sidebarMenuList: [],
    //M模块菜单
    sidebarMenuList_m:[],
    sidebarMenuList_t:[],

    sidebarMenuActiveName: '',
    // 内容, 是否需要刷新
    contentIsNeedRefresh: false,
    // 内容, 标签页(默认添加首页)
    contentTabs: [
      {
        ...window.SITE_CONFIG['contentTabDefault'],
        'name': 'home',
        'title': 'home'
      }
    ],
    contentTabsActiveName: 'home',
    // 登录token
    sessionToken: '',
    // 用户信息
    userInfo: {},
    ciycleTimer: 5000 // 用于指定全局定时器轮询时间，单位毫秒
  },
  modules: {
    user
  },
  mutations: {
    // 重置vuex本地储存状态
    resetStore (state) {
      Object.keys(state).forEach((key) => {
        state[key] = cloneDeep(window.SITE_CONFIG['storeState'][key])
      })
    },

    // 存储loginToken
    SET_SESSION_TOKEN (state, token) {
      state.sessionToken = token;
      localStorage.setItem('sessionToken',token)
    },

    // 存储用户信息
    SET_USERINFO (state, userInfo) {
      state.userInfo = userInfo;
      localStorage.setItem('userInfo',JSON.stringify(userInfo))
    }

  }
})
