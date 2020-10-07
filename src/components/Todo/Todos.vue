<template>
  <div class="todos">
    <!-- <TodoCanvas /> -->
    <AddTodo @newTodo="newTodo($event)" />
    <div class="todo-items" v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" @deleteTodo="deleteTodo($event)" />
    </div>
  </div>
</template>

<script>
// import TodoCanvas from "@/components/Todo/TodoCanvas.vue";
import TodoItem from "@/components/Todo/TodoItem.vue";
import AddTodo from "@/components/Todo/AddTodo.vue";
export default {
  name: "Todos",
  components: {
    // TodoCanvas,
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
    // moveDown(id) {
    //   this.$emit("moveDown", id);
    // },
    // moveUp(id) {
    //   this.$emit("moveUp", id);
    // },
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
