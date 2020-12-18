<template>
  <div :class="{'hidden':hidden}" class="pagination-container">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
        v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>

export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default () {
        return [5, 10, 20, 30]
      }
    },
    layout: {
      type: String,
      default: 'total,sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    // autoScroll: {
    //   type: Boolean,
    //   default: true
    // },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get () {
        return this.page
      },
      set (val) {
        this.$emit('update:page', val)
      }
    },
    pageSize: {
      get () {
        return this.limit
      },
      set (val) {
        this.$emit('update:limit', val)
      }
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(val)
      let obj = { page: this.currentPage, pageSize: val }
      this.$emit('pagination', obj)
      // if (this.autoScroll) {
      //   scrollTo(0, 800)
      // }
    },
    handleCurrentChange (val) {
      console.log(val)
      let obj = { page: val, pageSize: this.pageSize }
      this.$emit('pagination', obj)
      // if (this.autoScroll) {
      //   scrollTo(0, 800)
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-container {
  background: #fff;
  padding: 0 16px;
}
.pagination-container.hidden {
  display: none;
}
/*.el-pager li{*/
/*  border: 1px solid #e7e7e7;*/
/*  border-radius: 3px;*/
/*  padding:0;*/
/*}*/
</style>
