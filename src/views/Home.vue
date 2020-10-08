<template>
  <div class="home">
    <Todos
      :todos="todos"
      @newTodo="addTodo($event)"
      @toggleComplete="toggleComplete($event)"
      @deleteTodo="deleteTodo($event)"
      @moveDown="moveDown($event)"
      @moveUp="moveUp($event)"
    />
  </div>
</template>

<script>
import firebase from "firebase";
import Todos from "@/components/Todo/Todos.vue";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBkwByXhFLBBCt1wVEnoGUC9E-W4-ZOxp0",
  authDomain: "todo-list-1-900db.firebaseapp.com",
  databaseURL: "https://todo-list-1-900db.firebaseio.com",
  projectId: "todo-list-1-900db",
  storageBucket: "todo-list-1-900db.appspot.com",
  messagingSenderId: "970542818787",
  appId: "1:970542818787:web:c82974fb159bfe60a66cd6",
  measurementId: "G-65ZSMKM1EG",
};
// Initialize Firebase
firebase.initializeApp(config);
const db = firebase.firestore();
let myCollection = db.collection("todos");
export default {
  name: "Home",
  components: {
    Todos,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    // add item
    addTodo(newTodo) {
      myCollection
        .doc()
        .set(newTodo)
        .then(() => {
          this.todos.push(newTodo);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // update isComplete state
    toggleComplete(data) {
      // reference document according to id
      const myDocument = myCollection.where("id", "==", `${data.id}`);
      myDocument
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // get document id and update isComplete field
            return myCollection.doc(doc.id).update({
              isComplete: data.isComplete,
            });
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // delete item
    deleteTodo(id) {
      const myDocument = myCollection.where("id", "==", `${id}`);
      myDocument
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.ref);
            doc.ref.delete();
          });
        })
        .catch((err) => {
          console.error(err);
        });
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
  // import data
  mounted() {
    myCollection
      .get()
      .then((docs) => {
        const tempTodos = [];
        docs.forEach((doc) => {
          const tempTodo = doc.data();
          tempTodos.push(tempTodo);
        });
        this.todos = tempTodos;
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  align-self: flex-start;
}
</style>
