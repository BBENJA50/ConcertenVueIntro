import { createRouter, createWebHistory } from 'vue-router'
import ConcertenView from '../views/ConcertenView.vue'
import AboutView from "@/views/AboutView.vue";
import ConcertDetailsView from "@/views/ConcertDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ConcertenView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/detail',
      name: 'detail',
      component: ConcertDetailsView
    }
  ]
})

export default router
