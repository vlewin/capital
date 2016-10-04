import Vue from 'vue'
import Vuex from 'vuex'
import { fetchItems } from './api'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    items: {/* [id: number]: Item */}
  },

  actions: {
    FETCH_ITEMS: ({ commit, state }, { ids }) => {
      console.log(commit)
      console.log(state)
      console.log(ids)
      return fetchItems(ids).then(items => commit('SET_ITEMS', { items }))
    }
  },

  mutations: {
    SET_ITEMS: (state, { items }) => {
      items.forEach(item => {
        if (item) {
          Vue.set(state.items, item.id, item)
        }
      })
    }
  },

  getters: {
    // ids of the items that should be currently displayed based on
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
