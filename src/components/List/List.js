import { mapGetters, mapActions } from 'vuex'

export default {
  name: "List",
  props: ["list"],
  methods: {
    ...mapActions(['checkToDo', 'deleteToDo']),
    checkTask(indexInList) {
      this.checkToDo(indexInList);
    },
    deleteTask(indexInList, event) {
      this.deleteToDo(indexInList);
      event.stopPropagation();
    }
  },
  computed: {
    ...mapGetters(['isChecked'])
  }
}