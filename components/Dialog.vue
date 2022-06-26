<script>
import { mapActions, mapState } from 'vuex';
import Notify from './Notify.vue';

export default {
    methods: {
        ...mapActions(["toggleDialog"])
    },
    computed: {
        ...mapState(["dialog"])
    },
    components: { Notify }
}
</script>

<template>
  <v-dialog v-model="dialog" width="400" persistent>
    <v-card width="400" rounded="lg">
      <v-card-title class="text-h5 lighten-2">
        <v-spacer />
        <v-btn @click="toggleDialog" icon depressed>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="text-center">
        <p class="text-h4 font-weight-bold grey--text text--darken-4">Get Notified When</p>
        <p class="text-h4 font-weight-bold grey--text text--darken-4 mt-2">we Launch🚀</p>
        <Notify />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
