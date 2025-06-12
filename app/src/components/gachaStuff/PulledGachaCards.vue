<template>
  <div
    :class="{
      'h-[40%] w-[18%] text-center rounded m-[1%]': true,
      'bg-blue-500': ownedCard.stars === 3,
      'bg-purple-500': ownedCard.stars === 4,
      'bg-yellow-500': ownedCard.stars === 5,
    }"
  >
    <h1>{{ ownedCard.name }}</h1>
    <p>Type: {{ ownedCard.card_type }}</p>
    <p>Game: {{ ownedCard.game }}</p>
    <div>
      <img :src="ownedCard.card_image" :alt="ownedCard.name + 's image'" />
    </div>
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
