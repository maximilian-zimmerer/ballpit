<template>
  <div class="home">
    <Todos
      :todos="todos"
      :currentUser="currentUser"
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
import db from "../firebaseInit";
import Todos from "@/components/Todo/Todos.vue";

// Initialize Firebase
let myCollection = db.collection("todos");
export default {
  name: "Home",
  components: {
    Todos,
  },
  data() {
    return {
      todos: [],
      currentUser: false,
    };
  },
  methods: {
    // add item to database
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
            doc.ref.delete();
          });
        })
        .catch((err) => {
          console.error(err);
        });
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
  // get current user
  created() {
    this.currentUser = firebase.auth().currentUser;
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
