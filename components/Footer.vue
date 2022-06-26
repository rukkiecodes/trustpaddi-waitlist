<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(["toggleDialog"])
  },

  computed: {
    leftAlign () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'justify-center'
        case 'sm': return 'justify-start'
      }
    },

    rightAlign () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'justify-center'
        case 'sm': return 'justify-start'
      }
    },
  }
}
</script>

<template>
  <v-row justify="space-between" align="center" class="mt-5">
    <v-col cols="12" sm="6">
      <div :class="leftAlign" class="d-flex mt-6">
        <v-btn small icon>
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn small icon class="mx-10">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn small icon>
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
      </div>
    </v-col>

    <v-col cols="12" sm="6">
      <div :class="rightAlign" class="d-flex mt-6">
        <v-btn @click="toggleDialog" depressed class="font-weight-bold">
          Faq
        </v-btn>

        <v-btn @click="toggleDialog" depressed class="font-weight-bold text-capitalize">
          Privacy policy
        </v-btn>

        <v-btn @click="toggleDialog" depressed class="font-weight-bold text-capitalize">
          Email us
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>