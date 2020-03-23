import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import store from "../store/index";

Vue.use(VueRouter);

const isNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};
const isAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/signin");
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/office",
    name: "Office",
    component: () => import("../views/Office.vue"),
    beforeEnter: isAuthenticated
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News.vue")
  },
  {
    path: "/news/open/:id",
    name: "SingleNews",
    component: () => import("../views/SingleNews.vue"),
    props: route => ({ id: route.params.id })
  },
  {
    path: "/patient/:id",
    name: "Patient",
    component: () => import("../views/Patient.vue"),
    props: route => ({ id: route.params.id })
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: () => import("../views/Catalog.vue")
  },
  {
    path: "/signIn",
    name: "SignIn",
    component: SignIn,
    beforeEnter: isNotAuthenticated
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    beforeEnter: isNotAuthenticated
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
