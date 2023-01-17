import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import AgentsSearch from "@/views/Agents/AgentsSearch.vue";
import AgentsUpload from "@/views/Agents/AgentsUpload.vue";
import Error403 from "@/views/Errors/Error403.vue";
import AgentsList from "@/views/Agents/AgentsList.vue";
import Error404 from "@/views/Errors/Error404.vue";
import SearchLog from "@/views/Agents/SearchLog.vue";


const routes = [
  {
    path: "/403",
    name: "403Error",
    component: Error403,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/agents/search",
    name: "AgentsSearch",
    component: AgentsSearch,
  },
  {
    path: "/agents/upload",
    name: "AgentsUpload",
    component: AgentsUpload,
  },
  {
    path: "/agents/log",
    name: "SearchLog",
    component: SearchLog,
  },
  {
    path: "/agents/list",
    name: "AgentsList",
    component: AgentsList,
  },
  {
    path: "/404",
    name: "404Error",
    component: Error404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
