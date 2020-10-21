import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify/lib";
import VueScrollTo from "vue-scrollto";

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
  offset: -50
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
