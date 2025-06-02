<template>
  <div>
    <h1>Pity Count : {{ pityCount }}</h1>
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
import { ownedCards } from '../../OwnedCards'
import PulledGachaCards from '@/components/gachaStuff/PulledGachaCards.vue'
let pityCount: number = 0
const pulledCards = ref<card[]>([]) //array for cards that were pulled

let fiveStarCard: card[] = cards.filter((star) => star.stars === 5)
let fourStarCard: card[] = cards.filter((star) => star.stars === 4)
let threeStarCard: card[] = cards.filter((star) => star.stars === 3)

function pullAmount(amount: number) {
  for (let i = 0; i < amount; i++) {
    if (pityCount >= 90) {
      //pull five star card!!!
      let guarateedCard: card = fiveStarCard[Math.floor(Math.random() * cards.length)]
      pulledCards.value.push(guarateedCard)
      ownedCards.value.push(guarateedCard)
      pityCount = 0
    } else {
      const RandoStar: number = Math.floor(Math.random() * 101)
      if (RandoStar > 95) {
        let cardPulled = fiveStarCard[Math.floor(Math.random() * cards.length)]
        pulledCards.value.push(cardPulled)
        ownedCards.value.push(cardPulled)
        if (fiveStarCard.includes(cardPulled)) {
          pityCount = 0
        } else {
          pityCount++
        }
      } else if (RandoStar <= 95 && RandoStar > 60) {
        let cardPulled = fourStarCard[Math.floor(Math.random() * cards.length)]
        pulledCards.value.push(cardPulled)
        ownedCards.value.push(cardPulled)
        if (fiveStarCard.includes(cardPulled)) {
          pityCount = 0
        } else {
          pityCount++
        }
      } else if (RandoStar <= 60) {
        let cardPulled = threeStarCard[Math.floor(Math.random() * cards.length)]
        pulledCards.value.push(cardPulled)
        ownedCards.value.push(cardPulled)
        if (fiveStarCard.includes(cardPulled)) {
          pityCount = 0
        } else {
          pityCount++
        }
      }
    }
    console.log(pulledCards) //basically pull 10 random cards and show in console.log
  }
}
</script>

<style scoped></style>
