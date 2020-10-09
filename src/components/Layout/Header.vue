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
      <p v-if="isLoggedIn" class="link" @click="logout">Logout</p>
      <!-- Login/Register -->
      <p v-if="!isLoggedIn">
        <router-link class="link" to="/Login">Login</router-link>
      </p>
      <p v-if="!isLoggedIn">
        <router-link class="link" to="/Register">Register</router-link>
      </p>
    </section>
    <section class="date">
      <p>©2020</p>
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
          alert("Signed Out");
          this.$router.push("/Login");
          this.isLoggedIn = false;
        });
    },
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser;
      console.log(this.currentUser);
    }
  },
};
</script>

<style scoped>
.header-grid {
  display: grid;
  margin-top: -1em;
  grid-template-columns: 1fr 1fr;
}
.nav {
  gap: 1em;
  width: 100%;
  display: flex;
  height: fit-content;
}
.link {
  color: white;
  text-decoration: underline;
}
.date {
  text-align: right;
}
</style>
