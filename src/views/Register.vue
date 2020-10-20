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
    <!-- Reset Toggle -->
    <transition name="fade-right">
      <section class="reset-toggle" v-if="!showReset" @click="toggleReset">
        <span>Forgot your password ?</span>
      </section>
    </transition>
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
      emailReset: "",
      errorMsg: false,
      showReset: false,
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
    toggleReset() {
      this.showReset = !this.showReset;
    },
  },
};
</script>

<style scoped>
.register-wrapper {
  width: 100%;
  height: 100%;
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
.reset-toggle {
  bottom: 0;
  width: 100%;
  padding: 1em;
  color: grey;
  position: fixed;
  cursor: pointer;
  border-top: 1px solid white;
}
.reset-wrapper {
  bottom: 0;
  width: 100%;
  padding: 1em;
  position: fixed;
  border-top: 1px solid white;
}
.register-form input[type="submit"]:hover {
  color: white;
}
.register-form input[type="submit"],
.reset-wrapper input[type="submit"] {
  color: grey;
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
  .reset-toggle:hover,
  .reset-wrapper input[type="submit"]:hover {
    color: white;
  }
}
</style>
