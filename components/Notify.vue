<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(["sendNewWait"])
  },

  computed: {
    ...mapState(["email", "loading"]),

    email: {
      get () {
        return this.$store.state.email;
      },
      set (new_value) {
        this.$store.state.email = new_value;
      }
    }
  }
}
</script>

<template>
  <v-card class="" rounded="lg" width="400" flat outlined>
    <v-card-text class="d-flex align-center pa-2">
      <v-text-field v-model="email" @keypress.enter="sendNewWait" solo flat placeholder="Enter your email Address"
        hide-details />
      <v-btn @click="sendNewWait" class="text-capitalize white--text rounded-lg ml-4" color="#0C1825" depressed
        :loading="loading">
        Notify me
      </v-btn>
    </v-card-text>
  </v-card>
</template>
