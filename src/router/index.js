import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateProfileView from '@/views/CreateProfileView.vue';
import ProposePolicyView from '@/views/ProposePolicyView.vue';
import LandingPageView from '@/views/LandingPageView.vue';



// comments man
 // this is a comment
const routes = [
  {
    path:'/landing-page',
    name:'landing-page',
    component: LandingPageView,
  },
  {
    path: '/propose-policy',
    name: 'propose-policy',
    component: ProposePolicyView
  },
  {
    path: '/create-profile',
    name: 'create-profile',
    component: CreateProfileView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
