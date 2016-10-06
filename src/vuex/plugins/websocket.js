
import { ActionCable } from 'actioncable-js'
// import { cable } from './../main.js'
// import { eventHub } from './../../main.js'
import store from './../store.js'
import { log, guid } from './../../modules/helpers.js'

let cable = ActionCable.createConsumer("ws://localhost:3000/cable")
let options = { channel: "ClockChannel", uuid: '111' }
let callbacks = {
  connected: function() {
    log("connected", this.identifier)
    this.perform("start")
  },

  disconnected: function() {
    log("disconnected", this.identifier)
  },

  rejected: function() {
    log("rejected")
  },

  received: function(data) {
    log('Received', data)
    // eventHub.$emit('received', data)
    store.dispatch('WS_EVENT', data)

    // store.dispatch('WS_EVENT', {
    //   data: data
    // })
  },

  start: function() {
    console.log("starting clock")
    this.perform("start")
  },
}

export default cable.subscriptions.create(options, callbacks)

// export default function createWebSocketPlugin () {
//   return store => {
//     // socket.on('data', data => {
//     //   store.commit('receiveData', data)
//     // })
//     store.subscribe(mutation => {
//       if (mutation.type === 'UPDATE_DATA') {
//         socket.emit('update', mutation.payload)
//       }
//     })
//   }
// }
