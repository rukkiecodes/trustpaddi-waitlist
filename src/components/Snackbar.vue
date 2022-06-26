<script setup>
import { useDialogStore } from "../stores/dialog"

const dialogStore = useDialogStore()
</script>

<template>
  <v-snackbar v-model="dialogStore.snackbar" top right>
    <span class="text-white">{{ dialogStore.text }}</span>
  </v-snackbar>
</template>
