<template>
  <div>
    <button type="submit" @click="pullAmount(10)">Pull 10X!</button>
    <button type="submit" @click="pullAmount(1)">Pull 1X!</button>
    <PulledGachaCards v-for="card in pulledCards" :ownedCards="card" />
  </div>
</template>

<script setup lang="ts">
//supposed to pull stuff from supabase
import { ref } from 'vue'
import { type card } from '../../types'
import { cards } from '../../Cards'
import { ownedCards } from '../../../OwnedCards.ts'
import PulledGachaCards from '@/components/gachaStuff/PulledGachaCards.vue'
let pityCount: number = 0
const pulledCards = ref<card[]>([]) //array for cards that were pulled
let fiveStarCard: card[] = cards.filter((star) => star.stars === 5)

function pullAmount(amount: number) {
  for (let i = 0; i < amount; i++) {
    if (pityCount >= 90) {
      //pull five star card!!!
      let guarateedCard: card = fiveStarCard[Math.floor(Math.random() * cards.length)]
      pulledCards.value.push(guarateedCard)
      ownedCards.value.push(guarateedCard)
      pityCount = 0
    } else {
      const cardPulled = cards[Math.floor(Math.random() * cards.length)]
      pulledCards.value.push(cardPulled)
      ownedCards.value.push(cardPulled)
      if (fiveStarCard.includes(cardPulled)) {
        pityCount = 0
      } else {
        pityCount++
      }
    }
    console.log(pulledCards) //basically pull 10 random cards and show in console.log
  }
}
</script>

<style scoped></style>
