import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import GachaView from '@/views/GachaView.vue';
import DecksView from '@/views/DecksView.vue';
import '@/assets/main.css'
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

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
    }
  ],
})
//if this false then... what is it supposed to do? If loginned in then can access other pages. If not logged it, can only access the home and login page.
router.beforeEach((to, from, next) => {
  if (!authStore.isLoggedin) {
    if (to.name='login'){
      next({name: 'login'})
    }
    if (to.name='home'){
      next({name: 'home'})
    }
    else{
      next({name: 'login'})
    }
  }
  else if (authStore.isLoggedin) {
    next();
  }
})

export default router
