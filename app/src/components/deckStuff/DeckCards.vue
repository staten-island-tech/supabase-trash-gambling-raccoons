<template>
  <div class="deck">
    <button type="submit" @click="isClicked = !isClicked">{{ deckItems.name }}</button>
    <h1 v-if="isClicked">Your Cards</h1>
    <CardsInDeck v-if="isClicked" v-for="card in deckItems.cards" :deckItems="card" />
    <h1 v-else>Click {{ deckItems.name }} to view cards</h1>
  </div>
</template>

<script setup lang="ts">
<<<<<<< HEAD
import type { deck } from '../ts/types'
import CardsInDeck from './CardsInDeck.vue'
import { ref } from 'vue'

const isClicked = ref(false)

=======
import type { deck } from '../../types'
>>>>>>> Haobin
type Props = {
  deckItems: deck
}
defineProps<Props>()
</script>

<style scoped></style>
