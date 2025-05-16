import { doc, updateDoc} from "firebase/firestore"
import { ref, set } from "firebase/database"
import { database } from "./firebase"
import type { deck } from "./types"


export async function changeUserDocument(userId:string, username:string, password:string, decks:deck[]) {
    const userRef = ref(database, 'users/' + userId)

    const userData = {
        username: username,
        password: password,
        decks: decks, 
    }

    set(userRef, userData)
        .then(() => {
            console.log("setting doc")
        })
}

