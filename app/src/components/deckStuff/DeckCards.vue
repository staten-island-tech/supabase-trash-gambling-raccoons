<template>
  <div class="deck">
    <button type="submit" class="bg-white rounded" @click="isClicked = !isClicked">
      {{ deckItems.name }}
    </button>
    <h1 v-if="isClicked">Your Cards</h1>
    <div class="flex flex-wrap">
      <CardsInDeck
        v-if="isClicked"
        v-for="card in deckItems.cards"
        :cardItem="card"
        :deckName="deckItems"
      />
    </div>
    <div class="flex flex-wrap">
      <OwnedCardsButtons
        v-if="isClicked"
        v-for="card in ownedCards"
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
import { ownedCards } from '../../../OwnedCardsCards'
import OwnedCardsButtons from './OwnedCardsButtons.vue'
import { ref } from 'vue'
const isClicked = ref(false)

type Props = {
  deckItems: deck
}
defineProps<Props>()
</script>

<style scoped></style>
