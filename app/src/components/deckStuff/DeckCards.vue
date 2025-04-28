<template>
  <div class="deck">
    <button type="submit" @click="showCards">{{ deckItems.name }}</button>
  </div>
</template>

<script setup lang="ts">
import type { deck } from '../ts/types'
type Props = {
  deckItems: deck
}
defineProps<Props>()

function showCards() {}
</script>

<style scoped></style>
