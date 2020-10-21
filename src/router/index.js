import Vue from "vue";
import VueRouter from "vue-router";
import Legal from "@/views/Legal";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:section?",
    name: "Home",
    component: Home
  },
  {
    path: "/legal",
    name: "Legal",
    component: Legal
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
