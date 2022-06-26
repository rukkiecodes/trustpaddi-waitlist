<script setup>
import { useDialogStore } from "../stores/dialog"
import { useDisplay } from 'vuetify'

const { name } = useDisplay()

const dialogStore = useDialogStore()
</script>

<template>
  <v-card class="my-0 py-0 mt-4" variant="outlined" rounded="lg"
    :max-width="name == 'xs' ? 350 : name == 'sm' ? 350 : name == 'md' ? 400 : 450">
    <v-card-text class="d-flex align-center my-0 py-0">
      <v-text-field v-model="dialogStore.email" @keypress.enter="dialogStore.sendNewWait"
        placeholder="Enter your email Address" variant="plain" class="mt-n2" hide-details />
      <v-btn @click="dialogStore.sendNewWait" class="text-capitalize text-white rounded-lg ml-4 mr-n2" color="#0C1825"
        flat> {{ dialogStore.loading == true ? 'Loading...' : 'Notify me' }} </v-btn>
    </v-card-text>
  </v-card>
</template>
