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
      <transition name="fade-right">
        <section v-if="errorMsg" class="errorMsg">
          <p>{{ errorMsg }}</p>
        </section>
      </transition>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app';
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
        //register new user
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
.login-form input:nth-last-of-type(1) {
  color: grey;
}
.login-form input:nth-last-of-type(1):hover {
  color: white;
}
</style>
