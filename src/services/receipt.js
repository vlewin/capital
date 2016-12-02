import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

var resource = Vue.resource('http://localhost:3000/receipts{/id}');

export function fetchReceipts() {
  return resource.get().then((response) => {
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

export function deleteReceipt(receipt) {
  return resource.delete({ id: receipt.id}).then((response) => {
    // return response.json()
  }, (response) => {
    // error callback
  });
}
