<template>
  <section class="header-grid">
    <section class="nav">
      <!-- App Navigation -->
      <span v-if="isLoggedIn">
        <router-link class="link" to="/">List</router-link>
      </span>
      <span v-if="isLoggedIn">
        <router-link class="link" to="/Info">Info</router-link>
      </span>
      <!-- Login/Register -->
      <span v-if="!isLoggedIn">
        <router-link class="link" to="/Login">Login</router-link>
      </span>
      <span v-if="!isLoggedIn">
        <router-link class="link" to="/Register">Register</router-link>
      </span>
    </section>
    <div class="logo-wrapper">
      <img class="rotate" src="../../../assets/logo/logo.png" />
    </div>
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
  grid-template-columns: repeat(3, 1fr);
  /* border: 1px solid yellow; */
}
.nav {
  display: flex;
  height: fit-content;
  /* border: 1px solid yellow; */
}
.link {
  color: grey;
  padding-right: 1em;
  text-decoration: none;
}
.logo-wrapper {
  display: flex;
  align-content: center;
  justify-content: center;
  /* border: 1px solid yellow; */
}
img {
  width: 2em;
  height: 2em;
  cursor: default;
  /* border: 1px solid yellow; */
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
  /* border: 1px solid yellow; */
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
