<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
  export default {
    methods: {
      clearTodo() {
        this.$emit("clearAll");
      }
    }
  };
</script>

<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    background-color: white;
    line-height: 50px;
    margin: 3rem auto 0;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }
  .clearAllBtn {
    color: #e20303;
    display: block;
    text-transform: uppercase;
  }
</style>
