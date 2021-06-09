import Vue from 'vue'; 
import App from './App.vue';
import router from './router';
import store from './store'; 
import Form from './common/formcheck';
// import table  
import 'xe-utils';
import VXETable from 'vxe-table';
import 'vxe-table/lib/index.css';
import './common/render.js';
// import iview
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
// import Echarts
import echarts from 'echarts';
import 'echarts/map/js/china'; 
Vue.prototype.$echarts = echarts;
Vue.prototype.$formchecked = Form;
// import Vant
import Vant from 'vant';
import 'vant/lib/index.css';

declare module 'vue/types/vue' {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
    $echarts: any,
    $formchecked: any
  }
} 

Vue.config.productionTip = false; 
Vue.use(VXETable);
Vue.use(ViewUI);
Vue.use(Vant);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
