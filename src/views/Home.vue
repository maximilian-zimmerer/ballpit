<template>
  <div class="home">
    <Todos
      :todos="todos"
      @newTodo="addTodo($event)"
      @deleteTodo="deleteTodo($event)"
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
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  align-self: flex-start;
}
</style>
