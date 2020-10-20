import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify/lib";
import VueScrollTo from "vue-scrollto";

Vue.use(Vuetify);
const vuetify = new Vuetify({});

Vue.use(VueScrollTo, {
  offset: -45
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
