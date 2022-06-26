<template>
  <v-card class="my-0 py-0 mt-4" variant="outlined" rounded="lg"
    :max-width="name == 'xs' ? 350 : name == 'sm' ? 350 : name == 'md' ? 400 : 450">
    <v-card-text class="d-flex align-center my-0 py-0">
      <v-text-field label="Plain" variant="plain" hide-details />
      <v-btn class="text-capitalize text-white rounded-lg ml-4 mr-n2" color="#0C1825" flat>Notify me</v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { name } = useDisplay()
</script>