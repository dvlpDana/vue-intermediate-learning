<template>
  <div id="app">
    <TodoFooter />
    <TodoHeader />
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


export default {
  name: 'App',
  components: {
    TodoFooter,
    TodoHeader,
    TodoInput,
    TodoList
  }
}
</script>

<style>

</style>
