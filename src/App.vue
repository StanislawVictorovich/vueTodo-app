<template>
  <div id="app">
    <div id="operation-block" class="header">
      <h4 style="margin:5px" id="Date">Page {{ currentPage + 1 }}</h4>
      <input type="text" id="input" placeholder="Type, please..." v-model="message">
      <span id="add-button" @click="add">Add</span>
    </div>
    <ul class="work-block" id="current-page">
      <list :list="todos[currentPage]"></list>
    </ul>
    <navigation :currentPage="currentPage"></navigation>
  </div>
</template>

<script>
import List from "./components/List";
import Navigation from "./components/Navigation";

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
</script>

<style>
body {
  margin: 0;
  min-width: 250px;
}

* {
  box-sizing: border-box;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

h4 {
  margin: 5px;
}

ul {
  margin: 0;
  padding: 0;
}

.header {
  background-color: #6f36f4;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

.header:after {
  content: "";
  display: table;
  clear: both;
}

#input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

#add-button {
  border: none;
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 0;
}

#add-button:hover {
  background-color: #555555;
  color: white;
}

#add-button:active {
  background-color: rgb(49, 48, 48);
}
</style>
