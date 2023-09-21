import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/views/MainView.vue';
import Home from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: `/`,
      name: 'main',
      component: Main,
    },
    {
      path: '/actions',
      name: 'Home',
      component: Home,
    },
  ],
});

export default router;
