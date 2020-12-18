<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
      <el-form-item label="风险等级：" prop="assessLevel">
        <el-radio-group v-model="ruleForm.assessLevel" size="medium">
          <el-radio border label="高风险"></el-radio>
          <el-radio border label="中风险"></el-radio>
          <el-radio border label="低风险"></el-radio>
          <el-radio border label="无风险"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="评估意见：" prop="assessOpinion">
        <el-input type="textarea" v-model="ruleForm.assessOpinion" placeholder="请输入评估意见" :autosize="{ minRows: 4}" maxlength="500" show-word-limit></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="el-button big-button el-button--primary el-button--default" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import '@/assets/css/perStyle.css'
export default {
  name: 'perUserRiskForm',
  props: ["userId"],
  data() {
    return {
      ruleForm: {
        assessLevel: '',
        assessOpinion:'',
      },
      rules: {
        assessLevel: [
          { required: true, message: '请选择风险等级', trigger: 'change' }
        ],
        assessOpinion: [
          { required: true, message: '请填写评估意见', trigger: 'blur' }
        ],
      },
    };
  },
  methods: {
    //提交表单
    submitForm (formName) {
      //
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = {
            fid: this.userId,
            assessOpinion: this.ruleForm.assessOpinion,
            assessLevel: this.ruleForm.assessLevel,
          }
          //弹出发送线索模态框
          this.$parent.$parent.$parent.$parent.dialogTableVisible = true;
          this.$parent.$parent.$parent.$parent.sonData = params;
        } else {
          return false;
        }
      });
    },
  },
}
</script>
