import { doc, updateDoc} from "firebase/firestore"
import { ref, set } from "firebase/database"
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

