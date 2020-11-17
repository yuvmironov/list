import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "main" */ '../views/Main.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    redirect: '/todo',
    children: [
      {
        path: '/todo',
        name: 'todo',
        component: () => import(/* webpackChunkName: "todo" */ '../views/ToDoList')
      },
      {
        path: '/job',
        name: 'job',
        component: () => import(/* webpackChunkName: "job" */ '../views/FindJob')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
