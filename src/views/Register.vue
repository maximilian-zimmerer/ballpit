<template>
  <div class="register-wrapper">
    <!-- Register Form -->
    <form class="register-form" v-on:submit.prevent="register">
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
      <input type="submit" value="Register" />
      <!-- Error Message -->
      <transition name="fade-right">
        <section v-if="errorMsg" class="error-wrapper">
          <span class="error-msg">{{ errorMsg }}</span>
        </section>
      </transition>
    </form>
    <!-- Logo -->
    <transition name="fade-right">
      <div class="logo-text-wrapper">
        <img class="logo-text" src="../../assets/logo/logo_text.png" />
      </div>
    </transition>
  </div>
</template>

<script>
import firebase from "firebase/app";
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      errorMsg: false,
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        // register a new user
        .createUserWithEmailAndPassword(this.email, this.password)
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
.register-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.register-form {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}
input {
  padding: 1em;
  color: white;
  border-bottom: 1px solid white !important;
}
@media (min-width: 1300px) {
  input[type="submit"] {
    color: grey;
  }
  input[type="submit"]:hover {
    color: white;
  }
}
</style>
