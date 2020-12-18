import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import postReq from '@/api'
import http from '@/utils/request'
import {isURL} from '@/utils/validate'
import Cookies from 'js-cookie'
import {eventBus} from '@/utils/BUS'

Vue.use(Router)
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
// 页面路由(独立页面)
export const pageRoutes = [
  {
    path: '/404',
    component: () => import('@/views/pages/404'),
    name: '404',
    meta: {title: '404未找到'},
    beforeEnter(to, from, next) {
      // 拦截处理特殊业务场景
      // 如果, 重定向路由包含__双下划线, 为临时添加路由
      console.log('to', to)
      console.log('from', from)
      console.log('next', next)
      if (/__.*/.test(to.redirectedFrom)) {
        return next(to.redirectedFrom.replace(/__.*/, ''))
      }
      next()
    }
  },
  {path: '/login', component: () => import('@/views/pages/login'), name: 'login', meta: {title: '登录'}}
]

// 模块路由(基于主入口布局页面)
export const moduleRoutes = {
  path: '/',
  component: () => import('@/views/main/main'),
  name: 'main',
  redirect: {name: 'home'},
  meta: {title: '主入口布局'},
  children: [
    {path: 'home', component: () => import('@/views/pages/judgeHome'), name: 'home', meta: {title: '首页'}},
  ]
}

const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({y: 0}),
  routes: pageRoutes.concat(moduleRoutes)
})

router.beforeEach((to, from, next) => {
  // 截取路由中token进行处理
  filterToken(to, from, next)
  return next();
})

router.afterEach((to) => {
  if (to.name == 'clue-collection') eventBus.$emit("clue-collection")
})

/**
 * 截取路由中的token并进行处理
 *
 */
function filterToken(route, to, from, next) {
  let sessionToken = route.query.sessionToken;
  console.log(sessionToken)
  if (undefined != sessionToken) {
    store.commit('SET_SESSION_TOKEN', sessionToken);
    localStorage.removeItem('userInfo');
    localStorage.removeItem('allOrganization');
    postReq.getUserInfo().then(infoData => {
      store.commit('SET_USERINFO', infoData.data.userInfo)
      console.log('userInfo', infoData.data.userInfo);
    })
    postReq.getAllOrganizationMinimums().then(infoData => {
      localStorage.setItem('allOrganization', JSON.stringify(infoData.data.allOrganizations))
      console.log(infoData)
    })
  }
}

export default router
