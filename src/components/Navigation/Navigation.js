import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Navigation',
  methods: {
    ...mapActions(['backwardPage', 'forwardPage', 'newPage'])
  },
  computed: {
    ...mapGetters(['lastPage', 'currentPage'])
  }
}