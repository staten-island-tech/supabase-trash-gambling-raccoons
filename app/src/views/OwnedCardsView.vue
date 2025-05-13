<template>
  <div>
    <OwnedCards v-for="card in ownedCards" :card="card" />
  </div>
</template>

<script setup lang="ts">
import OwnedCards from '@/components/ownedCardsStuff/OwnedCards.vue'
import { ownedCards } from '../../OwnedCards'
</script>

<style scoped></style>
