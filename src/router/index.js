import Vue from "vue";
import firebase from "firebase";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Info from "../views/Info.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // logged in users only
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Register",
    name: Register,
    component: Register,
    // logged out users only
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/Login",
    name: Login,
    component: Login,
    // logged out users only
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/Info",
    name: Info,
    component: Info,
    // logged in users only
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  // check if the current route requires authentification
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // check if NOT logged in
    if (!firebase.auth().currentUser) {
      // Go to login page
      next({
        path: "/Login",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    // check if IS logged in
    if (firebase.auth().currentUser) {
      // Go to login page
      next({
        path: "/",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});

export default router;
