<template>
  <div class="main-wrapper">
    <transition name="fade">
      <div v-if="emptyList" class="todo-canvas">
        <TodoCanvas :todos="todos" />
      </div>
    </transition>
    <div class="todo-add">
      <AddTodo @newTodo="addTodo($event)" />
    </div>
    <transition name="fade-right">
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
    </transition>
    <transition name="fade">
      <div v-if="!emptyList" class="start-typing">
        <span>Don't you have something to do?</span>
      </div>
    </transition>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../firebaseInit";
import Todos from "@/components/Todo/Todos.vue";
import AddTodo from "@/components/Todo/AddTodo.vue";
import TodoCanvas from "@/components/Todo/TodoCanvas.vue";

// Initialize Firebase
const FBtodos = db.collection("todos");
const FBcounter = db.collection("counter");
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
      FBtodos.doc()
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
      const myTodos = FBtodos.where("id", "==", `${data.id}`);
      myTodos
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // get document id and update isComplete field
            return FBtodos.doc(doc.id).update({
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
      // delete todo from firebase
      const myTodos = FBtodos.where("id", "==", `${id}`);
      myTodos.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      });
      // increment completed todos counter
      FBcounter.doc(`${this.currentUser.uid}`)
        .get()
        .then((doc) => {
          // create new counting doc wit UI id it doesnt exist, otherwise just increment the existing number by 1
          doc.exists
            ? FBcounter.doc(`${this.currentUser.uid}`).update({
                counter: firebase.firestore.FieldValue.increment(1),
              })
            : FBcounter.doc(`${this.currentUser.uid}`).set({
                counter: 1,
              });
        })
        .catch((err) => {
          console.error(err);
        });
      // delete todo locally
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
    FBtodos.get()
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
.todo-add {
  z-index: 1;
}
.todo-list {
  z-index: 0;
  width: 100%;
  flex-grow: 1;
  overflow: scroll !important;
}
.start-typing {
  z-index: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  align-items: center;
  pointer-events: none;
  justify-content: center;
}
</style>
