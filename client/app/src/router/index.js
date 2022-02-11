import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
      name: "UserMenu",
      path: "/usermenu",
      component: () => import("../views/UserMenu.vue")
  },
  {
    name: "Home",
    path: "/",
    component: () => import("../views/Home.vue")
},
  {
    name: "DashBoard",
    path: "/dashboard",
    component: () => import("../views/DashBoard.vue")
},
  {
    name: "SendEmail",
    path: "/sendemail",
    component: () => import("../views/SendEmail.vue")
},
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;