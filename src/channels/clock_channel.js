import { ActionCable } from 'actioncable-js'
// import { cable } from './../main.js'
import { eventHub } from './../main.js'
import { log, guid } from './../modules/helpers.js'

let cable = ActionCable.createConsumer("ws://localhost:3000/cable")
let options = { channel: "ClockChannel", uuid: guid() }
let callbacks = {
  connected: function() {
    log("connected", this.identifier)
  },

  disconnected: function() {
    log("disconnected", this.identifier)
  },

  rejected: function() {
    log("rejected")
  },

  received: function(data) {
    eventHub.$emit('received', data)
  }
}

export default cable.subscriptions.create(options, callbacks)

//
// this.consumer = ActionCable.createConsumer("ws://localhost:3000/cable")
// this.channel = this.consumer.subscriptions.create(
//   {
//     channel: "ClockChannel",
//     uuid: '11111'
//   },
//
//     {
//     received: function(data) {
//       this.tick(data)
//     },
//
//     // Custom methods
//     start: function() {
//       // writeLog("starting clock")
//       _this.msg = 'Start'
//       this.perform("start")
//     },
//
//     stop: function() {
//       console.warn("stopping clock")
//       _this.msg = 'Stop'
//       this.perform("stop")
//     },
//
//     tick: function(data) {
//       _this.response = data
//       console.log("tick received", data)
//       this.tock("ack")
//     },
//
//     tock: function(message) {
//       console.log("tock sent", message)
//       _this.msg = 'Send: ' + message
//       return this.perform("tock", { message: message })
//     }
//   }
// )
