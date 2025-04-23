<template>
  <div>
    <input v-model="nameOfDeck" />
    <button type="submit" @click="createDeck">Create Deck</button>
  </div>
</template>

<script setup lang="ts">
import type { deck } from '../ts/types'
import { ref } from 'vue'
//40 cards MAX per deck
let nameOfDeck: string = ''
let decks = ref<deck[]>([])
function createDeck() {
  //figure out how to push names and empty card array for later inputs into deck
  decks.value.push({ name: nameOfDeck, cards: '' })
}
</script>

<style lang="scss" scoped></style>
