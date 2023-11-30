import { createRouter, createWebHistory } from 'vue-router'
import ConcertenView from '../views/ConcertenView.vue'
import AboutView from "@/views/AboutView.vue";
import ConcertDetailView from "@/views/ConcertDetailView.vue";
import OrganisatorenView from "@/views/OrganisatorenView.vue";

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
      path: '/concert/:id',
      name: 'concert-detail',
      props:true,
      component: ConcertDetailView
    },
    {
      path: '/organisatoren',
      name: 'organisatoren',
      props:true,
      component: OrganisatorenView
    }
  ]
})

export default router
