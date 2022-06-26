<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(["snackbar", "text"]),

    snackbar: {
      get () {
        return this.$store.state.snackbar
      },
      set (new_value) {
        this.$store.state.snackbar = new_value
      }
    },

    text: {
      get () {
        return this.$store.state.text
      },
      set (new_value) {
        this.$store.state.text = new_value
      }
    }
  }
}
</script>

<template>
  <v-snackbar v-model="snackbar" top right>
    <span class="text-white">{{ text }}</span>
  </v-snackbar>
</template>
