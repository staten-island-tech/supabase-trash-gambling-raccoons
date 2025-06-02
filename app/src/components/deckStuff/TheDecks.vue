<template>
  <div>
    <input class="border-2" v-model="nameOfDeck" />
    <button type="submit" @click="createDeck">Create Deck</button>
    <DeckCards v-for="deck in decks" :deckItems="deck" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DeckCards from './DeckCards.vue'
import { decks } from '@/decks'
//40 cards MAX per deck
const nameOfDeck = ref('')
function createDeck() {
  //figure out how to push names and empty card array for later inputs into deck
  if (decks.every((stuff) => !stuff.name.includes(nameOfDeck.value))) {
    //send warning message that it already exists
    decks.push({ name: nameOfDeck.value, cards: [], cardsNotIn: [] })
  } else {
    console.log('You already have this deck')
  }
}
</script>

<style scoped></style>
