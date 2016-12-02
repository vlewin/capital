import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Events from './Events.vue'
import Receipts from './components/Receipts.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/receipts', component: Receipts },
    { path: '/events', component: Events },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(from.path, to.path)
  next()
})

export default router
