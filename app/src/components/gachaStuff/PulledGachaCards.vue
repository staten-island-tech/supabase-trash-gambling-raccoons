<template>
  <div
    :class="{
      'card': true,
      'w-full max-w-md mx-auto rounded-xl shadow-md border p-6 dark:border-gray-700': true,
      'bg-blue-500': ownedCard.stars === 3,
      'bg-purple-500': ownedCard.stars === 4,
      'bg-yellow-500': ownedCard.stars === 5,
    }"
  >
    <h1>{{ ownedCard.name }}</h1>
    <p>Type: {{ ownedCard.card_type }}</p>
    <p>Game: {{ ownedCard.game }}</p>
  </div>
</template>

<script setup lang="ts">
import type { card } from '../../types'
type Props = {
  ownedCard: card
}
defineProps<Props>()
</script>

<style scoped></style>
