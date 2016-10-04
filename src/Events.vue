<template>
  <div>
    <h2>Events</h2>

    <ul id="events">
      <li v-for="item in items">
        {{ item.id }} {{ item.title }}
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
        id: 1,
        open: true
      }
    },

    computed: {
      items () {
        return this.$store.state.items
      }
    },

    beforeMount () {
      this.$store.dispatch('FETCH_ITEMS', {
        ids: [this.id]
      })
    },

    methods: {
      pluralize (n) {
        return n + (n === 1 ? ' reply' : ' replies')
      }
    }
  }
</script>
