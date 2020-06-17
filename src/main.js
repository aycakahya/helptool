import VueShowdown from "vue-showdown";
import App from './App.vue'
import { router } from "./router";
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.use(VueShowdown, {
  flavor: 'github',
  options: {
    emoji: true
  },
})

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
Vue.component('font-awesome-icon', FontAwesomeIcon);
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faBorderAll, faBolt, faArrowsAltH, faAngleDown, faFan, faCarBattery, faPhoneAlt, faFireExtinguisher, faCloudMoonRain, faChartLine, faFileSignature, faNetworkWired, faBlog, faHistory, faBell, faCheckSquare, faVideo, faTrafficLight, faCar, faDirections, faGripLines, faFaucet} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faArrowsAltH, faAngleDown, faBorderAll, faBolt, faFan, faCarBattery, faPhoneAlt, faFireExtinguisher, faCloudMoonRain,
   faChartLine, faFileSignature, faNetworkWired, faHistory, faBell, faCheckSquare, faVideo, faTrafficLight, faCar, faDirections, faGripLines, faFaucet);

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)


import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
