import axios from 'axios'
import router from '@/router'
import qs from 'qs'
import { MessageBox } from "element-ui";
import isPlainObject from 'lodash/isPlainObject'

import store from '@/store'

const http = axios.create({
  timeout: 5000,
  withCredentials: true
})

function bussinesseError(text) {
  // this.messageBox(text, '提示信息', 1000)
  MessageBox.confirm(text, {
    showCancelButton:false,
    showConfirmButton:false,
    type: "warning"
  }).then(()=>{

  }).catch(()=>{

  })
}

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  //防止开发人员乱写请求路径
  // if(config.url !=null || config.url != '' || config.url != 'undefined' ){
  //   if (config.url.toString().indexOf('clue') == -1){
  //     throw new Error('请检查请求的URL是否包含 ‘clue’ 关键字');
  //   }
  // }
  // 临时免登陆
  // Cookies.set('token', '8dcbf9730cec72cf8435e4f7e67e27fc')
  // console.log(config.url)
  // config.headers['Accept-Language'] = Cookies.get('language') || 'zh-CN'
  // config.headers['token'] = Cookies.get('token') || ''
  // 默认参数
  var defaults = {}
  // console.log(store.state)
  //sessionToken
  if (localStorage.getItem('sessionToken')){
    config.headers['sessionToken'] = localStorage.getItem('sessionToken')
  }

  // 防止缓存，GET请求默认带_t参数
  if (config.method === 'get') {
    config.params = {
      ...config.params
      // ...{ '_t': new Date().getTime() }
    }
  }
  if (isPlainObject(config.params)) {
    config.params = {
      ...defaults,
      ...config.params
    }
  }
  if (isPlainObject(config.data)) {
    config.data = {
      ...defaults,
      ...config.data
    }

    const contentType = config.headers['Content-Type'];
    // 根据Content-Type转换data格式
    if (contentType) {
      // config.headers['Content-Type'] = contentType
      if (contentType.includes('json')) { // 类型 'application/json;'
        // 服务器收到的raw body(原始数据) "{name:"nowThen",age:"18"}"（普通字符串）
        config.data = JSON.stringify(config.data);
      } else if (contentType.includes('x-www-form-urlencoded')) { // 类型 'application/x-www-form-urlencoded;'
        // 服务器收到的raw body(原始数据) name=nowThen&age=18
        config.data = qs.stringify(config.data);
      }
    }
  }
  return config
}, error => {
  console.error('error',error)
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {

  // 返回的data string类型转json类型 idaas有些接口返回的是response.data.data是一个字符串
  // 当返回字符串含有}才进行json转换，不含}则不处理
  if (typeof response.data.data === 'string'){
    response.data.data = response.data.data == ''?{}:
      response.data.data.lastIndexOf("}") > -1 ? JSON.parse(response.data.data) : response.data.data;
  }

  if (response.data.status == 500){
     bussinesseError('服务异常，请联系管理员！！！')
  }
  // other bussiness code exception
  if (response.data.status != 200 && response.data.status!=500 && response.data.status != 404) {
     bussinesseError(response.data.msg)
    // return Promise.reject(response.msg)
  }


  return response
}, error => {
  //500 status
  console.error(error)
  // bussinesseError('操作失败，请联系管理员！')
  return Promise.reject(error)
})

export default http
