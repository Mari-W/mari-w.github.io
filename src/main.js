import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify/lib";
import VueScrollTo from "vue-scrollto";
import { isMobile } from "mobile-device-detect";

Vue.use(Vuetify);
const vuetify = new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#546E7A",
        secondary: "#78909C"
      }
    }
  }
});

Vue.use(VueScrollTo, {
  offset: -45
});

Vue.config.productionTip = false;

Vue.prototype.$isMobile = isMobile;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
