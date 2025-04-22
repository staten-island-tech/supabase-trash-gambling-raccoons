<template>
  <div>
    <PulledGachaCards v-for="card in pulledCards" :ownedCards="card" />
    <button type="submit" @click="pullTen">Pull 10X!</button>
    <button type="submit" @click="pullOne">Pull 1X!</button>
  </div>
</template>

<script setup lang="ts">
//supposed to pull stuff from supabase
import { ref } from 'vue'
import { cards } from '../Cards.ts'
import type { card } from '../Cards.ts'
import PulledGachaCards from '@/components/PulledGachaCards.vue'
let pityCount = 0
const pulledCards = ref<card[]>([]) //array for cards that were pulled
let fiveStarCard: card[] = cards.filter((star) => star.stars === 5)

function pullTen() {
  for (let i = 0; i < 10; i++) {
    if (pityCount >= 90) {
      //pull five star card!!!
      pulledCards.value.push(fiveStarCard[Math.floor(Math.random() * cards.length)])
      pityCount = 0
    } else {
      const cardPulled = cards[Math.floor(Math.random() * cards.length)]
      pulledCards.value.push(cardPulled)
      if (fiveStarCard.includes(cardPulled)) {
        pityCount = 0
      } else {
        pityCount++
      }
    }
    console.log(pulledCards) //basically pull 10 random cards and show in console.log
  }
}
function pullOne() {
  if (pityCount >= 90) {
    //pull five star card!!!
    pulledCards.value.push(fiveStarCard[Math.floor(Math.random() * cards.length)])
    pityCount = 0
  } else {
    const cardPulled = cards[Math.floor(Math.random() * cards.length)]
    pulledCards.value.push(cardPulled)
    if (fiveStarCard.includes(cardPulled)) {
      pityCount = 0
    } else {
      pityCount++
    }
  }
  console.log(pulledCards) //pull one card and show it
}
</script>

<style scoped></style>
