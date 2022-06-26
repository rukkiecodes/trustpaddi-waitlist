import axios from 'axios'
import { defineStore } from 'pinia'

export const useDialogStore = defineStore({
  id: 'dialog',

  state: () => ({
    dialog: false,
    email: '',
    snackbar: false,
    text: ``,
    loading: false
  }),

  actions: {
    toggleDialog () {
      this.dialog = !this.dialog
    },

    sendNewWait () {
      this.loading = true
      axios({
        method: 'post',
        url: `https://trustpaddi-waitlist.herokuapp.com/waitlist/addWait/${this.email}`
      }).then(res => {
        console.log(res.data)
        if (res.status == 201) {
          this.loading = false
          this.snackbar = true
          this.text = res.data.message
        } else if (res.status == 400) {
          this.loading = false
          this.snackbar = true
          this.text = res.data.message
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
        this.snackbar = true
        this.text = 'You are already on our waitlist'
      })
    }
  }
})