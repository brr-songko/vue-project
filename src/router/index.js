import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingAttribute from '@/views/DataBindingAttribute.vue'
import DataBindingButton from '@/views/DataBindingButton.vue'
import DataBindingClass from '@/views/DataBindingClass.vue'
import EventClick from '@/views/EventClick.vue'
import EventChange from '@/views/EventChange.vue'
import DataBindingList2 from '@/views/DataBindingList2.vue'
import NestedComponent from '@/views/NestedComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: NestedComponent
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBindingList2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
