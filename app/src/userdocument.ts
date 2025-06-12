import { ref, set, push, query, orderByChild, equalTo, get, child } from "firebase/database"
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
    
export async function finduserusingemail(username:string){
  const usersRef = ref(database, 'users')

  const userQuery = query(usersRef, orderByChild('username'), equalTo(username))

  try {
    const snapshot = await get(userQuery)
    
    if(snapshot.exists()){
      console.log("found the user")

      const idanduser = <string[]>[]

      snapshot.forEach(childSnapshot => {
        idanduser.push(childSnapshot.key)
      })

      const firstchildkey = Object.keys(snapshot.val())[0]
      console.log(firstchildkey)
      return snapshot.val()[firstchildkey]
    } else {
      console.log('no user found')
      return null
    }
  } catch (error) {
    console.error('error', error)
    throw error
  }

} 

