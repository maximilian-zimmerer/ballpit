import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
import "./firebaseInit";

Vue.config.productionTip = false;

// prevent login redirection on load, while logged in
// https://github.com/bradtraversy/vue_firestore_employeemanager/blob/auth/src/main.js
let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
