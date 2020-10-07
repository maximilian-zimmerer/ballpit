<template>
  <section id="todo-item">
    <p id="complete" @click="toggleComplete">{{ status }}</p>
    <p id="text" :class="{ isComplete: this.isComplete }">{{ todo.text }}</p>
    <!-- <div id="move-wrapper">
      <p id="move-up" @click="moveUp">↑</p>
      <p id="move-down" @click="moveDown">↓</p>
    </div> -->
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
    // moveDown() {
    //   this.$emit("moveDown", this.todo.id);
    // },
    // moveUp() {
    //   this.$emit("moveUp", this.todo.id);
    // },
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
  word-break: break-all;
  padding: 0.5em 1em 0.5em 1em;
  border-bottom: 1px solid white;
  grid-template-columns: 0.5fr 4.5fr 0.5fr;
  /* grid-template-columns: 0.5fr 4.5fr 0.5fr 0.5fr; */
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
#move-wrapper {
  gap: 1em;
  display: flex;
  flex-direction: row;
  /* border: 1px solid yellow; */
}
#remove {
  cursor: pointer;
  width: min-content;
  justify-self: flex-end;
  /* border: 1px solid yellow; */
}
#move-up,
#move-down {
  cursor: pointer;
}
.isComplete {
  text-decoration: line-through;
}
</style>
