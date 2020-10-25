<template>
  <section class="todo-item-wrapper">
    <section class="todo-item-left">
      <!-- completed statusComplete -->
      <span class="completed-wrapper">
        <span
          class="completed"
          @click="toggleComplete"
          @mouseover="hoverComplete = true"
          @mouseleave="hoverComplete = false"
        >
          {{ statusComplete }}
        </span>
      </span>
      <!-- index -->
      <span class="index-wrapper">
        <span class="index">{{ index + 1 }}</span>
      </span>
      <!-- text -->
      <span class="text-wrapper" v-if="!isEditing">
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
      <!-- edit text -->
      <form
        v-if="isEditing"
        class="text-edit-wrapper"
        v-on:submit.prevent="toggleEdit"
      >
        <input ref="edit" type="text" class="text-edit" v-model="updateText" />
      </form>
    </section>
    <!-- remove -->
    <section class="todo-item-right">
      <span class="edit" @click="toggleEdit">{{ statusEditing }}</span>
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
      isEditing: false,
      updateText: false,
      hoverComplete: false,
      activeText: this.todo.text,
      isComplete: this.todo.isComplete,
    };
  },
  mounted() {
    this.updateText = this.todo.text;
  },
  methods: {
    toggleComplete() {
      this.isComplete = !this.isComplete;
      this.$emit("updateComplete", {
        id: this.todo.id,
        isComplete: this.isComplete,
      });
    },
    toggleEdit() {
      this.isEditing = !this.isEditing;
      if (this.isEditing) {
        this.$nextTick(() => {
          this.$refs.edit.focus();
        });
      } else {
        if (this.todo.text != this.updateText) {
          this.$emit("updateText", {
            id: this.todo.id,
            text: this.updateText,
          });
          this.todo.text = this.updateText;
        }
      }
    },
    deleteTodo() {
      this.$emit("deleteTodo", this.todo.id);
    },
  },
  computed: {
    statusComplete() {
      if (this.isComplete) {
        return "●";
      }
      return "○";
    },
    statusEditing() {
      if (this.isEditing) {
        return "...";
      }
      return "///";
    },
  },
};
</script>

<style scoped>
.edit,
.text,
.remove,
.completed {
  cursor: pointer;
}

.index {
  cursor: default;
}
input {
  color: yellow;
}
.todo-item-wrapper {
  width: 100%;
  height: 100%;
  padding: 1em;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid white;
}
.todo-item-left {
  flex: 14;
  display: flex;
}
.todo-item-right {
  flex: 2;
  display: flex;
  justify-content: space-between;
}
.index-wrapper,
.completed-wrapper {
  flex: 1;
}
.text-wrapper,
.text-edit-wrapper {
  flex: 8;
  padding-right: 1em;
  word-wrap: break-word;
}
.text-edit {
  width: 100%;
}
.isComplete {
  color: grey;
  text-decoration: line-through;
}
@media (max-width: 767px) {
  .edit,
  .index,
  .remove {
    color: grey;
  }
  .completed-wrapper {
    display: none;
  }
}
@media (min-width: 1300px) {
  .hoverComplete {
    color: grey;
    text-decoration: line-through;
  }
  .todo-item-right {
    flex: 1;
  }
}
</style>
