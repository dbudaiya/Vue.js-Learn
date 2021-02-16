import Vue from "vue";
import VueRouter from "vue-router";
import About from "../src/components/About";
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("../src/components/Home"),
    
  },
  {
    path: "/about",
    component: About
  },
  {
    path:'/user/:id',
    component:()=>import("../src/components/User")  
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
