import { createRouter, createWebHistory } from "vue-router";

// import HomePage from "../components/Home";
// import FilmsPage from "../components/Films";
// import AdminPage from "../components/Admin";
// import FormPage from "../components/FormApp";

const routes = [
  // { path: "/", component: HomePage },
  // { path: "/films", component: FilmsPage },
  // { path: "/form", component: FormPage },
  // { path: "/admin", component: AdminPage, meta: { reqAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.reqAuth && !isAuth()) {
    next("/admin"); 

  } else {
    next();
  }
});

export default router;

function isAuth() {
  return true;
}
