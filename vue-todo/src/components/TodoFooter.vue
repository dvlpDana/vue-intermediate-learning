<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
  export default {
    methods: {
      ...mapMutations({
        clearTodo: 'clearAllItems'
      })
      // clearTodo() {
        // this.$emit("clearAll");
        // this.$store.commit('clearAllItems');
      //}
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
