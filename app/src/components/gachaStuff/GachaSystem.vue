<template>
  <div>
    <h1 class="bg-white w-fit text-2xl rounded text-left border-1">Pity Count : {{ pityCount }}</h1>

    <div class="flex justify-evenly items-center flex-wrap w-[100%] m-auto">
      <PulledGachaCards v-for="card in pulledCards" :ownedCard="card" />
    </div>
    <div class="flex flex-wrap fixed bottom-[5%] w-[100%]">
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
import { ownedCards } from '@/OwnedCards.ts'
import PulledGachaCards from '@/components/gachaStuff/PulledGachaCards.vue'
import { useAuthStore } from '@/stores/auth'
import { decks } from '@/decks.ts'
import { addcardstouser } from '@/userdocument'
import { finduserusingemail } from '@/userdocument'

let pityCount: number = 0 //the pity for five star
const pulledCards = ref<card[]>([]) //array for cards that were pulled

const authStore = useAuthStore()
const userid = finduserusingemail(authStore.account[0])

const fiveStarCard: card[] = cards.filter((star) => star.stars === 5)
const fourStarCard: card[] = cards.filter((star) => star.stars === 4)
const threeStarCard: card[] = cards.filter((star) => star.stars === 3)



async function pullAmount(amount: number) {
  pulledCards.value = []
  const userId = await finduserusingemail(authStore.account[0]);
  
  if (!userId) {
    console.error("User ID not found. Aborting card pull.");
    return;}
  


  for (let i = 0; i < amount; i++) {
    //for amount pulled
    if (pityCount >= 90) {
      //issue with five star pulling
      //pull five star card!!!
      let guarateedCard: card = fiveStarCard[Math.floor(Math.random() * cards.length)]
      while (!guarateedCard) {
        guarateedCard = fiveStarCard[Math.floor(Math.random() * cards.length)]
      }
      pulledCards.value.push(guarateedCard)
      ownedCards.value.push(guarateedCard)
      pityCount = 0 

      addcardstouser(userId, guarateedCard)
      
    } else {
      const RandoStar: number = Math.floor(Math.random() * 101)
      let cardPulled: card;

      if (RandoStar > 99) {
        // Five-star card
        cardPulled = fiveStarCard[Math.floor(Math.random() * fiveStarCard.length)];
      } else if (RandoStar > 80) {
        // Four-star card
        cardPulled = fourStarCard[Math.floor(Math.random() * fourStarCard.length)];
      } else {
        // Three-star card
        cardPulled = threeStarCard[Math.floor(Math.random() * threeStarCard.length)];
      }

      while (!cardPulled) {
        cardPulled = (RandoStar > 99)
          ? fiveStarCard[Math.floor(Math.random() * fiveStarCard.length)]
          : (RandoStar > 80)
            ? fourStarCard[Math.floor(Math.random() * fourStarCard.length)]
            : threeStarCard[Math.floor(Math.random() * threeStarCard.length)];
      }

      pulledCards.value.push(cardPulled);
      ownedCards.value.push(cardPulled);
      pityCount++;

      addcardstouser(userId, cardPulled); // Ensure the card is added to the database
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
