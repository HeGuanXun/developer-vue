import Vue from 'vue'
import Element from 'element-ui'
import App from '@/App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import '@/icons'
import '@/element-ui/trsTheme/index.css'
import '@/assets/scss/aui.scss'
import "@/styles/index.scss";
import http from '@/utils/request'
import api from '@/utils/host'
import postReq from '@/api'
import utils from '@/utils'
import filter from '@/utils/filter'
import cloneDeep from 'lodash/cloneDeep'
import BaiduMap from 'vue-baidu-map'
import echarts from 'echarts'
import formValidation from '@/assets/js/formValidation'
import {loadingObj} from "@/utils/globalMixin";
import {messageBox} from "@/utils/myElement"

Vue.prototype.messageBox = messageBox
Vue.prototype.formValidation = formValidation
// import vueXlsxTable from 'vue-xlsx-table'
Vue.prototype.echarts = echarts
// import liquidFill from 'echarts-liquidFill'

Vue.config.productionTip = false

Vue.use(Element, {
  size: 'default',
  i18n: (key, value) => i18n.t(key, value)
})

// Vue.use(vueXlsxTable, {rABS: false})

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'nL5KEWLUYhIxbFlhPGEAKN5aAzO1lMiY'
})

// 非生产环境, 适配mockjs模拟数据                 // api: https://github.com/nuysoft/Mock
if (process.env.NODE_ENV !== 'production') {
  require('@/mock')
}

Vue.mixin({
    ...loadingObj
})

// 挂载全局
Vue.prototype.$http = http
Vue.prototype.$store = store
Vue.prototype.$postReq = postReq
Vue.prototype.$utils = utils
Vue.prototype.$api = api // 引入通用接口地址
Vue.prototype.$echarts = echarts

Object.keys(filter).forEach(key => Vue.filter(key, filter[key]))// 定义全局过滤器

// 保存整站vuex本地储存初始状态
window.SITE_CONFIG['storeState'] = cloneDeep(store.state)

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
