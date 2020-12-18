<template>
  <div class="navbar-news">
    <div class="nn-item">
      <i class="smp-nav-icon smp-ni-news" style="cursor: pointer;" @click="clickNews">
        <span>5</span>
      </i>
    </div>
    <div class="nn-item">
      <i class="smp-nav-icon smp-ni-notice">
        <span>7</span>
      </i>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="800px"
      title="任务列表"
      :before-close="hideDialog">
      <el-tabs class="smp-tabs" type="card" @tab-click="clickTab" style="margin-top: -40px;">
        <el-tab-pane label="未处理">
          <div v-for="(item,index) in tableData0" :key="index" class="mt20 ml10 mr10 flex-space-between">
            <p><a href="javascript:;" @click="pressRead(item.id)">{{item.taskTitle}}</a></p>
            <p>{{item.updateTime?item.updateTime:''}}</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已处理">
          <div v-for="(item,index) in tableData1" :key="index" class="mt20 ml10 mr10 flex-space-between">
            <p><a href="javascript:;" @click="pressRead()">{{item.taskTitle}}</a></p>
            <p>{{item.updateTime?item.updateTime:''}}</p>
          </div>
        </el-tab-pane>
      </el-tabs>
      <pagination :total="tableQuery.total" :page.sync="tableQuery.page" :limit.sync="tableQuery.pageSize"
                  @pagination="handleCurrentChange"/>
    </el-dialog>
  </div>
</template>

<script>
  import Pagination from '@/components/Pagination'

export default {
  data () {
    return {
      isOpen: false,
      dialogVisible: false,
      tabIndex: 0,
      tableData0: '',
      tableData1: '',
      tableQuery: {
        page: 1,
        pageSize: 10,
        total: 0
      },
    }
  },
  created() {
  },
  methods: {
    getPressList(){
      let params = {
        isRead: this.tabIndex,
        page: this.tableQuery.page,
        pageSize: this.tableQuery.pageSize,
        sorter: ""
      }
      this.$postReq.qryPressTaskList(params).then(res => {
        console.log(res)
        if (res.status == 200) {
          if(this.tabIndex == 0){
            this.tableData0 = res.data.records
            this.tableQuery.total = res.data.total
          } else if(this.tabIndex == 1) {
            this.tableData1 = res.data.records
            this.tableQuery.total = res.data.total
          }
        }
      })
    },
    pressRead(id){
      // console.log(code)
      if(id){
        
        this.$postReq.pressRead(id).then(res => {
          console.log(res)
          if (res.status == 200) {

          }
        }).then( () => {
          window.location.href = 'http://www.baidu.com';
        }).catch( () => {
          window.location.href = 'http://www.baidu.com';
        })
      } else {
        window.location.href = 'http://www.baidu.com';
      }
    },
    clickTab(tab){
      this.tabIndex = tab.index
      this.tableQuery.page = 1
      this.tableQuery.total = 0
      this.getPressList()
    },
    handleCurrentChange (val) {
      this.tableQuery.page = val.page
      this.getPressList()
    },
    hideDialog(){
      this.dialogVisible = false
    },
    clickNews(){
      this.dialogVisible = true
      this.getPressList()
    }
  },
  components: {
    Pagination
  }
}
</script>

<style lang="scss">
.navbar-news{
  // padding: 0!important;
}
</style>
