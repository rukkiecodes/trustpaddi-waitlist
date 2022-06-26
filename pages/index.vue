<template>
  <v-container>
    <AppBar />
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
    <Snackbar />
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import AppBar from '~/components/AppBar.vue';
import Hero from '~/components/Hero.vue';
import Footer from '~/components/Footer.vue';
import Dialog from '~/components/Dialog.vue';
import Snackbar from '~/components/Snackbar.vue';

export default {
  name: "IndexPage",
  head: () => ({
    title: "Trustpaddi"
  }),
  computed: {
    ...mapState(["counter"])
  },
  components: { AppBar, Hero, Footer, Dialog, Snackbar }
}
</script>
