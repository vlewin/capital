<template>
  <div>
    <h2>Events</h2>

    <ul id="events">
      <li v-for="event in events">
        {{ event.item.id }} - {{ event.type }} - {{ event.class}} - {{ event.item.created_at }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'events',
    // props: ['id'],
    data () {
      return {
        name: null,
        amount: 0,
      }
    },

    computed: {
      events () {
        return this.$store.state.events
      }
    },

    beforeMount () {
      // this.$store.dispatch('FETCH_RECEIPTS', {
      //   ids: [this.id]
      // })
    },

    methods: {
    }
  }
</script>
