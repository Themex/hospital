import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Static from "@/views/static/Static.vue";
import About from "@/views/static/About.vue";
import Contacts from "@/views/static/Contacts.vue";
import Vacancies from "@/views/static/Vacancies.vue";
import FAQ from "@/views/static/FAQ.vue";
import Spreading from "@/views/static/Spreading.vue";
import Prevention from "@/views/static/Prevention.vue";
import Symptoms from "@/views/static/Symptoms.vue";
import store from "@/store/index";

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
    path: "/static",
    name: "Static",
    component: Static,
    children: [
      {
        path: "about",
        name: "About",
        component: About
      },
      {
        path: "contacts",
        name: "Contacts",
        component: Contacts
      },
      {
        path: "vacancies",
        name: "Vacancies",
        component: Vacancies
      },
      {
        path: "faq",
        name: "FAQ",
        component: FAQ
      },
      {
        path: "spread",
        name: "Spread",
        component: Spreading
      },
      {
        path: "prevent",
        name: "Prevent",
        component: Prevention
      },
      {
        path: "symptoms",
        name: "Symptoms",
        component: Symptoms
      }
    ]
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
