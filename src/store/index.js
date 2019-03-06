import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: 0,
    todos: [
      [
        {
          text: 'some text 1',
          checked: false
        },
        {
          text: 'some text 2',
          checked: true
        }
      ],
      [
        {
          text: 'some text 3 page 2',
          checked: true
        }
      ],
      [
        {
          text: 'some text dfdsf on page 3',
          checked: false
        },
        {
          text: 'some text adasadasd on page 3',
          checked: false
        },
        {
          text: 'some texta on page 3',
          checked: false
        }
      ]
    ]
  },
  getters: {
    todos: state => state.todos,
    lastPage: state => state.todos.length - 1,
    currentPage: state => state.currentPage,
    isChecked: state => indexInList => state.todos[state.currentPage][indexInList].checked
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos[state.currentPage].push(todo);
    },
    CHECK_TODO(state, indexInList) {
      state.todos[state.currentPage][indexInList].checked = !state.todos[state.currentPage][indexInList].checked;
    },
    FORWARD_PAGE(state) {
      state.currentPage++;
    },
    BACKWARD_PAGE(state) {
      state.currentPage--;
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo);
    },
    forwardPage( { commit } ) {
      commit('FORWARD_PAGE');
    },
    backwardPage( { commit } ) {
      commit('BACKWARD_PAGE');
    },
    checkToDo( { commit }, indexInList ) {
      commit('CHECK_TODO', indexInList);
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})