<template>
  <section class="header-grid">
    <section class="nav">
      <!-- App Navigation -->
      <span v-if="isLoggedIn">
        <router-link class="link" to="/">List</router-link>
      </span>
      <span v-if="isLoggedIn">
        <router-link class="link" to="/About">About</router-link>
      </span>
      <!-- Login/Register -->
      <span v-if="!isLoggedIn">
        <router-link class="link" to="/Login">Login</router-link>
      </span>
      <span v-if="!isLoggedIn">
        <router-link class="link" to="/Register">Register</router-link>
      </span>
    </section>
    <section class="logout-wrapper">
      <span v-if="isLoggedIn" class="logout" @click="logout">Logout</span>
    </section>
  </section>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/Login");
          this.isLoggedIn = false;
        });
    },
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser;
    }
  },
  computed: {
    matchRoute() {
      return this.$route.name.name;
    },
  },
};
</script>

<style scoped>
.header-grid {
  display: grid;
  padding: 1em;
  border-bottom: 1px solid black;
  grid-template-columns: 1fr 1fr;
}
.nav {
  gap: 1em;
  display: flex;
  height: fit-content;
}
.link {
  color: black;
  text-decoration: none;
}
.logout-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.logout {
  color: black;
  cursor: pointer;
}
.currentRoute {
  text-decoration: underline;
}
</style>
