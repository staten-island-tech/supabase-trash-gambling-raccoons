<template>
  <div class="flex flex-wrap">
    <OwnedCards v-for="card in ownedCards" :card="card" />
  </div>
</template>

<script setup lang="ts">
import OwnedCards from '@/components/ownedCardsStuff/OwnedCards.vue'
import { ownedCards } from '../../OwnedCardsCards.ts'
</script>

<style scoped></style>
