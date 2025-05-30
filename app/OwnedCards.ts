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
const threeStars: card[] = ownedCards.value.filter((star) => star.stars = 3)
const fourStars: card[] = ownedCards.value.filter((star) => star.stars = 4)

function addCards(array: card[], threshold: number){
    for (let i: number = 0; i < threshold; i++){
        isChecked = ref(false)
        let currentCard: card = array[Math.floor(Math.random() * cards.length)]
    
        //count checks how many ownedCards has the randomized card in it. Allows to see only 4 or less duplicates.
        while (!isChecked){
            const count: number = ownedCards.value.filter(item => item === currentCard).length
            if (count < 4){
                ownedCards.value.push(currentCard)
                isChecked = ref(true)
            }else{
                currentCard = array[Math.floor(Math.random() * cards.length)]
            }
        }
    }
}
addCards(threeStars, amountThreeStar)
addCards(fourStars, amountfourStars)
//randomizing 3 stars below
//randomize 3 and 4 stars in the owned cards
//One five star for everyone! Traveler!

//Adding Traveler to card set

//get Traveler card
const Traveler: card[] = ownedCards.value.filter((card) => card.name = "Traveler")

//add Traveler to ownedCards
ownedCards.value.push(Traveler[0])