<template>
  <div class="deck">
    <button type="submit" @click="isClicked = !isClicked">{{ deckItems.name }}</button>
    <CardsInDeck v-show="isClicked" v-for="card in deckItems.cards" :deckItems="card" />
  </div>
</template>

<script setup lang="ts">
import type { deck } from '../ts/types'
import CardsInDeck from './CardsInDeck.vue'
import { ref } from 'vue'

const isClicked = ref(true)

type Props = {
  deckItems: deck
}
defineProps<Props>()
</script>

<style scoped></style>
