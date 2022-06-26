import { defineStore } from 'pinia'

export const useDialogStore = defineStore({
  id: 'dialog',

  state: () => ({
    dialog: false
  }),

  actions: {
    toggleDialog () {
      this.dialog = !this.dialog
    }
  }
})