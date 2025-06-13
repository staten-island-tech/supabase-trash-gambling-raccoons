<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';

</script>

<template >
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="btn" to="/">Home</RouterLink>
        <RouterLink class="btn" to="/gacha">Gacha</RouterLink>
        <RouterLink class="btn" to="/deck">Deck</RouterLink>
        <div v-if="useAuthStore().isLoggedin">
          <RouterLink class="btn" to="/GameLobby">Play Game</RouterLink>
          <RouterLink class="btn" to="/ownedCards">Your Cards</RouterLink>
        </div>
        
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
