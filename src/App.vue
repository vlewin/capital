<template>
  <div>
    <app-header></app-header>

    <router-view></router-view>

    <app-footer></app-footer>
  <div>
</template>

<script>
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'

  export default {
    data () {
      return {
        msg: 'Hello Vue 2.0!',
        channel: null,
        response: null
      }
    },

    components: {
      AppHeader,
      AppFooter
    }
  }
</script>
