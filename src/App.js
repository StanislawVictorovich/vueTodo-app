import List from "./components/List/List.vue";
import Navigation from "./components/Navigation/Navigation.vue";

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
    add() {
      this.$store.dispatch("addToDo", { text: this.message, checked: false });
    }
  },
  computed: {
    todos: {
      get() {
        return this.$store.getters.todos;
      }
    },
    lastPage: {
      get() {
        return this.$store.getters.lastPage;
      }
    },
    currentPage: {
      get() {
        return this.$store.getters.currentPage;
      }
    }
  }
};