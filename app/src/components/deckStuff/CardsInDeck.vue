<template>
  <div class="w-[18%] text-center border rounded m-[1%] bg-blue-400">
    <p class="text-xl bg-white">{{ cardItem.name }}</p>
    <p>Stars: {{ cardItem.stars }}</p>
    <p>Type: {{ cardItem.card_type }}</p>
    <p>Power: {{ cardItem.power }}</p>
    <img :src="cardItem.card_image" alt="Image of your card" />
    <button type="submit" class="bg-white rounded" @click="removeCard(cardItem, deckName.name)">
      Remove Card
    </button>
  </div>
</template>

<script setup lang="ts">
import type { card, deck } from '@/types'
import { decks } from '@/decks'
type Props = {
  cardItem: card
  deckName: deck
}
defineProps<Props>()

function removeCard(cardItem: card, deckName: string) {
  const num: number = decks.findIndex((name) => name.name === deckName) //finds the deck to remove from
  const cardIndex: number = decks[num].cards.findIndex((card) => (card = cardItem))
  decks[num].cards.splice(cardIndex, 1) //removes card from deck
}
</script>

<style lang="scss" scoped></style>
