// this.consumer = ActionCable.createConsumer("ws://localhost:3000/cable")
// this.channel = this.consumer.subscriptions.create(
//   {channel: "ClockChannel", uuid: '11111'}, {
//
//
//   received: function(data) {
//     this.tick(data)
//   },
//
//   // Custom methods
//   start: function() {
//     // writeLog("starting clock")
//     _this.msg = 'Start'
//     this.perform("start")
//   },
//
//   stop: function() {
//     console.warn("stopping clock")
//     _this.msg = 'Stop'
//     this.perform("stop")
//   },
//
//   tick: function(data) {
//     _this.response = data
//     console.log("tick received", data)
//     this.tock("ack")
//   },
//
//   tock: function(message) {
//     console.log("tock sent", message)
//     _this.msg = 'Send: ' + message
//     return this.perform("tock", { message: message })
//   }
// })
