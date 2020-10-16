<template>
  <section class="info-wrapper">
    <section class="metadata">
      <section class="email">Logged in as: {{ email }}</section>
      <section class="login">Last Login: {{ lastLogin }}</section>
      <section class="created">Account Created: {{ accountCreated }}</section>
      <section class="counter-text">Completed Todos:</section>
      <section class="counter-wrapper">
        <p class="counter">{{ completedCounter }}</p>
      </section>
    </section>
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
import firebase from 'firebase/app';
import db from "../firebaseInit";
const FBcounter = db.collection("counter");
export default {
  name: "Info",
  data() {
    return {
      email: false,
      lastLogin: false,
      currentUser: false,
      completedCounter: 0,
      accountCreated: false,
    };
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
  /* border: 10px solid yellow; */
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
@media (max-width: 768px) {
  .about {
    order: 1;
    border-left: none;
    border-bottom: 1px solid white;
  }
  .metadata {
    order: 2;
    flex-grow: 1;
  }
  .counter-wrapper {
    order: 1;
  }
  .email {
    order: 2;
  }
  .login {
    order: 3;
  }
  .created {
    order: 4;
    border-bottom: none !important;
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
  .counter-wrapper {
    border-bottom: none !important;
  }
}
</style>
