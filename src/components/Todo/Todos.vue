<template>
  <div class="todos">
    <AddTodo @newTodo="newTodo($event)" />
    <div class="todo-items" v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" @deleteTodo="deleteTodo($event)" />
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
  props: ["todos"],
  methods: {
    newTodo(newTodo) {
      this.$emit("newTodo", newTodo);
    },
    deleteTodo(id) {
      this.$emit("deleteTodo", id);
    },
  },
};
</script>

<style scoped>
.todos {
  border-top: 1px solid white;
  border-right: 1px solid white;
  border-left: 1px solid white;
}
</style>
