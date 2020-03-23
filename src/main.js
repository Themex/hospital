import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
// import axios from "axios";
// import VueAxios from "vue-axios";
import router from "./router";
import store from "./store";
import "bootstrap";
import "./assets/scss/default.scss";
Vue.config.productionTip = false;

// Vue.use(VueAxios, axios);

const moment = require("moment");
require("moment/locale/ru.js");
Vue.use(require("vue-moment"), { moment });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
