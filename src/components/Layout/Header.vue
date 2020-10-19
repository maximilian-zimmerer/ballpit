<template>
  <section class="header-wrapper">
    <section class="header-nav">
      <!-- List -->
      <span v-if="isLoggedIn">
        <router-link class="link" to="/">List</router-link>
      </span>
      <!-- Info -->
      <span v-if="isLoggedIn">
        <router-link class="link" to="/Info">Info</router-link>
      </span>
      <!-- Login -->
      <span v-if="!isLoggedIn">
        <router-link class="link" to="/Login">Login</router-link>
      </span>
    </section>
    <!-- Logo -->
    <div class="logo-wrapper">
      <img class="rotate" src="../../../assets/logo/logo.png" />
    </div>
    <!-- Logout -->
    <!-- Register -->
    <section class="logout-wrapper">
      <span v-if="isLoggedIn" class="logout" @click="logout">Logout</span>
      <span v-if="!isLoggedIn" class="register">
        <router-link class="link" to="/Register">Register</router-link>
      </span>
    </section>
  </section>
</template>

<script>
import firebase from "firebase/app";
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
};
</script>

<style scoped>
.header-wrapper {
  z-index: 1;
  padding: 1em;
  display: grid;
  border-bottom: 1px solid white;
  grid-template-columns: repeat(3, 1fr);
}
.header-nav {
  display: flex;
  height: fit-content;
}
.link {
  color: grey;
  text-decoration: none;
}
.header-nav .link:nth-of-type(1) {
  padding-right: 1em;
}
.logo-wrapper {
  display: flex;
  align-content: center;
  justify-content: center;
}
img {
  width: 2em;
  height: 2em;
  cursor: default;
}
.rotate {
  animation: rotation 8s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.logout-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.logout {
  color: grey;
  cursor: pointer;
}
.router-link-exact-active {
  color: white;
  text-decoration: underline;
}
.link:hover,
.logout:hover {
  color: white;
}
</style>
