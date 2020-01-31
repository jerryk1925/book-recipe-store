import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home")
  },
  {
    path: "/book",
    name: "book",
    component: () => import(/* webpackChunkName: "about" */ "../views/BookPage")
  },
  {
    path: "/secret",
    name: "secret",
    component: () => import(/* webpackChunkName: "about" */ "../views/Secret")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
