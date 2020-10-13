<template>
  <div class="todos">
    <transition-group name="fade-right" tag="div">
      <div class="todo-items" v-for="(todo, index) in todos" :key="todo.id">
        <!-- ony show todo items with same uid as the logged in user -->
        <TodoItem
          :todo="todo"
          :index="index"
          @deleteTodo="deleteTodo($event)"
          @toggleComplete="toggleComplete($event)"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
import TodoItem from "@/components/Todo/TodoItem.vue";
export default {
  name: "Todos",
  components: {
    TodoItem,
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
  },
};
</script>

<style scoped>
.todos {
  z-index: 1;
}
</style>
