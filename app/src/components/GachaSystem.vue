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
let pulledCards = ref<card[]>([]) //array for cards that were pulled

function pullTen() {
  for (let i = 0; i < 10; i++) {
    if (pityCount >= 90) {
      //pull five star card!!!
      pityCount = 0
    } else {
      pulledCards.value.push(cards[Math.floor(Math.random() * cards.length)])
    }
    pityCount++
  }
  console.log(pulledCards) //basically pull 10 random cards and show in console.log
}
function pullOne() {
  pityCount++
  if (pityCount >= 90) {
    //pull five star card!!!
    pityCount = 0
  } else {
    pulledCards.value.push(cards[Math.floor(Math.random() * cards.length)])
  }
  console.log(pulledCards) //pull one card and show it
}
</script>

<style scoped></style>
