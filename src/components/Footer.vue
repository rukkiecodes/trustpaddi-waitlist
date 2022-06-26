<script setup>
import { useDialogStore } from "../stores/dialog"

const dialogStore = useDialogStore()
</script>

<template>
  <v-row justify="space-between" align="center" class="mt-5">
    <v-col cols="12" sm="6">
      <div class="d-flex justify-start mt-6">
        <v-btn icon="mdi-instagram" size="small" />
        <v-btn icon="mdi-facebook" size="small" class="ml-6" />
        <v-btn icon="mdi-twitter" size="small" class="ml-6" />
      </div>
    </v-col>

    <v-col cols="12" sm="6">
      <div class="d-flex justify-end mt-6">
        <v-btn @click="dialogStore.toggleDialog" flat class="font-weight-bold">
          Faq
        </v-btn>

        <v-btn @click="dialogStore.toggleDialog" flat class="font-weight-bold text-capitalize">
          Privacy policy
        </v-btn>

        <v-btn @click="dialogStore.toggleDialog" flat class="font-weight-bold text-capitalize">
          Email us
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>