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
import Todos from "@/components/Todo/Todos.vue";
export default {
  name: "Home",
  components: {
    Todos,
  },
  data() {
    return {
      todos: [{ id: 1, isComplete: true, text: "Get groceries" }],
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    moveDown(id) {
      let index = this.todos.findIndex((todo) => todo.id === id);
      if (index < this.todos.length)
        this.todos.splice(index + 1, 0, this.todos.splice(index, 1)[0]);
    },
    moveUp(id) {
      let index = this.todos.findIndex((todo) => todo.id === id);
      if (index > 0)
        //https://stackoverflow.com/questions/44010959/javascript-change-index-of-array-element
        this.todos.splice(index - 1, 0, this.todos.splice(index, 1)[0]);
    },
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
