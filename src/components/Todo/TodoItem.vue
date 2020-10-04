<template>
  <section id="todo-item">
    <p id="complete" @click="toggleComplete">{{ status }}</p>
    <p id="text" :class="{ isComplete: this.isComplete }">{{ todo.text }}</p>
    <p id="remove" @click="deleteTodo">x</p>
  </section>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  data() {
    return {
      isComplete: false,
    };
  },
  methods: {
    toggleComplete() {
      this.isComplete = !this.isComplete;
    },
    deleteTodo() {
      this.$emit("deleteTodo", this.todo.id);
    },
  },
  computed: {
    status() {
      if (this.isComplete) {
        return "Done";
      }
      return "Doing";
    },
  },
};
</script>

<style scoped>
#todo-item {
  display: grid;
  padding: 0.5em 1em 0.5em 1em;
  border-bottom: 1px solid white;
  grid-template-columns: 0.5fr 2fr 1fr;
}
#complete {
  cursor: pointer;
  width: min-content;
  justify-self: flex-start;
}
#remove {
  cursor: pointer;
  width: min-content;
  justify-self: flex-end;
}
.isComplete {
  text-decoration: line-through;
}
@media (max-width: 767px) {
  #todo-item {
    grid-template-columns: 1fr 2fr 1fr;
  }
}
</style>
