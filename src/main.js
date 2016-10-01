import Vue from 'vue'
import App from './App.vue'

import { ActionCable } from 'actioncable-js'
export var cable = ActionCable.createConsumer("ws://localhost:3000/cable")


export let eventHub = new Vue()

var vm = new Vue({
  el: '#app',
  render: h => h(App),

  methods: {
    post: function(e) {
      e.preventDefault();
    }
  }
})
