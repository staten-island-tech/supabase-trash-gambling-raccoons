<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
/* 
  auth.ts try to make it so that when you login your username is imported to the authstore []
  Login.vue just make a failsafe for the login part 
  Try to make it possible to push cards into the user's []
*/
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gacha">Gacha</RouterLink>
        <RouterLink to="/deck">Deck</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
