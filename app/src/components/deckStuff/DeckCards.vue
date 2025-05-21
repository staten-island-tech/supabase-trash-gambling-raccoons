<template>
  <div class="deck">
    <button type="submit" @click="isClicked = !isClicked">{{ deckItems.name }}</button>
    <h1 v-if="isClicked">Your Cards</h1>
    <CardsInDeck
      v-if="isClicked"
      v-for="card in deckItems.cards"
      :cardItem="card"
      :deckName="deckItems"
    />

    <OwnedCardsButtons
      v-if="isClicked"
      v-for="card in deckItems.cardsNotIn"
      :cardItem="card"
      :deckItem="deckItems"
    />

    <h1 v-else>Click {{ deckItems.name }} to view cards</h1>
  </div>
</template>

<script setup lang="ts">
import type { deck } from '@/types'
import CardsInDeck from './CardsInDeck.vue'
import OwnedCardsButtons from './OwnedCardsButtons.vue'
import { ref } from 'vue'
const isClicked = ref(false)

type Props = {
  deckItems: deck
}
defineProps<Props>()
</script>

<style scoped></style>
