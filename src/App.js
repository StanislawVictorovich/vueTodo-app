import { mapGetters, mapActions } from 'vuex'
import List from './components/List/List.vue'
import Navigation from './components/Navigation/Navigation.vue'

export default {
  name: "app",
  data() {
    return {
      message: ""
    };
  },
  components: {
    List,
    Navigation
  },
  methods: {
    ...mapActions(['addToDo']),
    add() {
      this.addToDo({ text: this.message, checked: false });
    }
  },
  computed: {
    ...mapGetters(['currentPage', 'lastPage', 'todos']),
    todosOfCurrentPage: {
      get() {
        return this.todos[this.currentPage];
      }
    },
    displayPage: {
      get() {
        return this.currentPage + 1;
      }
    }
  }
}