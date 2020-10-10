<template>
  <div class="register-wrapper">
    <form class="register-form" v-on:submit.prevent="register">
      <input type="text" id="email" v-model="email" placeholder="Email" />
      <input
        type="text"
        id="password"
        v-model="password"
        placeholder="Password"
      />
      <input type="submit" value="Register" />
      <section v-if="errorMsg" class="errorMsg">
        <p>{{ errorMsg }}</p>
      </section>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
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
        //register new user
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((account) => {
          alert(`Created an account as ${account.user.email}`);
          //re-route to homepage
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
  height: min-content;
}
.register-form {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}
.register-form input {
  padding: 1em;
  color: white;
  border-bottom: 1px solid white;
}
.register-wrapper div {
  width: 100%;
  height: 100%;
  padding: 1em;
}
</style>
