<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/gacha">Gacha</RouterLink>
        <RouterLink to="/deck">Deck</RouterLink>
        <RouterLink to="/ownedCards">Your Cards</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
