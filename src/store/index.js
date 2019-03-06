import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
      ]
    ]
  },
  getters: {
    todos(state) {
      return state.todos;
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})