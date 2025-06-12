import {ref, push, set} from 'firebase/database'
import { auth, database } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { type card } from '../src/types'


function pushcards(card: card){
    const currentUser = auth.currentUser

    if (currentUser){
        const userId = currentUser.uid
    }
    const userCardsRef = ref(database, 'users/${userId}/cards')

    const newCardRef = push(userCardsRef)

    set(newCardRef, card)
    .then(() => {
        const newCardKey = newCardRef.key
    })
    .catch((error) => {
        console.error('Error')
    }
    )


}