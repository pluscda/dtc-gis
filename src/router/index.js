import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/land/Login.vue"),
  },
  {
    path: "/historylist",
    name: "waitlist",
    component: () => import("../components/dtclist/HistoryList.vue"),
  },
  {
    path: "/tracelist",
    name: "tracelist",
    component: () => import("../components/dtclist/TraceList.vue"),
  },
  {
    path: "/phraselist",
    name: "phraselist",
    component: () => import("../views/PhysicalExam/items/Phrase.vue"),
  },
  {
    path: "/servant-list",
    name: "servantList",
    component: () => import("../views/servantList.vue"),
  },
  {
    path: "/servant-form/:id",
    name: "servantForm",
    component: () => import("../views/servantForm.vue"),
  },
  {
    path: "/steps",
    name: "steps",
    component: () => import("../components/steps/Steps.vue"),
  },
  {
    path: "/details",
    name: "PhysicalExam",
    component: () => import("../views/PhysicalExam/Index.vue"),
  },
  {
    path: "/serviceDetails",
    name: "ServiceDetails",
    component: () => import("../views/PhysicalExam/Service.vue"),
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../components/manage/Account.vue"),
  },
  {
    path: "/role",
    name: "role",
    component: () => import("../components/manage/Role.vue"),
  },
  {
    path: "/room",
    name: "room",
    component: () => import("../components/manage/Room.vue"),
  },
];
//alert(process.env.BASE_URL)
const router = new VueRouter({
  //mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to, from) => {
  setTimeout(() => {
    if (!to.path.includes('login') && !sessionStorage.token) {
      router.push('login');
    }
  }, 300)
})

export default router;
