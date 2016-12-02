import store from './../store.js'
import { ActionCable } from 'actioncable-js'
import { log, guid } from './../../modules/helpers.js'

let cable = ActionCable.createConsumer("ws://localhost:3000/cable")
let options = { channel: "EventChannel", uuid: guid() }
let callbacks = {
  connected: function() {
    log("connected", this.identifier)
    // this.perform("start")
  },

  disconnected: function() {
    log("disconnected", this.identifier)
  },

  rejected: function() {
    log("rejected")
  },

  received: function(event) {
    log('Received', event)
    // eventHub.$emit('received', event)
    switch (event.type) {
       case 'record':
         this.recordHandler(event)
         break;

       case 'job':
         this.jobHandler(event)
         break;

       default:
         console.log('Unknown event type', event.type)
         break;
    }





  },

  recordHandler: function(event) {
    switch (event.state) {
       case 'created':
         store.dispatch('WS_EVENT_CREATED', event)
         break;

       case 'updated':
         store.dispatch('WS_EVENT_UPDATED', event)
         break;

       case 'destroyed':
         console.log('destroyed not implemented')
         break;

       default:
         console.log('Unknown event type', event.type)
         break;
    }
  },

  jobHandler: function(event) {
    switch (event.state) {
       case 'done':
         store.dispatch('WS_EVENT_JOB_DONE', event)
         break;

       default:
         console.log('Unknown event type', event.type)
         break;
    }
  }
  // start: function() {
  //   console.log("starting clock")
  //   this.perform("start")
  // },
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
