<template>
  <div>
    <h2>Events</h2>

    <ol id="events">
      <li v-for="item in items">
        {{ item.name }} - {{ item.amount }} ({{ date(item.created_at) }})
      </li>
    </ol>

    <p>
      <label>Name:</label>
      <input type="text" v-model="name">
    </p>

    <p>
      <label>Amount:</label>
      <input type="number" v-model="amount">
    </p>

    <button v-on:click="create">Create receipt</button>
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
      items () {
        return this.$store.state.items
      }
    },

    beforeMount () {
      this.$store.dispatch('FETCH_RECEIPTS', {
        ids: [this.id]
      })
    },

    methods: {
      date(created_at) {
        let datetime = new Date(created_at)

        return datetime.toLocaleDateString("de-DE")
      },

      create() {
        this.$store.dispatch('CREATE_RECEIPT', {
          receipt: {
            name: this.name,
            amount: this.amount
          }
        })
      }
    }
  }
</script>
