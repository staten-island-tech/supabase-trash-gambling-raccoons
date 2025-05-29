<template>
  <div class="w-[20%] text-center">
    <h1>{{ ownedCards.name }}</h1>
  </div>
</template>

<script setup lang="ts">
import type { card } from '../../types'
type Props = {
  ownedCards: card
}
defineProps<Props>()
</script>

<style scoped></style>
