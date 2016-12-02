<template>
  <div>
    <h2>Receipts</h2>

    <ol id="receipts">
      <li v-for="receipt in receipts">
        {{ receipt.name }} - {{ receipt.amount }} ({{ date(receipt.created_at) }})
        <button class="btn btn-primary" v-on:click="destroy(receipt)">delete</button>
      </li>
    </ol>

    <div class="container">
      <div class="columns">
        <p>
          <label>Name:</label>
          <input class="column col-6" type="text" v-model="name">
        </p>

        <p>
          <label>Amount:</label>
          <input class="column col-6" type="number" v-model="amount">
        </p>
      </div>
    </div>

    <button class="btn btn-primary" v-on:click="create">Create receipt</button>
  </div>
</template>
<script>
  export default {
    name: 'receipts',
    data () {
      return {
        name: null,
        amount: 0,
      }
    },

    computed: {
      receipts () {
        return this.$store.state.receipts
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
      },

      destroy(receipt) {
        this.$store.dispatch('DELETE_RECEIPT', receipt)
      }
    }
  }
</script>
