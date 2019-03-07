export default {
  name: "List",
  props: ["list"],
  methods: {
    checkTask(indexInList) {
      this.$store.dispatch("checkToDo", indexInList);
    },
    deleteTask(indexInList, event) {
      this.$store.dispatch("deleteToDo", indexInList);
      event.stopPropagation();
    }
  },
  computed: {
    isChecked() {
      return indexInList => this.$store.getters.isChecked(indexInList);
    }
  }
};