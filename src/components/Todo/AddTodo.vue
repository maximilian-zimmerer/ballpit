<template>
  <div class="add-todo-wrapper">
    <form class="add-todo" v-on:submit.prevent="newTodo">
      <input type="text" placeholder="New Todo..." v-model="title" />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
      currentUser: false,
    };
  },
  methods: {
    newTodo() {
      if (this.title != "") {
        let newTodo = {
          id: uuidv4(),
          text: this.title,
          isComplete: false,
          uid: this.currentUser.uid,
        };
        this.$emit("newTodo", newTodo);
      }
      this.title = "";
    },
  },
  created() {
    this.currentUser = firebase.auth().currentUser;
  },
};
</script>

<style scoped>
.add-todo-wrapper {
  width: 100%;
  height: 100%;
}
.add-todo {
  display: grid;
  grid-template-columns: 5fr 1fr;
  border-bottom: 1px solid white;
}
.add-todo input[type="text"] {
  padding: 1em;
  background-color: transparent;
  border-right: 1px solid white;
}
.add-todo input[type="submit"] {
  cursor: pointer;
  border-color: transparent;
  background-color: transparent;
}
</style>
