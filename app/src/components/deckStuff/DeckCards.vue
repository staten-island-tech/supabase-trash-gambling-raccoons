<template>
  <div class="deck">
    <button
      type="submit"
      class="bg-white rounded text-center w-fit text-xl"
      @click="isClicked = !isClicked"
    >
      Deck: {{ deckItems.name }}
    </button>
    <h1 v-if="isClicked" class="text-center bg-white border">Your Cards</h1>
    <div class="flex flex-wrap">
      <CardsInDeck
        v-if="isClicked"
        v-for="card in deckItems.cards"
        :cardItem="card"
        :deckName="deckItems"
      />
    </div>
    <h1 v-if="isClicked" class="text-center bg-white border">Cards to Add</h1>
    <div class="flex flex-wrap">
      <OwnedCardsButtons
        v-if="isClicked"
        v-for="card in uniqueCard"
        :cardItem="card"
        :deckItem="deckItems"
      />

      <h1 v-else>Click {{ deckItems.name }} to view cards</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { deck } from '@/types'
import CardsInDeck from './CardsInDeck.vue'
import { ownedCards } from '@/OwnedCards.ts'
import OwnedCardsButtons from './OwnedCardsButtons.vue'
import { ref } from 'vue'
const isClicked = ref(false)

const uniqueCard = new Set(ownedCards.value)

type Props = {
  deckItems: deck
}
defineProps<Props>()
</script>

<style scoped></style>
