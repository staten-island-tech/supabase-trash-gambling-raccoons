<template>
  <div>
    <h1>Pity Count : {{ pityCount }}</h1>

    <div class="flex justify-evenly items-center flex-wrap w-[100%] m-auto">
      <PulledGachaCards v-for="card in pulledCards" :ownedCard="card" />
    </div>
    <div class="flex flex-wrap">
      <button
        class="rounded bg-sky-600 text-center w-[100%] text-neutral-50 m-2"
        type="submit"
        @click="pullAmount(10)"
      >
        Pull 10X!
      </button>
      <button
        class="rounded bg-sky-600 text-center w-[100%] text-neutral-50 m-2"
        type="submit"
        @click="pullAmount(1)"
      >
        Pull 1X!
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
//supposed to pull stuff from supabase
import { ref } from 'vue'
import { type card } from '../../types'
import { cards } from '../../Cards'
import { ownedCards } from '../../../OwnedCardsCards.ts'
import PulledGachaCards from '@/components/gachaStuff/PulledGachaCards.vue'
import { decks } from '@/decks.ts'
let pityCount: number = 0 //the pity for five star
const pulledCards = ref<card[]>([]) //array for cards that were pulled

const fiveStarCard: card[] = cards.filter((star) => star.stars === 5)
const fourStarCard: card[] = cards.filter((star) => star.stars === 4)
const threeStarCard: card[] = cards.filter((star) => star.stars === 3)

function pullAmount(amount: number) {
  pulledCards.value = []
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
      decks.forEach((deck) => deck.cardsNotIn.push(guarateedCard))
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
        decks.forEach((deck) => deck.cardsNotIn.push(cardPulled))
        pityCount = 0
      } else if (RandoStar <= 99 && RandoStar > 80) {
        let cardPulled: card = fourStarCard[Math.floor(Math.random() * cards.length)]
        while (cardPulled === undefined) {
          cardPulled = fourStarCard[Math.floor(Math.random() * cards.length)]
        }
        pulledCards.value.push(cardPulled)
        ownedCards.value.push(cardPulled)
        decks.forEach((deck) => deck.cardsNotIn.push(cardPulled))
        pityCount++
      } else {
        let cardPulled: card = threeStarCard[Math.floor(Math.random() * cards.length)]
        while (cardPulled === undefined) {
          cardPulled = threeStarCard[Math.floor(Math.random() * cards.length)]
        }
        pulledCards.value.push(cardPulled)
        ownedCards.value.push(cardPulled)
        decks.forEach((deck) => deck.cardsNotIn.push(cardPulled))
        pityCount++
      }
    }
  }
  sortCards()
}

function sortCards() {
  ownedCards.value.sort((a, b) => {
    //sort cards by name
    const nameA: string = a.name.toUpperCase() // ignore upper and lowercase
    const nameB: string = b.name.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
    //need to fix sorting so it sorts by name specifically
  })
  decks.forEach((deck) =>
    deck.cardsNotIn.sort((a, b) => {
      //sort cards by name
      const nameA: string = a.name.toUpperCase() // ignore upper and lowercase
      const nameB: string = b.name.toUpperCase() // ignore upper and lowercase
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }

      // names must be equal
      return 0
      //need to fix sorting so it sorts by name specifically
    }),
  )
}
</script>

<style scoped></style>
