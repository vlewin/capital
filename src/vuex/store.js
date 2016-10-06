import Vue from 'vue'
import Vuex from 'vuex'
import websocket from './plugins/websocket.js'
import { fetchReceipts, createReceipt, fetchItems } from './../services/api.js'

Vue.use(Vuex)

console.log(websocket)
websocket.start()
websocket.perform('start')

const store = new Vuex.Store({
  // plugins: [websocket],

  state: {
    receipts: {/* [id: number]: Item */},
    events: {/* [id: number]: Event */}
  },

  actions: {
    FETCH_RECEIPTS: ({ commit, state }, { }) => {
      return fetchReceipts().then(receipts => commit('SET_RECEIPTS', { receipts }))
    },

    CREATE_RECEIPT: ({ commit, state }, { receipt }) => {
      console.info(receipt)
      return createReceipt(receipt).then(item => commit('ADD_RECEIPT', { item }))
    },

    WS_EVENT: ({ commit, state }, event) => {
      console.info('WS_EVENT', event)
      commit('ADD_EVENT', {event})
    }
  },

  mutations: {
    ADD_EVENT: (state, { event }) => {
      console.info('ADD_EVENT', event)
      Vue.set(state.events, event.id, event)
    },

    ADD_RECEIPT: (state, { item }) => {
      Vue.set(state.receipts, item.id, item)
    },

    // ADD_ITEM: ({ commit, state }, { item }) => {
    //   console.log('ADD_ITEM', item)
    //   state.receipts.push(item)
    // },

    SET_RECEIPTS: (state, { receipts }) => {
      receipts.forEach(item => {
        if (item) {
          Vue.set(state.receipts, item.id, item)
        }
      })
    }
  },

  getters: {
    // ids of the receipts that should be currently displayed based on
    // current list type and current pagination
    // activeIds (state) {
    //   const { activeType, itemsPerPage, lists } = state
    //   const page = Number(state.route.params.page) || 1
    //   if (activeType) {
    //     const start = (page - 1) * itemsPerPage
    //     const end = page * itemsPerPage
    //     return lists[activeType].slice(start, end)
    //   } else {
    //     return []
    //   }
    // },
    //
    // // items that should be currently displayed.
    // // this Array may not be fully fetched.
    // activeItems (state, getters) {
    //   return getters.activeIds.map(id => state.items[id]).filter(_ => _)
    // }
  }
})

export default store