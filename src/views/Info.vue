<template>
  <section class="info-wrapper">
    <!-- Section 1 -->
    <!-- Metadata -->
    <section class="metadata">
      <section class="email">Logged in as: {{ email }}</section>
      <section class="login">Last Login: {{ lastLogin }}</section>
      <!-- Update Password -->
      <section class="password-wrapper">
        <!-- Label -->
        <form class="password-form" v-on:submit.prevent="updatePassword">
          <label for="newPassword">Change Password:</label>
          <!-- Input -->
          <input
            type="text"
            id="newPassword"
            v-model="newPassword"
            placeholder="Favorite Animal?"
          />
          <!-- Submit -->
          <input type="submit" value="Update" />
        </form>
      </section>
      <!-- Error Message -->
      <transition name="fade-right">
        <section v-if="errorMsg" class="error-wrapper">
          <span class="error-msg">{{ errorMsg }}</span>
        </section>
      </transition>
      <!-- Delete Account-->
      <section class="delete-wrapper">
        <form class="delete-form" v-on:submit.prevent="deleteAccount">
          <input type="submit" value="Delete Account" />
        </form>
      </section>
      <!-- Todos Counter -->
      <section class="counter-text">Completed Todos:</section>
      <section class="counter-wrapper">
        <p class="counter">{{ completedCounter }}</p>
      </section>
    </section>
    <!-- Section 2 -->
    <!-- About -->
    <section class="about">
      <section class="about-title"><p>Ballpit</p></section>
      <section class="about-body">
        Ballpit is a playful take on the classic "Todo-List" list and focuses on
        the visual aspect of completing day-to-day tasks. The main inspiration
        behind this project is
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://experiments.withgoogle.com/activity-bubbles"
          >Google Creative Lab's Activity Bubbles</a
        >
        (2020). This app runs on

        <a target="_blank" rel="noopener noreferrer" href="https://vuejs.org/"
          >Vue.js</a
        >
        and uses
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://firebase.google.com/"
          >Firebase
        </a>
        to authenticate users and securely store their data, as well as
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://brm.io/matter-js/"
          >Matter.js
        </a>
        for physics simulation. You can see the code for Ballpit
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/MaximilianUAL2020/Todo-App"
          >here</a
        >, and if you have any questions about this project,
        <a href="mailto: maxi.zimmerer@gmail.com">reach out</a>.
      </section>
      <section class="about-copyright">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.maxi.studio"
          >Maximilian Zimmerer
        </a>
        <span>©2020</span>
      </section>
    </section>
  </section>
</template>

<script>
import firebase from "firebase/app";
import db from "../firebaseInit";
const FBtodos = db.collection("todos");
const FBcounter = db.collection("counter");
export default {
  name: "Info",
  data() {
    return {
      email: false,
      errorMsg: false,
      newPassword: "",
      lastLogin: false,
      currentUser: false,
      completedCounter: 0,
    };
  },
  methods: {
    updatePassword() {
      this.currentUser
        .updatePassword(this.newPassword)
        .then(() => {
          this.errorMsg = "Password Updated!";
          this.newPassword = "";
        })
        .catch((err) => {
          this.errorMsg = err.message;
          this.newPassword = "";
        });
    },
    deleteAccount() {
      const myTodos = FBtodos.where("uid", "==", `${this.currentUser.uid}`);
      // delete todos
      myTodos
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.delete();
          });
        })
        .then(() => {
          // delete counter
          FBcounter.doc(this.currentUser.uid)
            .delete()
            // delete account
            .then(() => {
              this.currentUser.delete();
              this.logout();
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // Logout function
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
      this.currentUser = firebase.auth().currentUser;
      this.lastLogin = this.currentUser.metadata.lastSignInTime;
      this.accountCreated = this.currentUser.metadata.creationTime;
      this.email = this.currentUser.email;
    }
  },
  mounted() {
    // import counter data
    FBcounter.doc(`${this.currentUser.uid}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.completedCounter = doc.data().counter;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },

  //  this.currentUser
  //         .delete()
  //         .then(
  //           FBcounter.doc(this.currentUser.uid)
  //             .delete()
  //             .then(() => {
  //               console.log("Deleted Counter");
  //               this.$router.push("/Login");
  //             })
  //         )
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     },
};
</script>

<style scoped>
.info-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: scroll;
  flex-direction: column;
}
.about,
.metadata {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
}
.metadata section {
  padding: 1em;
  flex-shrink: 0;
  border-bottom: 1px solid white;
}
.counter-wrapper {
  flex: 1;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
}
section a {
  text-decoration: underline;
}
section a:hover {
  text-decoration: none;
}
.counter {
  flex-shrink: 0;
  font-size: 10vw;
}
.counter-text {
  border: none !important;
}
.about section {
  padding: 1em;
  flex-shrink: 0;
}
.about-title {
  display: flex;
  align-content: center;
  justify-content: center;
  border-bottom: 1px solid white;
}
.about-title p {
  font-size: 10vw;
}
.about-body {
  flex: 1;
  flex-shrink: 0;
}
.about-copyright {
  display: flex;
  justify-self: flex-end;
  border-top: 1px solid white;
  justify-content: space-between;
}
.password-form input[type="text"] {
  color: white;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-text-fill-color: white !important;
}
@media (max-width: 768px) {
  .about {
    /* order: 1; */
    border-left: none;
    border-bottom: 1px solid white;
  }
  .metadata {
    order: 2;
    flex-grow: 1;
  }
  .email {
    order: 2;
  }
  .login {
    order: 3;
  }
  .password-wrapper {
    order: 4;
  }
  .password-form {
    gap: 1em;
    display: grid;
  }
  .error-wrapper {
    order: 5;
  }
  .delete-wrapper {
    order: 6;
    border-bottom: none !important;
  }
  .counter-wrapper {
    order: 1;
  }
  input[type="submit"] {
    text-align: left;
  }
}
@media (min-width: 769px) {
  .info-wrapper {
    height: 100%;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
  .about {
    order: 2;
    flex-grow: 1;
    border-left: 1px solid white;
  }
  .metadata {
    order: 1;
  }
  label {
    padding-right: 1em !important;
  }
  .counter-wrapper {
    border-bottom: none !important;
  }
  .password-form input[type="text"] {
    width: 50%;
  }
  .password-form input[type="submit"] {
    float: right;
  }
  .password-form input[type="submit"]:hover {
    color: grey;
  }
  .delete-form input:hover {
    color: orange;
  }
}
</style>
