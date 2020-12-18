const commonFilters = {
  filterStatus: (value) => {
    const textMap = [
      '', '待审核', '审核通过', '审核不通过', '已发布'
    ]
    return textMap[value]
  },
  filterType: (value) => {
    const textMap = [
      '走私类', '偷渡类', '渗透类', '回流类'
    ]
    return textMap[value]
  },
  filterValue: (value) => {
    let c1 = value.substring(0, 1)

    const textMap = {
      A: '可靠', B: '基本可靠', C: '值得怀疑', D: '不确定'
    }

    return textMap[c1]
  },

  filterColor: (value) => {
    let c1 = value.substring(1, 2)

    const colorMap = [
      '', 'cf95757', 'cfb7c26', 'cffbf11', 'c11bbec'
    ]
    return colorMap[c1]
  },

  filterSource: (value) => {
    const textMap = [
      '车辆监测预警', '船舶监测预警', '“低慢小”监测预警', '产业动态监控预警', '智能移动无线电异常监测预警', '岸线图像识别比对预警', '出租房屋风险分析', '金融风险防控', '重大事项稳定风险评估模型', '网格化精细评价模型', '社会稳定指数分析模型', '事件分类高发时期感知模型', '短视频舆情采集分析系统', '全民信息采集', '页面录入'
    ]
    return textMap[value]
  },
  filterReliable (value) {
    if (value !== '' && value !== null && value !== undefined) {
      const textMap = [
        '可信', '基本可信', '值得怀疑', '不确定'
      ]

      return textMap[value]
    }
  },
  filterLength (value) {
    if (value !== '' && value !== null && value !== undefined) {
      return Object.keys(value).length
    } else {
      return 0
    }
  },
  sourceFiter (value) {
    if (value != '' && value != null) {
      const sourceMap = {0: '人员监测预警',
        1: '车辆监测预警',
        2: '船舶监测预警',
        3: '“低慢小”监测预警',
        4: '产业动态监控预警',
        5: '智能移动无线电异常监测预警',
        6: '岸线图像识别比对预警',
        7: '出租房屋风险分析',
        8: '金融风险防控',
        9: '重大事项稳定风险评估模型',
        10: '网格化精细评价模型',
        11: '社会稳定指数分析模型',
        12: '事件分类高发时期感知模型',
        13: '短视频舆情采集分析系统',
        14: '人工录入'
      }
      return sourceMap[value]
    }
  },
  sensitiveFilter (value) {
    if (value != '' && value != null) {
      const sensitiveMap = {
        0: '敏感',
        1: '重要',
        2: '关注',
        3: '一般'
      }
      return sensitiveMap[value]
    }
  },
  filterEmergency (val) {
    if (val != '' && val != null) {
      const textMap = {0: '非紧急', 1: '紧急', 2: '非常紧急'}
      return textMap[val]
    }
  },
  filterTime (value) {
    if (value != '' && value != null) {
      let text1 = value.split('.')[0]
      let text2 = text1.split('T')[0] + ' ' + text1.split('T')[1]
      return text2
    }
  },
  filterGender (value) {
    if (value != '' && value != null) {
      const textMap = [
        '男', '女'
      ]
      return textMap[value - 1]
    }
  },
  filterHandle (value) {
    if (value != '' && value != null) {
      const textMap = ['新徘徊','新徘徊','已忽略']
      return textMap[value]
    }
  }
}

export default commonFilters
