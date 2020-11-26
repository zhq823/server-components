import Vue from 'vue'
import CreateApp from './app.js'

Vue.mixin({
    beforeRouteUpdate (to, from, next) {
      const { asyncData } = this.$options
      if (asyncData) {
        asyncData({
          store: this.$store,
          route: to
        }).then(next).catch(next)
      } else {
        next()
      }
    }
})

const { app, router, store } = new CreateApp()

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
  }

router.onReady(() => {
    app.$mount("#app")
})