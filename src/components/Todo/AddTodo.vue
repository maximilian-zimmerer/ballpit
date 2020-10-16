<template>
  <div class="add-todo-wrapper">
    <form class="add-todo" v-on:submit.prevent="newTodo">
      <input type="text" placeholder="New Todo..." v-model="title" />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app';
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
          uid: this.currentUser.uid,
          id: uuidv4(),
          isComplete: false,
          text: this.title,
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
  z-index: 1;
  width: 100%;
  height: 100%;
}
.add-todo {
  display: grid;
  grid-template-columns: 5fr 1fr;
  border-bottom: 1px solid white;
}
.add-todo input:nth-of-type(1) {
  padding: 1em;
  background-color: transparent;
  border-right: 1px solid white;
}
.add-todo input:nth-of-type(2) {
  cursor: pointer;
  border-color: transparent;
  background-color: transparent;
}
input,
select,
textarea {
  color: white;
}
input:focus {
  outline: none;
}
</style>
