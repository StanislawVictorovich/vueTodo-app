import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Navigation",
  props: ["currentPage"],
  methods: {
    ...mapActions(['backwardPage', 'forwardPage', 'newPage'])
  },
  computed: {
    ...mapGetters(['lastPage'])
  }
}