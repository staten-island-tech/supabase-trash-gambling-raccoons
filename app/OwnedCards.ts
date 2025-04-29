import { type card } from './src/types.ts'
import {ref} from 'vue'
import {cards} from './src/Cards.ts'
export const ownedCards = ref<card[]>([])

//40 cards + 10 DON cards
//only four duplicates allowed!
//30 3 stars, 9 4 stars, 1 five star?
const amountThreeStar: number = 30;
const amountfourStars: number = 9
//randomizing 3 stars below
const threeStars = ownedCards.value.filter((star) => star.stars = 3)

for (let i: number = 0; i < amountThreeStar; i++){
    let currentCard: card = threeStars[Math.floor(Math.random() * cards.length)]
    if (!ownedCards.value.includes(currentCard)){
        
    }
}

//randomize 3 and 4 stars in the owned cards
//One five star for everyone! Traveler!

