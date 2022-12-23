import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
  fetch() {
    const array = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        array.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
      }
    }
    return array;
  },
};

export const store = new Vuex.Store({
  state : {
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, payload) {
      const obj = {
        completed: false,
        item: payload
      };
      localStorage.setItem(payload, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.item);
      localStorage.setItem(payload.item, JSON.stringify(payload));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});