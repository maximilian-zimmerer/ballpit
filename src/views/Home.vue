<template>
  <div class="main-wrapper">
    <TodoCanvas :todos="todos" />
    <div class="todo-add">
      <AddTodo @newTodo="addTodo($event)" />
    </div>
    <div v-if="emptyList" class="todo-list">
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
    <div v-if="!emptyList" class="start-typing">
      <span>Don't you have something to do?</span>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../firebaseInit";
import Todos from "@/components/Todo/Todos.vue";
import AddTodo from "@/components/Todo/AddTodo.vue";
import TodoCanvas from "@/components/Todo/TodoCanvas.vue";

// Initialize Firebase
let myCollection = db.collection("todos");
export default {
  name: "todo-list",
  components: {
    TodoCanvas,
    AddTodo,
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
  computed: {
    emptyList() {
      return this.todos.length;
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
        this.todos = tempTodos.filter(
          (tempTodo) => tempTodo.uid == this.currentUser.uid
        );
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style scoped>
.main-wrapper {
  display: flex;
  overflow: hidden;
  flex-direction: column;
}
.todo-list {
  width: 100%;
  z-index: 1;
  flex-grow: 1;
  overflow: scroll !important;
}
.start-typing {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
}
</style>
