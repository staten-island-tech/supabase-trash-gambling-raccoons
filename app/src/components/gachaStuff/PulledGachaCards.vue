<template>
  <div
    :class="{
      'w-[20%] text-center': true,
      'bg-blue-500': ownedCard.stars === 3,
      'bg-purple-500': ownedCard.stars === 4,
    }"
  >
    <h1>{{ ownedCard.name }}</h1>
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
