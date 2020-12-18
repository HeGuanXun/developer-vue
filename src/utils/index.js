import Cookies from 'js-cookie'
import store from '@/store'

Date.prototype.DateFormat = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
  }
  return fmt;
}
const utils = {
  getCurrentDateTime(fmt) {
    if (fmt == null || fmt == '') {
      fmt = 'yyyy-MM-dd hh:mm:ss';
    }
    return new Date().DateFormat(fmt)
  },
  getCurrentDate(fmt) {
    if (fmt == null || fmt == '') {
      fmt = 'yyyy-MM-dd';
    }
    return new Date().DateFormat(fmt)
  },
  /**
   * 权限
   * @param {*} key
   */
  hasPermission(key) {
    return window.SITE_CONFIG['permissions'].indexOf(key) !== -1 || false
  },
  /**
   * 清除登录信息
   */
  clearLoginInfo() {
    store.commit('resetStore')
    Cookies.remove('token')
    window.SITE_CONFIG['dynamicMenuRoutesHasAdded'] = false
  },
  /**
   * 获取uuid
   */
  getUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
    })
  },
  /**
   * 获取svg图标(id)列表
   */
  getIconList() {
    var res = []
    document.querySelectorAll('svg symbol').forEach(item => {
      res.push(item.id)
    })
    return res
  },
  /**
   * 树形数据转换
   * @param {*} data
   * @param {*} id
   * @param {*} pid
   */
  treeDataTranslate(data, id = 'id', pid = 'pid') {
    var res = []
    var temp = {}
    for (var i = 0; i < data.length; i++) {
      temp[data[i][id]] = data[i]
    }
    for (var k = 0; k < data.length; k++) {
      if (!temp[data[k][pid]] || data[k][id] === data[k][pid]) {
        res.push(data[k])
        continue
      }
      if (!temp[data[k][pid]]['children']) {
        temp[data[k][pid]]['children'] = []
      }
      temp[data[k][pid]]['children'].push(data[k])
      data[k]['_level'] = (temp[data[k][pid]]._level || 0) + 1
    }
    return res
  },
  timeFormat(time) {
    if (!time) {
      return '0分'
    }
    var h = parseInt(time / 3600)
    var m = time % 3600 % 60
    var strH = h === 0 ? '' : (h + '小时')
    var strM = m === 0 ? '' : (m + '分')
    return strH + strM
  },
  GetQueryString(url, name) {
    try {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
      var r = url.split('?')[1].match(reg);
      if (r != null) {
        return r[2];
      }
      return ''; // 如果此处只写return;则返回的是undefined
    } catch (e) {
      return ''; // 如果此处只写return;则返回的是undefined
    }
  },
  /**
   * 计算两个日期之间的天数
   * @param dateString1  开始日期 yyyy-MM-dd
   * @param dateString2  结束日期 yyyy-MM-dd
   * @returns {number} 如果日期相同 返回一天 开始日期大于结束日期，返回0
   */
  getDaysBetween(dateString1, dateString2) {
    let startDate = Date.parse(dateString1);
    let endDate = Date.parse(dateString2);
    if (startDate > endDate) {
      return 0;
    }
    if (startDate == endDate) {
      return 1;
    }
    let days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
    return days;
  }
}

export default utils
