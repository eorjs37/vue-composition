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
  {
    name: "refReactive",
    path: "/ref",
    component: () => import("@/pages/refReactive.vue"),
  },
  {
    name: "reactive",
    path: "/reactive",
    component: () => import("@/pages/reactive.vue"),
  },
  {
    name: "watch",
    path: "/watch",
    component: () => import("@/pages/watch.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export { router };
