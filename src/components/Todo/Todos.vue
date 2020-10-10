<template>
  <div class="todos">
    <AddTodo @newTodo="newTodo($event)" />
    <div class="todo-items" v-for="todo in todos" :key="todo.id">
      <!-- ony show todo items with same uid as the logged in user -->
      <TodoItem
        :todo="todo"
        v-if="userFilter(todo)"
        @deleteTodo="deleteTodo($event)"
        @toggleComplete="toggleComplete($event)"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/Todo/TodoItem.vue";
import AddTodo from "@/components/Todo/AddTodo.vue";
export default {
  name: "Todos",
  components: {
    TodoItem,
    AddTodo,
  },
  props: ["todos", "currentUser"],
  methods: {
    newTodo(newTodo) {
      this.$emit("newTodo", newTodo);
    },
    toggleComplete(data) {
      this.$emit("toggleComplete", data);
    },
    deleteTodo(id) {
      this.$emit("deleteTodo", id);
    },
    // ony show todo items with same uid as the logged in user
    userFilter(todo) {
      return todo.uid == this.currentUser.uid;
    },
  },
};
</script>

<style scoped>
.todos {
  z-index: 1;
  border-top: 1px solid white;
  border-right: 1px solid white;
  border-left: 1px solid white;
}
</style>
