import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () => import('../App.vue'),
    children: [
      {
        path: '/g6',
        component: () => import('@/page/g6/index.vue')
      },
      {
        path: '/hello',
        component: () => import('@/components/HelloWorld.vue')
      }
    ]
  }
]
export default new VueRouter({
  routes
})
