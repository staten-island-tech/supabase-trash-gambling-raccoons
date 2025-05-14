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
import { ownedCards } from '../../../OwnedCardsCards.ts'
import PulledGachaCards from '@/components/gachaStuff/PulledGachaCards.vue'
let pityCount: number = 0 //the pity for five star
const pulledCards = ref<card[]>([]) //array for cards that were pulled

const fiveStarCard: card[] = cards.filter((star) => star.stars === 5)
const fourStarCard: card[] = cards.filter((star) => star.stars === 4)
const threeStarCard: card[] = cards.filter((star) => star.stars === 3)

function pullAmount(amount: number) {
  for (let i = 0; i < amount; i++) {
    //for amount pulled
    if (pityCount >= 90) {
      //issue with five star pulling
      //pull five star card!!!
      let guarateedCard: card = fiveStarCard[Math.floor(Math.random() * cards.length)]
      while (guarateedCard === undefined) {
        guarateedCard = fiveStarCard[Math.floor(Math.random() * cards.length)]
      }
      pulledCards.value.push(guarateedCard)
      ownedCards.value.push(guarateedCard)
      pityCount = 0
    } else {
      const RandoStar: number = Math.floor(Math.random() * 101)
      if (RandoStar > 99) {
        //five percent chance for a five star card
        //pull five star card below
        let cardPulled: card = fiveStarCard[Math.floor(Math.random() * cards.length)]
        while (cardPulled === undefined) {
          //makes sure the cardPulled is defined and not empty
          cardPulled = fiveStarCard[Math.floor(Math.random() * cards.length)]
        }
        pulledCards.value.push(cardPulled)
        ownedCards.value.push(cardPulled)
        pityCount = 0
      } else if (RandoStar <= 99 && RandoStar > 60) {
        let cardPulled: card = fourStarCard[Math.floor(Math.random() * cards.length)]
        while (cardPulled === undefined) {
          cardPulled = fourStarCard[Math.floor(Math.random() * cards.length)]
        }
        pulledCards.value.push(cardPulled)
        ownedCards.value.push(cardPulled)
        pityCount++
      } else {
        let cardPulled: card = threeStarCard[Math.floor(Math.random() * cards.length)]
        while (cardPulled === undefined) {
          cardPulled = threeStarCard[Math.floor(Math.random() * cards.length)]
        }
        pulledCards.value.push(cardPulled)
        ownedCards.value.push(cardPulled)
        pityCount++
      }
    }
  }
  ownedCards.value.sort()
}
</script>

<style scoped></style>
