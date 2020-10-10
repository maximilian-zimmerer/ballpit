<template>
  <section class="header-grid">
    <section class="nav">
      <!-- App Navigation -->
      <p v-if="isLoggedIn">
        <router-link class="link" to="/">List</router-link>
      </p>
      <p v-if="isLoggedIn">
        <router-link class="link" to="/About">About</router-link>
      </p>
      <!-- Login/Register -->
      <p v-if="!isLoggedIn">
        <router-link class="link" to="/Login">Login</router-link>
      </p>
      <p v-if="!isLoggedIn">
        <router-link class="link" to="/Register">Register</router-link>
      </p>
    </section>
    <section class="logout-wrapper">
      <p v-if="isLoggedIn" class="logout" @click="logout">Logout</p>
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
  margin-top: -1em;
  grid-template-columns: 1fr 1fr;
  border: 1px solid blue;
}
.nav {
  gap: 1em;
  display: flex;
  height: fit-content;
}
.link {
  color: white;
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
.currentRoute {
  text-decoration: underline;
}
</style>
