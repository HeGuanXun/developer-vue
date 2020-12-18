<template>
    <div id="map">
<!--      <div id="showZoom">{{info.zoom}}</div>-->
<!--      <div id="info"><span>{{info.scale}}</span>{{info.latlng}}</div>-->
<!--      <div id="changeTu"></div>-->
    </div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import HeatmapOverlay from 'heatmap.js/plugins/leaflet-heatmap';
import markerIcon from '@/components/leaflet-map/marker.png';
import dianIcon from '@/components/leaflet-map/dian.jpg';
// import '../../src/assets/js/CustomWebSDK.min.js';

var map;
export default {
  name: 'leafletMap',
  components: {
    markerIcon,
    dianIcon
  },
  props: {
    idName: {
      type: String,
      default: 'map'
    },
    open: {
      type: Boolean,
      default: false
    },
    zoom: {
      type: Number,
      default: 8
    },
    center: {
      type: Array,
      default: function () {
        return [19.38888634723282, 110.12145996093751]
      }
    },
    option: {
      type: Object,
      default: function () {
        let option = {
          zoomControl: false, // 放大缩小控件
          attributionControl: false
        }
        return option
      }
    },
    heatmapOption: {
      type: Object,
      default: function () {
        let option = {
          radius: 0.001,
          maxOpacity: 0.8,
          blur: 0.8,
          scaleRadius: true,
          useLocalExtrema: true,
          latField: 'lat',
          lngField: 'lng',
          valueField: 'count'
        };
        return option
      }
    }
  },
  data () {
    return {
      tu: {
        dian: [],
        is: true,
        type: 'gon',
        data: []
      },
      ce: {
        dian: [],
        jl: [],
        data: []
      },
      area: {
        type: 'circle',
        dian: [],
        mj: 0,
        data: []
      },
      paint: {
      },
      map: [],
      icon: {},
      info: {
        latlng: 0,
        zoom: 8,
        scale: 0
      }
    }
  },
  computed: {
    optionZoom: {
      get () {
        return this.zoom
      },
      set (val) {
        this.info.zoom = val
      }
    }
  },
  methods: {
    makeOn () {
      this.paint.dc = false;
      if (this.tu.data.length > 0) {
        this.paint.latlng = this.tu.data[this.tu.data.length - 1];
      }
      map.on('click', this.onMapMake);
      map.on('mousemove', this.polylineMoveFun);
    },
    makeOff () {
      map.off('click', this.onMapMake);
      this.paintClose();
    },
    makeReset () {
      this.tu.dian.forEach(e => {
        map.removeLayer(e);
      })

      if (this.tu.circle) map.removeLayer(this.tu.circle);
      if (this.tu.line) map.removeLayer(this.tu.line);
      if (this.tu.gon) map.removeLayer(this.tu.gon);

      this.tu.dian = [];
      this.tu.data = [];
      this.tu.is = true;

      this.makeOn();
      this.paintClose();
      map.on('mousemove', this.polylineMoveFun);
    },
    changeMake (e) {
      this.makeReset();
      this.tu.type = e;
    },

    // 画图开始
    onMapMake (e) {
      let _this = this;
      _this.tu.data.push(e.latlng);
      // 清空所有点
      _this.tu.dian.forEach(item => {
        map.removeLayer(item);
      });
      if (_this.tu.type == 'gon') {
        _this.paint.latlng = [e.latlng.lat, e.latlng.lng];
        let arr = [];
        _this.tu.data.forEach(function (item, index) {
          _this.createTu(item, index);
          arr.push([item.lat, item.lng]);
        });
        //  清空图
        if (_this.tu.gon) map.removeLayer(_this.tu.gon);
        if (_this.tu.line) map.removeLayer(_this.tu.line);
        // 线
        if (_this.tu.is) {
          _this.tu.line = L.polyline([arr], {}).addTo(map);
        } else { // 面
          _this.tu.gon = L.polygon([arr], {}).addTo(map);
        }
      } else if (_this.tu.type == 'circle') {
        _this.paint.latlng = [_this.tu.data[0].lat, _this.tu.data[0].lng];
        map.on('mousemove', _this.circleMoveFun);

        _this.tu.dian[0] = L.marker([_this.tu.data[0].lat, _this.tu.data[0].lng], {
          icon: _this.icon.dian
        }).addTo(map);

        _this.tu.dian[0].on('click', function () {
          _this.makeReset();
        });

        if (_this.tu.data[1]) {
          _this.tu.dian[1] = L.marker([_this.tu.data[1].lat, _this.tu.data[1].lng], {
            icon: _this.icon.dian
          }).addTo(map);

          if (_this.tu.line) map.removeLayer(_this.tu.line);
          _this.tu.line = L.polyline(_this.tu.data).addTo(map);

          if (_this.tu.circle) map.removeLayer(_this.tu.circle);
          _this.tu.circle = L.circle([_this.tu.data[0].lat, _this.tu.data[0].lng], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.2,
            draggable: true,
            radius: _this.paint.distance
          }).addTo(map);

          _this.$emit('returnData', {circleData: {latlng: [_this.tu.data[0].lat, _this.tu.data[0].lng], radius: _this.paint.distance}});
          _this.makeOff();
        }
      }
    },
    createTu (item, index) {
      let _this = this;

      _this.tu.dian[index] = L.marker([item.lat, item.lng], {
        icon: _this.icon.dian
      }).addTo(map);
      //  点击事件
      _this.tu.dian[index].on('click', function (e) {
        if (_this.tu.data[0].lat == e.latlng.lat && _this.tu.data[0].lng == e.latlng.lng) {
          if (_this.tu.data.length < 3) {
            _this.tu.data.splice(0, 1);
            _this.tu.is = true;
            _this.makeOn();
          } else {
            if (!_this.tu.is) {
              _this.tu.data.splice(0, 1);
              if (_this.tu.data.length < 3) {
                _this.tu.is = true;
                _this.makeOn();
              }
            } else {
              _this.tu.is = false;
              _this.makeOff();
            }
          }
        } else {
          var num = _this.tu.data.findIndex(item => {
            if (item.lat == e.latlng.lat && item.lng == e.latlng.lng) {
              return true;
            }
          })
          _this.tu.data.splice(num, 1);
          if (_this.tu.data.length < 3 && !_this.tu.is) {
            _this.tu.is = true;
            _this.makeOn();
          }
        }
        //  清空图
        if (_this.tu.gon) map.removeLayer(_this.tu.gon);
        if (_this.tu.line) map.removeLayer(_this.tu.line);
        _this.tu.dian.forEach(item => {
          map.removeLayer(item);
        });
        let array = [];
        _this.tu.data.forEach(function (item, index) {
          _this.createTu(item, index);
          array.push([item.lat, item.lng]);
        });
        // 线
        if (_this.tu.is) {
          _this.tu.line = L.polyline([array], {}).addTo(map);
        } else { // 面
          _this.tu.gon = L.polygon([array], {}).addTo(map);
          _this.$emit('returnData', {gonData: array});
        }
      });
    },

    getLatLngOn () {
      map.on('click', this.getLatLng);
    },
    getLatLngOff () {
      map.off('click', this.getLatLng);
    },
    // 获取地图坐标
    getLatLng (e) {
      let _this = this;
      _this.tu = [e.latlng.lat, e.latlng.lng];
      _this.$emit('returnData', _this.tu);
    },

    // 画线显于虚线
    polylineMoveFun (e) {
      let _this = this;

      // 虚线
      if (_this.paint.latlng) {
        if (_this.paint.line) map.removeLayer(_this.paint.line);
        _this.paint.line = L.polyline([_this.paint.latlng, [e.latlng.lat, e.latlng.lng]], {
          className: 'polyline'
        }).addTo(map);

        //  计算 距离
        let latlng = L.latLng(_this.paint.latlng[0], _this.paint.latlng[1]);
        _this.paint.distance = latlng.distanceTo(L.latLng(e.latlng.lat, e.latlng.lng));

        if (_this.paint.dc) {
          _this.paint.latv = (_this.paint.latlng[0] + e.latlng.lat) / 2;
          _this.paint.lngv = (_this.paint.latlng[1] + e.latlng.lng) / 2;

          let jl = Math.round(_this.paint.distance);
          if (jl > 1000) {
            jl = (jl / 1000).toFixed(2) + 'km';
          } else {
            jl = jl + 'm';
          }
          _this.icon.text = L.divIcon({
            html: jl,
            className: 'my-div-icon',
            iconSize: [60, 30]
          });
          if (_this.paint.distanceShow) map.removeLayer(_this.paint.distanceShow);
          _this.paint.distanceShow = L.marker([_this.paint.latv, _this.paint.lngv], {
            icon: _this.icon.text
          }).addTo(map);
        }
      } else {
        // 鼠标位置点
        if (_this.paint.dian) map.removeLayer(_this.paint.dian);
        _this.paint.dian = L.marker([e.latlng.lat, e.latlng.lng], {
          icon: _this.icon.dian
        }).addTo(map);
      }
    },

    //  画圆过程
    circleMoveFun (e) {
      let _this = this;
      if (_this.paint.latlng && _this.paint.distance) {
        if (_this.paint.circle) map.removeLayer(_this.paint.circle);
        _this.paint.circle = L.circle(_this.paint.latlng, {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.2,
          draggable: true,
          radius: _this.paint.distance
        }).addTo(map);
      }
    },
    //  结束画图
    paintClose () {
      let _this = this;
      if (_this.paint.dian) map.removeLayer(_this.paint.dian);
      if (_this.paint.line) map.removeLayer(_this.paint.line);
      if (_this.paint.distanceShow) map.removeLayer(_this.paint.distanceShow);
      if (_this.paint.circle) map.removeLayer(_this.paint.circle);

      _this.paint = {};
      map.off('mousemove', _this.polylineMoveFun);
      map.off('mousemove', _this.circleMoveFun);
    },

    measureOn () {
      this.paint.dc = true;
      map.on('click', this.measureFun);
      map.on('mousemove', this.polylineMoveFun);
    },
    measureOff () {
      map.off('click', this.measureFun);
      this.paintClose();
    },
    measureReset () {
      if (this.ce.line) map.removeLayer(this.ce.line);

      this.ce.jl.forEach(item => {
        map.removeLayer(item);
      })
      this.ce.dian.forEach(item => {
        map.removeLayer(item);
      });
      this.ce.data = [];

      this.paintClose();

      this.measureOn();
    },

    // 测量方法
    measureFun (e) {
      let _this = this, i = _this.ce.data.length, jl = 0, clatv = 0, clngv = 0;
      _this.paint.latlng = [e.latlng.lat, e.latlng.lng];
      _this.ce.data.push({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
        distance: _this.paint.distance ? _this.paint.distance : 0
      });
      _this.createMeasure();
    },
    createMeasure () {
      let _this = this, jl = 0;

      _this.ce.dian.forEach(item => {
        map.removeLayer(item);
      });
      _this.ce.jl.forEach(item => {
        map.removeLayer(item);
      });

      let arr = [];
      let last = 0;
      _this.ce.data.forEach(function (item, index) {
        if (last != 0 && index > 0) {
          let latlng = L.latLng(last.lat, last.lng);
          jl = latlng.distanceTo(L.latLng(item.lat, item.lng));
          _this.ce.data[index].distance = jl;

          jl = Math.round(jl);
          let clatv = (item.lat + last.lat) / 2;
          let clngv = (item.lng + last.lng) / 2;

          if (jl > 1000) { jl = (jl / 1000).toFixed(2) + 'km'; } else { jl = jl + 'm'; }

          _this.icon.text = L.divIcon({
            html: jl,
            className: 'my-div-icon',
            iconSize: [60, 30]
          });

          _this.ce.jl[index] = L.marker([clatv, clngv], {
            icon: _this.icon.text
          }).addTo(map);
        }
        last = item;

        _this.ce.dian[index] = L.marker([item.lat, item.lng], {
          icon: _this.icon.dian
        }).addTo(map);
        _this.ce.dian[index].on('click', function (e) {
          var index = _this.ce.data.findIndex(item => {
            if (item.lat == e.latlng.lat && item.lng == e.latlng.lng) { return true; }
          });

          _this.ce.data.splice(index, 1);
          _this.createMeasure();
        });

        arr.push([item.lat, item.lng]);
      });
      _this.$emit('returnData', {distanceData: _this.ce.data});
      if (_this.ce.line) map.removeLayer(_this.ce.line);
      _this.ce.line = L.polyline([arr]).addTo(map);
    },

    areaOn (e) {
      this.area.type = e;
      this.areaReset();
    },
    areaReset () {
      let _this = this;
      if (_this.area.line) map.removeLayer(_this.area.line);
      if (_this.area.distanceShow) map.removeLayer(_this.area.distanceShow);
      if (_this.area.circle) map.removeLayer(_this.area.circle);

      if (this.area.tu) map.removeLayer(this.area.tu);
      if (this.area.width) map.removeLayer(this.area.width);
      if (this.area.height) map.removeLayer(this.area.height);
      this.area.dian.forEach(itme => {
        if (itme) map.removeLayer(itme);
      });
      delete this.area.lat;
      delete this.area.lng;
      this.area.dian = [];
      this.area.mj = 0;
      this.area.data = [];

      if (this.area.type == 'circle') {
        this.paint.dc = true;
        map.on('mousemove', this.polylineMoveFun);
        map.on('mousemove', this.circleMoveFun);
        map.on('click', this.circleArea);
      } else {
        map.on('mousemove', this.rectangleArea);
        map.on('click', this.rectangleFn);
      }
    },

    //  圆面积
    circleArea (e) {
      let _this = this;

      if (_this.area.lat) {
        // 添加 点
        _this.area.dian[1] = L.marker([e.latlng.lat, e.latlng.lng], {
          icon: _this.icon.dian
        }).addTo(map);
        //  添加 半径
        if (_this.area.line) map.removeLayer(_this.area.line);
        _this.area.line = L.polyline([[_this.area.lat, _this.area.lng], [e.latlng.lat, e.latlng.lng]]).addTo(map);

        // 面积 计算
        _this.area.mj = Math.round(Math.PI * _this.paint.distance * _this.paint.distance);

        _this.area.latv = (_this.area.lat + e.latlng.lat) / 2;
        _this.area.lngv = (_this.area.lng + e.latlng.lng) / 2;

        _this.icon.text = L.divIcon({
          html: Math.round(_this.paint.distance) + 'm',
          className: 'my-div-icon',
          iconSize: [60, 30]
        });
        if (_this.area.distanceShow) map.removeLayer(_this.area.distanceShow);
        _this.area.distanceShow = L.marker([_this.area.latv, _this.area.lngv], {
          icon: _this.icon.text
        }).addTo(map);

        if (_this.area.circle) map.removeLayer(_this.area.circle);
        _this.area.circle = L.circle([_this.area.lat, _this.area.lng], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.2,
          draggable: true,
          radius: _this.paint.distance
        }).addTo(map).bindPopup(_this.area.mj + '㎡').openPopup();

        _this.$emit('returnData', {
          circleAreaData: {
            latlng: [_this.area.lat, _this.area.lng],
            radius: _this.paint.distance,
            area: _this.area.mj
          }
        });
        _this.paintClose();
        map.off('click', this.circleArea);
      } else {
        _this.area.lat = e.latlng.lat;
        _this.area.lng = e.latlng.lng;
        _this.paint.latlng = [e.latlng.lat, e.latlng.lng];

        if (_this.area.dian[0]) map.removeLayer(_this.area.dian[0]);
        _this.area.dian[0] = L.marker([e.latlng.lat, e.latlng.lng], {
          icon: _this.icon.dian
        }).addTo(map);

        _this.area.dian[0].on('click', function () {
          _this.areaReset();
        });
      }
    },

    rectangleFn (e) {
      let _this = this;

      if (_this.area.lat) {
        map.off('mousemove', this.rectangleArea);
        map.off('click', this.rectangleFn);

        _this.$emit('returnData', {
          rectangleAreaData: {
            data: _this.area.data,
            area: _this.area.mj
          }
        });
      } else {
        _this.area.lat = e.latlng.lat;
        _this.area.lng = e.latlng.lng;

        if (_this.area.dian[0]) map.removeLayer(_this.area.dian[0]);
        _this.area.dian[0] = L.marker([e.latlng.lat, e.latlng.lng], {
          icon: _this.icon.dian
        }).addTo(map);
      }
    },
    //  矩形面积
    rectangleArea (e) {
      let _this = this;

      if (_this.area.lat) {
        _this.area.data = [];
        _this.area.data.push([_this.area.lat, _this.area.lng]);
        _this.area.data.push([e.latlng.lat, _this.area.lng]);
        _this.area.data.push([e.latlng.lat, e.latlng.lng]);
        _this.area.data.push([_this.area.lat, e.latlng.lng]);

        _this.area.data.forEach(function (item, index) {
          if (_this.area.dian[index]) map.removeLayer(_this.area.dian[index]);
          _this.area.dian[index] = L.marker([item[0], item[1]], {
            icon: _this.icon.dian
          }).addTo(map);
        });

        //  计算高
        let latlng = L.latLng(_this.area.data[0][0], _this.area.data[0][1]);
        let jl = latlng.distanceTo(L.latLng(_this.area.data[1][0], _this.area.data[1][1]));
        let width = Math.round(jl);
        let clatv = (_this.area.data[0][0] + _this.area.data[1][0]) / 2;
        let clngv = (_this.area.data[0][1] + _this.area.data[1][1]) / 2;

        _this.icon.text = L.divIcon({
          html: width,
          className: 'my-div-icon',
          iconSize: [60, 30]
        });
        if (_this.area.width) map.removeLayer(_this.area.width);
        _this.area.width = L.marker([clatv, clngv], {
          icon: _this.icon.text
        }).addTo(map);

        //  计算长
        latlng = L.latLng(_this.area.data[0][0], _this.area.data[0][1]);
        jl = latlng.distanceTo(L.latLng(_this.area.data[3][0], _this.area.data[3][1]));
        let height = Math.round(jl);
        clatv = (_this.area.data[0][0] + _this.area.data[3][0]) / 2;
        clngv = (_this.area.data[0][1] + _this.area.data[3][1]) / 2;

        _this.icon.text = L.divIcon({
          html: height,
          className: 'my-div-icon',
          iconSize: [60, 30]
        });
        if (_this.area.height) map.removeLayer(_this.area.height);
        _this.area.height = L.marker([clatv, clngv], {
          icon: _this.icon.text
        }).addTo(map);

        // 面积计算
        _this.area.mj = height * width;

        if (_this.area.tu) map.removeLayer(_this.area.tu);
        _this.area.tu = L.polygon(_this.area.data).addTo(map).bindPopup(_this.area.mj + '㎡').openPopup();
      } else {
        if (_this.area.dian[0]) map.removeLayer(_this.area.dian[0]);
        _this.area.dian[0] = L.marker([e.latlng.lat, e.latlng.lng], {
          icon: _this.icon.dian
        }).addTo(map);
      }
    },

    heatmap (obj) {
      let cfg = this.heatmapOption
      if (!obj.name) obj.name = 'heatmap';
      this.map[obj.name] = new HeatmapOverlay(cfg);
      this.map[obj.name].addTo(map).setData(obj);
    },

    //  画圆
    circle (obj) {
      if (!obj.name) obj.name = 'circle';
      this.del(obj.name);
      this.map[obj.name] = L.circle([obj.lat, obj.lng], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.2,
        radius: obj.radius
      }).addTo(map);

      if (obj.text) {
        if (obj.text.show) { this.map[obj.name].bindPopup(obj.text.content).openPopup(); } else { this.map[obj.name].bindPopup(obj.text.content); }
      }
    },
    //  经纬度上图
    marker (obj) {
      if (!obj.name) obj.name = 'dian';
      this.del(obj.name);
      let ijob = {
        icon: this.icon.marker
      };
      if (obj.icon) {
        if (obj.icon.url) ijob.rul = obj.icon.url; else ijob.rul = markerIcon;
        if (obj.icon.width) ijob.width = obj.icon.width; else ijob.width = 64;
        if (obj.icon.height) ijob.height = obj.icon.height; else ijob.height = 64;

        if (obj.icon.offwidth) ijob.offwidth = obj.icon.offwidth; else ijob.offwidth = ijob.width / 2;
        if (obj.icon.offheight) ijob.offheight = obj.icon.offheight; else ijob.offheight = ijob.height / 2;

        ijob.icon = L.icon({
          iconUrl: ijob.rul,
          iconSize: [ijob.width, ijob.height],
          iconAnchor: [ijob.offwidth, ijob.offheight]
        });
      }
      if (obj.draggable) obj.draggable = obj.draggable; else obj.draggable = false;
      this.map[obj.name] = L.marker([obj.lat, obj.lng], {
        icon: ijob.icon,
        draggable: obj.draggable
      }).addTo(map);

      if (obj.text) {
        if (obj.text.show) { this.map[obj.name].bindPopup(obj.text.content).openPopup(); } else { this.map[obj.name].bindPopup(obj.text.content); }
      }
    },

    showText (obj) {
      let _this = this;
      if (!obj.name) obj.name = 'text';
      _this.del(obj.name);

      _this.icon.text = L.divIcon({
        html: obj.content,
        iconSize: [60, 30]
      });
      _this.map[obj.name] = L.marker([obj.lat, obj.lng], {
        icon: _this.icon.text
      }).addTo(map);
    },

    //  画多边形
    polygon (obj) {
      if (!obj.name) obj.name = 'gon';
      this.del(obj.name);
      this.map[obj.name] = L.polygon(obj.latlng).addTo(map);
      if (obj.text) {
        if (obj.text.show) { this.map[obj.name].bindPopup(obj.text.content).openPopup(); } else { this.map[obj.name].bindPopup(obj.text.content); }
      }
    },
    //  画线
    polyline (obj) {
      if (!obj.name) obj.name = 'line';
      this.del(obj.name);
      if (!obj.color) obj.color = 'red';
      this.map[obj.name] = L.polyline(obj.latlng, {
        color: obj.color
      }).addTo(map);
    },
    del (name) {
      if (this.map[name]) map.removeLayer(this.map[name]);
    },

    scaleFn (num) {
      let _this = this;
      switch (num) {
        case 18: _this.info.scale = '50m'; break;
        case 17: _this.info.scale = '100m'; break;
        case 16: _this.info.scale = '200m'; break;
        case 15: _this.info.scale = '300m'; break;
        case 14: _this.info.scale = '500m'; break;
        case 13: _this.info.scale = '1km'; break;
        case 12: _this.info.scale = '3km'; break;
        case 11: _this.info.scale = '5km'; break;
        case 10: _this.info.scale = '10km'; break;
        case 9: _this.info.scale = '20km'; break;
        case 8: _this.info.scale = '50km'; break;
        case 7: _this.info.scale = '100km'; break;
        case 6: _this.info.scale = '200km'; break;
        case 5: _this.info.scale = '300km'; break;
        case 4: _this.info.scale = '500km'; break;
        case 3: _this.info.scale = '1000km'; break;
      }
    },
    // 高德源
    mapInit (param) {
      //  高德 街道
      if (param == 'gdjd') {
        L.tileLayer(
          // "http://59.212.37.22/mapserver/vmap/hn_bigdata_2018dt/getMAP?x=101&y=24&l=8&styleId=hn_bigdata_2018dtys2&ratio=1&tilesize=512&clientVersion=jssdk_bate@%20leaflet%202.2.8",
          // "http://59.212.37.22/mapserver/vmap/hn_bigdata_2018dt/getMAP?x={x}&y={y}&l={z}&styleId=hn_bigdata_2018dtys1",
          // "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
          'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
          {
            subdomains: ['1', '2', '3', '4'],

            // attribution: "地图"
            minZoom: 3, // 最小级别数
            maxZoom: 18, // 最大级别数
            // tileSize:512,          //切片尺寸（宽度和高度的像素值，假设切片是正方形的）
            // opacity:0.4,          //切片图层的透明度
            // tms:true,          //如果此值为true，反转切片Y轴的编号（对于TMS服务需将此项打开）
            attribution: '12', // 用来进行属性控制的字符串，描述了图层数据。
            reuseTiles: true
          }
        ).addTo(map);
      // 高德 影像
      } else if (param == 'gdyx') {
        L.tileLayer('http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}', {
          subdomains: ['1', '2', '3', '4'],

          // attribution: "地图"
          minZoom: 3, // 最小级别数
          maxZoom: 18, // 最大级别数
          // tileSize:512,          //切片尺寸（宽度和高度的像素值，假设切片是正方形的）
          // opacity:0.4,          //切片图层的透明度
          // tms:true,          //如果此值为true，反转切片Y轴的编号（对于TMS服务需将此项打开）
          attribution: '12', // 用来进行属性控制的字符串，描述了图层数据。
          reuseTiles: true
        }
        ).addTo(map);
      // ArcGIS街道图
      } else if (param == 'agjd') {
        L.tileLayer('http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}', {
          subdomains: ['1', '2', '3', '4'],

          // attribution: "地图"
          minZoom: 3, // 最小级别数
          maxZoom: 18, // 最大级别数
          // tileSize:512,          //切片尺寸（宽度和高度的像素值，假设切片是正方形的）
          // opacity:0.4,          //切片图层的透明度
          // tms:true,          //如果此值为true，反转切片Y轴的编号（对于TMS服务需将此项打开）
          attribution: '12', // 用来进行属性控制的字符串，描述了图层数据。
          reuseTiles: true
        }
        ).addTo(map);
        // ArcGIS影像图
      } else if (param == 'agyx') {
        L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          subdomains: ['1', '2', '3', '4'],

          // attribution: "地图"
          minZoom: 3, // 最小级别数
          maxZoom: 18, // 最大级别数
          // tileSize:512,          //切片尺寸（宽度和高度的像素值，假设切片是正方形的）
          // opacity:0.4,          //切片图层的透明度
          // tms:true,          //如果此值为true，反转切片Y轴的编号（对于TMS服务需将此项打开）
          attribution: '12', // 用来进行属性控制的字符串，描述了图层数据。
          reuseTiles: true
        }
        ).addTo(map);
      }
    },

    // 海南源
    mapInitHN () {
      let _this = this
      map = L.map(_this.idName, {
        crs: L.CRS.CustomEPSG4326,
        center: {lon: 109.728980, lat: 19.183274},
        zoom: 8,
        inertiaDeceleration: 15000,
        maxZoom: 20
      });
      // 添加底图
      var layer = new L.GXYZ('http://59.212.37.22/mapserver/vmap/hn_bigdata_2018dt/getMAP?x={x}&y={y}&l={z}&styleId=hn_bigdata_2018dtys1', {tileSize: 512});
      map.addLayer(layer);
    },
    setCenter(lat,lng,zoom){
      if(undefined==zoom){
        this.info.zoom=8;
      }else if(zoom<3){
        this.info.zoom=3;
      }else if(zoom>18){
        this.info.zoom=18;
      }else{
        this.info.zoom=zoom;
      }

      map.setView([lat, lng],this.info.zoom);
    },
  },

  mounted () {
    let _this = this;
    // 图标定义
    this.icon.dian = L.icon({
      iconUrl: dianIcon,
      iconSize: [8, 8],
      iconAnchor: [4, 4]
    });
    this.icon.marker = L.icon({
      iconUrl: markerIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
    document.getElementById('map').setAttribute('id', _this.idName)
    document.getElementById(_this.idName).style.setProperty('width','100%');
    document.getElementById(_this.idName).style.setProperty('height','100%');
    document.getElementById(_this.idName).style.setProperty('position','relative');
    document.getElementById(_this.idName).style.setProperty('z-index','0');
    //  初始化地图
    map = L.map(_this.idName, _this.option).setView(_this.center, _this.optionZoom);
    _this.scaleFn(_this.optionZoom);
    _this.optionZoom = _this.zoom
    this.mapInit('gdjd');

    // 是否开启画图
    if (this.open) {
      this.makeOn();
    }

    // this.heatmap();
    map.on('zoomend', e => {
      _this.optionZoom = e.target.getZoom();
      _this.scaleFn(_this.optionZoom);
    })

    map.on('mousemove', function (e) {
      _this.info.latlng = e.latlng.lat + ',' + e.latlng.lng;
    });
  }

}
</script>

<style>
#map {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.polyline{
  stroke-dasharray: 10;
}
.my-div-icon{
  background-color: none !important;
  border:0;
  color: red;
  font-size: 16px;
  font-weight: bold;
}
#showZoom{
  position: absolute;
  top: 28px;
  left: 42px;
  z-index: 1000;
  background: #fff;
  box-shadow:0px 0px 5px #333;
  width: 18px;
  height: 30px;
  line-height: 30px;
  border-top-right-radius:3px;
  border-bottom-right-radius:3px;
  text-align: center;

}
#info{
  position: absolute;
  bottom: 2px;
  z-index: 1000;
}
#info span{
  background-color: #fff;
  border:3px solid #aaa;
  padding: 0px 10px;
  margin: 0px 5px;
}
#changeTu{

}
</style>
