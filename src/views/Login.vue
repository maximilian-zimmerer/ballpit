<template>
  <div class="login-wrapper">
    <!-- Login Form -->
    <form class="login-form" v-on:submit.prevent="login">
      <!-- Email Input -->
      <input type="text" id="email" v-model="email" placeholder="Email" />
      <!-- Password Input -->
      <input
        type="text"
        id="password"
        v-model="password"
        placeholder="Password"
      />
      <!-- Submit -->
      <input type="submit" value="Login" />
      <!-- Error Message -->
      <section v-if="errorMsg" class="error-wrapper">
        <span class="error-msg">{{ errorMsg }}</span>
      </section>
    </form>
    <!-- Logo -->
    <div class="logo-wrapper">
      <img class="logo" src="../../assets/logo/logo_text.png" />
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      errorMsg: false,
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        // sign in existing user
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => {
          this.errorMsg = err;
        });
    },
  },
};
</script>

<style scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.login-form {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}
.login-form input {
  padding: 1em;
  color: white;
  border-bottom: 1px solid white;
}
.login-form input[type="submit"] {
  color: grey;
}
.login-form input[type="submit"]:hover {
  color: white;
}
.logo-wrapper {
  flex: 1;
  width: 100%;
  padding: 1em;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.logo {
  width: 100%;
  height: auto;
  object-fit: scale-down;
}
</style>
