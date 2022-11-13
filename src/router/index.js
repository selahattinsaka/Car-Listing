import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/car-showcase',
    name: 'carShowcase',
    component: () => import('../views/carShowcase.vue'),
  },
  {
    path: '/car-listing',
    name: 'carListing',
    component: () => import('../views/carListing.vue'),
  },
  {
    path: '/car-details/:id?',
    name: 'carDetails',
    component: () => import('../views/carDetails.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
