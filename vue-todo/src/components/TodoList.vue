<template>
  <div>
    <TransitionGroup name="list" tag="ul">
      <li
        v-for="(todoItem, index) in propsdata"
        :key="todoItem.item"
        class="shadow"
      >
        <span class="checkBtnOutline" @click="toggleComplete(todoItem, index)"
          ><i
            :class="[
              { checkBtnCompleted: todoItem.completed },
              'checkBtn fa-solid fa-check'
            ]"
          ></i
        ></span>
        <span :class="{ textCompleted: todoItem.completed }">{{
          todoItem.item ? todoItem.item : "등록된 내용이 없습니다."
        }}</span>
        <button @click="removeTodo(todoItem, index)" class="removeBtn">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
  export default {
    props: ["propsdata"],
    methods: {
      removeTodo: function (todoItem, index) {
        this.$emit("removeItem", todoItem, index);
      },
      toggleComplete: function (todoItem, index) {
        this.$emit("toggleItem", todoItem, index);
      }
    }
  };
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
    padding: 0 0.9rem;
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

  /* transition css */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
