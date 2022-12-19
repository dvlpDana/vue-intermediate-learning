<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" :key="todoItem.item" class="shadow">
        <span class="checkBtnOutline" @click="toggleComplete(todoItem)"><i :class="[{'checkBtnCompleted' : todoItem.completed }, 'checkBtn fa-solid fa-check']"></i></span>
        <span :class="{textCompleted : todoItem.completed }">{{todoItem.item ? todoItem.item : '등록된 내용이 없습니다.'}}</span>
      <button @click="removeTodo(todoItem, index)" class="removeBtn">
        <i class="fa-solid fa-trash-can"></i>
      </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return{
      todoItems: [],
    }
  },
  methods: {
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
 created() {
  if(localStorage.length > 0) {
    for(let i = 0; i < localStorage.length ; i++) {
    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  }
 }
}
</script>

<style scoped>
ul {
  width: 50%;
  margin: auto;
  list-style-type: none;
  text-align: left;
}
li {
  display: flex;
  height: 50px;
  align-items: center;
  padding : 0 0.9rem;
  margin: 0.5rem 0;
  background: white;
  border-radius: 5px;
}
.checkBtnOutline { 
  width: 1rem;
  height: 1rem;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 4px;
  margin-right: 0.5rem;
  cursor: pointer;
}
.checkBtn {
  color: #62acde;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  border: none;
  background: transparent;
  margin-left: auto;
  color: #de4343;
  cursor: pointer;
}
</style>