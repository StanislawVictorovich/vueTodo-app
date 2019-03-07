export default {
  name: "Navigation",
  props: ["currentPage"],
  methods: {
    backwardPage() {
      this.$store.dispatch("backwardPage");
    },
    forwardPage() {
      this.$store.dispatch("forwardPage");
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
};