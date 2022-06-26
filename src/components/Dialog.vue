<script setup>
import { useDialogStore } from "../stores/dialog"
import Notify from "./Notify.vue";
import { useDisplay } from 'vuetify'

const dialogStore = useDialogStore()

const { name } = useDisplay()
</script>

<template>
  <v-dialog v-model="dialogStore.dialog">
    <v-card :width="name == 'xs' ? 350 : name == 'sm' ? 350 : name == 'md' ? 400 : 450" rounded="lg">
      <v-card-title class="text-h5 grey lighten-2">
        <v-spacer />
        <v-btn @click="dialogStore.toggleDialog" icon="mdi-close" flat />
      </v-card-title>

      <v-card-text class="text-center mt-n8">
        <p class="text-h4 font-weight-bold">Get Notified When</p>
        <p class="text-h4 font-weight-bold mt-2">we Launch🚀</p>
        <Notify />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
