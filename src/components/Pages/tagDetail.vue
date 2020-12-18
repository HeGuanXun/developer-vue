<template>
  <el-card class="text-content">
    <div
      v-if="peopleArr.length > 0 || carArr.length > 0 || shipArr.length > 0 || issArr.length > 0 || enterpriseArr.length > 0 || rentHouseArr.length > 0">
      <!--           人员           -->
      <span :hidden="peopleArr.length == 0" style="line-height: 40px">
            人员({{peopleArr.length}})：
            <span v-for="(item, index) in peopleArr" :key="index">
              <el-tooltip placement="top">
                <div slot="content" v-for="(i, k) in filterKey(item, 'peopleTextMap')">
                  {{peopleTextMap[k]}}：{{i}}
                </div>
                <el-tag
                  :disable-transitions="false"
                  class="mr10"
                >
                  {{!!item.peopleName ? item.peopleName : item.peopleIdCard}}
                </el-tag>
              </el-tooltip>
            </span>
          </span>
      <!--           车辆           -->
      <span :hidden="carArr.length == 0" style="line-height: 40px">
            车辆({{carArr.length}})：
            <span v-for="(item, index) in carArr" :key="index">
              <el-tooltip placement="top">
                <div slot="content" v-for="(i, k) in filterKey(item, 'vehicleTextMap')">
                  {{vehicleTextMap[k]}}：{{i}}
                </div>
                <el-tag
                  :disable-transitions="false"
                  class="mr10"
                >
                  {{!!item.carNumber ? item.carNumber : '脏数据'}}
                </el-tag>
              </el-tooltip>
            </span>
          </span>
      <!--           船只           -->
      <span :hidden="shipArr.length == 0" style="line-height: 40px">
            船舶({{shipArr.length}})：
            <span v-for="(item, index) in shipArr" :key="index">
              <el-tooltip placement="top">
                <div slot="content" v-for="(i, k) in filterKey(item, 'shipTextMap')">
                  {{shipTextMap[k]}}：{{i}}
                </div>
                <el-tag
                  :disable-transitions="false"
                  class="mr10"
                >
                  {{!!item.shipName ? item.shipName : '脏数据'}}
                </el-tag>
              </el-tooltip>
            </span>
          </span>
      <!--           低慢小           -->
      <span :hidden="issArr.length == 0" style="line-height: 40px">
            低慢小({{issArr.length}})：
            <span v-for="(item, index) in issArr" :key="index">
              <el-tooltip placement="top">
                <div slot="content" v-for="(i, k) in filterKey(item, 'issTextMap')">
                  {{issTextMap[k]}}：{{i}}
                </div>
                <el-tag
                  :disable-transitions="false"
                  class="mr10"
                >
                  {{!!item.issModels ? item.issModels : item.issNumber}}
                </el-tag>
              </el-tooltip>
            </span>
          </span>
      <!--           企业           -->
      <span :hidden="enterpriseArr.length == 0" style="line-height: 40px">
            企业({{enterpriseArr.length}})：
            <span v-for="(item, index) in enterpriseArr" :key="index">
              <el-tooltip placement="top">
                <div slot="content" v-for="(i, k) in filterKey(item, 'enterpriseMap')">
                  {{enterpriseMap[k]}}：{{i}}
                </div>
                <el-tag
                  :disable-transitions="false"
                  class="mr10"
                >
                  {{!!item.creditCode ? item.creditCode : '脏数据'}}
                </el-tag>
              </el-tooltip>
            </span>
          </span>
      <!--           房屋           -->
      <span :hidden="rentHouseArr.length == 0" style="line-height: 40px">
            房屋({{rentHouseArr.length}})：
            <span v-for="(item, index) in rentHouseArr" :key="index">
              <el-tooltip placement="top">
                <div slot="content" v-for="(i, k) in filterKey(item, 'houseMap')">
                  {{houseMap[k]}}：{{i}}
                </div>
                <el-tag
                  :disable-transitions="false"
                  class="mr10"
                >
                  {{!!item.houseCode ? item.houseCode : '脏数据'}}
                </el-tag>
              </el-tooltip>
            </span>
          </span>
    </div>
    <div v-else>未录入!</div>
  </el-card>
</template>

<script>
  export default {
    props: {
      tagArray: {
        type: Array,
        default() {
          return []
        }
      },
      attachment: {
        type: [Object, Array],
        default() {
          return []
        }
      },
      thingsCarVos: {
        type: Array,
        default() {
          return []
        }
      },
      peopleVos: {
        type: Array,
        default() {
          return []
        }
      },
      shipVos: {
        type: Array,
        default() {
          return []
        }
      },
      issVos: {
        type: Array,
        default() {
          return []
        }
      },
      enterpriseVos: {
        type: Array,
        default() {
          return []
        }
      },
      rentHouseVos: {
        type: Array,
        default() {
          return []
        }
      },
    },
    data() {
      return {
        peopleTextMap: {
          'peopleName': '姓名',
          'peopleIdCard': '身份证',
          'peopleGender': '性别',
          'peopleAge': '年龄',
          'nation': '民族',
          'peopleCadastral': '籍贯',
          'contactInfo': '联系方式',
          'address': '地址'
        },
        vehicleTextMap: {
          'carNumber': '车牌号',
          'carModels': '车牌类型',
          'carColor': '车身颜色',
          'brandModel': '品牌型号',
          'carType': '车辆类型',
          'carOwner': '车主',
          'nature': '使用性质'
        },
        shipTextMap: {
          'shipName': '船舶名',
          'shipType': '船舶类型',
          'shipCadastral': '船籍港',
          'shipNumber': 'IMO',
          'mmsi': 'MMSI',
          // 'ownerName': '所属人'
        },
        issTextMap: {
          'issType': '机种',
          'issModels': '机型',
          'maxTakeAltitude': '最大起飞海拔/m',
          'maxRange': '最大续航里程/km',
          'renewTime': '续航时间/分钟',
          'issNumber': '编号',
          // 'issCadastral': '所属机构',
          'ownerName': '所属人名称'
        },
        enterpriseMap: {
          'name': '企业名称',
          'creditCode': '组织机构代码',
        },
        houseMap: {
          'houseCode': '房屋编号',
          'address': '房屋地址',
        },
        peopleArr: [],
        carArr: [],
        shipArr: [],
        issArr: [],
        enterpriseArr: [],
        rentHouseArr: [],
      }
    },
    mounted() {
      this.peopleArr = this.filterArr(this.peopleVos, 'peopleIdCard')
      this.carArr = this.filterArr(this.thingsCarVos, 'carNumber')
      this.shipArr = this.filterArr(this.shipVos, 'shipNumber')
      this.issArr = this.filterArr(this.issVos, 'issNumber')
      this.enterpriseArr = this.filterArr(this.enterpriseVos, 'creditCode')
      this.rentHouseArr = this.filterArr(this.rentHouseVos, 'houseCode')
    },
    watch: {
      'peopleVos'() {
        this.peopleArr = this.filterArr(this.peopleVos, 'peopleIdCard')
      },
      'thingsCarVos'() {
        this.carArr = this.filterArr(this.thingsCarVos, 'carNumber')
      },
      'shipVos'() {
        this.shipArr = this.filterArr(this.shipVos, 'shipNumber')
      },
      'issVos'() {
        this.issArr = this.filterArr(this.issVos, 'issNumber')
      },
      'enterpriseVos'() {
        this.enterpriseArr = this.filterArr(this.enterpriseVos, 'creditCode')
      },
      'rentHouseVos'() {
        this.rentHouseArr = this.filterArr(this.rentHouseVos, 'houseCode')
      },
    },
    methods: {
      filterKey(item, type) {
        for (let key in item) {
          if (item[key] == '' || item[key] == null || this[type].hasOwnProperty(key) == false) delete item[key]
        }
        return item
      },
      filterArr(arr, key) {
        let obj = {};
        arr = arr.reduce(function (item, next) {
          obj[next[key]] ? '' : obj[next[key]] = true && item.push(next);
          return item;
        }, []);
        return arr
      }
    }
  }
</script>

<style scoped>

</style>
