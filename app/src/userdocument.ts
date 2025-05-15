import { doc, updateDoc} from "firebase/firestore"
import { ref } from "firebase/database"
import { database } from "./firebase"


export async function changeUserDocument(userId, username, password, deck) {
    const userRef = ref(database, 'users/' + userId)

    const userData = {
        username: username,
        password: password,
        decks: deck, 
    }

    set(userRef, userData)
        .then(() => {
            console.log("sutff")
        })
        .catch((error) => {
            console.error("ohhh no")
        })


}

