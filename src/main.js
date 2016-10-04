import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'



// import { ActionCable } from 'actioncable-js'

// export var cable = ActionCable.createConsumer("ws://localhost:3000/cable")
export let eventHub = new Vue()


// sync the router with the vuex store.
// this registers `store.state.route`
// sync(store, router)

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('app')


export { app, router, store }
