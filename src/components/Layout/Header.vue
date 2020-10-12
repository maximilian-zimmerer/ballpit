<template>
  <section class="header-grid">
    <section class="nav">
      <!-- App Navigation -->
      <span v-if="isLoggedIn">
        <router-link class="link" to="/">List</router-link>
      </span>
      <span v-if="isLoggedIn">
        <router-link class="link" to="/About">Info</router-link>
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
  z-index: 1;
  padding: 1em;
  display: grid;
  border-bottom: 1px solid white;
  grid-template-columns: 1fr 1fr;
}
.nav {
  display: flex;
  height: fit-content;
}
.link {
  color: white;
  padding-right: 1em;
  text-decoration: none;
}
.logout-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.logout {
  color: white;
  cursor: pointer;
}
.router-link-exact-active {
  text-decoration: underline;
}
</style>
