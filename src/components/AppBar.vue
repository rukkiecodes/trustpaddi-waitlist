<script setup>
import { useDialogStore } from "../stores/dialog"

const dialogStore = useDialogStore()
</script>

<template>
  <v-app-bar flat>
    <div class="d-flex justify-start align-center mt-n1">
      <img src="../assets/img/paddi.png" width="30" />
      <span class="text-h6 ml-2 hidden-sm-and-down">Trustpaddi</span>
    </div>

    <v-spacer />

    <v-btn @click="dialogStore.toggleDialog" class="text-capitalize">
      About Us
    </v-btn>

    <v-btn @click="dialogStore.toggleDialog" class="text-capitalize">
      Services
    </v-btn>

    <v-btn @click="dialogStore.toggleDialog" class="text-capitalize">
      Parnership
    </v-btn>
  </v-app-bar>
</template>


<style>
@import url(../assets/base.css);
</style>