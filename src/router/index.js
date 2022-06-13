import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Home Page
import Home from '../components/Home/Home';
  
Vue.use(BootstrapVue)
Vue.use(IconsPlugin) 

Vue.use(VueRouter);

const routes = [
  // Home Page
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
