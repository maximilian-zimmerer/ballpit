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
      <!-- Erros Message -->
      <transition name="fade-right">
        <section v-if="errorMsg" class="error-wrapper">
          <p class="error-msg">{{ errorMsg }}</p>
        </section>
      </transition>
    </form>
    <!-- Reset Toggler -->
    <transition name="fade-right">
      <section class="reset-toggler" v-if="!showReset" @click="toggleReset">
        <span>Forgot my password</span>
      </section>
    </transition>
    <!-- Reset Form -->
    <transition name="fade-right">
      <section class="reset-wrapper" v-if="showReset">
        <form class="reset-form" v-on:submit.prevent="sendReset">
          <label for="email">Password Reset</label>
          <!-- Input -->
          <input
            type="text"
            id="email"
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
        //register new user
        .createUserWithEmailAndPassword(this.email, this.password)
        // .then((account) => {
        .then(() => {
          //re-route to homepage
          this.$router.push("/");
        })
        .catch((err) => {
          this.errorMsg = err;
        });
    },
    sendReset() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.emailReset)
        .then(() => {
          this.emailReset = "";
          console.log("Email Sent");
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
.register-wrapper div {
  width: 100%;
  height: 100%;
  padding: 1em;
}
.reset-toggler {
  bottom: 0;
  width: 100%;
  padding: 1em;
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
  .reset-wrapper [type="submit"] {
    text-align: left;
  }
}
@media (min-width: 376px) {
  label {
    padding-right: 1em;
  }
  .reset-wrapper input[type="text"] {
    width: 50%;
  }
  .reset-wrapper [type="submit"] {
    float: right;
  }
  .reset-toggler:hover,
  .reset-wrapper input[type="submit"]:hover {
    color: grey;
  }
}
</style>
