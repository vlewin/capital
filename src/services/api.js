import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

var resource = Vue.resource('http://localhost:3000/receipts');

export function fetchReceipts() {
  return resource.get({id: 1}).then((response) => {
    return response.json()
  })
}

export function createReceipt(receipt) {
  return resource.save(receipt).then((response) => {
    return response.json()
  }, (response) => {
    // error callback
  });
}
