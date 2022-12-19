<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem : '',
    }
  },
  methods: {
    addTodo() {
      if(this.newTodoItem !== '') {
        let obj = {
        completed : false,
        item: this.newTodoItem,
      };
      localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
      this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem ='';
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  position: relative;
  background: white;
  width: 50%;
  margin: auto;
  height: 50px;
  line-height: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.inputBox input {
  width: calc(100% - 3rem);
  height: 40px;
  border-style: none;
  font-size: 0.9rem;
  padding-left: 1rem;
}
.addContainer {
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 50px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.addBtn {
  color: white;
}
</style>