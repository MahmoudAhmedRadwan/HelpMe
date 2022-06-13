import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/main.scss";
import VueApexCharts from 'vue-apexcharts'
import VueHtmlToPaper from 'vue-html-to-paper';
import '../public/myRequestsStyle.css'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false;

import VueGoogleMap from 'vuejs-google-maps'

Vue.use(VueGoogleMap, {
  load: {
      apiKey: 'AIzaSyACH1HrKNARKRIowXGeL90MtV1YNQ5bJNg',
      libraries: [/* rest of libraries */]
  }
})

const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    // 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    // 'https://unpkg.com/kidlat-css/css/kidlat.css'
    '/myRequestsStyle.css'
  ],
  timeout: 1000, // default timeout before the print window appears
  autoClose: true, // if false, the window will not close after printing
  windowTitle: window.document.title, // override the window title
}

Vue.use(VueHtmlToPaper, options);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
