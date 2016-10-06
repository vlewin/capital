<template>
  <div>
    <h2>Events</h2>

    <ul id="events">
      <li v-for="item in events">
        {{ item.id }} - {{ item.random_number }}
      </li>
    </ul>

    <ol id="receipts">
      <li v-for="receipt in receipts">
        {{ receipt.name }} - {{ receipt.amount }} ({{ date(receipt.created_at) }})
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
      receipts () {
        return this.$store.state.receipts
      },

      events () {
        return this.$store.state.events
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
