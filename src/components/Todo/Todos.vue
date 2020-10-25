<template>
  <div class="todos-wrapper">
    <transition-group name="fade-right" tag="div">
      <div class="todo-items" v-for="(todo, index) in todos" :key="todo.id">
        <TodoItem
          :todo="todo"
          :index="index"
          class="todo-item"
          @deleteTodo="deleteTodo($event)"
          @updateText="updateText($event)"
          @updateComplete="updateComplete($event)"
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
    deleteTodo(id) {
      this.$emit("deleteTodo", id);
    },
    updateText(data) {
      this.$emit("updateText", data);
    },
    updateComplete(data) {
      this.$emit("updateComplete", data);
    },
  },
};
</script>

<style scoped>
.todos-wrapper {
  width: 100%;
  height: max-content;
  backdrop-filter: blur(10px);
}
/* animation */
.fade-right-move {
  transition: transform 0.3s ease-in-out;
}
.fade-right-leave-active {
  width: 100%;
  position: absolute;
}
</style>
