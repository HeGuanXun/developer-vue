<template>
  <div class="p5">
    <content-header class="secondary-color mHeader mb10" headerName="线索详情" :backBtn="backBtn" :historyBtn="historyBtn"
                    :htmlUrl="htmlUrl"></content-header>
    <div class="text-line-wrap mb20">
      <el-row :gutter="24">
        <!--左侧-->
        <el-col :span="12">
          <el-row :gutter="24">
            <el-col :span="24">
              <div class="text-line3 mb20">
                <label class="text-label">线索标题：</label>
                <div class="text-content">{{clueDetail.title}}</div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="text-line3 mb20">
                <label class="text-label">录入单位：</label>
                <div class="text-content">{{clueDetail.inputOrgName}}</div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="text-line3 mb20">
                <label class="text-label">提供单位：</label>
                <div class="text-content">{{!!clueDetail.provideDeptName ? clueDetail.provideDeptName : ''}}</div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="12">
              <div class="text-line3 mb20">
                <label class="text-label">发生时间：</label>
                <div class="text-content">{{clueDetail.happenTime}}</div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="text-line3 mb20">
                <label class="text-label">发现时间：</label>
                <div class="text-content">{{clueDetail.foundTime}}</div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="text-line3 mb20">
                <label class="text-label">线索类型：</label>
                <div class="text-content">{{clueDetail.typeName}}</div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="text-line3 mb20">
                <label class="text-label">紧急程度：</label>
                <div class="text-content">{{clueDetail.urgentLevelName}}</div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="text-line3 mb20">
                <label class="text-label">可靠性：</label>
                <div class="text-content">{{clueDetail.reliableLevelName}}</div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="text-line3 mb20">
                <label class="text-label">敏感程度：</label>
                <div class="text-content">{{clueDetail.sensitiveLevelName}}</div>
              </div>
            </el-col>
            <!--            <el-col :span="24">-->
            <!--              <div v-for ="(item,index) in tagArray" :key="index">-->
            <!--                <el-tag>{{item}}</el-tag>-->
            <!--              </div>-->
            <!--            </el-col>-->
          </el-row>
          <el-row :gutter="24">
            <el-col :span="24">
              <div class="text-line3 mb20">
                <label class="text-label">线索内容：</label>
                <div class="text-content">
                  <div>
                    {{clueDetail.details}}
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <!--右侧-->
        <el-col :span="12">
          <div class="text-line3 mb15">
            <label class="text-label">地点：</label>
            <div class="text-content">{{clueDetail.happenPlace}}</div>
          </div>
          <div class="imgbox">
            <div style="height: 350px">
              <leaflet-map ref="mapId"></leaflet-map>
            </div>
          </div>
          <div class="text-line3 mt15">
            <label class="text-label">经纬度：</label>
            <div class="text-content" v-if="clueDetail.longitude != null && clueDetail.longitude != ''">
              {{clueDetail.latitude}},{{clueDetail.longitude}}
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="text-line3 mb20"
         v-if="thingsCarVos.length>0 || peopleVos.length>0 || shipVos.length>0 || issVos.length>0 || enterpriseVos.length > 0 || rentHouseVos.length > 0">
      <div class="text-label middle">实体对象：</div>
      <tag-detail :thingsCarVos="thingsCarVos"
                  :peopleVos="peopleVos"
                  :shipVos="shipVos"
                  :issVos="issVos"
                  :enterpriseVos="enterpriseVos"
                  :rentHouseVos="rentHouseVos"></tag-detail>
    </div>
    <div class="text-line3 mb20" style="display: -webkit-box; -webkit-box-align: initial" v-if="attachment.length > 0">
      <div class="text-label middle">相关附件：</div>
      <attachment :attachment="attachment"></attachment>
    </div>
    <div class="text-line-wrap mb20" v-if="clueDetail.moClueAudit">
      <div class="m-header mHeader" style="line-height: 0px">
        <div class="title">审核详情</div>
      </div>
      <el-row :gutter="24">
        <el-col :span="24">
          <div class="text-line3 mb20">
            <label class="text-label">审核信息：</label>
            <div class="text-content">{{clueDetail.moClueAudit.examineStatusName}}</div>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="text-line3 mb20">
            <label class="text-label">审核意见：</label>
            <div class="text-content">{{clueDetail.moClueAudit.examineExplain}}</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="text-line-wrap" v-if="clueDetail.evaluation">
      <div class="m-header mHeader" style="line-height: 0px">
        <div class="title">评价详情</div>
      </div>
      <el-row :gutter="24">
        <el-col :span="24">
          <div class="text-line3 mb20">
            <label class="text-label">可靠程度：</label>
            <div class="text-content">{{clueDetail.evaluation.reliableName}}</div>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="text-line3 mb20">
            <label class="text-label">紧急程度：</label>
            <div class="text-content">{{clueDetail.evaluation.nervousDegreeName}}</div>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="text-line3 mb20">
            <label class="text-label">评价内容：</label>
            <div class="text-content">{{clueDetail.evaluation.content}}</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import leafletMap from '@/components/leaflet-map/index.vue';
  import baseUrl from '@/utils/host'
  import ContentHeader from '@/components/ContentHeader'
  import tagDetail from "./tagDetail";
  import attachment from "./attachment";

  export default {
    components: {
      leafletMap,
      ContentHeader,
      tagDetail,
      attachment
    },
    props: {
      backBtn: {
        type: Boolean,
        default: true
      },
      clueDetail: {
        type: Object,
        default() {
          return []
        }
      },
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
        historyBtn: false,
        htmlUrl: '',
        center: [],
        textarea: '',
        imgVisible: false,  // 图片/视频预览弹窗
        dialogImageUrl: '',
        mediaOrImg: true, // 图片类型/视频类型
      }
    },
    created() {
      let id = this.$utils.GetQueryString(window.location.href, 'id')
      this.querySnapshotHtml(id)
    },
    mounted() {
      let lat = this.clueDetail.latitude
      let lng = this.clueDetail.longitude
      if (lat && lng) {
        let obj = {
          name: 'marker',
          lat: this.clueDetail.latitude,
          lng: this.clueDetail.longitude,
        };
        this.$refs.mapId.marker(obj);
        this.$refs.mapId.setCenter(lat, lng, 14)
      }
    },
    methods: {
      async querySnapshotHtml(id) {
        let params = {
          clueId: id
        }
        await this.$postReq.querySnapshotHtml(params).then(res => {
          if (res.status == 200) {
            if (res.data.url) {
              this.htmlUrl = baseUrl.fastFDFSDownloadHost + res.data.url
              this.historyBtn = true
            } else {
              this.historyBtn = false
            }
          }
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  .aui-wrapper .el-card + .el-card {
    margin-top: 0;
  }

  .text-label {
    line-height: 1.8;
  }

  .text-content {
    word-break: break-all;
    line-height: 1.8;
  }
  .mHeader {
    border-bottom: 1px solid #a5cbf6;
    position: relative;
  }
  .mHeader:after {
    content: '';
    width: 56px;
    height: 4px;
    position: absolute;
    border-width: 6px 6px 3px 0px;
    border-style: solid;
    border-color: transparent transparent #a5cbf6 transparent;
    bottom: 0;
  }
  .m-header {
    width: 100%;
    margin-bottom: 10px;
    /*border-bottom: 1px solid #a5cbf6;*/
    height: 28px;
    .title {
      font-size: 16px;
      color: #232323;
      font-weight: bold;
    }

    .back-button {

    }
  }
</style>
