<template>
  <div class="login-wrapper">
    <form class="login-form" v-on:submit.prevent="login">
      <input type="text" id="email" v-model="email" placeholder="Email" />
      <input
        type="text"
        id="password"
        v-model="password"
        placeholder="Password"
      />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        //register new user
        .signInWithEmailAndPassword(this.email, this.password) 
        .then((account) => {
          alert(`You are logged in as ${account.user.email}`);
          //re-route to homepage
          this.$router.push("/");
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style scoped>
.login-wrapper {
  width: 100%;
  height: min-content;
}
.login-form {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}
.login-form input {
  padding: 1em;
  color: white;
  cursor: pointer;
  border-bottom: transparent;
  background-color: transparent;
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
}
.login-form input:nth-last-of-type(1) {
  border-bottom: 1px solid white;
}
</style>
