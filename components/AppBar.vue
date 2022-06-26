<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(["toggleDialog"])
  }
}
</script>

<template>
  <v-app-bar flat color="transparent">
    <div class="d-flex justify-start align-center mt-n1">
      <img src="../assets/img/paddi.png" width="30" />
      <span class="text-body-1 font-weight-bold ml-2 hidden-sm-and-down">Trustpaddi</span>
    </div>

    <v-spacer />

    <v-btn @click="toggleDialog" class="text-capitalize" depressed color="transparent">
      About Us
    </v-btn>

    <v-btn @click="toggleDialog" class="text-capitalize" depressed color="transparent">
      Services
    </v-btn>

    <v-btn @click="toggleDialog" class="text-capitalize" depressed color="transparent">
      Parnership
    </v-btn>
  </v-app-bar>
</template>
