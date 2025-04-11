<template>
  <div class="fixed">
    <img :src="ownedCards.card_image" alt="" srcset="" />
    <h1>{{ ownedCards.name }}</h1>
  </div>
</template>

<script setup lang="ts">
import type { card } from '../Cards.ts'
interface Props {
  ownedCards: card
}
defineProps<Props>()
</script>

<style scoped></style>
