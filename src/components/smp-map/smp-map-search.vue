<template>
  <div class="smp-map-search">
    <div class="smpms-l">
      <div class="smpmsl-l">
        <i class="smp-nav-icon-16 smp-ni16-sy_dw"></i>
      </div>
      <div class="smpmsl-r">
        <el-select class="smp-map-select" v-model="city" placeholder="请选择">
          <el-option
            v-for="(item,index) in cityArr"
            :key="index"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="smpms-r">
      <div class="smpmsr-l">
        <el-select class="smp-map-select" v-model="serachType" placeholder="请选择">
          <el-option
            v-for="(item,index) in serachTypeArr"
            :key="index"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </div>
      <div class="smpmsr-c">
        <el-input class="smp-input" v-model="serachVlue" placeholder="请输入内容"></el-input>
      </div>
      <div class="smpmsr-r">
        <el-button type="primary" icon="el-icon-search"></el-button>
      </div>
    </div>
  </div>
</template>

<script>
// props:
// list_data{
//   type
//   title
//   time
// }
// titleName:['type','title','time']
export default {
  data () {
    return {
      serachVlue: '',
      serachType: '',
      serachTypeArr: [
        {
          name: '人员',
          id: '1'
        },
        {
          name: '地点',
          id: '2'
        }
      ],
      city: '',
      cityArr: [
        {
          name: '海口',
          id: '1'
        },
        {
          name: '文昌',
          id: '2'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
.smp-map-search{
  padding: 0!important;
}
</style>
