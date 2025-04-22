<template>
  <div class="flex">
    <img :src="ownedCards.card_image" alt="image!" srcset="" />
    <h1>{{ ownedCards.name }}</h1>
  </div>
</template>

<script setup lang="ts">
import type { card } from '../../Cards.ts'
type Props = {
  ownedCards: card
}
defineProps<Props>()
</script>

<style scoped></style>
