/**
 * 用于表单验证
 * 使用示例 -- this.formValidation.specialCharacters
 * rules: {
 *  eventName: [
 *    { required: true, message: '不能为空', trigger: 'blur' },
 *    { validator: this.formValidation.specialCharacters, message: '不能输入特殊字符', trigger: 'blur' }
 *  ],
 * }
 * @type {RegExp}
 */


/**
 * 验证使用的正则
 * @type {RegExp}
 */
//不能输入特殊字符
const specialCharactersValidation = /^[\u4e00-\u9fa50-9A-Za-z]*$/;
//只能为英文及数字
const englishNumbersValidation = /^[A-Za-z0-9]+$/;
//只能为中文
const chineseValidation = /^[\u4E00-\u9FA5]{1,5}$/;
//验证身份证号码
const idCardNoValidation = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
//验证手机号码
const mobilePhoneValidation = /^1[0-9]{10}$/;


/**
 * 一系列的参数：rule
 * 单个input输入的值：value
 * 设置的验证失败提示语：callback
 * @type {{specialCharacters: formValidation.specialCharacters}}
 */
const formValidation = {
  //不能输入特殊字符
  specialCharacters: (rule, value, callback) => {
    if (specialCharactersValidation.test(value) || !value) {
      callback();
    }else {
      callback(rule.message);
    }
  },

  //只能输入英文及数字
  englishNumbers: (rule, value, callback) => {
    if (englishNumbersValidation.test(value) || !value) {
      callback();
    }else {
      callback(rule.message);
    }
  },

  //只能为中文
  chinese: (rule, value, callback) => {
    if (chineseValidation.test(value) || !value) {
      callback();
    }else {
      callback(rule.message);
    }
  },

  //验证身份证号码
  idCardNo: (rule, value, callback) => {
    if (idCardNoValidation.test(value) || !value) {
      callback();
    }else {
      callback(rule.message);
    }
  },

  //验证手机号码
  mobilePhone: (rule, value, callback) => {
    if (mobilePhoneValidation.test(value) || !value) {
      callback();
    }else {
      callback(rule.message);
    }
  },

}

//抛出
export default formValidation;
