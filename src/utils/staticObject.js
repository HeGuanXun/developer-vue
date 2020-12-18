import Vue from 'vue';

export const  DATE_DICTIONARY={
  CLUE_PUBLISH_STATUS:'CLUE_PUBLISH_STATUS',//线索状态
  CLUE_TYPE:'CLUE_TYPE',//线索类型
  CLUE_SOURCE:'CLUE_SOURCE',//线索来源
  CLUE_RELIABLE_LEVEL:'CLUE_RELIABLE_LEVEL',//线索可靠性
  CLUE_SENSITIVE_LEVEL:'CLUE_SENSITIVE_LEVEL',//线索敏感
  CLUE_URGENT_LEVEL:'CLUE_URGENT_LEVEL',//线索紧急程度
  CLUE_INPUT_WAY:'CLUE_INPUT_WAY',//线索录入方式
  CLUE_OBJ_TYPE:'CLUE_OBJ_TYPE',//对象类型
  CLUE_ATTACHMENT_FILE_TYPE:'CLUE_ATTACHMENT_FILE_TYPE',//文件类型
  CLUE_REPEAT_ADOPT_STATUS:'CLUE_REPEAT_ADOPT_STATUS',//采纳状态
  CLUE_REPEAT_TYPE:'CLUE_REPEAT_TYPE',//类型-线索重复或串并状态
  SPECIAL_DATA_IMPORT_FILE_TYPE:'SPECIAL_DATA_IMPORT_FILE_TYPE',//文件类型
  CLUE_FILE_IMPORT_STATUS:'CLUE_FILE_IMPORT_STATUS',//文件导入的状态
  CLUE_IMPORT_STATUS:'CLUE_IMPORT_STATUS',//线索导入的状态
  DEL_FLAG:'DEL_FLAG',//删除标志
  AUDIT_CLUE_STATUS_RULE:'AUDIT_CLUE_STATUS_RULE',//线索状态和线索操作的对应关系
  CLUE_TASK_STATUS:'CLUE_TASK_STATUS',//任务状态
  CLUE_TASK_CREATE_MODE:'CLUE_TASK_CREATE_MODE',//研判任务生成方式
  CLUEOBJ_PEOPLE_GENDER:'CLUEOBJ_PEOPLE_GENDER',//性别 0男1女
  CLUEOBJ_CAR_TYPE:'CLUEOBJ_CAR_TYPE',//车辆类型
  CLUEOBJ_SHIP_TYPE:'CLUEOBJ_SHIP_TYPE',//船舶类型
  CLUEOBJ_ISS_TYPE:'CLUEOBJ_ISS_TYPE',//机种
  CLUEOBJ_SOURCE_MODE:'CLUEOBJ_SOURCE_MODE',//对象来源方式
  CLUE_TASK_OBJ_SUSPICION_STATUS:'CLUE_TASK_OBJ_SUSPICION_STATUS',//嫌疑状态
  CLUE_TASK_OBJ_STUDYING_STATUS:'CLUE_TASK_OBJ_STUDYING_STATUS',//研判状态
  PERTHEACTION:'PERTHEACTION',//执行动作
  CLUE_TASK_STATUS_LEVEL:'CLUE_TASK_STATUS_LEVEL',//任务状态节点
  CLUE_SUBJECT_MODEL_START_STATUS:'CLUE_SUBJECT_MODEL_START_STATUS',//模型启动节点
  CLUE_ASSEMBLER_SMUGGLE_WAY:'CLUE_ASSEMBLER_SMUGGLE_WAY',//走私形式
  CLUE_ASSEMBLER_SMUGGLE_METHOD:'CLUE_ASSEMBLER_SMUGGLE_METHOD',//走私手段
  CLUE_ASSEMBLER_SMUGGLE_TYPE:'CLUE_ASSEMBLER_SMUGGLE_TYPE',//走私类型
  CLUE_TASK_OUTTASKS_DEAL_STATUS:'CLUE_TASK_OUTTASKS_DEAL_STATUS',//请求任务状态
  CLUEOBJ_CAR_LICENCEPLATE_TYPE:'CLUEOBJ_CAR_LICENCEPLATE_TYPE',//车牌类型
  BIND_CLUE_INFO_ADOPT:'BIND_CLUE_INFO_ADOPT',//采纳状态
  CLUE_CLASSIFY_STATUS:'CLUE_CLASSIFY_STATUS',//线索类别状态
  PUSH_INFO_TASK_TYPE:'PUSH_INFO_TASK_TYPE',//任务类型||督导任务类型
  SUPERVISION_TASK_STATE:'SUPERVISION_TASK_STATE',//督导状态
  SUPERVISION_TASK_DATE_SETTING:'SUPERVISION_TASK_DATE_SETTING',//催办时间设置
  CLUE_TASK_LOG_OPERATION:'CLUE_TASK_LOG_OPERATION',//线索任务追朔动作
  EVENT_INFO_EVENT_STATUS:'EVENT_INFO_EVENT_STATUS',//事件状态
  EVENT_INFO_IS_ALLOCATE:'EVENT_INFO_IS_ALLOCATE',//事件分拨任务状态
  TASK_MATERIALS_OBJ_TYPE:'TASK_MATERIALS_OBJ_TYPE',//素材实体类型
  TASK_MATERIALS_FILE_TYPE:'TASK_MATERIALS_FILE_TYPE',//素材文件类型
  GROUP_FILE_GROUP_TYPE:'GROUP_FILE_GROUP_TYPE',//群体犯罪类型
  EVENT_INFO_EVENT_TYPE:'EVENT_INFO_EVENT_TYPE',//事件类型
  VEHICLE_KEY_DRIVER_RISK_LEVER:'VEHICLE_KEY_DRIVER_RISK_LEVER',//风险级别
  VEHICLE_KEY_DRIVER_CAR_TYPE:'VEHICLE_KEY_DRIVER_CAR_TYPE',//重点车辆类别
  ACTIVITY_ADMIN_ACT_STATU:'ACTIVITY_ADMIN_ACT_STATU',//活动状态类别
  CLUE_BIND_SOURCE:'CLUE_BIND_SOURCE',//串并线索来源
  SOCIAL_INDEX_WARNING_LEVEL:'SOCIAL_INDEX_WARNING_LEVEL',//预警级别
  SOCIAL_MANAGEMENT_INDEX_TYPE:'SOCIAL_MANAGEMENT_INDEX_TYPE',//指标类别
  SOCIAL_MANAGEMENT_INDEX_LEVEL:'SOCIAL_MANAGEMENT_INDEX_LEVEL',//指标级别
  GRIDDING_EVENTS_DEPARTMENT:'GRIDDING_EVENTS_DEPARTMENT',//所属部门
  GRIDDING_EVENTS_ENVENTTYPE:'GRIDDING_EVENTS_ENVENTTYPE',//事件类别
  PERSON_TYPE:'PERSON_TYPE',//风险人员类型，1/上访人员感知 2/敏感节点人员 3/重点涉事人员 4/重点岗位人员 5/风险人员评估
  RISK_LEVEL:'RISK_LEVEL',//评估等级 1/低风险 2/中风险 3/高风险 4/无风险
  RISK_STATUS:'RISK_STATUS',//评估状态 0/未评估 1/已评估
  RISK_TREND:'RISK_TREND',//风险趋势 1/恶化 2/改善 3/持平
  DEGREE_OF_CONCERN:'DEGREE_OF_CONCERN',//关注程度/危险等级 1/一般 2/中等 3/严重
  CONTROL_STATUS:'CONTROL_STATUS',//管控状态 1/稳控 2/基本稳控 3/失控 4/失联失访
  CARD_TYPE:'CARD_TYPE',//证件类型 1/居民身份证 2/工作证 3/军官证 4/其他
  INDEX_TYPE:'INDEX_TYPE',//指标类别 1/排他性指标 2/竞争性指标
  AUTO_REVIEW_CYCLE:'AUTO_REVIEW_CYCLE',//定期自动重审周期 1/不自动重申 2/1天 3/3天 4/5天 5/7天 6/15天 7/30天
  PETITION_STATUS:'PETITION_STATUS',//上访状态 0/未完结 1/处理中 2/已完结
  TASK_STATUS:'TASK_STATUS',//任务状态 0/待处理 1/已汇聚 2/已反馈
  GENDER:'GENDER',//性别 1/男 2/女
  RESULTS_OF_SYSTEM_ANAlYSIS:'RESULTS_OF_SYSTEM_ANAlYSIS',//系统分析结果 1/通过 2/不通过
  PERSONNEL_CATEGORY:'PERSONNEL_CATEGORY',//人员类别 1/重点上访人员 2/社区矫正人员 3/刑满释放人员 4/肇事肇祸精神障碍患者 5/吸毒人员 6/危险艾滋病人 7/重点青少年
  NATION:'NATION',//民族
  ATTENTION:'ATTENTION',//关注程度/危险等级 0/一般 1/中等 2/严重
  ANALYSIS_TOOLS_ENVIRONMENT:'ANALYSIS_TOOLS_ENVIRONMENT',//研判工具适用环境
  ANALYSIS_TOOLS_IS_CONDITIONS:'ANALYSIS_TOOLS_IS_CONDITIONS',//研判工具集url是否有条件查询
  ANALYSIS_TOOLS_TYPE:'ANALYSIS_TOOLS_TYPE',//研判工具类型
  CLUE_CLASSIC_CASE_STATUS:'CLUE_CLASSIC_CASE_STATUS',//线索是否典型状态
  ANALYSIS_TOOLS_OBJ_TYPE:'ANALYSIS_TOOLS_OBJ_TYPE',//研判工具适用对象
  ZCAZALXLWV:'ZCAZALXLWV',//跟踪督导催办状态]
}


export function getDataDictionaryMul(target,codeList){
         codeList.forEach(v=>{
              if(sessionStorage.getItem(v)){
                  target[v]=JSON.parse(sessionStorage.getItem(v));
              }else{
                Vue.prototype.$postReq.getConditionData({code:v}).then(res=>{
                  if(res.status==200){
                    target[v]=res.data;
                    sessionStorage.setItem(v,JSON.stringify(res.data));
                  }
                })
              }
         })
}

export  function getDataDictionary(codeItem){
  return new Promise((resolve,reject)=>{
    let target;
    if(sessionStorage.getItem(codeItem)){
      target=JSON.parse(sessionStorage.getItem(codeItem));
      resolve(target);
    }else{
      Vue.prototype.$postReq.getConditionData({code:codeItem}).then(res=>{
        if(res.status==200){
          target=res.data;
          sessionStorage.setItem(codeItem,JSON.stringify(res.data));
          resolve(target);
        }else {
          reject(target);
        }
      }).catch(err=>{
          reject(err);
      })
    }
  })
}
