<template>
  <div>
    <input v-model="nameOfDeck" />
    <button type="submit" @click="createDeck">Create Deck</button>
    <DeckCards v-for="deck in decks" :deckItems="deck" />
  </div>
</template>

<script setup lang="ts">
import type { deck } from '../../types'
import { ref, reactive } from 'vue'
import DeckCards from './DeckCards.vue'
//40 cards MAX per deck
const nameOfDeck = ref('')
let decks = reactive<deck[]>([])
function createDeck() {
  //figure out how to push names and empty card array for later inputs into deck
  if (decks.every((stuff) => !stuff.name.includes(nameOfDeck.value))) {
    //send warning message that it already exists
    decks.push({ name: nameOfDeck.value, cards: [] })
  } else {
    console.log('You already have this deck')
  }
}
</script>

<style lang="scss" scoped></style>
