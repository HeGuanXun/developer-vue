import Vue from 'vue'
import { MessageBox } from 'element-ui'
export let messageBox = (message = '收到一条消息', title = '提示信息', delay = 2000, callback)=>{
      // 模拟esc关闭
  HTMLElement.prototype.pressKey = function(code) {
    let evt = document.createEvent('UIEvents');
    evt.keyCode = code;
    evt.initEvent('keydown', true, true);
    this.dispatchEvent(evt);
  };
  // 打开msgbox瞬间模拟点击esc关闭
  setTimeout( ()=>{
    document.body.pressKey(27)
  }, 1)
  Vue.prototype.$alert(message, title, {
    showConfirmButton: false,
    closeOnPressEscape: true,
    showClose: false,
    // 延时关闭
    beforeClose: (action, instance, done) => {
      setTimeout(() => done(), delay);
    },
    // 回调
    callback: callback
  })
}

