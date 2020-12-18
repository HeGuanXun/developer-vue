<template>
  <div>
    <div class="info-card2">
      <el-form ref="form5" :model="uploadData" class="smp-form" :rules="uploadRules">
        <el-form-item label="" prop="fileList" ref="fileList" style="margin:0;">
          <el-upload
            id="importFile"
            class="upload-wrap"
            :limit="1"
            ref="uploads"
            :file-list="uploadData.fileList"
            :show-file-list="false"
            :http-request="uploadFile"
            :before-upload="beforeAvatarUpload"
            :on-change="imageChange"
            :auto-upload="false"
            :action="''"
          >
            <div class="upload-block">
<!--              <div class="upload-button">-->
<!--                <i class="icon el-icon-plus"></i>-->
<!--              </div>-->
<!--              <p class="upload-desc">上传图片</p>-->
              <el-image :src="require('@/assets/img/judge/error5.png')" fit="contain"></el-image>
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div class="content_wrap">
        <div class="content" v-if="tempEdit==false">
          <div class="mb10">
            <span class="mr10">姓名：{{peopleObject.peopleName}}</span>
<!--            <el-tag type="danger" size="mini">吸毒人员</el-tag>-->
          </div>
          <div class="mb10">性别：{{peopleObject.peopleGenderName}}</div>
          <div class="mb10">年龄：{{peopleObject.peopleAge}}岁</div>
          <div>证件号码：{{peopleObject.peopleIdCard}}</div>
        </div>
        <div class="content peopleForm" v-else>
          <el-form :model="peopleObject" label-position="right"
                   ref="peopleObject">
            <el-form-item class="mb10">
              <el-input v-model="peopleObject.peopleName" placeholder="请输入人员姓名" clearable maxlength="10"
              ></el-input>
            </el-form-item>
            <el-form-item class="mb0">
              <el-input v-model="peopleObject.peopleIdCard" placeholder="请输入身份证号码" clearable maxlength="18"
              >
                <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
              </el-input>
            </el-form-item>
<!--            <el-form-item class="m0">-->
<!--              <div class="text-right">-->
<!--                <el-button type="primary" @click="handleSearch">查询</el-button>-->
<!--              </div>-->
<!--            </el-form-item>-->
          </el-form>
        </div>
      </div>
    </div>


    <el-dialog
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :modal-append-to-body="false"
      :append-to-body="true"
      :visible.sync="dialog1Visible"
      center
      width="1000px"
    >
      <div v-if="dialog1Status == 0">
        <el-steps :active="1" align-center>
          <el-step title="上传图片"></el-step>
          <el-step title="人员匹配"></el-step>
          <el-step title="人员选定"></el-step>
        </el-steps>
        <div class="text-center">
          <p class="primary-color mb10">已成功上传一张图片！</p>
          <div class="img_wrap mb15">
            <img src="@/assets/img/avatar.png" alt="">
          </div>
        </div>
      </div>
      <div v-else-if="dialog1Status == 1">
        <el-form :inline="true" :model="query" ref="query" class="smp-form">
          <el-form-item label="姓名：" prop="title">
            <el-input v-model="query.title" clearable placeholder="支持关键字搜索" maxlength="128"
            ></el-input>
          </el-form-item>
          <el-form-item label="身份证号码：" prop="title">
            <el-input v-model="query.title" clearable placeholder="支持关键字搜索" maxlength="128"
            ></el-input>
          </el-form-item>
          <el-button type="primary" class="small-button" @click="handleSearch">查询</el-button>
          <el-button class="small-button" @click="resetForm('query')"
          >重置
          </el-button>
        </el-form>
      </div>
      <el-table
        class="smp-table"
        style="width: 100%;"
        max-height="545px"
        :row-style="{height: '48px'}"
        :cell-style="{padding: '0'}"
        fixed
        :data="tableData"
      >
        <el-table-column
          type="index"
          header-align="center"
          align="center"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column prop="img" label="人像" header-align="center" align="center"
                         min-width="100">
          <template slot-scope="scope">
            <img :src="scope.row.img" alt="" width="100" height="100"/>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" header-align="center" align="center"
                         :show-overflow-tooltip="true" min-width="100">
        </el-table-column>
        <el-table-column prop="idcard" label="身份证号码" header-align="center" align="center"
                         :show-overflow-tooltip="true"
                         min-width="160">
        </el-table-column>
        <el-table-column prop="like" label="人像相似度" header-align="center" align="center"
                         :show-overflow-tooltip="true"
                         min-width="100"></el-table-column>
        <el-table-column
          :label="$t('handle')"
          fixed="right"
          header-align="center"
          align="center"
          min-width="100"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="chooseItem(scope.$index)">选定</el-button>
          </template>
        </el-table-column>
        <pagination :total="tableQuery.total" :page.sync="tableQuery.page" :limit.sync="tableQuery.pageSize"
                    @pagination="handleCurrentChange"/>
      </el-table>
      <div slot="footer" class="dialog-footer" v-if="dialog1Status == 0">
        <el-button type="primary" class="big-button" @click="showPeopleList">人员匹配</el-button>
        <el-button class="big-button" @click="dialog1Visible = false">取消</el-button>
      </div>

      <!--      <div slot="footer" class="dialog-footer" v-if="this.nextStepStatus!=0">-->
      <!--        <el-button @click="previousStep" class="big-button">{{ theCancle }}</el-button>-->
      <!--        <el-button type="primary" class="big-button" :disabled="isClick" @click="submitUpload" :loading="loading" v-if="this.nextStepStatus ==1">{{ nextStep }}</el-button>-->
      <!--        <el-button type="primary" class="big-button" :disabled="ifDisable" @click="theNextStep" v-else>{{ nextStep }}</el-button>-->
      <!--      </div>-->
    </el-dialog>
  </div>
</template>

<script>
  import Pagination from '@/components/Pagination'

  var validateFileUrl = (rule, value, callback) => {
    if (this.$refs.uploads.uploadFiles.length == 0) {
      callback(new Error('请上传素材文件'));
    } else {
      callback()
    }
  };
  export default {
    data() {
      return {
        tableQuery: {
          page: 1,
          pageSize: 10,
          total: 0
        },
        peopleObject: {},
        query: {
          setDisappearTime: '',
          date: ['', '']
        },
        uploadData: {
          fileList: [],
          title: '',
          selectValue: '',
          selectValue2: '',
          textarea: '',
        },
        uploadRules: {
          title: [{required: true, message: '请输入素材标题', trigger: 'change'}],
          textarea: [{required: true, message: '请输入素材详情', trigger: 'change'}],
          fileList: [{required: true, validator: validateFileUrl, trigger: 'change'}]
        },
        tableData: [
          {
            img: require('@/assets/img/avatar.png'),
            peopleName:'王二',
            peopleGenderName:'男',
            peopleAge:'22',
            peopleIdCard:'405041344242342424',
          }
        ],
        dialog1Visible: false,
        dialog1Status: 0,
        selectRowIndex: 0,
        nextStepStatus: '',
        tempEdit: false
      }
    },
    props:{
      edit:{
        type: Boolean,
        default: false
      }
    },
    computed:{
      editStatus:{
        get(){
          return this.edit
        },
        set(val){
          console.log('computed',val)
          this.tempEdit = val
        }
      }
    },
    components: {
      Pagination
    },
    mounted(){
      this.setUserData()
    },
    methods: {
      setUserData(){
        let peopleName = decodeURIComponent(this.$utils.GetQueryString(window.location.href, 'peopleName'))
        let peopleIdCard = decodeURIComponent(this.$utils.GetQueryString(window.location.href, 'peopleIdCard'))
        let peopleGenderName = decodeURIComponent(this.$utils.GetQueryString(window.location.href, 'peopleGenderName'))
        let peopleAge = decodeURIComponent(this.$utils.GetQueryString(window.location.href, 'peopleAge'))
        console.log(peopleIdCard!='' || peopleName!='')
        if(peopleIdCard!='' || peopleName!=''){
          this.editStatus = false
          this.peopleObject = {
            peopleName:peopleName,
            peopleIdCard:peopleIdCard,
            peopleGenderName:peopleGenderName,
            peopleAge:peopleAge
          }
        }
        else{
          this.editStatus = true
        }
      },
      // 上传研判素材
      submitUpload() {
        this.$refs['form5'].validate((valid) => {
          console.log('==valid1===', valid)
          if (valid) {
            console.log('==========开始保存========')
            // this.createTaskRequest()
            this.$refs.uploads.submit();
          }
        })
      },
      // 新增研判素材
      uploadFile(param) {
        console.log(param)
        let type = ''
        type = this.uploadData.selectValue == '' ? 4 : this.uploadData.selectValue
        var fileObj = param.file;
        var form = new FormData(); // 在创建FormData对象时指定表单的元素  我们需要传的参数
        form.append('file', param.file);
        form.append('comment', this.uploadData.textarea);
        form.append('title', this.uploadData.title);
        form.append('type', type);
        form.append('documentRelatedObjName', this.uploadData.selectValue2);

        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        this.$postReq.addMaterials(form, config).then(res => {
          if (res.status == '200') {
            this.closeDialog5()
            this.$alert(res.data, '提示', {
              confirmButtonText: '确定',
              type: 'success',
              callback: action => {
              }
            });
          }
        })
      },
      beforeAvatarUpload(file) {
        console.log('上传文件类型：' + file.type)
        // const isM = (file.type === 'image/png' || file.type === 'image/png');
        const isM = true;
        const isLt50M = file.size / 1024 / 1024 < 50;
        if (!isM) {
          this.$alert('上传的附件只能是 png 格式!', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            callback: action => {
            }
          });
        }
        if (!isLt50M) {
          this.$alert('上传的附件图片大小不能超过 50MB!', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            callback: action => {
            }
          });
        }
        return isM && isLt50M;
      },
      imageChange(file,fileList) {
        console.log(file)
        console.log(fileList)
        if (Object.keys(file).length > 0) {
          this.dialog1Status = 0
          this.dialog1Visible = true
        }
        //this.uploadname = file.name.substring(0, file.name.indexOf('.'))
      },
      handleSearch() {
        this.dialog1Status = 1
        this.dialog1Visible = true
      },
      resetForm(formName) {
        this.$nextTick(() => {
          this.$refs[formName].resetFields();
          this.tableQuery = {page: 1, pageSize: 10, total: 0};
        })
      },
      showPeopleList() {

      },
      chooseItem(index) {
        //console.log(index)
        this.dialog1Visible = false
        this.selectRowIndex = index
        this.peopleObject = this.tableData[index]
        this.$emit('returnData', {peopleObject: this.peopleObject});
      },
      // 重复线索分页
      handleCurrentChange(val) {
        this.tableQuery.page = val.page;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .upload-wrap /deep/ .el-upload {
    width: 100%;
  }

  .upload-block {
    width: 100px;
    height: 100px;
    background-color: #f3f3f3;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

    .icon {
      color: #1882f8;
    }

    /*.upload-button{*/
    /*  display: inline-block;*/
    /*  border: 1px solid #d5d5d5;*/
    /*  color: #232323;*/
    /*  padding: 0 20px;*/
    /*}*/

    .upload-desc {
      color: #9c9c9c;
    }
  }

  .peopleForm{
    /deep/ .el-form--inline .el-form-item{
      margin:0;
    }
  }

  .info-card2{
    /*align-items: flex-start;*/
    .content_wrap {
      height: auto;
      padding: 0 0 0 10px;
    }
  }

</style>
