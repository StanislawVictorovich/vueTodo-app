import { mapActions } from 'vuex'

export default {
  name: 'Item',
  props: ['element', 'index'],
  methods: {
    ...mapActions(['checkToDo', 'deleteToDo']),
    checkTask(indexInList) {
      this.checkToDo(indexInList);
    },
    deleteTask(indexInList, event) {
      this.deleteToDo(indexInList);
      event.stopPropagation();
    }
  }
}