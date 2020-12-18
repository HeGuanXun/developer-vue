export const extensionObj = {
  extensionArr: ["jpg", "png", "avi", "mp4", "mp3", "wma", "xls", "xlsx", "doc", "docx", "ppt", "pptx", "pdf", "txt", "zip", "rar", "7z"],
  extensionTypeList: {
    'jpg': {
      extensionType: 'picture',
      extensionName: 'jpg',
      extensionDefaultImage: require('@/assets/img/clueDetail/jpg.png')
    },
    'png': {
      extensionType: 'picture',
      extensionName: 'png',
      extensionDefaultImage: require('@/assets/img/clueDetail/png.png')
    },
    'avi': {
      extensionType: 'media',
      extensionName: 'avi',
      extensionDefaultImage: require('@/assets/img/clueDetail/avi.png')
    },
    'mp4': {
      extensionType: 'media',
      extensionName: 'mp4',
      extensionDefaultImage: require('@/assets/img/clueDetail/mp4.png')
    },
    'mp3': {
      extensionType: 'music',
      extensionName: 'mp3',
      extensionDefaultImage: require('@/assets/img/clueDetail/mp3.png')
    },
    'wma': {
      extensionType: 'music',
      extensionName: 'wma',
      extensionDefaultImage: require('@/assets/img/clueDetail/wma.png')
    },
    'xls': {
      extensionType: 'document',
      extensionName: 'xls',
      extensionDefaultImage: require('@/assets/img/clueDetail/xls.png')
    },
    'xlsx': {
      extensionType: 'document',
      extensionName: 'xlsx',
      extensionDefaultImage: require('@/assets/img/clueDetail/xlsx.png')
    },
    'doc': {
      extensionType: 'document',
      extensionName: 'doc',
      extensionDefaultImage: require('@/assets/img/clueDetail/doc.png')
    },
    'docx': {
      extensionType: 'document',
      extensionName: 'docx',
      extensionDefaultImage: require('@/assets/img/clueDetail/docx.png')
    },
    'ppt': {
      extensionType: 'document',
      extensionName: 'ppt',
      extensionDefaultImage: require('@/assets/img/clueDetail/ppt.png')
    },
    'pptx': {
      extensionType: 'document',
      extensionName: 'pptx',
      extensionDefaultImage: require('@/assets/img/clueDetail/pptx.png')
    },
    'pdf': {
      extensionType: 'document',
      extensionName: 'pdf',
      extensionDefaultImage: require('@/assets/img/clueDetail/pdf.png')
    },
    'txt': {
      extensionType: 'document',
      extensionName: 'txt',
      extensionDefaultImage: require('@/assets/img/clueDetail/txt.png')
    },
    'zip': {
      extensionType: 'document',
      extensionName: 'zip',
      extensionDefaultImage: require('@/assets/img/clueDetail/zip.png')
    },
    'rar': {
      extensionType: 'document',
      extensionName: 'rar',
      extensionDefaultImage: require('@/assets/img/clueDetail/rar.png')
    },
    '7z': {
      extensionType: 'document',
      extensionName: '7z',
      extensionDefaultImage: require('@/assets/img/clueDetail/7z.png')
    }
  }
}

export function formatExtension(file) {
  let extension = file.fileName.split(".").pop().toLowerCase();
  let src = '', type = ''
  if (extensionObj.extensionTypeList[extension]) {
    src = extensionObj.extensionTypeList[extension].extensionDefaultImage
    type = extensionObj.extensionTypeList[extension].extensionType
  } else {
    src = require('@/assets/img/clueDetail/other.png')
    type = 'document'
  }
  return [src, type]
}
