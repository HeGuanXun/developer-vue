<template>
  <div v-if="innerVisible">
    <!--人员信息表单-->
    <el-form :inline="true" :model="peopleForm" label-width="100px" label-position="right" :rules="rules"
             ref="peopleForm" v-if="objectType=='0'">
      <el-row :gutter="30">
        <el-col :span="12">
          <el-form-item :label="peopleTextMap.peopleName+'：'" prop="peopleName" class="text-input-line">
            <el-input v-model="peopleForm.peopleName" clearable maxlength="10"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="peopleTextMap.peopleIdCard+'：'" prop="peopleIdCard" class="text-input-line">
            <el-input v-model="peopleForm.peopleIdCard" clearable maxlength="18"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="peopleTextMap.peopleGender+'：'" prop="peopleGender" class="text-input-line">
            <el-radio-group v-model="peopleForm.peopleGender">
              <el-radio label="0" value="0">男</el-radio>
              <el-radio label="1" value="1">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="peopleTextMap.peopleAge+'：'" class="text-input-line" prop="peopleAge">
            <el-input v-model.number="peopleForm.peopleAge" clearable maxlength="3"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="peopleTextMap.peopleCadastral+'：'" class="text-input-line" prop="peopleCadastral">
            <!--              <el-input v-model.number="peopleForm.peopleCadastral" clearable maxlength="128"-->
            <!--              ></el-input>-->
            <el-select
              v-model="peopleForm.peopleCadastral"
              clearable
              placeholder="请选择"
              filterable
              allow-create
              style="width: 100%">
              <el-option
                v-for="item in provinceOpts"
                :key="item.name"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="peopleTextMap.nation+'：'" class="text-input-line" prop="nation">
            <el-select v-model="peopleForm.nation" clearable placeholder="请选择" style="width: 100%">
              <el-option
                v-for="item in nationOpts"
                :key="item.id"
                :label="item.value"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="peopleTextMap.contactInfo+'：'" prop="contactInfo" class="text-input-line">
            <el-input v-model="peopleForm.contactInfo" clearable maxlength="10"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="peopleTextMap.address+'：'" class="text-input-line"
                        prop="address">
            <el-input v-model="peopleForm.address" clearable maxlength="128"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!--人员对象表单-->
    <!--车辆对象表单-->
    <el-form :inline="true" :model="vehicleForm" label-width="100px" label-position="right" :rules="rules"
             ref="vehicleForm" v-if="objectType=='1'">
      <el-row :gutter="30">
        <el-col :span="12">
          <el-form-item :label="vehicleTextMap.carNumber+'：'" prop="carNumber" class="text-input-line">
            <el-input v-model="vehicleForm.carNumber" clearable maxlength="32"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="vehicleTextMap.carType+'：'" class="text-input-line" prop="carType">
            <el-select v-model="vehicleForm.carType" clearable placeholder="请选择">
              <el-option
                v-for="item in carTypeOptions"
                :key="item.key"
                :label="item.value"
                :value="item.key">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="vehicleTextMap.carColor+'：'" prop="carColor" class="text-input-line">
            <el-input v-model="vehicleForm.carColor" clearable maxlength="128"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="vehicleTextMap.brandModel+'：'" class="text-input-line" prop="brandModel">
            <el-input v-model="vehicleForm.brandModel" clearable maxlength="32"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="vehicleTextMap.carModels+'：'" prop="carModels" class="text-input-line">
            <el-select v-model="vehicleForm.carModels" clearable placeholder="请选择">
              <el-option
                v-for="item in carModelOptions"
                :key="item.id"
                :label="item.value"
                :value="item.key">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="vehicleTextMap.carOwner+'：'" class="text-input-line" prop="carOwner">
            <el-input v-model="vehicleForm.carOwner" clearable maxlength="32"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item :label="vehicleTextMap.natureOfUse+'：'" class="text-input-line specialInput" prop="nature">
            <el-radio-group v-model="vehicleForm.nature">
              <el-radio
                v-for="(item, index) in natureOptions"
                :key="item.id"
                :label="item.value"
                :value="item.key"
              ></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!--车辆对象表单-->
    <!--船舶对象表单-->
    <el-form :inline="true" :model="shipForm" label-width="100px" label-position="right" :rules="rules"
             ref="shipForm" v-if="objectType=='2'">
      <el-row :gutter="30">
        <el-col :span="12">
          <el-form-item :label="shipTextMap.shipName+'：'" prop="shipName" class="text-input-line">
            <el-input v-model="shipForm.shipName" clearable maxlength="32"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="shipTextMap.shipType+'：'" prop="shipType" class="text-input-line">
            <el-select v-model="shipForm.shipType" clearable placeholder="请选择">
              <el-option
                v-for="item in shipTypeOptions"
                :key="item.key"
                :label="item.value"
                :value="item.key">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="shipTextMap.shipCadastral+'：'" prop="shipCadastral" class="text-input-line">
            <el-input v-model="shipForm.shipCadastral" clearable maxlength="128"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="shipTextMap.shipNumber+'：'" prop="shipNumber" class="text-input-line">
            <el-input v-model="shipForm.shipNumber" clearable maxlength="128"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="shipTextMap.mmsi+'：'" class="text-input-line" prop="mmsi">
            <el-input v-model="shipForm.mmsi" clearable maxlength="128"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!--船舶对象表单-->
    <!--低慢小对象表单-->
    <el-form :inline="true" :model="issForm" label-width="150px" label-position="right" :rules="rules"
             ref="issForm" v-if="objectType=='3'">
      <el-row :gutter="30">
        <el-col :span="12">
          <el-form-item :label="issTextMap.issType+'：'" prop="issType" class="text-input-line">
            <el-select v-model="issForm.issType" clearable placeholder="请选择">
              <el-option
                v-for="item in issTypeOptions"
                :key="item.key"
                :label="item.value"
                :value="item.key">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="issTextMap.issModels+'：'" prop="issModels" class="text-input-line">
            <el-input v-model="issForm.issModels" clearable maxlength="32"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="issTextMap.issNumber+'：'" prop="issNumber" class="text-input-line">
            <el-input v-model="issForm.issNumber" clearable maxlength="32"
            ></el-input>
          </el-form-item>
        </el-col>
<!--        <el-col :span="12">-->
<!--          <el-form-item :label="issTextMap.issCadastral+'：'" class="text-input-line" prop="issCadastral">-->
<!--            <el-input v-model="issForm.issCadastral" clearable maxlength="32"-->
<!--            ></el-input>-->
<!--          </el-form-item>-->
<!--        </el-col>-->
        <el-col :span="12">
          <el-form-item :label="issTextMap.maxTakeAltitude+'：'" class="text-input-line" prop="maxTakeAltitude">
            <el-input v-model="issForm.maxTakeAltitude" clearable maxlength="32"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="issTextMap.maxRange+'：'" class="text-input-line" prop="maxRange">
            <el-input v-model="issForm.maxRange" clearable maxlength="32"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="issTextMap.renewTime+'：'" class="text-input-line" prop="renewTime">
            <el-input v-model="issForm.renewTime" clearable maxlength="32"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="issTextMap.ownerName+'：'" class="text-input-line" prop="ownerName">
            <el-input v-model="issForm.ownerName" clearable maxlength="32"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!--低慢小对象表单-->

    <!--企业表单对象-->
    <el-form :inline="true" :model="qyForm" label-width="120px" label-position="right" :rules="rules"
             ref="qyForm" v-if="objectType=='4'">
      <el-row :gutter="30">
        <el-col :span="12">
          <el-form-item :label="qyTextMap.code+'：'" class="text-input-line" prop="creditCode">
            <el-input v-model="qyForm.creditCode" clearable maxlength="32"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="qyTextMap.name+'：'" class="text-input-line" prop="qyName">
            <el-input v-model="qyForm.name" clearable maxlength="32"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!--企业表单对象-->

    <!--企业表单对象-->
    <el-form :inline="true" :model="fwForm" label-width="120px" label-position="right" :rules="rules"
             ref="fwForm" v-if="objectType=='5'">
      <el-row :gutter="30">
        <el-col :span="12">
          <el-form-item :label="fwTextMap.code+'：'" class="text-input-line" prop="houseCode">
            <el-input v-model="fwForm.houseCode" clearable maxlength="32"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="fwTextMap.addr+'：'" class="text-input-line" prop="fwAddr">
            <el-input v-model="fwForm.address" clearable maxlength="32"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!--企业表单对象-->
  </div>
</template>

<script>
import provinceOpts from '@/utils/province'
export default {
  name: 'ObjectForm',
  props: {
    objectType: {
      type: [Number, String],
      require: true
    },
    objectTypeVisible: {
      type: Boolean,
      default: false
    },
    datas:{
      type: Object,
      default: {}
    }
    // dialogStatus:{
    //   type: String,
    //   default: 'create'
    // },
    // editRowIndex:{
    //   type: [Number, String]
    // }
  },
  computed: {
    innerVisible: {
      get () {
        return this.objectTypeVisible;
      },
      set (val) {
        this.$emit('on-visible', val);
      }
    }
  },
  data () {
    var checkAge = (rule, value, callback) => {
      if (value && !Number.isInteger(value)) {
        callback(new Error('请输入数字值'));
      } else {
        callback()
      }
    };
    return {
      // form校验规则
      rules: {
        urgentLv: [{required: true, message: '请选择紧急程度', trigger: 'change'}],
        title: [{required: true, message: '标题为空', trigger: 'change'}],
        happenTime: [{required: true, message: '请选择日期时间', trigger: 'change'}],
        foundTime: [{required: true, message: '请选择日期时间', trigger: 'change'}],
        clueContent: [{required: true, message: '请输入线索内容', trigger: 'change'}],
        peopleName: [{required: true, message: '姓名为空', trigger: 'change'}],
        /* peopleAge: [
          {required: true, message: '年龄为空', trigger: 'change'},
          {
            pattern: /^(?:[1-9][0-9]?|1[01][0-9]|120)$/,
            message: '年龄必须在1-120区间'
          }
        ], */
        peopleAge: [{validator: checkAge, trigger: 'change'}],
        // peopleIdCard: [{required: true, message: '身份证为空', trigger: 'change'}],
        peopleIdCard: [{required: true, pattern: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/, message: '请输入正确的证件号', trigger: 'change'}],
        // peopleGender: [{required: true, message: '性别为空', trigger: 'change'}],
        carNumber: [{required: true, message: '车牌号为空', trigger: 'change'}],
        carType: [{required: true, message: '车辆类型为空', trigger: 'change'}],
        // carColor: [{required: true, message: '车身颜色为空', trigger: 'change'}],
        shipName: [{required: true, message: '船舶名为空', trigger: 'change'}],
        shipType: [{required: true, message: '船舶类型为空', trigger: 'change'}],
        shipCadastral: [{required: true, message: '船籍港为空', trigger: 'change'}],
        shipNumber: [{required: true, message: 'IMO为空', trigger: 'change'}],
        issType: [{required: true, message: '机种为空', trigger: 'change'}],
        issModels: [{required: true, message: '机型为空', trigger: 'change'}],
        issNumber: [{required: true, message: '编号为空', trigger: 'change'}],
        creditCode:[{required: true, message: '组织机构代码为空', trigger: 'change'}],
        houseCode:[{required: true, message: '房屋编号为空', trigger: 'change'}],
        contactInfo: [{
          pattern: /^[0-9]*$/,
          message: '请输入数字',
          trigger: 'blur'
        }],
      },
      peopleForm: {
        peopleName: '',
        peopleIdCard: '',
        peopleGender: '0',
        peopleAge: '',
        nation: '',
        peopleCadastral: '',
        contactInfo:'',
        address:''
      },
      vehicleForm: {
        carNumber: '',
        carModels: '',
        carColor: '',
        brandModel: '',
        carType: '',
        carOwner: '',
        nature: ''
      },
      shipForm: {
        shipName: '',
        shipType: '',
        shipCadastral: '',
        shipNumber: '',
        ownerName: '',
        mmsi:''
      },
      issForm: {
        issType: '',
        issModels: '',
        issNumber: '',
        maxTakeAltitude: '',
        maxRange: '',
        renewTime: '',
        issCadastral: '',
        ownerName: ''
      },
      qyForm: {
        creditCode:'',
        name:''
      },
      fwForm: {
        houseCode:'',
        address:''
      },
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
        'carType': '车辆类型',
        'carColor': '车身颜色',
        'brandModel': '品牌型号',
        'carModels': '车牌类型',
        'carOwner': '车主',
        'natureOfUse': '使用性质'
      },
      shipTextMap: {
        'shipName': '船舶名',
        'shipType': '船舶类型',
        'shipCadastral': '船籍港',
        'shipNumber': 'IMO',
        'ownerName': '所属',
        'mmsi':'MMSI'
      },
      issTextMap: {
        'issType': '机种',
        'issModels': '机型',
        'issNumber': '编号',
        'issCadastral': '所属机构',
        'ownerName': '所属人名称',
        'maxTakeAltitude': '最大起飞海拔/m',
        'maxRange': '最大续航里程/km',
        'renewTime': '续航时间/m',
      },
      qyTextMap: {
        'code': '组织机构代码',
        'name': '企业名称'
      },
      fwTextMap: {
        'code': '房屋编号',
        'addr': '房屋地址'
      },
      provinceOpts:provinceOpts,
      nationOpts:[],
      carModelOptions:[],
      natureOptions: [
        {key: '营运', value: '营运'},
        {key: '出租车', value: '出租车'},
        {key: '非营运', value: '非营运'},
        {key: '营转非', value: '营转非'},
        {key: '出租营转非', value: '出租营转非'},
        {key: '教练车', value: '教练车'},
        {key: '其他', value: '其他'},
      ],
      dialogTitleMap: {'create': '新增', 'edit': '编辑'},
      formTitleMap: ['人员信息', '车辆信息', '船舶信息', '低慢小信息'],
      formStatus: '', // 内嵌弹出层显示的form
      peopleTable: [],
      vehicleTable: [],
      shipTable: [],
      issTable: [],
      options: [], // 新增弹窗里的线索类型
      credibleOptions: [], // 新增弹窗里的可信度
      reliableOptions: [], // 新增弹窗里的可靠性
      urgentLevelOptions: [], // 新增弹窗里的紧急程度
      carTypeOptions: [], // 对象弹窗里的车辆类型
      shipTypeOptions: [], // 对象弹窗里的船舶类型
      issTypeOptions: [], // 低漫小机种类型
      clueUnitOptions: []
    }
  },
  created () {
    // 新增弹窗里的字典
    // this.fetchConditionData('CLUE_TYPE'); // 线索类型
    // this.fetchConditionData('LBOSTRDXPG'); // 线索可信度
    // this.fetchConditionData('CLUE_RELIABLE_LEVEL'); // 线索可靠性
    // this.fetchConditionData('CLUE_URGENT_LEVEL'); // 线索紧急程度
    this.fetchConditionData('CLUEOBJ_CAR_TYPE'); // 车牌类型
    this.fetchConditionData('CLUEOBJ_SHIP_TYPE'); // 船舶类型
    this.fetchConditionData('CLUEOBJ_ISS_TYPE'); // 低漫小 机种
    this.fetchConditionData('NATION'); // 民族
    this.fetchConditionData('CLUEOBJ_CAR_LICENCEPLATE_TYPE'); // 车牌类型


  },
  mounted() {
    // this.initData()
  },
  methods: {
    initData(datas){
      if (this.objectType == 0){
       this.peopleForm = {
          peopleName: datas.peopleName || '',
          peopleIdCard: datas.peopleIdCard || '',
          peopleGender: datas.peopleGender+'' || '',
          peopleAge: parseInt(datas.peopleAge) || '',
          nation: datas.nation || '',
          peopleCadastral: datas.peopleCadastral || '',
          contactInfo:datas.contactInfo || '',
          address:datas.address || ''
        }
      }else if (this.objectType == 1){
        this.vehicleForm = {
          carNumber: datas.carNumber || '',
          carModels: datas.carModels || '',
          carColor: datas.carColor || '',
          brandModel: datas.brandModel || '',
          carType: datas.carType+'' || '',
          carOwner: datas.carOwner || '',
          nature: datas.nature || ''
        }
      }else if(this.objectType == 2){
        this.shipForm={
          shipName: datas.shipName || '',
          shipType: datas.shipType+'' || '',
          shipCadastral: datas.shipCadastral || '',
          shipNumber: datas.shipNumber || '',
          ownerName: datas.ownerName || '',
          mmsi:datas.mmsi || ''
        }
      }else if (this.objectType == 3){
        this.issForm={
          issType: datas.issType+'' || '',
          issModels: datas.issModels || '',
          issNumber: datas.issNumber || '',
          maxTakeAltitude: datas.maxTakeAltitude || '',
          maxRange: datas.maxRange || '',
          renewTime: datas.renewTime || '',
          issCadastral: datas.issCadastral || '',
          ownerName: datas.ownerName || ''
        }
      }else if (this.objectType == 4){
        this.qyForm={
          creditCode:datas.creditCode || '',
          name:datas.name || ''
        }
      }else if (this.objectType == 5){
        this.fwForm={
          houseCode:datas.houseCode || '',
          address:datas.address || ''
        }
      }
    },
    async fetchConditionData (code) {
      let params = {
        code: code
      }
      await this.$postReq.getConditionData(params).then(res => {
        if (code == 'CLUE_TYPE') { // 线索类型
          this.options = res.data
        } else if (code == 'LBOSTRDXPG') { // 线索可信度
          this.credibleOptions = res.data
        } else if (code == 'CLUE_RELIABLE_LEVEL') { // 线索可靠性
          this.reliableOptions = res.data
        } else if (code == 'CLUE_URGENT_LEVEL') { // 线索紧急程度
          this.urgentLevelOptions = res.data
        } else if (code == 'CLUEOBJ_CAR_TYPE') { // 车辆类型
          this.carTypeOptions = res.data
        } else if (code == 'CLUEOBJ_SHIP_TYPE') { // 对象弹窗里的船舶类型
          this.shipTypeOptions = res.data
        } else if (code == 'CLUEOBJ_ISS_TYPE') { // 低漫小机种类型
          this.issTypeOptions = res.data
        } else if (code == 'NATION'){ // 民族
          this.nationOpts = res.data
        } else if (code == 'CLUEOBJ_CAR_LICENCEPLATE_TYPE'){ //车牌类型
          this.carModelOptions = res.data
        }
      })
    },
    objValidate () {
      let validValue = ''
      if (this.objectType == 0) {
        this.$refs.peopleForm.validate((valid) => {
          validValue = valid
        })
      } else if (this.objectType == 1) {
        this.$refs.vehicleForm.validate((valid) => {
          validValue = valid
        })
      } else if (this.objectType == 2) {
        this.$refs.shipForm.validate((valid) => {
          validValue = valid
        })
      } else if (this.objectType == 3) {
        this.$refs.issForm.validate((valid) => {
          validValue = valid
        })
      }else if (this.objectType == 4) {
        this.$refs.qyForm.validate((valid) => {
          validValue = valid
        })
      }else if (this.objectType == 5) {
        this.$refs.fwForm.validate((valid) => {
          validValue = valid
        })
      }

      return validValue
    }
  },
  watch: {
    'objectType' () {
      console.log(this.objectType)
      if (this.$refs['peopleForm'] !== undefined) {
        this.$refs['peopleForm'].resetFields()
      }

      if (this.$refs['issForm'] !== undefined) {
        this.$refs['issForm'].resetFields()
      }

      if (this.$refs['vehicleForm'] !== undefined) {
        this.$refs['vehicleForm'].resetFields()
      }

      if (this.$refs['shipForm'] !== undefined) {
        this.$refs['shipForm'].resetFields()
      }

      if (this.$refs['qyForm'] !== undefined) {
        this.$refs['qyForm'].resetFields()
      }

      if (this.$refs['fwForm'] !== undefined) {
        this.$refs['fwForm'].resetFields()
      }
    }
  }
}
</script>

<style scoped>

</style>
