<template>
  <div class="flex">
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
  //might want to remove cards from ownedCard array or create a new one so you cannot add additional cards that goes past the quantity you alr have.
  //num to find the array num of the name for deckItem.name :>
  const num: number = decks.findIndex((name) => name.name === deckName) //finds the deck to add to
  const cardAmount: number = decks[num].cards.filter((cardA) => cardA === card).length //finds the current number of that same card
  const cardLimit: number = 40
  if (decks[num].cards.length < cardLimit) {
    //makes sure there's less than 40 cards before adding
    if (cardAmount < 4 && card.stars !== 5) {
      //max amount of duplicate cards, if under max add card
      decks[num].cards.push(card)
    } else if (card.stars === 5 && !decks[num].cards.some((card) => card.stars === 5)) {
      //if the card is a five star and the deck doesn't contain one, add card.
      decks[num].cards.push(card)
    }
    //push card to found array :>
  }
}
defineProps<Props>()
</script>

<style scoped></style>
