<template>
  <section class="todo-item-wrapper">
    <section class="todo-item-left">
      <!-- completed status -->
      <span class="completed-wrapper">
        <span
          class="completed"
          @click="toggleComplete"
          @mouseover="hoverComplete = true"
          @mouseleave="hoverComplete = false"
        >
          {{ status }}
        </span>
      </span>
      <!-- index -->
      <span class="index-wrapper">
        <span class="index">{{ index + 1 }}</span>
      </span>
      <!-- text -->
      <span class="text-wrapper">
        <span
          class="text"
          @click="toggleComplete"
          @mouseover="hoverComplete = true"
          @mouseleave="hoverComplete = false"
          :class="{
            hoverComplete: this.hoverComplete,
            isComplete: this.isComplete,
          }"
        >
          {{ todo.text }}
        </span>
      </span>
    </section>
    <!-- remove -->
    <section class="todo-item-right">
      <span class="remove" @click="deleteTodo">x</span>
    </section>
  </section>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo", "index"],
  data() {
    return {
      hoverComplete: false,
      isComplete: this.todo.isComplete,
    };
  },
  methods: {
    toggleComplete() {
      this.isComplete = !this.isComplete;
      this.$emit("toggleComplete", {
        id: this.todo.id,
        isComplete: this.isComplete,
      });
    },
    deleteTodo() {
      this.$emit("deleteTodo", this.todo.id);
    },
  },
  computed: {
    status() {
      if (this.isComplete) {
        return "●";
      }
      return "○";
    },
  },
};
</script>

<style scoped>
.todo-item-wrapper {
  width: 100%;
  height: 100%;
  padding: 1em;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  border-bottom: 1px solid white;
}
.todo-item-left {
  flex: 1;
  display: flex;
}
.index-wrapper,
.completed-wrapper {
  flex: 1;
}
.text-wrapper {
  flex: 8;
  padding-right: 1em;
  word-wrap: break-word;
}
.remove,
.completed {
  cursor: pointer;
}
.index {
  cursor: default;
}
.isComplete {
  color: grey;
  text-decoration: line-through;
}
@media (min-width: 1300px) {
  .hoverComplete {
    color: grey;
    text-decoration: line-through;
  }
}
</style>
