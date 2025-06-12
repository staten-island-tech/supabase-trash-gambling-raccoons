import { ref, set, push } from "firebase/database"
import { database } from "./firebase"
import type { deck, card } from "./types"

export async function adddatatouserdoc(userId:string, username:string, decks:deck[], cards:card[]) {
    const userRef = ref(database, 'users/' + userId)

    const userData = {
        username: username,
        decks: decks, 
        cards: cards
    }

    set(userRef, userData)
        .then(() => {
            console.log("setting doc")
        })
}

export function addcardstouser(userId:string, Cards:card){
     const userCardsRef = ref(database, `users/${userId}/cards`);
  
  push(userCardsRef, Cards)
    .then(() => {
      console.log("Card added successfully!");
    })
    .catch((error) => {
      console.error("Error adding card: ", error);
    });
}
    


