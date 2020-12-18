<template>
  <div>
    <div class="fujian mr20 mb20" v-for="(item,index) in attachment" :key="index">
      <el-card :body-style="{ padding: '0px' }" shadow="hover" class="elImage">
        <!--        <el-image :src="filterFile(item.url)" alt="" :id="'showImage' + item.id" :preview-src-list="previewSrcList(index)">-->
        <el-image :src="filterFile(item.url)" alt="">
          <div slot="error" class="image-slot"
               style="display: flex; justify-content: center; width: 100%; height: 100%;">
            <img :src="filterFileImage(item)[0]" alt="" class="img">
          </div>
        </el-image>
        <div class="imgCover">
          <p class="imgText">{{item.fileName}}</p>
        </div>
        <div class="closeIcon" @click="handleRemove(item)" v-if="isRemove">
          <i class="el-icon-close"></i>
        </div>
      </el-card>
      <div class="imgBottom">
        <div>
          <el-button type="text" size="small" @click="downloadFile(item)">下载</el-button>
          <!--          <el-button type="text" size="small" @click="openFile(item)">打开</el-button>-->
          <el-button type="text" size="small" @click="previewFile(item)"
                     :hidden="filterFileImage(item)[1] == 'document'">预览
          </el-button>
        </div>
      </div>
    </div>
    <!--   图片/视频预览弹窗    -->
    <el-dialog :visible.sync="imgVisible">
      <img v-if="mediaOrImg" width="100%" :src="dialogImageUrl" alt="">
      <video v-else controls :src="dialogImageUrl" style="margin: 0 auto;display: block;"></video>
    </el-dialog>
  </div>
</template>

<script>
  import baseUrl from '@/utils/host'
  import {formatExtension} from "../../utils/fileFormat";

  export default {
    props: {
      attachment: {
        type: Array,
        default() {
          return []
        }
      },
      isRemove: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        imgVisible: false,  // 图片/视频预览弹窗
        dialogImageUrl: '',
        mediaOrImg: true, // 图片类型/视频类型
        srcList: []
      }
    },
    mounted() {
      // let arr = []
      // this.attachment.map(item => {
      //   arr.push(baseUrl.fastFDFSDownloadHost + item.url)
      // })
      // this.srcList = arr
    },
    watch: {
      // 'attachment'(val1, val2) {
      //   console.log(val1, val2)
      //   let arr = []
      //   this.attachment.map(item => {
      //     arr.push(baseUrl.fastFDFSDownloadHost + item.url)
      //   })
      //   this.srcList = arr
      // }
    },
    methods: {
      filterSize(value) {
        if (value != '' && value != null) {
          return (value / 1024 / 1024).toFixed(1) + 'M'
        }
      },
      filterFileImage(file) {
        return formatExtension(file)
      },
      // previewSrcList(index) {
      //   console.log(index)
      //   let images = JSON.parse(JSON.stringify(this.attachment))
      //   return [baseUrl.fastFDFSDownloadHost + images[index].url]
      // },
      downloadFile(file) {
        console.log(file.url)
        fetch(baseUrl.download_host + file.url, {
          method: 'get',
          header: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then(function (response) {
          return response.blob().then(blob => {
            console.log(blob)
            if (typeof FileReader === 'undefined') {

            }
            const reader = new FileReader();
            reader.addEventListener("loadend", function () {
              let resu = '';
              try {
                resu = JSON.parse(reader.result);
              } catch (e) {
                //捕获错误 说明是文本字符串
                resu = reader.result;
                downloadBlob(blob, file.fileName);
              }
            });
            reader.readAsText(blob);

            //下载
            function downloadBlob(blob, fileName) {
              let blobUrl = window.URL.createObjectURL(blob);
              let a = document.createElement('a');
              a.href = blobUrl;
              a.target = '_blank';
              a.style.display = 'none'
              document.body.appendChild(a)
              a.download = fileName;
              a.click();
              window.URL.revokeObjectURL(blobUrl);
              document.body.removeChild(a)
            }
          })
        })
      },
      // openFile(file) {
      //   let a = document.createElement('a');
      //   a.href = 'http://view.xdocin.com/xdoc?_xdoc='+ baseUrl.fastFDFSDownloadHost + file.url;
      //   a.target = '_blank';
      //   a.style.display = 'none'
      //   document.body.appendChild(a)
      //   a.click();
      //   document.body.removeChild(a)
      // },
      previewFile(file) {
        this.mediaOrImg = formatExtension(file)[1] == "picture";
        this.dialogImageUrl = this.filterFile(file.url);
        this.imgVisible = true;
        // document.getElementById('showImage' + file.id).click()
      },
      handleRemove(item) {
        this.$emit('removeFile', item)
      },
      filterDoc(file) {
        return file.fileName.split(".").pop().toLowerCase()
      },
      filterFile(url) {
        var str = new RegExp("http:");
        if (str.test(url)) {
          return url
        } else {
          return baseUrl.fastFDFSDownloadHost + url;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .fujian {
    float: left;

    ::v-deep .el-card {
      width: 120px;
      height: 100px;
    }

    ::v-deep .el-card__body {
      width: 100%;
      height: 100%;
    }

    ::v-deep .el-image {
      width: 100%;
      height: 100%;
    }

    .image-slot {
      .img {
        width: auto;
        height: 50px;
        margin-top: 15px;
      }
    }

    .elImage {
      position: relative;

      .imgCover {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 24px;
        background: rgba(0, 0, 0, 0.6);
        padding: 0 5px;

        .imgText {
          display: block;
          line-height: 24px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #fff;
        }
      }

      .closeIcon {
        width: 14px;
        height: 14px;
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;

        i {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          right: 0;
        }
      }
    }

    .imgBottom {
      width: 120px;
      /*padding-top: 10px;*/
    }
  }
</style>
