import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import TeamList from "./components/teams/TeamsList.vue";
import UserList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: "/", redirect: "/teams" },
    { path: "/teams", component: TeamList, alias: "/" },
    { path: "/users", component: UserList },
    { path: "/teams/:teamId", component: TeamMembers },
    { path: "/:notFound(.*)", redirect: "/" },
  ],
  //   linkActiveClass: "active",
});
const app = createApp(App);

app.use(router);

app.mount("#app");
