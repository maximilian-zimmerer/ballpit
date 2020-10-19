import Vue from "vue";
import firebase from "firebase/app";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Info from "../views/Info.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Login",
    component: Login,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/Register",
    component: Register,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Info",
    component: Info,
    meta: {
      requiresAuth: true,
    },
  },
  // Redirect on incorrect subpath
  {
    path: "*",
    redirect: "/Login",
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "*",
    redirect: "/",
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

// Vue router meta elements
// https://router.vuejs.org/guide/advanced/meta.html

router.beforeEach((to, from, next) => {
  // check if the current route requires authentification
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // check if NOT logged in
    if (!firebase.auth().currentUser) {
      // Go to login page
      next({
        path: "/Login",
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    // check if IS logged in
    if (firebase.auth().currentUser) {
      // Go to home page
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
