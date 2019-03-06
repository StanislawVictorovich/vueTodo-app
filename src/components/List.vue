<template>
  <div>
    <li
      v-for="(item, index) in list"
      :key="item.text"
      @click="checkTask(index)"
      :class="{ 'checked': isChecked(index) }">
        {{ item.text }}
      <span class="close" @click="deleteTask(index)">❌</span>
    </li>
  </div>
</template>
<script>
export default {
  name: "List",
  props: ["list"],
  methods: {
    checkTask(indexInList) {
      this.$store.dispatch("checkToDo", indexInList);
    },
    deleteTask(indexInList) {
      this.$store.dispatch("deleteToDo", indexInList);
    }
  },
  computed: {
    isChecked() {
      return indexInList => this.$store.getters.isChecked(indexInList);
    }
  }
};
</script>
<style>
li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.4s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

li:nth-child(odd) {
  background: #f9f9f9;
}

li:hover {
  background: #ddd;
}

li.checked {
  background: lightgray;
  color: #fff;
  text-decoration: line-through;
}

li.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 11px 11px 11px 10px;
  transition: 0.4s;
}

.close:hover {
  background-color: rgb(90, 46, 172);
  color: white;
  transition: 0.4s;
}
</style>
