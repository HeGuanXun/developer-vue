import leafletComponent from './index.vue';

const leafletMap = {
  install: function (Vue) {
    Vue.component('leafletMap', leafletComponent);
  }
}

export default leafletMap;
