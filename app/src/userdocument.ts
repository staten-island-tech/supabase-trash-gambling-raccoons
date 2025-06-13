import { ref, set as Fireset, push, query, orderByChild, equalTo, get } from "firebase/database"
import { database } from "./firebase"
import type { deck, card } from "./types"
import { ref as Vueref } from "vue"

export function adddatatouserdoc(userId:string, username:string, decks:deck[], cards:card[]) {
    const userRef = ref(database, 'users/' + userId)

    const userData = {
        username: username,
        decks: decks, 
        cards: cards
    }

    Fireset(userRef, userData)
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
      return firstchildkey
    } else {
      console.log('no user found')
      return null
    }
  } catch (error) {
    console.error('error', error)
    throw error
  }

} 

export function adddatatogamedoc(date:string){
  const gameRef = ref(database, "GameLobby");
  const newGameRef = push(gameRef); // Generate a unique ID for the new game
  const gameId = newGameRef.key; // Retrieve the generated unique key

  if (!gameId) {
    console.error("Failed to generate a gameId.");
    return;
  }

  const gameData = {
    gameId: gameId,
    date: date,
    users: Vueref(0)
  }

  Fireset(newGameRef, gameData)
    .then(() => {
      console.log("Game lobby created successfully:", gameId);
    })
    .catch((error) => {
      console.error("Error creating game lobby:", error);
    });
}


