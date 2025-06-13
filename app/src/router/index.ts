import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import GachaView from '../views/GachaView.vue'
import DecksView from '@/views/DecksView.vue'
import OwnedCardsView from '@/views/OwnedCardsView.vue'
import '@/assets/main.css'
import { useAuthStore } from '@/stores/auth';
import GameLobby from '@/views/GameLobby.vue'

const routes = [
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
  {
    path: '/GameLobby',
    name: 'gamelobby',
    component: GameLobby
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from) => {
  if(!useAuthStore().isLoggedin && to.name !=='login' && to.name !== 'home'){
    return {name: ['home']}
  }
})



export default router
