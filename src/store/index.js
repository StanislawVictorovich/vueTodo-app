import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      currentPage: 0,
      todos: [[]]
    }
  },
  getters: {
    todos: state => state.todos,
    lastPage: state => state.todos.length - 1,
    currentPage: state => state.currentPage
  },
  mutations: {
    FILL_TODO_DATA(state) {
      let pageCounter = 0;
      axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(response => {
          response.data.map(item => { // convertation data callback function
            state.todos[pageCounter].push({ text: item.title, checked: item.completed });
            if (item.userId > pageCounter) {
              state.todos.push([]);
              pageCounter += 1;
            }
          })
        })
        .catch(e => console.warn(e));
    },
    ADD_TODO(state, todo) {
      if (!state.todos[state.currentPage]) {
        state.todos.push([]); // if no page exists yet => create new empty page for pushing new element
      }
      state.todos[state.currentPage].push(todo);
    },
    DELETE_TODO(state, indexInList) {
      state.todos[state.currentPage].splice(indexInList, 1);
    },
    CHECK_TODO(state, indexInList) {
      state.todos[state.currentPage][indexInList].checked = !state.todos[state.currentPage][indexInList].checked;
    },
    FORWARD_PAGE(state) {
      state.currentPage += 1;
    },
    BACKWARD_PAGE(state) {
      state.currentPage -= 1;
    },
    NEW_PAGE(state) {
      state.currentPage = state.todos.length;
    }
  },
  actions: {
    fillToDoData({ commit }) {
      commit('FILL_TODO_DATA');
    },
    addToDo({ commit }, todo) {
      commit('ADD_TODO', todo);
    },
    deleteToDo({ commit }, indexInList) {
      commit('DELETE_TODO', indexInList);
    },
    checkToDo({ commit }, indexInList) {
      commit('CHECK_TODO', indexInList);
    },
    forwardPage({ commit }) {
      commit('FORWARD_PAGE');
    },
    backwardPage({ commit }) {
      commit('BACKWARD_PAGE');
    },
    newPage({ commit }) {
      commit('NEW_PAGE');
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})