import postReq from "../api";
import Vue from 'vue'
export let qryClueOptionByDictionary = (codeArr, targetArr) => {
  codeArr.forEach((item, index) => {
    Vue.prototype.$postReq.qryClueDictionary(item).then(res => {
      if (res.status == 200) {
        Vue.set(targetArr, index, res.data)
      }
    })
  })
}
