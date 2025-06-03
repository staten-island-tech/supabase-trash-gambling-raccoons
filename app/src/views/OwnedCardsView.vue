<template>
  <div class="flex flex-wrap">
    <OwnedCards v-for="card in uniqueCard" :card="card" />
  </div>
</template>

<script setup lang="ts">
import OwnedCards from '@/components/ownedCardsStuff/OwnedCards.vue'
import { ownedCards } from '../OwnedCards.ts'

const uniqueCard = new Set(ownedCards.value)
</script>

<style scoped></style>
