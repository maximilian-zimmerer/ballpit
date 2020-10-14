<template>
  <section class="todo-item">
    <section class="todo-item-left">
      <span class="completed">
        <p
          @click="toggleComplete"
          @mouseover="hoverComplete = true"
          @mouseleave="hoverComplete = false"
        >
          {{ status }}
        </p>
      </span>
      <span class="index">
        <p>{{ index + 1 }}</p>
      </span>
      <span class="text">
        <p
          @click="toggleComplete"
          @mouseover="hoverComplete = true"
          @mouseleave="hoverComplete = false"
          :class="{
            hoverComplete: this.hoverComplete,
            isComplete: this.isComplete,
          }"
        >
          {{ todo.text }}
        </p>
      </span>
    </section>
    <section class="todo-item-right">
      <p class="remove" @click="deleteTodo">x</p>
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
.todo-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.5em 1em 0.5em 1em;
  border-bottom: 1px solid white;
}
.todo-item-left {
  flex: 1;
  display: flex;
}
.index,
.completed {
  flex: 1;
}
.text {
  flex: 8;
  word-wrap: break-word;
}
.text p,
.remove p,
.completed p {
  cursor: pointer;
  width: max-content;
}
.text p {
  width: 90%;
}
.index p {
  cursor: default;
}
.remove {
  cursor: pointer;
}
.isComplete {
  color: grey;
  text-decoration: line-through;
}
</style>
