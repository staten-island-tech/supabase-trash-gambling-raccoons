<template>
  <div
    :class="{
      'w-[18%] text-center rounded-full m-[1%]': true,
      'bg-blue-500': card.stars === 3,
      'bg-purple-500': card.stars === 4,
      'bg-yellow-500': card.stars === 5,
    }"
  >
    <h1>{{ card.name }}</h1>
    <p>Type: {{ card.card_type }}</p>
    <p>Game: {{ card.game }}</p>
  </div>
</template>

<script setup lang="ts">
import type { card } from '@/types'

type Props = {
  card: card
}
defineProps<Props>()
</script>

<style scoped></style>
