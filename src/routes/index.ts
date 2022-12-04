import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/home.vue";
import Skills from "../pages/skills.vue";
import Projects from "../pages/projects.vue";
import Organizations from "../pages/organizations.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/projects",
    name:"Projects",
    component:Projects
  },
  {
    path:"/organizations",
    name:"Organization",
    component:Organizations
  },
  {
    path: "/capabilities",
    name: "Skills",
    component: Skills,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;