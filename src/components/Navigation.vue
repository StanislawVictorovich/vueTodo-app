<template>
<div>
  <span 
    id="new-page" 
    class="navigation-buttons"
    @click="newPage"
    >➕
  </span>

  <span
    v-if="currentPage < lastPage"
    id="forward-page" 
    class="navigation-buttons"
    @click="forwardPage"
    >🔺
  </span>

  <span 
    v-if="currentPage > 0"
    id="backward-page" 
    class="navigation-buttons"
    @click="backwardPage"
    >🔺
  </span>
</div>
</template>
<script>
export default {
  name: 'Navigation',
  props: ['currentPage'],
  methods: {
    backwardPage() {
      this.$store.dispatch('backwardPage');
    },
    forwardPage() {
      this.$store.dispatch('forwardPage');
    },
    newPage() {
      this.$store.dispatch("newPage");
    }
  },
  computed: {
    lastPage: {
      get() {
        return this.$store.getters.lastPage;
      }
    }
  }
}
</script>
<style>
#new-page {
  right: 0;
}

#forward-page {
  transform: rotate(90deg);
  right: 46px;
}

#backward-page {
  transform: rotate(270deg);
  right: 86px;
}

.navigation-buttons {
  position: fixed;
  bottom: 0;
  padding: 12px;
  transition: 0.4s;  
}

.navigation-buttons:hover {
  cursor: pointer;
  background-color: rgb(90, 46, 172);
  color: white;
  transition: 0.4s;  
}
</style>