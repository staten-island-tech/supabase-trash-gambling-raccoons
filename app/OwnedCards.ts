import { type card } from './src/types.ts'
import {ref} from 'vue'
import {cards} from './src/Cards.ts'
export const ownedCards = ref<card[]>([])

//40 cards + 10 DON cards
//only four duplicates allowed!
//30 3 stars, 9 4 stars, 1 five star?
const amountThreeStar: number = 30;
const amountfourStars: number = 9
let isChecked = ref(false)


//randomizing 3 stars below
const threeStars = ownedCards.value.filter((star) => star.stars = 3)

for (let i: number = 0; i < amountThreeStar; i++){
    isChecked = ref(false)
    let currentCard: card = threeStars[Math.floor(Math.random() * cards.length)]

    //count checks how many ownedCards has the randomized card in it. Allows to see only 4 or less duplicates.
    while (!isChecked){
        const count: number = ownedCards.value.filter(item => item === currentCard).length
        if (count < 4){
            ownedCards.value.push(currentCard)
            isChecked = ref(true)
        }else{
            currentCard = threeStars[Math.floor(Math.random() * cards.length)]
        }
    }
}

//randomizing four stars
const fourStars = ownedCards.value.filter((star) => star.stars = 4)
for (let i: number = 0; i < amountfourStars; i++){
    isChecked = ref(false)
    let currentCard: card = fourStars[Math.floor(Math.random() * cards.length)]

    //count checks how many ownedCards has the randomized card in it. Allows to see only 4 or less duplicates.
    while (!isChecked){
        const count: number = ownedCards.value.filter(item => item === currentCard).length
        if (count < 4){
            ownedCards.value.push(currentCard)
            isChecked = ref(true)
        }else{
            currentCard = fourStars[Math.floor(Math.random() * cards.length)]
        }
    }
}

//randomize 3 and 4 stars in the owned cards
//One five star for everyone! Traveler!