import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import GachaView from '../views/GachaView.vue'
import DecksView from '@/views/DecksView.vue'
import OwnedCardsView from '@/views/OwnedCardsView.vue'
import '@/assets/main.css'
import { getActivePinia } from 'pinia';
import { useAuthStore } from '@/stores/auth';

if (getActivePinia()) {
    const authStore = useAuthStore();
    console.log(authStore.isLoggedin);
} else {
    console.error('Pinia is not active yet. Make sure to call app.use(createPinia()) in main.js before accessing stores.');
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/gacha',
      name: 'gacha',
      component: GachaView,
    },
    {
      path: '/deck',
      name: 'deck',
      component: DecksView,
    },
    {
      path: '/ownedCards',
      name: 'ownedCards',
      component: OwnedCardsView,
    },
  ],
})
//if this false then... what is it supposed to do? If loginned in then can access other pages. If not logged it, can only access the home and login page.


export default router
