<template>
  <div>
    <p>{{ cardItem.name }}</p>
    <button type="submit" @click="addCard(cardItem)">Add Card</button>
  </div>
</template>

<script setup lang="ts">
import { type deck, type card } from '@/types'
import { decks } from '@/decks'
type Props = {
  cardItem: card
}
function addCard(card: card) {
  //add the card found from the button
  //add to specific deck?
  //Need to find what deck is currently active and add card to that deck
  decks[0].cards.push(card)
}
defineProps<Props>()
</script>

<style scoped></style>
