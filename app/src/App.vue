<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<<<<<<< HEAD
  <div class="bg-blue-200">
    <RouterView />
    <header>
      <div
        class="wrapper fixed bottom-0 bg-white justify-evenly items-center flex-wrap w-[100%] m-auto"
      >
        <nav>
          <RouterLink to="/login">Login</RouterLink>
          <RouterLink to="/gacha">Gacha</RouterLink>
          <RouterLink to="/deck">Deck</RouterLink>
          <RouterLink to="/ownedCards">Your Cards</RouterLink>
        </nav>
      </div>
    </header>
  </div>
=======
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/gacha">Gacha</RouterLink>
        <RouterLink to="/deck">Deck</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
>>>>>>> Haobin
</template>

<style scoped></style>
