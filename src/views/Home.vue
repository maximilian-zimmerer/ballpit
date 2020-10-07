<template>
  <div class="home">
    <Todos
      :todos="todos"
      @newTodo="addTodo($event)"
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
    addTodo(newTodo) {
      // add new document to firebase
      myCollection
        .doc()
        .set({
          id: newTodo.id,
          isComplete: newTodo.isComplete,
          text: newTodo.text,
        })
        .then(() => {
          console.log(this.todos);
          this.todos.push(newTodo);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    deleteTodo(id) {
      // get document according to id
      const myDocument = myCollection.where("id", "==", `${id}`);
      myDocument
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(function(doc) {
            doc.ref.delete();
          });
        })
        .catch((err) => {
          console.error(err);
        });
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // moveDown(id) {
    //   let index = this.todos.findIndex((todo) => todo.id === id);
    //   if (index < this.todos.length)
    //     this.todos.splice(index + 1, 0, this.todos.splice(index, 1)[0]);
    // },
    // moveUp(id) {
    //   let index = this.todos.findIndex((todo) => todo.id === id);
    //   if (index > 0)
    //     //https://stackoverflow.com/questions/44010959/javascript-change-index-of-array-element
    //     this.todos.splice(index - 1, 0, this.todos.splice(index, 1)[0]);
    // },
  },
  // pull in data from firestore on load
  mounted() {
    myCollection.get().then((snap) => {
      const testTodos = [];
      snap.forEach((doc) => {
        const data = doc.data();
        const testTodo = {
          id: data.id,
          isComplete: data.isComplete,
          text: data.text,
        };
        testTodos.push(testTodo);
      });
      this.todos = testTodos;
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
