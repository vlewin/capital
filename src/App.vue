<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>{{response}}</p>

    <button id="start" v-on:click="start">Start</button>
    <button id="start" v-on:click="stop">Stop</button>
  </div>
</template>

<script>
  import { cable } from './main.js'
  // import * as websocket from './modules/websocket.js';

  import { log, guid } from './modules/helpers.js'
  import {eventHub } from './main.js'

  export default {
    data () {
      return {
        msg: 'Hello Vue 2.0!',
        channel: null,
        response: null
      }
    },


    created: function () {
      console.log('Created')

      let _this = this
      eventHub.$on('received', function(data) {
        console.info(data)
        _this.response = data
      })
    },

    mounted() {
      console.log('Mounted')

      let channel = { channel: "ClockChannel", uuid: guid() }
      this.channel = cable.subscriptions.create(
        channel,
        {
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
      })
    },

    methods: {
      start: function () {
        this.msg = 'Clock started'
        this.channel.perform('start')
      },

      stop: function () {
        this.msg = 'Clock stoped'
        this.channel.perform('stop')
      }
    }

  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>
