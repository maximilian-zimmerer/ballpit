<template>
  <div class="login-wrapper">
    <!-- Login Form -->
    <form class="login-form" v-on:submit.prevent="login">
      <!-- Email Input -->
      <input type="text" id="email" v-model="email" placeholder="Email" />
      <!-- Password Input -->
      <section class="password-flex">
        <input
          type="text"
          id="password"
          v-model="password"
          placeholder="Password"
        />
        <!-- Password Toggle -->
        <button type="button" @click="toggleReset">Forgot</button>
      </section>
      <!-- Submit -->
      <input type="submit" value="Login" />
      <!-- Error Message -->
      <transition name="fade-right">
        <section v-if="errorMsg" class="error-wrapper">
          <span class="error-msg">{{ errorMsg }}</span>
        </section>
      </transition>
    </form>
    <!-- Reset Form -->
    <transition name="fade-right">
      <section class="reset-wrapper" v-if="showReset">
        <form class="reset-form" v-on:submit.prevent="sendReset">
          <!-- Label -->
          <label for="email">Password Reset</label>
          <!-- Email Input -->
          <input
            id="email"
            type="text"
            v-model="emailReset"
            placeholder="Your Email"
          />
          <!-- Submit -->
          <input type="submit" value="Send" />
        </form>
      </section>
    </transition>
    <!-- Logo -->
    <transition name="fade-right">
      <div class="logo-text-wrapper" v-if="!showReset">
        <img class="logo-text" src="../../assets/logo/logo_text.png" />
      </div>
    </transition>
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
      emailReset: "",
      errorMsg: false,
      showReset: false,
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
    toggleReset() {
      this.showReset = !this.showReset;
    },
    sendReset() {
      firebase
        .auth()
        // send password reset email
        .sendPasswordResetEmail(this.emailReset)
        .then(() => {
          this.errorMsg = `Email sent to ${this.emailReset}`;
          this.emailReset = "";
        })
        .catch((err) => {
          this.errorMsg = err;
          this.emailReset = "";
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
  border-bottom: 1px solid white;
}
input[type="submit"] {
  color: grey;
}
.password-flex {
  width: 100%;
  display: flex;
  height: min-content;
  flex-direction: row;
}
#password {
  flex: 1;
}
.reset-wrapper {
  bottom: 0;
  width: 100%;
  padding: 1em;
  position: fixed;
  border-top: 1px solid white;
}
@media (max-width: 375px) {
  .reset-form {
    gap: 1em;
    display: grid;
    grid-template-columns: 1fr;
  }
  .reset-form input[type="submit"] {
    text-align: left;
    width: min-content;
  }
}
@media (min-width: 376px) {
  label {
    padding-right: 1em;
  }
  .reset-wrapper input[type="text"] {
    width: 50%;
  }
  .reset-wrapper input[type="submit"] {
    float: right;
  }
}
@media (min-width: 1300px) {
  input[type="submit"]:hover {
    color: white;
  }
}
</style>
