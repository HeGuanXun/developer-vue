<template>
  <div>
    <el-dialog
      class="tools-dialog"
      :visible.sync="visibleChange"
      width="900px"
      @opened="openedTools"
    >
      <div slot="title" class="top-header">
        <!--                <h3 class="inline-middle primary-color2">-->
        <!--                  <span>{{taskTitle}}</span>-->
        <!--                  <a href="javascript:;" class="mr10 white-link">（任务号{{taskNumber}}）</a>-->
        <!--                </h3>-->
        <p class="inline-middle white-link">
          <span class="mr10" v-if="entityType == 0">关于“{{peopleName}}”的研判工具集</span>
          <span class="mr10" v-else-if="entityType == 1">关于“{{carNumber}}”的研判工具集</span>
          <span class="mr10" v-else-if="entityType == 2">关于“{{shipName}}”的研判工具集</span>
          <span class="mr10" v-else-if="entityType == 3">关于“{{issNumber}}”的研判工具集</span>
          <span class="mr10" v-else>研判工具集</span>

          <span v-if="entityType == 0">身份证：</span><span>{{peopleIdCard}}</span>
          <!--              <span v-else-if="entityType == 1">身份证：</span><span>{{}}</span>-->
          <span v-if="entityType == 2">船型：</span><span>{{shipTypeName}}</span>
          <!--              <span v-else-if="entityType == 3">身份证：</span><span>{{peopleIdCard}}</span>-->
        </p>
      </div>

      <el-container>
        <el-aside width="250px" style="border-right: 1px solid #e7e7e7">
          <div class="keyword-border">
            <el-input placeholder="请输入内容" v-model="toolsSearch" class="input-with-select p10" clearable
                      @clear="analysisToolsTypeList">
              <el-button slot="append" icon="el-icon-search" @click="analysisToolsTypeList()"></el-button>
            </el-input>
            <el-tabs class="smp-tabs" tab-position="left" type="card" @tab-click="clickTab1">
              <el-tab-pane v-for="(item, index) in toolsTypeList" :key="index">
                <div slot="label">
                  <div class="flex-space-between">
                    <span>{{item.typeName}}</span>
                    <span class="label-badge" v-if="item.toolsCount > 0">{{item.toolsCount}}</span>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-aside>
        <el-main style="padding: 0;">
          <div class="tools-list">
            <div class="tools-item" @click="openNewPage(item.url,item.name)" v-for="(item,index) in toolsList">
              <el-popover
                placement="right"
                title=""
                width="200"
                trigger="hover"
                :content="item.reasons">
                <el-card class="box-card mb10" slot="reference">
                  <img :src="http+item.logoUrl" alt="" style="width:100%;height:100%;">
                </el-card>
              </el-popover>
              <p class="title">{{item.name}}</p>
            </div>
          </div>
          <div style="margin-bottom: 10px">
            <pagination :total="toolsQuery.total" :page.sync="toolsQuery.page" :limit.sync="toolsQuery.pageSize"
                        :pageSizes="[15,30]"
                        @pagination="handleCurrentChange"/>
          </div>

        </el-main>
      </el-container>
    </el-dialog>
  </div>
</template>

<script>
  import Pagination from '@/components/Pagination'
  import api from '@/utils/host';

  export default {
    name: "JudgeTools",
    props: {
      toolsData: {
        type: Object,
        default() {
          return {}
        }
      },
      visible: {
        type: Boolean,
        default: false
      },
      isConditions: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        dialog7Visible: false,
        entityType: '',
        peopleName: '',
        peopleIdCard: '',
        carNumber: '',
        shipTypeName: '',
        shipName: '',
        issNumber: '',
        peopleGenderName: '',
        peopleAge: '',
        toolsSearch: '',
        toolsQuery: {
          page: 1,
          pageSize: 15,
          total: 0
        }, // 分页条件
        tab1Index: '',
        toolsTypeList: [],
        toolsList: [],
        loading: false
      }
    },
    components: {
      Pagination
    },
    created() {
      this.http = api.fastFDFSDownloadHost
    },
    mounted() {

    },
    computed: {
      visibleChange: {
        get() {
          return this.visible;
        },
        set(value) {
          this.$emit('change-visible', value);
        }
      }
    },
    methods: {
      openedTools(entityType, index) {
        this.toolsList = []
        this.toolsTypeList = []

        let entityObject = {}
        let routeUrl = ''
        this.taskTitle = this.toolsData.taskTitle
        this.taskNumber = this.toolsData.taskNumber
        this.entityType = this.toolsData.entityType
        this.peopleName = this.toolsData.peopleName
        this.peopleIdCard = this.toolsData.peopleIdCard
        this.carNumber = this.toolsData.carNumber
        this.shipTypeName = this.toolsData.shipTypeName
        this.shipName = this.toolsData.shipName
        this.issNumber = this.toolsData.issNumber
        this.peopleGenderName = this.toolsData.peopleGenderName
        this.peopleAge = this.toolsData.peopleAge
        this.analysisToolsTypeList()

        //this.visibleChange = true
        //this.$emit('update:visible', this.dialog7Visible)
      },
      handleCurrentChange(val) {
        this.toolsQuery.page = val.page
        this.analysisToolsList()
      },
      openNewPage(url, toolsTitle) {
        console.log('url', url)
        let routeUrl = ''
        let linkUrl = url
        if (url.indexOf('http') == -1) {
          if (this.entityType == 0) {
            routeUrl = this.$router.resolve({
              path: '/judge/tools',
              query: {
                taskTitle: this.taskTitle,
                taskNumber: this.taskNumber,
                entityType: this.entityType,
                peopleName: this.peopleName,
                peopleIdCard: this.peopleIdCard,
                peopleGenderName: this.peopleGenderName,
                peopleAge: this.peopleAge,
                path: url,
                toolsTitle: toolsTitle
              }
            })
          } else if (this.entityType == 1) {
            routeUrl = this.$router.resolve({
              path: '/judge/tools',
              query: {
                taskTitle: this.taskTitle,
                taskNumber: this.taskNumber,
                entityType: this.entityType,
                carNumber: this.carNumber,
                peopleGenderName: this.peopleGenderName,
                peopleAge: this.peopleAge,
                path: url,
                toolsTitle: toolsTitle
              }
            })
          } else if (this.entityType == 2) {
            routeUrl = this.$router.resolve({
              path: '/judge/tools',
              query: {
                taskTitle: this.taskTitle,
                taskNumber: this.taskNumber,
                entityType: this.entityType,
                shipName: this.shipName,
                shipTypeName: this.shipTypeName,
                peopleGenderName: this.peopleGenderName,
                peopleAge: this.peopleAge,
                path: url,
                toolsTitle: toolsTitle
              }
            })
          } else if (this.entityType == 3) {
            routeUrl = this.$router.resolve({
              path: '/judge/tools',
              query: {
                taskTitle: this.taskTitle,
                taskNumber: this.taskNumber,
                entityType: this.entityType,
                issNumber: this.issNumber,
                peopleGenderName: this.peopleGenderName,
                peopleAge: this.peopleAge,
                path: url,
                toolsTitle: toolsTitle
              }
            })
          } else {
            routeUrl = this.$router.resolve({
              path: '/judge/tools',
              query: {
                path: url,
                toolsTitle: toolsTitle
              }
            })
          }
          console.log(
            'routeUrl',
            routeUrl
          )
          window.open(routeUrl.href, '_blank')
        } else {

          if (url.indexOf('{T.idCard}') != -1) {
            linkUrl = linkUrl.replace(/{T.idCard}/g, this.peopleIdCard)
          }

          if (url.indexOf('{T.sessionToken}') != -1) {
            linkUrl = linkUrl.replace(/{T.sessionToken}/g, localStorage.getItem('sessionToken'))
          }

          if (url.indexOf('{T.all}') != -1) {
            if (this.entityType == 0) {
              linkUrl = linkUrl.replace(/{T.all}/g, this.peopleIdCard)
            } else if (this.entityType == 1) {
              linkUrl = linkUrl.replace(/{T.all}/g, this.carNumber)
            } else if (this.entityType == 2) {
              linkUrl = linkUrl.replace(/{T.all}/g, this.shipName)
            } else if (this.entityType == 3) {
              linkUrl = linkUrl.replace(/{T.all}/g, this.issNumber)
            }
          }

          //linkUrl.replace(/{T.sessionToken}/g,this.peopleIdCard)
          window.open(linkUrl, '_blank')
        }

        //window.open('/#'+url, '_blank')

      },
      // 查询右侧工具集
      analysisToolsList() {
        let params = {
          environment: 0,
          name: this.toolsSearch,
          page: this.toolsQuery.page,
          pageSize: this.toolsQuery.pageSize,
          type: this.tab1Index,
          isConditions: this.isConditions,
          objs: this.entityType
        }
        this.$postReq.analysisToolsList(params).then(res => {
          if (res.status == 200) {
            this.toolsList = res.data
            this.toolsQuery.total = res.count
            //this.loading.close()
          }
        })
      },
      // 查询左侧分类的菜单
      analysisToolsTypeList() {
        // this.loading = this.$loading({
        //   lock: true,//同v-loading的修饰符
        //   text: '加载中...',//加载文案
        //   backgroundColor: 'rgba(0, 0, 0, 0.7)',//背景色
        //   spinner: 'el-icon-loading',//加载图标
        //   target: document.querySelector(".tools-dialog .el-dialog")//loading需要覆盖的DOM节点，默认为body
        // })
        let params = {
          environment: 0,
          name: this.toolsSearch,
          isConditions: this.isConditions,
          objs: this.entityType
        }
        this.$postReq.analysisToolsTypeList(params).then(res => {
          if (res.status == 200) {
            this.toolsTypeList = res.data
            this.analysisToolsList()
          }
        })
      },
      clickTab1(e) {
        let num = parseInt(e.index)
        this.tab1Index = this.toolsTypeList[num].type
        this.analysisToolsList()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tools-dialog {
    /deep/ .el-dialog__header {
      border-bottom: 1px solid #e7e7e7;
      background-color: #1280f1;
      padding: 20px 15px;
    }

    /deep/ .el-dialog__body {
      padding: 0;
    }

    /deep/ .el-dialog__headerbtn {
      top: 20px;
    }

    /deep/ .el-dialog__close {
      color: #fff;
      font-size: 20px;
    }

    .box-card {
      width: 109px;
      height: 109px;
    }

    .top-header {
      .imgbox {
        width: 150px;
      }

      .flex-item {
        height: 100%;
        display: flex;
        align-items: center;
      }
    }

    /*/deep/.el-input-group__append, .el-input-group__prepend{*/
    /*  background-color: #1280f1;*/
    /*  color: #fff;*/
    /*  border-color: #1280f1;*/
    /*}*/
  }

  .label-badge {
    height: 20px;
    line-height: 20px;
    background-color: #1280f1;
    color: #fff;
    border-radius: 15px;
    padding: 0 10px;
    font-size: 12px;
  }

  /deep/ .el-tabs {
    .el-tabs__header {
      width: 100%;
      /*background: #e6f2fe;*/
      /*padding: 0 20px;*/
    }

    .el-tabs__content {
      /*padding: 0 15px;*/
    }

    .el-tabs--left.el-tabs--card .el-tabs__nav {
      border-bottom: 0;
    }

    .el-tabs__nav-wrap::after {
      height: 0;
    }
  }

  .tools-list {
    min-height: 510px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    padding: 15px;

    .tools-item {
      margin: 0 7.5px 10px 7.5px;
      cursor: pointer;

      .title {
        min-height: 26px;
        text-align: center;
        font-size: 12px;
        width: 109px;
        overflow: hidden;
      }
    }
  }

  .entity-list {
    .img_wrap {
      width: 104px;
      height: 104px;
    }
  }
</style>
