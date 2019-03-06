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
    lastPage: state => state.todos.length - 1
  },
  strict: process.env.NODE_ENV !== 'production'
})