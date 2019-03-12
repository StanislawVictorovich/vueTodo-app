import Vue from 'vue'
import Vuex from 'vuex'
import { getToDos } from '../api'

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
      let page = 0;
      getToDos().then(response => {
        state.todos = response.data.reduce((array, item) => {
          array[page].push({ text: item.title, checked: item.completed });
          if (item.userId > page) {
              array.push([]);
              page += 1;
          }
          return array;
        }, [[]]);
      }).catch(error => console.error('ToDo-app: got error: ',error));
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