<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-blue-200">
    <RouterView />
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
  </div>
</template>

<style scoped></style>
