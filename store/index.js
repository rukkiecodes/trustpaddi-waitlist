// import axios from "axios"

export const state = () => ({
  dialog: false,
  email: '',
  snackbar: false,
  text: ``,
  loading: false
})

export const mutations = {
  toggleDialog (state) {
    state.dialog = !state.dialog
  }
}

export const actions = {
  toggleDialog ({ commit }) {
    commit("toggleDialog")
  },

  sendNewWait () {
    if (this.state.email != '') {
      this.state.loading = true
      this.$axios({
        method: 'post',
        url: `https://trustpaddi-waitlist.herokuapp.com/waitlist/addWait/${this.state.email}`
      }).then(res => {
        if (res.status == 201) {
          this.state.loading = false
          this.state.snackbar = true
          this.state.text = res.data.message
        } else if (res.status == 400) {
          this.state.loading = false
          this.state.snackbar = true
          this.state.text = res.data.message
        }
        this.state.loading = false
      }).catch(() => this.state.loading = false)
    }
  }
}

export const strict = false