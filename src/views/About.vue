<template>
  <section class="about">
    <section class="metadata">
      <section>Logged in as: {{ email }}</section>
      <section>Last Login: {{ lastLogin }}</section>
      <section>Account Created: {{ accountCreated }}</section>
      <section>Completed Todos: {{ completedCounter }}</section>
    </section>
    <section class="info">
      <section>Something else</section>
    </section>
  </section>
</template>

<script>
import firebase from "firebase";
import db from "../firebaseInit";
// Initialize Firebase
const FBcounter = db.collection("counter");
export default {
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
.about {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(min-content, max-content);
}
.info section,
.metadata section {
  padding: 1em;
}
.info {
  border-bottom: 1px solid white;
}
.metadata section {
  border-bottom: 1px solid white;
}

@media (min-width: 769px) {
  .about {
    height: 100%;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
  .info {
    border-bottom: none;
    border-left: 1px solid white;
  }
}
</style>
