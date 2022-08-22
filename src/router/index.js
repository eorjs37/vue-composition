import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    component: () => import("@/pages/index.vue"),
  },
  {
    path: "/compositionapi",
    component: () => import("@/pages/compositionapi.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export { router };
