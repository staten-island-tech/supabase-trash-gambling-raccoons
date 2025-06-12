<template>
  <h1 class="bg-white text-center text-xl">Your Cards</h1>
  <div class="flex">
    <div class="flex flex-wrap">
      <OwnedCards v-for="card in uniqueCard" :card="card" />
    </div>
  </div>
</template>

<script setup lang="ts">
import OwnedCards from '@/components/ownedCardsStuff/OwnedCards.vue'
import { ownedCards } from '../OwnedCards.ts'
import type { card } from '@/types.ts'

const uniqueCard = new Set(ownedCards.value)
</script>

<style scoped></style>
