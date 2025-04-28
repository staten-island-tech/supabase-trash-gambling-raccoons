<template>
  <div>
    <h1>{{ deckItems.name }}</h1>
    <img :src="deckItems.card_image" alt="Image of your card" />
  </div>
</template>

<script setup lang="ts">
import { type card } from '../ts/types'
type Props = {
  deckItems: card
}
defineProps<Props>()
</script>

<style lang="scss" scoped></style>
