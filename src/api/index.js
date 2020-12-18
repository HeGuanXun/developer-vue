import http from '@/utils/request'
import api from '@/utils/host'
// axios#get(url[, config])
// axios#post(url[, data[, config]])
const postReq = {
  // 获取条件数据
  async getConditionData(params) {
    const {data} = await http.get(api.host + '/common/dictionary/query', {params})
    return data
  },
  // 获取线索相关字典
  async qryClueDictionary(params) {
    const {data} = await http.get(api.host + '/clue/dictionary/multistage?code=' + params)
    return data
  },
  // 线索评价
  async clueStageEvaluation(params) {
    const {data} = await http.get(api.host + '/clue/clue/addMoClueStageEvaluation', {params})
    return data
  },
  // 查询线索评价
  async qryClueValue(clueId) {
    const {data} = await http.get(api.host + '/clue/clue/getMoClueStageEvaluationByClueId?clueId='+clueId)
    return data
  },
  // 督导任务详情查询
  async getClueTask(code) {
    const {data} = await http.get(api.host + '/clue/supervisionTask/getSupervisionTaskByTaskCode?taskCode=' + code)
    return data
  },
  // 线索统计分析--查询线索本日新增
  async getClueDayAdd() {
    const {data} = await http.get(api.host + '/clue/statistica/getAddCountByDay')
    return data
  },
  // 线索统计分析--查询线索本月新增
  async getClueMonthAdd() {
    const {data} = await http.get(api.host + '/clue/statistica/getAddCountByMonth')
    return data
  },
  // 线索统计分析--查询线索本年新增
  async getClueYearAdd() {
    const {data} = await http.get(api.host + '/clue/statistica/getAddCountByYear')
    return data
  },
  // 线索统计分析--查询词云统计图
  async getCiYunChart(params) {
    const {data} = await http.get(api.host + '/clue/statistica/getCiYunChart', {params})
    return data
  },
  // 线索统计分析--查询线索趋势统计line图
  async getClueTrendChart(params) {
    const {data} = await http.get(api.host + '/clue/statistica/getClueTrendChart', {params})
    return data
  },
  // 线索统计分析--查询分拨任务处置情况bar图
  async getDeptDistChart(params) {
    const {data} = await http.get(api.host + '/clue/statistica/getDeptDistChart', {params})
    return data
  },
  // 线索统计分析--查询归档完成情况pie图
  async getFilingSituationChart(params) {
    const {data} = await http.get(api.host + '/clue/statistica/getFilingSituationChart', {params})
    return data
  },
  // 线索统计分析--查询热力图
  async getHotChart(params) {
    const {data} = await http.get(api.host + '/clue/statistica/getHotChart', {params})
    return data
  },
  // 伴随关系分析---(身份证，阈值，时间范围)=>(伴随排行)
  async getAccompanyRank(params) {
    const {data} = await http.post(api.host + '/trajectory/accompanyRelation/getAccompanyRank', params)
    return data
  },
  // 伴随关系分析---(身份证，阈值，时间范围)=>(被抓拍时间地点)
  async getCaptureList(params) {
    const {data} = await http.post(api.host + '/trajectory/accompanyRelation/getCaptureList', params)
    return data
  },
  // 伴随关系分析---(身份证，阈值，时间范围)=>(抓拍轨迹)
  async getAccompanyTrajectory(params) {
    const {data} = await http.post(api.host + '/trajectory/accompanyRelation/getAccompanyTrajectory', params)
    return data
  },
  // 伴随关系分析---(身份证，阈值，时间范围)=>(被抓拍总次数)
  async getCaptureCount(params) {
    const {data} = await http.post(api.host + '/trajectory/accompanyRelation/getCaptureCount', params)
    return data
  },
  // 出行规律分析---(身份证，时间范围，时间类型)=>(小时出行频率图)
  async getHourFrequency(params) {
    const {data} = await http.post(api.host + '/trajectory/lawAppearance/getLawAppearanceByHour', params)
    return data
  },
  // 出行规律分析---(身份证，时间范围，时间类型)=>(日出行频率图)
  async getDayFrequency(params) {
    const {data} = await http.post(api.host + '/trajectory/lawAppearance/getLawAppearanceByDay', params)
    return data
  },
  // 出行规律分析---(身份证，时间范围，时间类型)=>(周出行频率图)
  async getWeekFrequency(params) {
    const {data} = await http.post(api.host + '/trajectory/lawAppearance/getLawAppearanceByWeek', params)
    return data
  },
  // 出行规律分析---(身份证，时间范围，时间类型)=>(热力图/水滴图数据)
  async getHotDiagramVo(params) {
    const {data} = await http.post(api.host + '/trajectory/lawAppearance/getHotDiagramVo', params)
    return data
  },
  // 我的关注---获取已关注的对象
  async listAllQuery() {
    const {data} = await http.get(api.host + '/clue/attention/obj/listAllQuery')
    return data
  },
  // 我的关注---获取关注的所有线索(弹窗的线索列表）
  async clueAttentionQueryJoin(params) {
    const {data} = await http.get(api.host + '/clue/attention/obj/clueAttentionQueryJoin', {params})
    return data
  },
  // 我的关注---通过关注对象获取线索(外面的线索列表）
  async objToClueListQuery(params) {
    const {data} = await http.post(api.host + '/clue/attention/task/attentionListQuery', params)
    return data
  },
  // 我的关注---订阅关注对象
  async objInsert(params) {
    const {data} = await http.post(api.host + '/clue/attention/obj/objInsert', params)
    return data
  },
  // 我的关注---保存选中关注对象
  async preserveObj(params) {
    const {data} = await http.post(api.host + '/clue/attention/obj/preserveObj', params)
    return data
  },
  // 我的关注---删除选中关注对象
  async objDelete(config) {
    const {data} = await http.delete(api.host + '/clue/attention/obj/objDelete', config)
    return data
  },
  // 我的关注---获取研判任务列表
  async getJudgeTaskList(params) {
    const {data} = await http.post(api.host + '/clue/attention/task/clueListQuery', params)
    return data
  },
  // 我的关注---关注研判任务
  async addJudgeTaskList(params) {
    const {data} = await http.post(api.host + '/clue/attention/task/addAttention', params)
    return data
  },
  // 我的关注---删除已关注任务
  async deleteAttentionTask(params) {
    const {data} = await http.post(api.host + '/clue/attention/task/deleteAttention', params)
    return data
  },
  // 我的关注---获取对象的所有任务
  async getObjClueList(params) {
    const {data} = await http.get(api.host + '/clue/attention/obj/objToClueListQuery', {params})
    return data
  },
  // 我的关注---根据条件查询该对象的任务
  async deleteAttentionTa(params) {
    const {data} = await http.post(api.host + '/clue/attention/task/attentionListQuery', params)
    return data
  },
  // 线索串并---获取外界面----根据form信息查询第一个表格线索列表
  async clueBindList(params) {
    const {data} = await http.get(api.host + '/clue/bind/list', {params})
    return data
  },
  // 线索串并---点击表格查询第二个表格信息
  async bindClueList(params) {
    const {data} = await http.get(api.host + '/clue/bind/bindClueList', {params})
    return data
  },
  // 线索串并---点击新增串并线索和手动续传页面--表格数据
  async getCLueList(params) {
    const {data} = await http.get(api.host + '/clue/clueQuery', {params})
    return data
  },
  // 线索串并---外界面第二个表格取消采纳线索
  async updateInfoAdopt(params) {
    const {data} = await http.put(api.host + '/clue/bind/updateInfoAdopt', params)
    return data
  },
  // 线索串并---外界面-手工续传-确认串并
  async saveBindClue(params) {
    const {data} = await http.post(api.host + '/clue/bind/saveBindClue', params)
    return data
  },
  // 线索串并---新增串并---新增的紧急程度，线索类型，可靠度，敏感程度词典获取
  async dictionaryqueryList(params) {
    const {data} = await http.post(api.host + '/clue/dictionary/queryList', params)
    return data
  },
  // 线索串并---新增串并---新增--根据选取线索id获取附件
  async getEnclosures(params) {
    const {data} = await http.get(api.host + '/clue/attachment/markIdQueryList?markIDs=' + params)
    return data
  },
  // 线索串并---新增串并---新增--根据选取线索id获取对象
  async getClueBojs(params) {
    const {data} = await http.get(api.host + '/clue/clueThingsBatchQuery?clueIds=' + params)
    return data
  },
  // 线索串并---新增串并---新增--确认串并
  async cluebindcreate(params) {
    const {data} = await http.post(api.host + '/clue/bind/create', params)
    return data
  },
  // 重大事项风险评估首页--获取社会民意分析统计信息
  async majorIssuessGetStatistical() {
    const {data} = await http.get(api.host + '/major/majorIssuess/getStatistical')
    return data
  },
  // 重大事项风险评估首页--获取右侧重大事件列表
  async majorIssuessGetListPage(params) {
    const {data} = await http.post(api.host + '/major/majorIssuess/getListPage', params)
    return data
  },
  // 重大事项风险评估首页--获取热力图数据
  async majorIssuessGetHeatMap() {
    const {data} = await http.get(api.host + '/major/majorIssuess/getHeatMap')
    return data
  },
  // 重大事项风险评估首页--获取民意排行数据
  async majorIssuessGetRankingList(params) {
    const {data} = await http.post(api.host + '/major/majorIssuess/getRankingList', params)
    return data
  },
  // 重大事项风险评估首页--获取重大事件详情
  async majorIssuessetDetail(params) {
    const {data} = await http.get(api.host + '/major/majorIssuess/getDetail', {params})
    return data
  },
  // 重大事项风险评估首页--获取民意列表
  async majorIssuessgetOpinionInfo(params) {
    const {data} = await http.get(api.host + '/major/majorIssuess/getOpinionInfo', {params})
    return data
  },
  // 重大事项风险评估--获取时间跟踪列表
  async majorIssuessgetMatterTrack(params) {
    const {data} = await http.get(api.host + '/major/majorIssuess/getMatterTrack', {params})
    return data
  },
  // 重大事项风险评估--获取舆情统计
  async majorIssuessgetPublicOpinion(params) {
    const {data} = await http.get(api.host + '/major/majorIssuess/getPublicOpinion', {params})
    return data
  },
  // 重大事项风险评估--获取群众满意度调查
  async majorIssuessgetSurveyData(params) {
    const {data} = await http.get(api.host + '/major/majorIssuess/getSurveyData', {params})
    return data
  },
  // 重大事项风险评估--获取数据信息
  async majorIssuessgetDataList(params) {
    const {data} = await http.get(api.host + '/major/majorIssuess/getDataList', {params})
    return data
  },
  // 重大事项风险评估--提交决策意见
  async majorIssuessCommit(params) {
    const {data} = await http.post(api.host + '/major/majorIssuess/commit', params)
    return data
  },
  // 车辆特征展示首页--获取交通活跃车辆
  async featureGetActiveTransportCar(params) {
    const {data} = await http.get(api.host + '/vehicle/universalFeature/getActiveTransportCarForProvince', {params})
    return data
  },
  // 车辆特征展示首页--获取违章信息
  async featureGetBreakRuleList(params) {
    const {data} = await http.get(api.host + '/vehicle/universalFeature/getBreakRuleList', {params})
    return data
  },
  // 车辆特征展示首页--获取重点车辆驾驶员预警列表
  async featureGetEmphasisDrivers(params) {
    const {data} = await http.get(api.host + '/vehicle/universalFeature/getEmphasisDrivers', {params})
    return data
  },
  // 车辆特征展示首页--获取重点车辆驾驶员预警总数
  async featureGetEmphasisDriversTotal(params) {
    const {data} = await http.get(api.host + '/vehicle/universalFeature/getEmphasisDriversTotal', {params})
    return data
  },
  // 车辆特征展示首页--获取重点车辆运行预警列表
  async featureGetVehicleOperation(params) {
    const {data} = await http.get(api.host + '/vehicle/universalFeature/getVehicleOperationForAreas', {params})
    return data
  },
  // 车辆特征展示首页--获取重点车辆运行预警总数
  async featureGetVehicleOperationTotal(params) {
    const {data} = await http.get(api.host + '/vehicle/universalFeature/getVehicleOperationForAreasTotal', {params})
    return data
  },
  // 车辆特征展示首页--获取出入琼地点排行
  async featureGetHotInHNOrOutHNList(params) {
    const {data} = await http.get(api.host + '/vehicle/universalFeature/getHotInHNOrOutHNList', {params})
    return data
  },
  // 车辆特征展示首页--获取协同查处情况
  async featureGetSynergyInvestigateDetails(params) {
    const {data} = await http.get(api.host + '/vehicle/universalFeature/getSynergyInvestigateDetails', {params})
    return data
  },
  // 车辆特征展示首页--获取重点车辆分类运营情况
  async featureGetVehicleClassificationSituation(params) {
    const {data} = await http.get(api.host + '/vehicle/universalFeature/getVehicleClassificationSituation', {params})
    return data
  },
  // 车辆特征展示首页--获取重点车辆分布（色块图）
  async featureGetEmphasisCarDistribution(params) {
    const {data} = await http.get(api.host + '/vehicle/universalFeature/getEmphasisCarDistribution', {params})
    return data
  },
  // 车辆特征展示首页--获取防控圈点位（散点图）
  async featureGetAreaPoint(params) {
    const {data} = await http.get(api.host + '/vehicle/universalFeature/getAreaPoint', {params})
    return data
  },
  // 重点区域车辆运行预警--获取防控圈列表（左边活动列表）
  async activityAdminGetActPvt() {
    const {data} = await http.get(api.host + '/vehicle/activityAdmin/selectByActPvt')
    return data
  },
  // 重点区域车辆运行预警--点击活动显示对应防控圈
  async activityAdminGetActPvtById(params) {
    const {data} = await http.get(api.host + '/vehicle/activityAdmin/selectByActPvt', {params})
    return data
  },
  // 重点区域车辆运行预警--点击活动详情展示
  async activityAdminSelectById(params) {
    const {data} = await http.get(api.host + '/vehicle/activityAdmin/selectById', {params})
    return data
  },
  // 重点区域车辆运行预警--点击定位展示轨迹
  async activityAdminSelectByCarArray(params) {
    const {data} = await http.get(api.host + '/vehicle/activityAdmin/selectByCarArray?pvtName=' + params)
    return data
  },
  // 重点区域车辆运行预警--点击定位展示轨迹
  async qryVehicleWarningInfo(params) {
    const {data} = await http.post(api.host + '/vehicle/activityAdmin/selectByPvtIdAndCarNo', params)
    return data
  },
  // 运行预警--活动管理--获取活动管理列表
  async activityAdminSelectByCond(params) {
    const {data} = await http.post(api.host + '/vehicle/activityAdmin/selectByCond', params)
    return data
  },
  // 运行预警--活动管理--获取车辆白名单
  async activityAdminSelectByActId(params) {
    const {data} = await http.post(api.host + '/vehicle/activityAdmin/selectByActId', params)
    return data
  },
  // 运行预警--活动管理--删除活动
  async activityAdminDeleteActivity(params) {
    const {data} = await http.delete(api.host + '/vehicle/activityAdmin/delete?id=' + params)
    return data
  },
  // 多维轨迹比对---获取对象多维轨迹信息
  async multidimensional(params) {
    const {data} = await http.post(api.host + '/trajectory/multidimensional/query', params)
    return data
  },
  // 多维轨迹比对---获取轨迹比对信息
  async multidimensionalCompare(params) {
    const {data} = await http.post(api.host + '/trajectory/multidimensional/compare', params)
    return data
  },
  // 多维轨迹比对---轨迹比对信息
  async realNameInfoCrash(params) {
    const {data} = await http.post(api.host + '/trajectory/multidimensional/realNameInfoCrash', params)
    return data
  },
  // 获取线索督导界面统计数据
  async getPressStatistical() {
    const {data} = await http.get(api.host + '/clue/supervisionTask/getPressStatistical')
    return data
  },
  // 线索督导界面催办
  async pressTask(params) {
    const {data} = await http.post(api.host + '/clue/supervisionTask/pressTask?id=' + params)
    return data
  },
  // 线索督导界面已读
  async pressRead(params) {
    const {data} = await http.post(api.host + '/clue/supervisionTask/pressRead?id=' + params)
    return data
  },
  // 查询督导流程跟踪
  async querySupervisionHistory(params) {
    const {data} = await http.get(api.host + '/clue/supervisionTask/querySupervisionHistory?taskCode=' + params)
    return data
  },
  // 获取催办记录
  async qryPressTaskList(params) {
    const {data} = await http.post(api.host + '/clue/supervisionTask/pressTaskList', params)
    return data
  },
  // 督导报告查询列表
  async queryTrackReportList(params) {
    const {data} = await http.post(api.host + '/clue/supervisionTask/querySupervisionList', params)
    return data
  },
  // 督导报告查询催办情况柱状图
  async queryPressBar(params) {
    const {data} = await http.post(api.host + '/clue/supervisionTask/supervisionReportPress', params)
    return data
  },
  // 督导报告查询督导状态柱状图
  async queryStatusBar(params) {
    const {data} = await http.post(api.host + '/clue/supervisionTask/supervisionReportState', params)
    return data
  },
  // 线索督导界面查询数据
  async querySupervisionTask(params) {
    const {data} = await http.post(api.host + '/clue/supervisionTask/querySupervisionTask', params)
    return data
  },
  async getCluesCollectionData(params) {
    const {data} = await http.post(api.host + '/clue/query', params)
    return data
  },
  // 查询线索录入信息
  async getCluesInput(params) {
    const {data} = await http.post(api.host + '/clue/cluesType/query', params)
    return data
  },
  // 删除线索录入信息
  async deleteCluesInput(params) {
    const {data} = await http.delete(api.host + '/clue/cluesType/delete?clueId=' + params.clueId)
    return data
  },
  // 线索状态审核
  async aduptClueStatus(params) {
    const {data} = await http.post(api.host + '/clue/auditClueStatus', params)
    return data
  },
  // 线索审核并新增线索评价
  async auditAndEvaluateClue(params) {
    const {data} = await http.post(api.host + '/clue/auditAndEvaluateClue', params)
    return data
  },
  // 上传线索录入数据
  async updateCluesData(params) {
    const {data} = await http.post(api.host + '/clue/cluesType/saveOrUpdate', params)
    return data
  },
  // 获取线索信息导入列表
  async getCluesImportData(params) {
    const {data} = await http.post(api.host + '/clue/import/selectByClueImport', params)
    return data
  },
  // 查询线索类型
  async qryClueType(code) {
    const {data} = await http.get(api.host + '/common/dictionary/query?code=' + code)
    return data
  },
  // 获取线索详情信息
  async getClueDetailsDate(params) {
    const {data} = await http.get(api.host + '/clue/qryClueDetails?clueId=' + params)
    return data
  },
  // 获取线索详情信息
  async deleteClueImportData(params) {
    const {data} = await http.get(api.host + '/clue/qryClueDetails', {params})
    return data
  },
  // 提交入库
  async commitClue(params) {
    const {data} = await http.post(api.host + '/clue/import/insertClueSubmit?importId=' + params.importId + '&status=' + params.status)
    return data
  },
  // 批量删除
  async mulDelete(mulIdString) {
    const {data} = await http.delete(api.host + '/clue/import/deleteByClueIds?ids=' + mulIdString)
    return data
  },
  // 显示线索列表
  async clueList(clueListParam) {
    const {data} = await http.post(api.host + '/clue/import/selectByClueImportId?importId=' + clueListParam.importId + '&page=' + clueListParam.page + '&pageSize=' + clueListParam.pageSize)
    return data
  },
  //分析研判首页-我的关注列表
  async getAttentionClue(params) {
    const {data} = await http.post(api.host + '/clue/clueTaskApi/getAttentionClue', params)
    return data
  },
  //分析研判首页-线索研判任务
  async getClueTaskByDate(params) {
    const {data} = await http.post(api.host + '/clue/clueTaskApi/getClueTaskByDate', params)
    return data
  },
  //分析研判首页-智能推送列表
  async getPushInfo(params) {
    const {data} = await http.get(api.host + '/clue/clueTaskApi/getPushInfo', {params})
    return data
  },
  //分析研判首页-关注任务
  async saveAttention(params) {
    const {data} = await http.post(api.host + '/clue/clueTaskApi/saveAttention', params)
    return data
  },
  // 获取研判任务列表
  async getClueTaskList(params) {
    const {data} = await http.post(api.host + '/clue/clueTask/getClueTask', params)
    return data
  },
  // 删除研判任务
  async deleteClueTask(params) {
    const {data} = await http.get(api.host + '/clue/clueTask/deleteClueTaskById?id=' + params.taskId)
    return data
  },
  //研判任务共享用户查询
  async getShareUserByTaskCode(params) {
    const {data} = await http.get(api.host + '/clue/shareTask/getShareUserByTaskCode?taskCode='+params.taskCode)
    return data
  },

  // 研判过程列表
  async selectTaskListVo(params) {
    const {data} = await http.post(api.host + '/clue/clueTask/selectTaskListVo?taskId=' + params)
    return data
  },
  // 查询线索任务研判报告的明细
  async getClueTaskTrialReport(params) {
    const {data} = await http.get(api.host + '/clue/clueTrialReport/getClueTaskTrialReport' + params)
    return data
  },
  // 保存线索任务研判报告
  async clueTrialReportSave(params) {
    const {data} = await http.post(api.host + '/clue/clueTrialReport/saveReport', params)
    return data
  },
  // 暂存线索任务研判报告
  async temporaryTask(params) {
    const {data} = await http.post(api.host + '/clue/clueTrialReport/temporaryTask', params)
    return data
  },
  // 查询研判任务实体集合列表
  async queryTaskTargetList(params) {
    const {data} = await http.post(api.host + '/clue/clueTask/queryTaskTargetList', params)
    return data
  },
  // 添加嫌疑实体对象
  async addSuspectObj(params) {
    const {data} = await http.post(api.host + '/clue/clueTask/addSuspectObj', params)
    return data
  },
  // 删除嫌疑实体对象
  async delSuspectObj(params) {
    const {data} = await http.delete(api.host + '/clue/clueTask/deleteSuspectObjById?id='+params.id)
    return data
  },
  // 提交分拨任务
  async clueTaskDistribute(params,config) {
    const {data} = await http.post(api.host + '/clue/clueTaskDistribute/createClueTask', params,config)
    return data
  },
  // 研判任务查询接收
  async queryReceiveClueTask(params) {
    const {data} = await http.get(api.host + '/clue/clueTask/queryReceiveClueTask?id=' + params.taskId)
    return data
  },
  // 研判任务接收
  async receiveClueTask(params) {
    const {data} = await http.post(api.host + '/clue/clueTask/receiveClueTask?id=' + params.taskId)
    return data
  },
  // 分页查询线索任务下发核查 的列表
  async getClueTaskCheckList(params) {
    const {data} = await http.post(api.host + '/clue/clueTaskCheck/listPage', params)
    return data
  },
  // 分页查询协同任务列表
  async getClueTaskAssistList(params) {
    const {data} = await http.post(api.host + '/clue/clueTaskAssist/listPage', params)
    return data
  },
  // 查询线索任务下发核查 的明细
  async getClueTaskCheckDetail(params) {
    const {data} = await http.get(api.host + '/clue/clueTaskCheck/getClueTaskCheck?id=' + params.taskId)
    return data
  },
  // 查询协同任务明细
  async getClueTaskAssistDetail(params) {
    const {data} = await http.get(api.host + '/clue/clueTaskAssist/getClueTaskAssist?id=' + params.taskId)
    return data
  },
  async clueTaskDistribute_getClueTask(params) {
    const {data} = await http.get(api.host + '/clue/clueTaskDistribute/getDistributeClueTask', {params})
    return data
  },
  // 查询线索分拨任务
  async qeyClueTast(params) {
    const {data} = await http.post(api.host + '/clue/clueTaskDistribute/getDistributeClueTask', params);
    return data
  },
  // 相似线索
  async clueSimilart(params) {
    const {data} = await http.get(api.host + '/clue/clueSimilart/listPage', {params});
    return data
  },
  // 根据用户id查询收藏夹信息
  async getFavoriteNameByid(params) {
    const {data} = await http.get(api.host + '/clue/collectionFolder/getFavoriteNameByid?id=' + params.userId)
    return data
  },
  // 创建收藏夹
  async createFavorite(params) {
    const {data} = await http.post(api.host + '/clue/collectionFolder/createFavorite', params)
    return data
  },
  // 线索插入收藏夹
  async createFavoriteClue(params) {
    const {data} = await http.post(api.host + '/clue/collectionFolder/createFavoriteClue', params)
    return data
  },
  //删除收藏夹
  async delFavoriteClue(id) {
    const {data} = await http.delete(api.host + '/clue/collectionFolder/deleteFavorite?favoriteId='+id)
    return data
  },

  // 线索移除收藏夹
  async deleteFavoriteClue(params, config) {
    const {data} = await http.delete(api.host + '/clue/collectionFolder/deleteFavoriteClue', {params})
    return data
  },
  // 删除收藏夹
  async deleteFavorite(params) {
    const {data} = await http.delete(api.host + '/clue/collectionFolder/deleteFavorite?favoriteId=' + params.favoriteId)
    return data
  },
  // 根据线索标题查询线索以及对应文件夹
  async getClueAndFolderBy(params) {
    const {data} = await http.get(api.host + '/clue/collectionFolder/getClueAndFolderBy?createdBy=' + params.createdBy + '&title=' + params.title)
    return data
  },
  // 根据收藏夹id查询收藏的线索
  async getClueByFavoriteId(params) {
    const {data} = await http.get(api.host + '/clue/collectionFolder/getClueByFavoriteId' ,{params})
    return data
  },
  // 获取线索信息导入列表
  async getPreData(uuid) {
    const {data} = await http.get(api.host + '/clue/import/selectClueImport?uuid=' + uuid)
    return data
  },
  // 导入线索
  async insertImportClueVo(uuid) {
    const {data} = await http.get(api.host + '/clue/import/insertImportClueVo?uuid=' + uuid)
    return data
  },
  // 修改收藏夹
  async updateFavorite(params) {
    const {data} = await http.put(api.host + '/clue/collectionFolder/updateFavorite', params)
    return data
  },
  // 任务追溯-任务查询
  async qryClueTaskTrace(taskId) {
    const {data} = await http.post(api.host + '/clue/clueTask/selectClueTaskTrace?taskId=' + taskId)
    return data
  },
  // 任务追溯-动作查询
  async qryTaskLog(param) {
    const {data} = await http.post(api.host + '/clue/clueTask/selectClueTaskLog', param)
    return data
  },
  // 任务流程跟踪
  async getDistributeDetails(param) {
    const {data} = await http.get(api.host + '/clue/clueTaskDistribute/getDistributeDetails?taskId=' + param)
    return data
  },
  // 根据条件查询线索&关联对象
  async selectCountAndObjs(config) {
    const {data} = await http.post(api.host + '/clue/Anticipation/selectCountAndObjs', config.data, config)
    return data
  },
  // 根据线索ID查询线索详情
  async selectCluesAnticipationCluesVo(config) {
    const {data} = await http.post(api.host + '/clue/Anticipation/selectCluesAnticipationCluesVo', config.data, config)
    return data
  },
  // 根据对象编号、类型查询对象详情
  async selectCluesObjs(config) {
    const {data} = await http.post(api.host + '/clue/Anticipation/selectCluesObjs', config.data, config)
    return data
  },
  // 根据线索ID查询对象集合
  async selectCluesAnticipationObjsVo(params) {
    const {data} = await http.get(api.host + '/clue/Anticipation/selectCluesAnticipationObjsVo',{params})
    return data
  },
  // 根据研判任务查询核查任务
  async getTaskCheckByTaskId(params) {
    const {data} = await http.get(api.host + '/clue/clueTaskCheck/getTaskCheckByTaskId', {params})
    return data
  },
  // 根据研判任务查询协同任务
  async getTaskkAssistByTaskId(params) {
    const {data} = await http.get(api.host + '/clue/clueTaskAssist/getTaskkAssistByTaskId', {params})
    return data
  },
  // 下发核查任务
  async createTaskCheck(params) {
    const {data} = await http.post(api.host + '/clue/clueTaskCheck/createTaskCheck', params)
    return data
  },
  // 下发协同任务
  async createTaskAssist(params) {
    const {data} = await http.post(api.host + '/clue/clueTaskAssist/createTaskAssist', params)
    return data
  },
  // 批量查询线索详情
  async qryBatchClueDetails(clueIds) {
    const {data} = await http.get(api.host + '/clue/qryBatchClueDetails?clueIds=' + clueIds)
    return data
  },
  // 线索后处理归档查阅
  async clueCategorizeConsult(params) {
    const {data} = await http.post(api.host + '/clue/clueCategorizeConsult', params)
    return data
  },
  // 线索后处理归档查阅--详情
  async clueCategorizeConsultDetail(params) {
    const {data} = await http.get(api.host + '/clue/clueCategorizeConsultDetail', {params})
    return data
  },
  // 更改线索是否典型
  async updateClueClassicStatus(params) {
    const {data} = await http.put(api.host + '/clue/updateClueClassicStatus?id=' + params.id + '&classicCaseStatus=' + params.classicCaseStatus)
    return data
  },
  // 获取线索后处理归档查阅所需要的主题词
  async queryModelBySubjectName(params) {
    const {data} = await http.get(api.host + '/clue/clueSubjectModel/getClueCategorizeConsultIndexingName', {params})
    return data
  },
  // 线索分拨-线索任务详情
  async clueDistributeTaskDetails(params) {
    const {data} = await http.get(api.host + '/clue/clueTaskDistribute/clueDistributeTaskDetails', {params})
    return data
  },
  // 终止任务
  async stopTask(params) {
    const {data} = await http.post(api.host + '/clue/clueTrialReport/stopTask', params)
    return data
  },
  // 查询主题词模型
  async queryModelByTitle(params) {
    const {data} = await http.post(api.host + '/clue/clueSubjectModel/queryModelBySubjectName', params)
    return data
  },
  // 多条件查询主题词模型
  async queryModelTable(params) {
    const {data} = await http.post(api.host + '/clue/clueSubjectModel/queryModel', params)
    return data
  },
  // 删除主题词模型
  async deleteModelById(modelId) {
    const {data} = await http.delete(api.host + '/clue/clueSubjectModel/deleteModelById?id=' + modelId)
    return data
  },
  // 线索产品汇编模型管理->一级类别查询
  async queryAllOneLevelModel() {
    const {data} = await http.get(api.host + '/clue/clueSubjectModel/queryAllOneLevelModel')
    return data
  },
  // 线索产品汇编模型管理->二级类别查询
  async queryAllTwoLevelModel(oneLevelId) {
    const {data} = await http.get(api.host + '/clue/clueSubjectModel/queryAllTwoLevelModel?id=' + oneLevelId)
    return data
  },
  // 保存模型
  async saveModel(param) {
    const {data} = await http.post(api.host + '/clue/clueSubjectModel/addOrUpdate', param)
    return data
  },
  // 新增素材
  async addMaterials(param, config) {
    const {data} = await http.post(api.host + '/clue/addMaterials', param, config)
    return data
  },
  // 线索研判任务工作界面，根据用户id查询所有类型的研判素材
  async queryAllTypeMaterialsByUserId(param) {
    const {data} = await http.post(api.host + '/clue/queryAllTypeMaterialsByUserId', param)
    return data
  },
  // 线索研判任务工作界面，根据用户id筛选人类型研判素材
  async queryPeopleTypeMaterialsByUserId(param) {
    const {data} = await http.post(api.host + '/clue/queryPeopleTypeMaterialsByUserId', param)
    return data
  },
  // 线索研判任务工作界面，根据用户id筛选船类型研判素材
  async queryShipTypeMaterialsByUserId(param) {
    const {data} = await http.post(api.host + '/clue/queryShipTypeMaterialsByUserId', param)
    return data
  },
  // 线索研判任务工作界面，根据用户id筛选车类型研判素材
  async queryCarTypeMaterialsByUserId(param) {
    const {data} = await http.post(api.host + '/clue/queryCarTypeMaterialsByUserId', param)
    return data
  },
  // 删除素材
  async deleteMaterials(param) {
    const {data} = await http.delete(api.host + '/clue/deleteMaterials?id=' + param.id)
    return data
  },
  // 修改素材
  async updateMaterials(param) {
    const {data} = await http.post(api.host + '/clue/updateMaterials', param)
    return data
  },
  // 线索研判任务工作界面，根据用户id筛选低慢小类型研判素材
  async queryIssTypeMaterialsByUserId(param) {
    const {data} = await http.post(api.host + '/clue/queryIssTypeMaterialsByUserId', param)
    return data
  },
  // 查询素材关联实体
  async queryMaterialsRelatedEntity(param) {
    const {data} = await http.post(api.host + '/clue/queryMaterialsRelatedEntity', param)
    return data
  },
  // 分页查询素材列表
  async queryMaterials(params) {
    const {data} = await http.post(api.host + '/clue/queryMaterials?type=' + params.type + '&title=' + params.title + '&taskId=' + params.taskId)
    return data
  },
  async queryMoMaterialsPage(params) {
    const {data} = await http.post(api.host + '/clue/queryMoMaterialsPage', params)
    return data
  },
  // 线索汇编查询
  async qryClueSubjectWords(param) {
    const {data} = await http.post(api.host + '/clue/clueAssembler/listPage', param)
    return data
  },
  // 查询线索汇编一、二级主题词
  async getAssemblyWord() {
    const {data} = await http.get(api.host + '/clue/clueSubjectModel/getAssemblerWorld')
    return data
  },
  // 根据二级类别查询对应趋势图
  async qrySecondarySortTrendChart(params) {
    const {data} = await http.post(api.host + '/clue/clueAssembler/getTrendChart', params)
    return data
  },
  // 查询线索汇编三级主题词
  async qryWordVos(ids) {
    const {data} = await http.post(api.host + '/clue/clueSubjectModel/getAssemblerWorldRank',ids)
    return data
  },
  // 查询走私形式占比图
  async getSmuggleFormChart() {
    const {data} = await http.get(api.host + '/clue/clueAssembler/getSmuggleFormChart')
    return data
  },
  // 查询走私手段占比图
  async getSmuggleMeansChart() {
    const {data} = await http.get(api.host + '/clue/clueAssembler/getSmuggleMeansChart')
    return data
  },
  // 查询走私种类占比图
  async getSmuggleProportionChart() {
    const {data} = await http.get(api.host + '/clue/clueAssembler/getSmuggleProportionChart')
    return data
  },
  // 查询主题词
  async qrySubjectWord(param) {
    const {data} = await http.post(api.host + '/clue/clueAssembler/getRecommendKeywordsBy', param)
    return data
  },
  // 保存汇编
  async saveAssembler(param) {
    const {data} = await http.post(api.host + '/clue/clueAssembler/createMoClueAssembler', param)
    return data
  },
  // 修改汇编
  async updateAssembler(param) {
    const {data} = await http.put(api.host + '/clue/clueAssembler/updateMoClueAssembler', param)
    return data
  },
  // 汇编流程跟踪
  async qryAssemblerHistories(clueId) {
    const {data} = await http.get(api.host + '/clue/clueAssembler/getMoClueAssemblerLog?id=' + clueId)
    return data
  },
  // 校验新增的推荐主题词是否存在
  async isExistRecommend(name) {
    const {data} = await http.get(api.host + '/clue/clueSubjectModel/isExistRecommend?name=' + name)
    return data
  },
  // 线索任务请求
  async createTaskRequest(param) {
    const {data} = await http.post(api.host + '/clue/clueTaskRequest/createTaskRequest', param)
    return data
  },
  // 显示线索任务请求 的明细
  async getClueTaskRequest(params) {
    const {data} = await http.get(api.host + '/clue/clueTaskRequest/getClueTaskRequest', {params})
    return data
  },
  // 根据研判任务查询任务请求
  async getTaskRequestByTaskId(params) {
    const {data} = await http.get(api.host + '/clue/clueTaskRequest/getTaskRequestByTaskId', {params})
    return data
  },
  // 分页查询线索任务请求 的列表
  async getClueTaskRequestlist(param) {
    const {data} = await http.post(api.host + '/clue/clueTaskRequest/listPage', param)
    return data
  },
  // 新增素材时查询素材关联对象
  async queryMaterialRelatedObj(param) {
    const {data} = await http.post(api.host + '/clue/queryMaterialRelatedObj?taskId=' + param.taskId + '&type=' + param.type)
    return data
  },
  // 研判报告页面查询素材关联对象
  async qurMaterialsRelatedObject(param) {
    const {data} = await http.post(api.host + '/clue/qurMaterialsRelatedObject?taskId=' + param.taskId + '&type=' + param.type + '&studyingStatus=' + param.studyingStatus)
    return data
  },
  // 线索录入附件上传
  async clueEntryUpload(file) {
    const param = new FormData()
    param.append('multipartFile', file)
    let config = {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'multipart/form-data'
      }
    }
    const {data} = await http.post(api.host + '/clue/cluesType/attachmentImport', param, config)
    return data
  },
  // 线索录入地点查询
  async selectArea(params) {
    const {data} = await http.get(api.host + '/clue/cluesType/selectArea', {params})
    return data
  },
  // 线索录入经纬度查询地点
  async selectLatAndLon(params) {
    const {data} = await http.get(api.host + '/clue/cluesType/selectLatAndLon', {params})
    return data
  },
  // 线索详情-查快照
  async querySnapshotHtml(params) {
    const {data} = await http.get(api.host + '/common/snapshotRecord/querySnapshotHtml', {params})
    return data
  },
  // 跨部门轨迹补齐(轨迹查询)
  async trackQueryList(params) {
    const {data} = await http.post(api.host + '/trajectory/ckQuery/listPage', params)
    return data
  },
  // 跨部门轨迹补齐(人员信息)
  async trackQueryPerson(params) {
    const {data} = await http.post(api.host + '/trajectory/ckQuery/getMsgList', params)
    return data
  },
  // 跨部门轨迹补齐(补齐数量统计)柱状图
  async trackQueryChart1(params) {
    const {data} = await http.post(api.host + '/trajectory/ckRequestList/countDepartment', params)
    return data
  },
  // 跨部门轨迹补齐(补齐数量统计)饼图
  async trackQueryChart2(params) {
    const {data} = await http.post(api.host + '/trajectory/ckRequestList/department', params)
    return data
  },
  // 跨部门轨迹补齐(请求补齐)
  async requestToComplete(params) {
    const {data} = await http.post(api.host + '/trajectory/ckRequestList/submitTask', params)
    return data
  },
  // 手动补齐(历史记录查询)
  async manualQuery(params) {
    const {data} = await http.post(api.host + '/trajectory/ckComplete/listPage', params)
    return data
  },
  // 手动补齐(新增轨迹)
  async manualCreateTrack(params) {
    const {data} = await http.post(api.host + '/trajectory/ckComplete/createCkComplete', params)
    return data
  },
  // 手动补齐(编辑轨迹)
  async manualEditTrack(params) {
    const {data} = await http.put(api.host + '/trajectory/ckComplete/updateCkComplete', params)
    return data
  },
  // 手动补齐(轨迹详情)
  async manualTrackDetail(params) {
    const {data} = await http.post(api.host + '/trajectory/ckComplete/getCkComplete', params)
    return data
  },
  // 手动补齐(轨迹删除)
  async manualTrackDelete(params) {
    const {data} = await http.delete(api.host + '/trajectory/ckComplete/deleteCkComplete', params)
    return data
  },
  // 手动补齐(地点查询)
  async manualTrackPosition(params) {
    const {data} = await http.post(api.host + '/trajectory/ckComplete/checkPoint', params)
    return data
  },
  // 智能推送
  async manualTrackList(params) {
    const {data} = await http.post(api.host + '/clue/clueTaskRequest/getPushInfoByCondition', params)
    return data
  },
  //部门管控分析(指定月份统计)
  async getDataCollectionByMonth(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/departmentControlAnalysis/getDataCollectionByMonth', {params})
    return data
  },
  // 重点车辆驾驶员-查询重点车辆驾驶员评估记录的必要字典和标签
  async getVehicleDic(params) {
    const {data} = await http.post(api.host + '/vehicle/keyVehicleDrivers/queryDictAndTags', params)
    return data
  },
  // 重点车辆驾驶员-分页查询重点车辆驾驶员评估记录列表
  async getVehicleList(params) {
    const {data} = await http.post(api.host + '/vehicle/keyVehicleDrivers/listPage', params)
    return data
  },
  //重点车辆驾驶员-个人信息
  async getVehiclePersonInfo(params) {
    const {data} = await http.get(api.host + '/vehicle/keyVehicleDrivers/queryPersonIndfo', {params})
    return data
  },
  // 重点车辆驾驶员-查询重点车辆驾驶员评估记录详情
  async getVehicleDetail(params) {
    const {data} = await http.get(api.host + '/vehicle/keyVehicleDrivers/queryDetail', {params})
    return data
  },
  //重点车辆驾驶员-查询相关证件
  async getVehicleLicenses(params) {
    const {data} = await http.get(api.host + '/vehicle/keyVehicleDrivers/getRelevantLicenses', {params})
    return data
  },
  //重点车辆驾驶员-最新背审情况
  async getVehicleTrial(params) {
    const {data} = await http.get(api.host + '/vehicle/keyVehicleDrivers/latestBackTrial', {params})
    return data
  },
  // 重点车辆驾驶员-查询违法驾驶记录
  async getIlegalDrivingRecord(params) {
    const {data} = await http.post(api.host + '/vehicle/keyVehicleDrivers/getIlegalDrivingRecord', params)
    return data
  },
  // 重点车辆驾驶员-风险预警提交
  async riskCommit(params) {
    const {data} = await http.post(api.host + '/vehicle/keyVehicleDrivers/riskCommit', params)
    return data
  },
  // 重点车辆驾驶员-风险评估
  async riskEvaluate(params) {
    const {data} = await http.post(api.host + '/vehicle/keyVehicleDrivers/riskEvaluate?id=' + params)
    return data
  },
  // 重点车辆驾驶员-查询风险趋势图表
  async queryHistory(params) {
    const {data} = await http.get(api.host + '/vehicle/keyVehicleDrivers/queryHistory', {params})
    return data
  },
  //出租屋预警-查询异常出租屋预警总数接口
  async rentalWarningTotal(params) {
    const {data} = await http.get(api.host + '/rent/houseInfo/queryExceptionHouseWarnTotal', {params})
    return data
  },
  //出租屋预警-查询异常出租屋今日新增预警总数接口
  async rentalWarningToday(params) {
    const {data} = await http.get(api.host + '/rent/houseInfo/queryTodayIncreaseWarnTotal', {params})
    return data
  },
  //出租屋预警-十大标签
  async rentalWarningTenLabel(params) {
    const {data} = await http.get(api.host + '/rent/houseInfo/queryHouseExceptionEventLabel', {params})
    return data
  },
  //出租屋预警-列表
  async rentalWarningList(params) {
    const {data} = await http.post(api.host + '/rent/houseInfo/queryRentHouseListPage', params)
    return data
  },
  //出租屋预警-标签
  async houseEventLabel(params) {
    const {data} = await http.get(api.host + '/rent/houseEventLabelInfo/queryVirtualLabel', {params})
    return data
  },
  //出租屋预警-地点
  async houseEventAddress(params) {
    const {data} = await http.get(api.host + '/rent/houseInfo/houseAdd', {params})
    return data
  },
  //出租屋预警-出租屋详情
  async houseEventDetail(params) {
    const {data} = await http.get(api.host + '/rent/houseInfo/houseRiskAnalyzeHouseDetail', {params})
    return data
  },
  //出租屋预警-出租屋关联事件
  async houseRiskAnalyzeEvent(params) {
    const {data} = await http.get(api.host + '/rent/houseInfo/houseRiskAnalyzeEvent', {params})
    return data
  },
  //出租屋预警-出租屋用电信息
  async electricityDetail(params) {
    const {data} = await http.get(api.host + '/rent/houseInfo/electricityDetail', {params})
    return data
  },
  //出租屋预警-出租屋用电
  async electricityDosage(params) {
    const {data} = await http.get(api.host + '/rent/houseInfo/electricityDosage', {params})
    return data
  },
  //出租屋预警-出租屋用水
  async waterDosage(params) {
    const {data} = await http.get(api.host + '/rent/houseInfo/waterDosage', {params})
    return data
  },
  //出租屋预警-出租屋人员情况
  async houseRiskAnalyzePeople(params) {
    const {data} = await http.get(api.host + '/rent/houseInfo/houseRiskAnalyzePeople', {params})
    return data
  },
  //出租屋预警-提交预警
  async houseRiskCommit(params) {
    const {data} = await http.post(api.host + '/rent/houseInfo/houseRiskCommit', params)
    return data
  },
  //查询出租屋和承租人信息的明细
  async queryHouseTenantDetail(params) {
    const {data} = await http.get(api.host + '/rent/houseInfo/queryHouseTenantDetail', {params})
    return data
  },
  //区域视频人像关联(事件关联查询)
  async keyThingQueryList(params) {
    const {data} = await http.post(api.host + '/trajectory/areaPortrait/queryAreaByEventDes', params)
    return data
  },
  //区域视频人像关联(重点区域列表查询）
  async keyAreasQueryList(params) {
    const {data} = await http.post(api.host + '/trajectory/areaPortrait/keyAreaQuery', params)
    return data
  },
  //区域视频人像关联（根据经纬度重点区域查询）
  async keyAreasQuerylatlng(params) {
    const {data} = await http.post(api.host + '/trajectory/areaPortrait/queryAreaRiskPortrait', params)
    return data
  },
  //跨部门关系补齐（关系情况列表）
  async relationList(params) {
    const {data} = await http.post(api.host + '/relation/relationComplementList/listPage', params)
    return data
  },
  //跨部门关系补齐（获取人员信息）
  async relationPersonInfo(params) {
    const {data} = await http.post(api.host + '/relation/relationComplementList/getMsgList', params)
    return data
  },
  //跨部门关系补齐（柱状图关系部门）
  async relationGraph(params) {
    const {data} = await http.post(api.host + '/relation/relationComplementList/countType', params)
    return data
  },
  //跨部门关系补齐（饼图）
  async relationPie(params) {
    const {data} = await http.post(api.host + '/relation/relationComplementList/countDeaptment', params)
    return data
  },
  //跨部门关系补齐列表（部门查询）
  async queryRelationDepartment(params) {
    const {data} = await http.post(api.host + '/relation/relationComplementList/relationDepartment', params)
    return data
  },
  //跨部门关系补齐列表（查询列表）
  async searchRelationList(params) {
    const {data} = await http.post(api.host + '/relation/relationRequestList/listPage', params)
    return data
  },
  //跨部门关系补齐列表（请求任务详情）
  async detailTask(params) {
    const {data} = await http.post(api.host + '/relation/relationRequestList/getRelationRequestList', params)
    return data
  },
  //跨部门关系补齐列表（请求反馈详情）
  async detailFeeaBack(params) {
    const {data} = await http.post(api.host + '/relation/relationRequestList/getBackCkRequestList', params)
    return data
  },
  //读取读取Excel文件
  async readExcel(params) {
    const {data} = await http.post(api.host + '/relation/relationRequestList/readExcel', params)
    return data
  },
  //一件补齐
  async filling(params) {
    const {data} = await http.post(api.host + '/relation/relationRequestList/clickCompletPlus', params)
    return data
  },
  //跨部门关系补齐列表（发布任务）
  async publishTask(params) {
    const {data} = await http.post(api.host + '/relation/relationRequestList/submitTask', params)
    return data
  },
  //获取海南行政区划下拉框
  async queryHaiNanAdministrativeRegion (params) {
    const { data } = await http.get(api.host + '/personnel-monitoring/clues/hn/getHnSelect', {params})
    return data
  },
  //获取表现形式
  async queryFormsOfExpression (params) {
    const { data } = await http.get(api.host + '/personnel-monitoring/clues/source/appeal/event/getManifestationsList', {params})
    return data
  },
  //涉及领域
  async queryfieldSelect (params) {
    const { data } = await http.get(api.host + '/personnel-monitoring/clues/source/appeal/event/getInvolvedList', {params})
    return data
  },
  //新增事件上报
  async queryReportingAddEvent(params) {
    const { data } = await http.post(api.host + '/personnel-monitoring/clues/source/appeal/event/addEvent',params);
    return data
  },
  //修改事件上报
  async queryReportingUpdateEvent(params) {
    const { data } = await http.put(api.host + '/personnel-monitoring/clues/source/appeal/event/updateEvent',params);
    return data
  },



  //随手记列表新增或修改接口
  async addOrEdit(params) {
    const {data} = await http.post(api.host + '/clue/moNoteTake/addOrUpdate', params)
    return data
  },
  //随手记查询列表
  async noteTakimgSearch(params) {
    const {data} = await http.post(api.host + '/clue/moNoteTake/query', params)
    return data
  },
  //删除随手记查询列表
  async noteTakimgDelete(params) {

    const {data} = await http.delete(api.host + '/clue/moNoteTake/delete?ids=' + params.ids)
    return data
  },
  //区域徘徊分析(查询重点区域表徘徊人数列表)
  async getKeyAreaList(params) {
    const {data} = await http.post(api.host + '/trajectory/regionalWandering/getKeyAreaList', params)
    return data
  },
  async getKeyArea(params) {
    const {data} = await http.get(api.host + '/trajectory/regionalWandering/getKeyArea', params)
    return data
  },
  async portraitConfirm(params) {
    const {data} = await http.post(api.host + '/trajectory/regionalWandering/portraitConfirm', params)
    return data
  },
  //活动区域分析接口API(根据用户信息查询摄像头列表)
  async getKeyActiveCamera(params) {
    const {data} = await http.post(api.host + '/trajectory/zoneAction/getActivityLaw', params)
    return data
  },
  //活动区域分析接口API(根据用户信息查询轨迹详情列表)
  async getKeyActiveDetail(params) {
    const {data} = await http.post(api.host + '/trajectory/zoneAction/getTrackDetails', params)
    return data
  },
  // 查询重复线索
  async qryRepeatClues(params) {
    const {data} = await http.get(api.host + '/clue/clueRepeat/listPage', {params})
    return data
  },
  // 提交是否采纳
  async updateAdopt(params) {
    const {data} = await http.put(api.host + '/clue/clueRepeat/adopt', params)
    return data
  },
  //人证分离预警 根据日期查询
  async qrySepEarly(params) {
    const {data} = await http.post(api.host + '/trajectory/abnormal/selectWithSepEarly', params)
    return data
  },
  //异常行为综合分析预警
  async qryAbCompAnalysis(params) {
    const {data} = await http.post(api.host + '/trajectory/abnormal/selectAbCompAnalysis', params)
    return data
  },
  // 登录接口
  async login(param) {
    const {data} = await http.post(api.host + '/clue/api/idaas/user/login', param)
    return data
  },
  // 获取用户信息接口
  async getUserInfo(param) {
    const {data} = await http.get(api.host + '/clue/api/idaas/user/user_info', param)
    return data
  },
  //获取录入单位
  async getAllOrganizationMinimums(param){
    const {data} = await http.get(api.host + '/clue/api/idaas/organization/allOrganizationMinimums', param)
    return data
  },
  // 查询事件列表
  async qryEventList(params) {
    const {data} = await http.post(api.host + '/event/eventInfo/listPage', params)
    return data
  },
  // 查询汇聚事件列表
  async qryConvergeEventList(params) {
    const {data} = await http.post(api.host + '/event/eventInfo/getQueryList', params)
    return data
  },
  // 事件数量展示
  async mergeEventShow(eventId) {
    const {data} = await http.get(api.host + `/event/eventMergeInfo/getEventInfo/${eventId}`)
    return data
  },
  // 添加新的事件到原合并事件里
  async addNewEvents(params) {
    const {data} = await http.post(api.host + '/event/eventMergeInfo/updateEventMergeInfo', params)
    return data
  },
  // 事件字典查询
  async qrydictionary(params) {
    const {data} = await http.get(api.host + '/event/dictionary/getDictionary', {params})
    return data
  },
  // 新增合并事件
  async commitNewEvent(params) {
    const {data} = await http.post(api.host + '/event/eventInfo/createEventInfo', params)
    return data
  },
  // 异常行为综合分析预警
  async selectAbCompAnalysis(params) {
    const {data} = await http.post(api.host + '/trajectory/abnormal/selectAbCompAnalysis', params)
    return data
  },
  // 提交报告
  async commitEvent(params) {
    const {data} = await http.post(api.host + '/event/distribution/submitReport', params)
    return data
  },
  // 暂存报告
  async tempStorage(params) {
    const {data} = await http.post(api.host + '/event/distribution/createEventReportDistribution', params)
    return data
  },
  // 查询事件分拨列表
  async qryEventAllocateList(params) {
    const {data} = await http.post(api.host + '/event/distribution/listPage', params)
    return data
  },
  // 事件素材查询
  async qryMaterial(params) {
    const {data} = await http.post(api.host + '/clue/eventMergeQueryMoMaterialsPage', params)
    return data
  },
  //轨迹收藏保存接口
  async saveTrackCollection(params) {
    const {data} = await http.post(api.host + '/trajectory/trackCollection/insertCollection', params)
    return data
  },
  //部门推送接口
  async pushDepartment(params) {
    const {data} = await http.post(api.host + '/trajectory/abnormal/insertPush', params)
    return data
  },
  //查询场所人员异常轨迹
  async qryAreaAbTra(params) {
    const {data} = await http.post(api.host + '/trajectory/abnormal/selectByAreaAbTra', params)
    return data
  },
  //查询线索分类接口 旧
  async qryClueByClass(params) {
    const {data} = await http.post(api.host + '/clue/clueClassify/queryClueClassify', params)
    return data
  },
  //查询线索分类接口
  async queryClueClassifyList(params) {
    const {data} = await http.get(api.host + '/clue/clueClassify/queryClueClassifyList', {params})
    return data
  },
  //保存线索分类
  async addOrUpdateClueClassify (params) {
    const { data } = await http.post(api.host + '/clue/clueClassify/addClueClassify', params)
    return data
  },
  //查询线索分类一级分类（选择父类）
  async qryOneLevelClueClassify (params) {
    const { data } = await http.post(api.host + '/clue/clueClassify/queryOneLevelClueClassify', params)
    return data
  },
  //删除线索分类
  async deleteClueClassify (params) {
    const { data } = await http.delete(api.host + '/clue/clueClassify/deleteClueClassify', {params})
    return data
  },
  // 修改线索类别
  async upDateLevelClueClassify (params) {
    const { data } = await http.post(api.host + '/clue/clueClassify/update', params)
    return data
  },
  //查询线索目录
  async qryClueMenu (params) {
    const { data } = await http.get(api.host + '/clue/catalogue/list', {params})
    return data
  },
  //新增线索目录
  async qryClueMenuAdd (params) {
    const { data } = await http.post(api.host + '/clue/catalogue/create', params)
    return data
  },
  // 修改目录信息
  async qryClueMenuEdit (params) {
    const { data } = await http.post(api.host + '/clue/catalogue/edit', params)
    return data
  },
  //根据父id找到父目录
  async qryClueParentById (params) {
    const { data } = await http.get(api.host + '/clue/catalogue/parentList', {params})
    return data
  },
  //删除目录
  async qryClueMenuDel (params) {
    const { data } = await http.get(api.host + '/clue/catalogue/delete', {params})
    return data
  },
  //跨部门轨迹补齐任务列表
  async ckRequestList(params) {
    const {data} = await http.post(api.host + '/trajectory/ckRequestList/listPage', params)
    return data
  },
  //跨部门轨迹补齐发布任务
  async submitTask(params) {
    const {data} = await http.post(api.host + '/trajectory/ckRequestList/submitTask', params)
    return data
  },
  //跨部门轨迹补齐读取excel文件
  async ckRequestListReadExcel(params) {
    const {data} = await http.post(api.host + '/trajectory/ckRequestList/readExcel', params)
    return data
  },
  //跨部门轨迹补齐读取部门字典
  async ckRequestListDepartment() {
    const {data} = await http.post(api.host + '/trajectory/ckRequestList/Department')
    return data
  },
  //跨部门轨迹补齐一键补齐
  async ckRequestListCompletPlus(params) {
    const {data} = await http.post(api.host + '/trajectory/ckRequestList/clickCompletPlus', params)
    return data
  },
  //轨迹收藏列表展示
  async trackCollectionSelectByCond(params) {
    const {data} = await http.post(api.host + '/trajectory/trackCollection/selectByCond', params)
    return data
  },
  //轨迹收藏删除轨迹
  async trackCollectionDeleteById(params) {
    const {data} = await http.delete(api.host + '/trajectory/trackCollection/deleteById?id=' + params.id)
    return data
  },
  //轨迹收藏修改轨迹
  async trackCollectionUpdateByCond(params) {
    const {data} = await http.post(api.host + '/trajectory/trackCollection/updateByCond', params)
    return data
  },
  //轨迹收藏列表详情
  async trackCollectionSelectById(params) {
    const {data} = await http.get(api.host + '/trajectory/trackCollection/selectById?id=' + params)
    return data
  },
  //分页查询重点区域的列表
  async regionalWanderingListPage(params) {
    const {data} = await http.get(api.host + '/trajectory/regionalWandering/listPage', {params})
    return data
  },
  //创建重点区域表
  async createKeyArea(params) {
    const {data} = await http.get(api.host + '/regionalWandering/createKeyArea', {params})
    return data
  },
  // 查询风险区域详情
  async queryAreaDetail(params) {
    const {data} = await http.post(api.host + '/trajectory/riskArea/queryAreaDetail', params)
    return data
  },
  // 新增或编辑风险区域
  async riskAreaUpdate(params) {
    const {data} = await http.post(api.host + '/trajectory/riskArea/saveOrUpdate', params)
    return data
  },
  // 风险区域生成热力点
  async generateHeatPoint(params) {
    const {data} = await http.post(api.host + '/trajectory/riskArea/generateHeatPoint', params)
    return data
  },
  // 风险区域列表查询
  async queryArea(params) {
    const {data} = await http.post(api.host + '/trajectory/riskArea/queryArea', params)
    return data
  },
  // 风险区域分析
  async riskAreaAnalysis(params) {
    const {data} = await http.post(api.host + '/trajectory/riskArea/analysis', params)
    return data
  },
  // 查询人脸异常轨迹
  async selectByFaceAbTra(params) {
    const {data} = await http.post(api.host + '/trajectory/abnormal/selectByFaceAbTra', params)
    return data
  },
  // 异常轨迹API-部门推送
  async insertPush(params) {
    const {data} = await http.post(api.host + '/trajectory/abnormal/insertPush', params)
    return data
  },
  // 根据用户信息，时间范围拍照关口
  async getCheckpointByStrategy(params) {
    const {data} = await http.post(api.host + '/trajectory/pathStrategy/getCheckpointByStrategy', params)
    return data
  },
  // 根据用户信息，时间范围查询策略显示轨迹
  async getTrackByStrategy(params) {
    const {data} = await http.post(api.host + '/trajectory/pathStrategy/getTrackByStrategy', params)
    return data
  },
  // 根据用户信息，时间范围查询被摄像头拍摄次数
  async getCountByStrategy(params) {
    const {data} = await http.post(api.host + '/trajectory/pathStrategy/getCountByStrategy', params)
    return data
  },
  // 根据用户信息，时间范围预判轨迹
  async predictionTrajectory(params) {
    const {data} = await http.post(api.host + '/trajectory/pathStrategy/predictionTrajectory', params)
    return data
  },
  // 根据用户信息，时间范围预判出现详情
  async predictionTrajectoryDetails(params) {
    const {data} = await http.post(api.host + '/trajectory/pathStrategy/predictionTrajectoryDetails', params)
    return data
  },
  // 展示工具集菜单
  async analysisToolsList(params) {
    const {data} = await http.get(api.host + '/clue/analysisTools/list', {params})
    return data
  },
  // 线索研判工具类别列表
  async analysisToolsTypeList(params) {
    const {data} = await http.get(api.host + '/clue/analysisTools/typeList', {params})
    return data
  },
  // 查询重点区域图形
  async getAreaGraphlist(params) {
    const {data} = await http.get(api.host + '/trajectory/regionalWandering/getAreaGraphlist', {params})
    return data
  },
  // 获取重点区域人像推测
  async getPortraitSpeculation(params) {
    const {data} = await http.post(api.host + '/trajectory/regionalWandering/getPortraitSpeculation', params)
    return data
  },
  // 修改重点区域表
  async updateKeyArea(params) {
    const {data} = await http.get(api.host + '/trajectory/regionalWandering/updateKeyArea', {params})
    return data
  },
  // 删除重点区域表
  async deleteKeyArea(params) {
    const {data} = await http.get(api.host + '/trajectory/regionalWandering/deleteKeyArea', {params})
    return data
  },
  //假设轨迹分析
  async abnormalSelectAbHypothTra(params) {
    const {data} = await http.post(api.host + '/trajectory/abnormal/selectAbHypothTra', params)
    return data
  },
  //假设轨迹分析假设轨迹车辆查询
  async abnormalSelectByCar(params) {
    const {data} = await http.get(api.host + '/trajectory/abnormal/selectByCar', {params})
    return data
  },
  //轨迹异常分析-查询列表
  async abnormalSelectAbTraAnalysis(params) {
    const {data} = await http.post(api.host + '/trajectory/abnormal/selectAbTraAnalysis', params)
    return data
  },
  //轨迹异常分析-修改详情状态
  async abnormalSelectByAbEarlyById(params) {
    const {data} = await http.get(api.host + '/trajectory/abnormal/selectByAbEarlyById', {params})
    return data
  },
  //疑似风险人群接口-查询标签信息查询
  async riskGetBqxx() {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/risk/getBqxx')
    return data
  },
  //疑似风险人群接口-列表查询
  async riskListPage(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/risk/listPage', {params});
    return data
  },
  //群体列表 (人车船模型)
  async qryListByGroup(params) {
    const {data} = await http.post(api.host + '/relation/groupFileList/listPage', params)
    return data
  },
  //增加群体信息 (人车船模型)
  async addInfoByGroup(params) {
    const {data} = await http.post(api.host + '/relation/groupFileList/createGroupFile', params)
    return data
  },
  //增加人员信息 (人车船模型)
  async addInfoByGroupPerson(params) {
    const {data} = await http.post(api.host + '/relation/groupFileList/createGroupNumberFile', params)
    return data
  },
  //增加人员群体附件 (人车船模型)
  async addFileByGroupPerson(file) {
    const param = new FormData()
    param.append('file', file)
    let config = {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'multipart/form-data'
      }
    }
    const {data} = await http.post(api.host + '/relation/groupFileList/createFile', param, config)
    return data
  },
  //删除群体信息 (人车船模型)
  async delByGroup(params) {
    const {data} = await http.post(api.host + '/relation/groupFileList/deleteGroupFile', params)
    return data
  },
  //群体档案详细信息 (人车船模型)
  async getInfoByGroupId(params) {
    const {data} = await http.get(api.host + '/relation/groupFileList/getDetail', {params})
    return data
  },
  //群体基础信息 (人车船模型)
  async qryListByGroupInfo(params) {
    const {data} = await http.post(api.host + '/relation/groupArchivesMember/listPage', params)
    return data
  },
  //群体组织图表 (人车船模型)
  async getInfoByGroupOrg(params) {
    const {data} = await http.post(api.host + '/relation/groupArchivesMember/organizationChart', params)
    return data
  },
  //群体地域信息 (人车船模型)
  async getInfoAreaByGroupOrg(params) {
    const {data} = await http.post(api.host + '/relation/groupArchivesMember/groupArea', params)
    return data
  },
  //群体背景信息 (人车船模型)
  async getInfoBgByGroupOrg(params) {
    const {data} = await http.get(api.host + '/relation/groupFileList/getBackgroundByGroupCode', {params})
    return data
  },
  // 人像关联信息查询
  async qryInfoByPeople(params) {
    const {data} = await http.post(api.host + '/trajectory/multidimensional/showPortraitAssociation', params)
    return data
  },
  // 根据卡口，时间查监控视频
  async getMonitorVideo (params) {
    const { data } = await http.post(api.host + '/trajectory/multidimensional/getMonitorVideo', params)
    return data
  },
  // 网格化事件列表查询
  async qryGridEventList(params) {
    const {data} = await http.get(api.host + '/gridding/gridEvent/qryGridEventListByMulCondition', {params})
    return data
  },
  //上访人员感知列表
  async queryPerPetitionList(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/sensitivePeople/queryActual', params)
    return data
  },
  //上访人员综合风险评估查询个人信息
  async queryPerUser(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/specialPopulation/searchPersonalInfo', {params})
    return data
  },
  //查询敏感节点特殊人群数据
  async queryPerSpecial(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/sensitivePeople/querySensitive', params)
    return data
  },
  //风险变化趋势
  async diskChange(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/specialPopulation/diskChange', {params})
    return data
  },
  //社区矫正人员信息
  async queryCorrectUser(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/specialPopulation/communityCorrectionalPersonnel', {params})
    return data
  },
  //重点上访人员信息
  async queryPetitionUser(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/specialPopulation/emphasisPetitionersPersonnel', {params})
    return data
  },
  //新增风险评估
  async addRiskAssess(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/specialPopulation/addRiskAssess', params)
    return data
  },
  //重点涉事人员聚类分析模型
  async queryAKey(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/sensitivePeople/queryPerson', params)
    return data
  },
  //重点岗位人员风险预警分析
  async queryRisk(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/sensitivePeople/queryPost', params)
    return data
  },
  //人员背审情况（新）
  async queryPerUserBackNew(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/keyPositionsRisk/latestResultOfBacktrial', {params})
    return data
  },
  //人员背审情况（历史）
  async queryPerUserBackHistory(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/keyPositionsRisk/backOnTheDetails', {params})
    return data
  },
  //涉矛盾纠纷事件
  async queryDisputes(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/keyPersonnel/conflictDisputeEvent', {params})
    return data
  },
  //人员日常管控
  async queryControl(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/keyPersonnel/dailyPersonnelControl', {params})
    return data
  },
  //上访信息统计
  async queryPetition(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/riskAssess/infoStatistics', {params})
    return data
  },
  //人员风险评估分析
  async queryriskAssessmentAnalysis(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/personnelRiskAnalysis/queryPersonnelInfo', params)
    return data
  },
  //全景信息分析
  async querypanoramicInformation(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/personnelRiskAnalysis/queryRiskPersonnelInfo', params)
    return data
  },
  //根据身份证查询个人基本信息
  async queryPerUserIdCard(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/personnel/ryjcPersonnelDetails/findRyjcSensitivePeopleSpecialGroups', {params})
    return data
  },
  //根据身份证查询关联事件信息
  async queryPerUserRelation(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/personnel/ryjcPersonnelDetails/findRyjcPersonnelAppealCase', {params})
    return data
  },
  //根据身份证号码查询个人婚姻情况
  async queryPerUserMarriage(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/personnel/ryjcPersonnelDetails/findRyjcPersonnelMarriageInfo', {params})
    return data
  },
  //根据身份证号码查询个人疾病情况
  async queryPerUserDisease(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/personnel/ryjcPersonnelDetails/findRyjcPersonnelIllnessInfo', {params})
    return data
  },
  //根据身份证号码查询个人社保信息
  async queryPerUserSocialSecurity(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/personnel/ryjcPersonnelDetails/findRyjcPersonnelSocialSecurityInfo', {params})
    return data
  },
  //人员背审模型
  async queryBackExamination(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/personnelRiskAnalysis/queryPersonnelInfo', params)
    return data
  },
  //源诉求聚类分析模型
  async querySourceDemand(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/source/appeal/event/converge/listPage', params)
    return data
  },
  //事件汇聚--汇聚列表
  async queryConvergence(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/source/appeal/event/listPageByConvergeEventId', params)
    return data
  },
  //事件汇聚--涉及对象
  async queryObj(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/source/appeal/event/getEventObject', {params})
    return data
  },
  //事件汇聚--加入汇聚列表
  async addConvergence(params) {
    const {data} = await http.put(api.host + '/personnel-monitoring/clues/source/appeal/event/addConvergeList', params)
    return data
  },
  //事件汇聚--根据id获取源诉求事件汇聚信息
  async queryConvergenceId(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/source/appeal/event/converge/getEventConvergeInfoById', {params})
    return data
  },
  //事件汇聚--汇聚确认
  async convergenceConfirm(params) {
    const {data} = await http.put(api.host + '/personnel-monitoring/clues/source/appeal/event/converge/updatedTaskStatus', params)
    return data
  },
  //首页--风险等级变化趋势统计图表
  async queryEchartsRisk(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/home/trendOfRiskLevelChange', {params})
    return data
  },
  //首页--事件排行分析
  async queryEchartsEvent(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/home/eventStatistics', {params})
    return data
  },
  //首页--部门管控成效分析
  async queryEchartsDepartment(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/home/departmentalControlEffectiveness', {params})
    return data
  },
  //首页--管控情况分析
  async queryEchartsControl(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/home/analysisOfControlSituation', {params})
    return data
  },
  //首页--风险人员分类型统计
  async queryEchartsRiskPersonnel(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/home/riskPersonnelTypeStatistics', {params})
    return data
  },
  //首页--人员区域分布
  async queryEchartsPersonnelRegion(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/home/personnelAreaStatistics', {params})
    return data
  },
  //首页--人员风险情况统计
  async getPersonnelRiskStatistics() {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/home/personnelRiskStatistics')
    return data
  },
  //首页--人员类别统计
  async getPersonnelCategoryStatistics() {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/home/personnelCategoryStatistics')
    return data
  },
  //首页--人员管控成效
  async getPersonnelControlEffectivenessStatistics() {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/home/personnelControlEffectivenessStatistics')
    return data
  },
  //事件汇聚--汇聚列表--移除/确定
  async updatedConfirm(params) {
    const {data} = await http.put(api.host + '/personnel-monitoring/clues/source/appeal/event/updatedConfirm', params)
    return data
  },
  //事件汇聚--汇聚预警
  async convergenceConfirms(params) {
    const {data} = await http.put(api.host + '/personnel-monitoring/clues/source/appeal/event/converge/updatedTaskStatus', params)
    return data
  },
  //汇聚事件信息--汇聚列表
  async queryGetPageEventList(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/source/appeal/event/getPageEventList', params)
    return data
  },
  //汇聚事件信息--涉事人员
  async queryGetPersonnelStatistics(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/source/appeal/event/getPersonnelStatistics', {params})
    return data
  },
  //汇聚事件信息--预警
  async addAssessment(params) {
    const {data} = await http.put(api.host + '/personnel-monitoring/clues/source/appeal/event/converge/addAssessment', params)
    return data
  },
  //疑似风险人群接口-通过id查询疑似风险人群详情
  async riskGetDetails(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/risk/getDetails', {params});
    return data
  },
  //疑似风险人群接口-添加风险评估信息
  async riskPushDataToMq(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/risk/pushDataToMq', params);
    return data
  },
  //疑似风险人群接口-查询个人疑似风险人群标签详细信息
  async risKgetJyqk(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/risk/getJyqk', {params});
    return data
  },
  //人员风险评估分析-查询人员信息数据
  async personnelRiskAnalysisQueryPersonnelInfo(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/personnelRiskAnalysis/queryPersonnelInfo', params);
    return data
  },
  //敏感节点管理接口--分页查询敏感节点数据
  async perSensitiveNodeManagementList(params) {
    const { data } = await http.post(api.host + '/personnel-monitoring/clues/sensitiveNode/listPage',params);
    return data
  },
  //敏感节点管理接口--添加或修改敏感节点数据
  async sensitiveNodeManagementAdd(params) {
    const { data } = await http.post(api.host + '/personnel-monitoring/clues/sensitiveNode/addOrUpdate',params);
    return data
  },
  //敏感节点管理接口--获取距离事件时间
  async queryGetEvenDistance(params) {
    const { data } = await http.post(api.host + '/personnel-monitoring/clues/sensitiveNode/getEvenDistance',params);
    return data
  },
  //获取风险人员类型
  async getDictionaryJson(params) {
    const { data } = await http.get(api.host + '/personnel-monitoring/clue/dictionary/getDictionary?code='+params)
    return data
  },
  //添加或修改特殊人群信息
  async addOrUpdate(params) {
    const { data } = await http.post(api.host + '/personnel-monitoring/clues/sensitivePeople/addOrUpdate',params)
    return data
  },
  //通过身份证信息获取个人信息
  async getPersonInfo(params) {
    const { data } = await http.get(api.host + '/personnel-monitoring/clues/sensitivePeople/getOneByIdCard?idCard='+params.idCard+"&cardType="+params.cardType)
    return data
  },
  //删除特殊人群数据
  async deleteSpecialGroups(params) {
    const { data } = await http.delete(api.host + '/personnel-monitoring/clues/sensitivePeople/delete', {params})
    return data
  },
  //分页查询 源诉求事件
  async qryIncidentReporting(params) {
    const { data } = await http.post(api.host + '/personnel-monitoring/clues/source/appeal/event/listPage',params)
    return data
  },
  ///根据id获取源诉求事件信息
  async queryGetEventById (params) {
    const { data } = await http.get(api.host + '/personnel-monitoring/clues/source/appeal/event/getEventById', {params})
    return data
  },
  //文件上传接口api
  async fileImageUpload(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/file/imageUpload', params);
    return data
  },
  //人员管理接口-新增或修改特殊人群数据
  async sensitivePeopleAddOrUpdate(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/sensitivePeople/addOrUpdate', params);
    return data
  },
  //分页查询背审模型列表
  async qryListByBR (params) {
    const { data } = await http.post(api.host + '/personnel-monitoring/clues/personnelBackCheck/searchBackReviewModelList', params)
    return data
  },
  //分页人员背审结果记录
  async qryListByPersonBR (params) {
    const { data } = await http.post(api.host + '/personnel-monitoring/clues/personnelBackCheck/searchBackCheckResultsRecords', params)
    return data
  },
  // 新增人员背审模型
  async addByPersonBR (params) {
    const { data } = await http.post(api.host + '/personnel-monitoring/clues/personnelBackCheck/insertBackCheckResultsRecords', params)
    return data
  },
  //通过身份证号码获取人员信息
  async getOneByIdCard (params) {
    const { data } = await http.get(api.host + '/personnel-monitoring/clues/sensitivePeople/getOneByIdCard', {params})
    return data
  },
  //修改人员背审模型
  async changeByPersonBR (params) {
    const { data } = await http.put(api.host + '/personnel-monitoring/clues/personnelBackCheck/updateBackCheckResultsRecords', params)
    return data
  },
  // 删除人员背审结果记录
  async delByPersonBR (params) {
    const { data } = await http.delete(api.host + '/personnel-monitoring/clues/personnelBackCheck/deleteBackCheckResultsRecords?id='+params.id)
    return data
  },
  // 进行背审
  async addItemByBR (params) {
    const { data } = await http.post(api.host + '/personnel-monitoring/clues/personnelBackCheck/enterBackCheck',params)
    return data
  },
  //展示最新的背审结果
  async qryNewByPersonBR (params) {
    const { data } = await http.get(api.host + '/personnel-monitoring/clues/personnelBackCheck/searchUpToDateBackCheckResultsByModelId',{params})
    return data
  },
  //展示历史背审记录
  async qryInfoByhistoryBR (params) {
    const { data } = await http.get(api.host + '/personnel-monitoring/clues/personnelBackCheck/historyBackCheckResults', {params})
    return data
  },
  //根据模型查出指标信息
  async qryIndicatorInfoByBR (params) {
    const { data } = await http.get(api.host + '/personnel-monitoring/clues/personnelBackCheck/searchIndicatorInfoByModel', {params})
    return data
  },
  //查询人员命中指标信息
  async qryIndicatorInfoByPerson (params) {
    const { data } = await http.get(api.host + '/personnel-monitoring/clues/personnelBackCheck/searchIndicatorInfoByPerson', {params})
    return data
  },
  //展示背景详情
  async qryBrInfo (params) {
    const { data } = await http.get(api.host + '/personnel-monitoring/clues/personnelBackCheck/searchRyjcIllegalCrimeInfo', {params})
    return data
  },
  //分页查询背审模型列表
  async qryModelListByBS (params) {
    const { data } = await http.post(api.host + '/personnel-monitoring/clues/personnelBackCheck/searchBackReviewModelList', params)
    return data
  },
  //新增背审模型
  async addModelListByBS (params) {
    const { data } = await http.post(api.host + '/personnel-monitoring/clues/personnelBackCheck/addBackReviewModel', params)
    return data
  },
  //修改背审模型
  async changeModel (params) {
    const { data } = await http.put(api.host + '/personnel-monitoring/clues/personnelBackCheck/updateBackReviewModel', params)
    return data
  },
  //删除背审模型
  async delModelByBS (params) {
    const { data } = await http.delete(api.host + '/personnel-monitoring/clues/personnelBackCheck/deleteBackReviewModel?id='+params.id)
    return data
  },
  //查询背审模型详情
  async qryModelDetByBS (params) {
    const { data } = await http.get(api.host + '/personnel-monitoring/clues/personnelBackCheck/searchBackReviewModelDetails', {params})
    return data
  },
  //根据模型查出指标信息
  async qryTargetByModelId (params) {
    const { data } = await http.get(api.host + '/personnel-monitoring/clues/personnelBackCheck/searchIndicatorInfoByModel', {params})
    return data
  },
  //查询所有指标信息
  async qryTargetAllInModel (params) {
    const { data } = await http.get(api.host + '/personnel-monitoring/clues/personnelBackCheck/searchAllRiskIndicator', {params})
    return data
  },
  //新增模型添加关联指标
  async addTargetInModel (params) {
    const { data } = await http.post(api.host + '/personnel-monitoring/clues/personnelBackCheck/addModelIndexRelation', params)
    return data
  },
  //删除模型指标关联信息
  async delTargetInModel (params) {
    const { data } = await http.delete(api.host + '/personnel-monitoring/clues/personnelBackCheck/deleteModelIndexRelation?'+params)
    return data
  },
  //分页查询所有指标信息
  async qryIndexList (params) {
    const { data } = await http.post(api.host + '/personnel-monitoring/clues/personnelBackCheck/searchIndicatorInfoList',params)
    return data
  },
  //新增指标信息
  async addIndex (params) {
    const { data } = await http.post(api.host + '/personnel-monitoring/clues/personnelBackCheck/addRiskIndicatorInfo',params)
    return data
  },
  //删除指标信息
  async delIndex (params) {
    const { data } = await http.delete(api.host + '/personnel-monitoring/clues/personnelBackCheck/deleteRiskIndicatorInfo?'+params)
    return data
  },
  //修改指标信息
  async editIndex (params) {
    const { data } = await http.put(api.host + '/personnel-monitoring/clues/personnelBackCheck/updateRiskIndicatorInfo',params)
    return data
  },
  //查询网格事件统计报表
  async qryGridEventStatisticsReport(params) {
    const {data} = await http.get(api.host + '/gridding/gridEvent/qryGridEventStatisticsReport', {params})
    return data
  },
  //根据编码产生字典
  async getDictionary(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clue/dictionary/getDictionary', {params})
    return data
  },
  //群体事件高发时期感知服务API-查询群体时间高发区域地图数据
  async getRegionalDistributionChart(params) {
    const {data} = await http.get(api.host + '/group/groupevent/getRegionalDistributionChart', {params})
    return data
  },
  //群体事件高发时期感知服务API-查询群体事件领域分析数据
  async getTypeGroupEventPieChart(params) {
    const {data} = await http.get(api.host + '/group/groupevent/getTypeGroupEventPieChart', {params})
    return data
  },
  //群体事件高发时期感知服务API-查询群体事件时间规律分析数据
  async getTimeGroupEventLineChart(params) {
    const {data} = await http.get(api.host + '/group/groupevent/getTimeGroupEventLineChart', {params})
    return data
  },
  //群体事件高发时期感知服务API-根据事件类型查询群体事件热词
  async getGroupEventHotWordByType(params) {
    const {data} = await http.get(api.host + '/group/groupevent/getGroupEventHotWordByType', {params})
    return data
  },
  //车辆检测预警-营运车辆列表
  async serviceCarList(params) {
    const {data} = await http.post(api.host + '/opeCar/selectByCond', params)
    return data
  },
  //获取人员信息填写模板
  async getExportModule(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/sensitivePeople/ExportModule', {params})
    return data
  },
  //导入人员信息数据
  async importModule(params){
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/sensitivePeople/importModule', params)
    return data
  },
  //通过人员信息获取业务信息
  async getBusinessInformation(params) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/sensitivePeople/getRyInfo', {params})
    return data
  },
  //导出excel
  async getExportFile(qryParam) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/sensitivePeople/exportFileAddress?ids='+qryParam.ids)
    return data
  },
  //查询汇聚信访事件列表
  async qryListPage(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/petition/event/converge/listPage', params)
    return data
  },
  //事件汇聚 信访事件分页列表
  async qryEventConvergenceList(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/petition/event/converge/getPetitionEventPageList', params)
    return data
  },
  //事件汇聚 信访对象列表
  async qryPetitionRelaObj(convergeEventId) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/petition/event/converge/getPetitionObjectList?convergeEventId='+convergeEventId)
    return data
  },
  //事件汇聚 信访事件确认状态 操作移除或确认
  async removeOrConfirmEvent(params) {
    const {data} = await http.put(api.host + '/personnel-monitoring/clues/petition/event/converge/updatedConfirm',params)
    return data
  },
  //事件汇聚 手工汇聚分页查询
  async handworkList(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/petition/event/converge/getManualConvergencePageList',params)
    return data
  },
  //事件汇聚 添加新事件到汇聚列表
  async addNewEventToConvergenceList(params) {
    const {data} = await http.put(api.host + '/personnel-monitoring/clues/petition/event/converge/addConvergeEventList',params)
    return data
  },
  //事件汇聚 查询汇聚事件包信息
  async qryConvergenceInfo(convergeEventId) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/petition/event/converge/getEventConvergenceInfo?convergeEventId='+convergeEventId)
    return data
  },
  //事件汇聚 提交信访事件汇聚信息
  async confirmConvergenceInfo(params) {
    const {data} = await http.put(api.host + '/personnel-monitoring/clues/petition/event/converge/updatedTaskStatus',params)
    return data
  },
  //手工汇聚 信访事件详情
  async qryPetitionEventInfo(eventId) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/petition/event/converge/getPetitionEventInfo?eventId='+eventId)
    return data
  },
  //汇聚信访事件评估意见详情
  async qryHiddenDangerDetails(eventId) {
    const {data} = await http.get(api.host + '/personnel-monitoring/clues/petition/event/converge/getPetitionConvergeEventAssessmentInfo?convergeEventId='+eventId)
    return data
  },
  //事件汇聚 信访事件分页列表
  async getPetitionEventPageList(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/petition/event/converge/getPetitionEventPageList',params)
    return data
  },
  //保存汇聚信访事件评估意见
  async addPetitionConvergeEventAssessment(params) {
    const {data} = await http.post(api.host + '/personnel-monitoring/clues/petition/event/converge/addPetitionConvergeEventAssessment',params)
    return data
  },
  //社会稳定指数分析(社会稳定总指数)
  async socialTotal(params) {
    const {data} = await http.get(api.host + '/social/socialStabilityIndex/getIndexByTime', {params})
    return data
  },
  //社会稳定指数分析(城市社会稳定指数、经纬度、环比和预警级别)
  async socialLeftBar(params) {
    const {data} = await http.get(api.host + '/social/socialStabilityIndex/getSocialCityIndexByTime', {params})
    return data
  },
  //社会稳定指数分析(城市各体系指数和同比)
  async socialLeftCityBar(params) {
    const {data} = await http.post(api.host + '/social/socialStabilityIndex/getTypeIndexByTime', params)
    return data
  },
  //社会稳定指数分析(可视化列表表格展示)
  async socialViewTable(params) {
    const {data} = await http.get(api.host + '/social/socialStabilityIndex/getSocialTypeIndexList', {params})
    return data
  },
  //社会稳定指数分析(可视化社情、警情分布图展示)
  async socialViewEchart(params) {
    const {data} = await http.get(api.host + '/social/socialStabilityIndex/getTypeIndexDistribution', {params})
    return data
  },
  //社会稳定指数分析(可视化案情、舆情饼图显示)
  async socialViewPieEchart(params) {
    const {data} = await http.get(api.host + '/social/socialStabilityIndex/getTypeIndexChart', {params})
    return data
  },
  //社会稳定指数分析(案情折线图)
  async socialViewLineEchart(params) {
    const {data} = await http.post(api.host + '/social/socialStabilityIndex/getCaseDistribution', {params})
    return data
  },
  //社会稳定指数分析(发送预警)
  async socialViewWarn(params) {
    const {data} = await http.post(api.host + '/social/socialStabilityIndex/sendWarningPush', {params})
    return data
  },
  //社会稳定指数分析(指标管理查询列表)
  async socialQueryTable(params) {
    const {data} = await http.post(api.host + '/social/socialIndexManagement/getIndexListPage', params)
    return data
  },
  //社会稳定指数分析(指标管理中新增指标查询上级指标接口)
  async socialQueryUpIndex(params) {
    const {data} = await http.get(api.host + '/social/socialIndexManagement/getFatherIndex', {params})
    return data
  },
  //社会稳定指数分析(指标管理中新增指标查询最大权重)
  async socialQueryUpWeight(params) {
    const {data} = await http.get(api.host + '/social/socialIndexManagement/getMaxWeight', {params})
    return data
  },
  //社会稳定指数分析(指标管理中新增指标)
  async socialAddTarget(params) {
    const {data} = await http.post(api.host + '/social/socialIndexManagement/createIndex', params)
    return data
  },
  //社会稳定指数分析(指标管理中请求编辑的详情)
  async socialEditDetail(params) {
    const {data} = await http.get(api.host + '/social/socialIndexManagement/getIndexInfo', {params})
    return data
  },
  //社会稳定指数分析(指标管理中删除指标)
  async socialDelTarget(params) {
    const {data} = await http.delete(api.host + '/social/socialIndexManagement/getIndexInfo?indexCode='+params.indexCode)
    return data
  },
  //社会稳定指数分析(编辑指标后保存)
  async socialEditTarget(params) {
    const {data} = await http.put(api.host + '/social/socialIndexManagement/updateIndexInfo',params)
    return data
  },




  //群体事件高发时期感知服务API
  async getGroupEventsByType(params) {
    const {data} = await http.get(api.host + '/group/groupevent/getGroupEventsByType', {params})
    return data
  },
  async sendGroupEventWorning(params) {
    const {data} = await http.post(api.host + '/group/groupevent/sendGroupEventWorning', params)
    return data
  },

  //研判工具类型、研判工具实体对象字典
  async getMultistage(params) {
    const {data} = await http.get(api.host + '/clue/dictionary/multistage', {params})
    return data
  },
  //获取研判工具列表
  async getToolList(params){
    const {data} = await http.get(api.host + '/clue/analysisTools/managementList', {params})
    return data
  },
  //新增研判工具
  async addTools(params,config) {
    const {data} = await http.post(api.host + '/clue/analysisTools/create',params,config)
    return data
  },
  // 删除研判工具
  async delTools(params) {
    const {data} = await http.delete(api.host + '/clue/analysisTools/delete?ids='+params.ids)
    return data
  },
  //修改研判工具
  async editTools(params,config) {
    const {data} = await http.put(api.host + '/clue/analysisTools/update',params,config)
    return data
  },
  //研判工具详情
  async getToolInfo(params){
    const {data} = await http.get(api.host + '/clue/analysisTools/toolsInfo', {params})
    return data
  },
  //输入地址获得经纬度
  async getAddress(params){
    const {data} = await http.get(api.host2 + '/geoCoding/geo',{params})
    return data
  },
  //事件风险评估树--列表查询
  async getEventQueryGetList(params){
    const {data} = await http.post(api.host + '/event/eventTree/getList',params)
    return data
  },
  //事件风险评估树--新增、修改
  async getEventQuerySaveOrUpdate(params) {
    const {data} = await http.post(api.host + '/event/eventTree/saveOrUpdate',params)
    return data
  },
  //事件风险评估树--删除
  async getEventQueryDelete(params) {
    const {data} = await http.post(api.host + '/event/eventTree/delete',params)
    return data
  },
  //线索预判对象加锁
  async anticipationGetLock(params) {
    const {data} = await http.post(api.host + '/clue/Anticipation/getLock',params)
    return data
  },
  //线索预判对象解锁
  async anticipationReleaseLock(params) {
    const {data} = await http.post(api.host + '/clue/Anticipation/releaseLock',params)
    return data
  },
  //研判任务终止
  async stopClueTask(params) {
    const {data} = await http.post(api.host + '/clue/clueTaskDistribute/stopClueTask',params)
    return data
  },
  //查询任务状态记录
  async getTaskStatusList(params) {
    const {data} = await http.post(api.host + '/clue/clueTaskLog/getTaskStatusList',params)
    return data
  },
  // 查询任务状态节点记录
  async getTaskStatusLevelList(params) {
    const {data} = await http.get(api.host + '/clue/clueTaskLog/getTaskStatusLevelList',{params})
    return data
  },
}
export default postReq
