import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Events from './Events.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/events', component: Events },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(from.path, to.path)
  next()
})

export default router
