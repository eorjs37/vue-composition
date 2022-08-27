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
    name: "compositionapi",
    path: "/compositionapi",
    component: () => import("@/pages/compositionapi.vue"),
  },
  {
    name: "animation",
    path: "/animation",
    component: () => import("@/pages/animation.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export { router };
