<template>
  <section class="about">
    <section class="metadata">
      <section>Completed Todos: {{ completedCounter }}</section>
      <section>Logged in as: {{ email }}</section>
      <section>Last Login: {{ lastLogin }}</section>
      <section>Account Created: {{ accountCreated }}</section>
    </section>
    <section class="info">
      <section>
        I am a graphic designer about to enter the final year of my BA in
        Graphic Communication Design (with Creative Computing) at Central Saint
        Martins. My interest lies at the intersection of branding and
        interactivity, and I draw upon the fields of design and computing to
        creatively solve problems. My past experiences include Mother Design
        London, where I worked in various design capacities, including
        animation, branding, and art direction. I am always open to new
        opportunities and freelance work. If you would like to collaborate on a
        project or have an enquiry about my work, please reach out.
      </section>
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
  display: flex;
  flex-direction: column;
}
.info section,
.metadata section {
  padding: 1em;
}
.info {
  flex-grow: 1;
  border-left: none;
}
.metadata section {
  border-bottom: 1px solid white;
}

@media (min-width: 769px) {
  .about {
    height: 100%;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
  .info {
    border-left: 1px solid white;
  }
}
</style>
