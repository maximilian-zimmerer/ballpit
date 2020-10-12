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
#todo-item {
  display: grid;
  /* border-radius: 10px; */
  word-break: break-all;
  /* backdrop-filter: blur(5px); */
  padding: 0.5em 1em 0.5em 1em;
  border-bottom: 1px solid white;
  /* background-image: linear-gradient(
    to right,
    #111111,
    transparent,
    transparent,
    transparent,
    #111111
  ); */
  grid-template-columns: 0.5fr 4.5fr 0.5fr;
}
#complete {
  cursor: pointer;
  width: min-content;
  justify-self: flex-start;
  /* border: 1px solid yellow; */
}
#text {
  padding-right: 1em;
  /* border: 1px solid yellow; */
}
#remove {
  cursor: pointer;
  width: min-content;
  justify-self: flex-end;
  /* border: 1px solid yellow; */
}
.isComplete {
  text-decoration: line-through;
}
</style>
