<template>
  <div>
    <p>{{ cardItem.name }}</p>
    <button type="submit" @click="addCard(cardItem, deckItem.name)">Add Card</button>
  </div>
</template>

<script setup lang="ts">
import { type deck, type card } from '@/types'
import { decks } from '@/decks'
type Props = {
  cardItem: card //cards for the array obvi
  deckItem: deck //needed to save name for each card. It works :>
}
function addCard(card: card, deckName: string) {
  //needs limits now :<
  //Adds cards to correct array, but requires max amount of cards + no more than four duplicates.
  //might want to remove cards from ownedCard array or create a new one so you cannot add additional cards that goes past the quantity you alr have.
  //num to find the array num of the name for deckItem.name :>
  const num: number = decks.findIndex((name) => name.name === deckName)
  const countAmount: number = decks[num].cards.filter((cardA) => (cardA = card)).length
  if (countAmount < 4 && card.stars !== 5) {
    //max amount of duplicate cards, if under max add card
    decks[num].cards.push(card)
  } else if (card.stars === 5) {
  }
  //push card to found array :>
}
defineProps<Props>()
</script>

<style scoped></style>
