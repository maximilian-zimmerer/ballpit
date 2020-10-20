<template>
  <div class="main-wrapper">
    <!-- Todo Canvas -->
    <transition name="fade">
      <div v-if="todoExists" class="todo-canvas">
        <TodoCanvas :todos="todos" />
      </div>
    </transition>
    <!-- Add Todo -->
    <div class="todo-add">
      <AddTodo @newTodo="addTodo($event)" />
    </div>
    <!-- Todos -->
    <transition name="fade-right">
      <div v-if="todoExists" class="todo-list">
        <Todos
          :todos="todos"
          :currentUser="currentUser"
          @newTodo="addTodo($event)"
          @deleteTodo="deleteTodo($event)"
          @toggleComplete="toggleComplete($event)"
        />
      </div>
    </transition>
    <!-- Prompter-->
    <transition name="fade">
      <div v-if="!todoExists" class="prompter">
        <span>Don't you have something to do?</span>
      </div>
    </transition>
  </div>
</template>

<script>
import db from "../firebaseInit";
import firebase from "firebase/app";
import Todos from "@/components/Todo/Todos.vue";
import AddTodo from "@/components/Todo/AddTodo.vue";
import TodoCanvas from "@/components/Todo/TodoCanvas.vue";

// Initialize Firebase
const FBtodos = db.collection("todos");
const FBcounter = db.collection("counter");
export default {
  name: "todo-list",
  components: {
    Todos,
    AddTodo,
    TodoCanvas,
  },
  data() {
    return {
      todos: [],
      currentUser: false,
    };
  },
  methods: {
    // add todo
    addTodo(newTodo) {
      // firebase
      FBtodos.doc()
        .set(newTodo)
        .then(() => {
          // local
          this.todos.push(newTodo);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // firebase
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
    // delete todo
    deleteTodo(id) {
      const myTodos = FBtodos.where("id", "==", `${id}`);
      myTodos.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      });
      // firebase
      // increment completed todos counter
      FBcounter.doc(`${this.currentUser.uid}`)
        .get()
        .then((doc) => {
          // counter exists
          doc.exists
            ? FBcounter.doc(`${this.currentUser.uid}`).update({
                counter: firebase.firestore.FieldValue.increment(1),
              })
            : // counter doesn't exists
              FBcounter.doc(`${this.currentUser.uid}`).set({
                counter: 1,
              });
        })
        .catch((err) => {
          console.error(err);
        });
      // local
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
  computed: {
    todoExists() {
      return this.todos.length;
    },
  },

  created() {
    // get current user
    this.currentUser = firebase.auth().currentUser;
  },
  mounted() {
    // firebase
    // import data
    FBtodos.get()
      .then((docs) => {
        const tempTodos = [];
        docs.forEach((doc) => {
          const tempTodo = doc.data();
          tempTodos.push(tempTodo);
        });
        // filter according to uid
        this.todos = tempTodos.filter(
          (tempTodo) => tempTodo.uid == this.currentUser.uid
        );
        // sort according to timestamp
        this.todos.sort((todo1, todo2) => todo1.timeStamp - todo2.timeStamp);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style scoped>
.main-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
}
.todo-add {
  z-index: 1;
  backdrop-filter: blur(5px);
}
.todo-list {
  z-index: 1;
  width: 100%;
  flex-grow: 1;
  overflow: scroll;
}
.prompter {
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  pointer-events: none;
  justify-content: center;
}
</style>
