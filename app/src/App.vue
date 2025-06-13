<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gacha">Gacha</RouterLink>
        <RouterLink to="/deck">Deck</RouterLink>
        <div v-if="useAuthStore().isLoggedin">
          <RouterLink to="/GameLobby">Play Game</RouterLink>
          <RouterLink to="/ownedCards">Your Cards</RouterLink>
        </div>
        
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
