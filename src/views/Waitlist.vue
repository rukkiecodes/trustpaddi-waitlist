<script setup>
import Hero from "../components/Hero.vue"
import HeroImage from "../components/HeroImage.vue"
import Footer from "../components/Footer.vue"
import Dialog from "../components/Dialog.vue"
import Snackbar from "../components/Snackbar.vue"
</script>

<template>
  <v-container>
    <Snackbar />
    <v-row justify="space-between" align="center" class="mt-5">
      <v-col cols="12" sm="6">
        <Hero />
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-center">
        <HeroImage />
      </v-col>
    </v-row>

    <Footer />
    <Dialog />
  </v-container>
</template>
