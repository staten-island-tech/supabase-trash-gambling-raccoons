import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase"

const adddecks = async (uid: string, searchitem) => {
    try {
        const userDocRef = doc(db, "users", uid);
        /* reference user doc */

         await changedoc(userDocRef, {
            profile: {
                email: "user@example.com",
                name: "User Name",
            },
            inventory: {
                decks: []
            }
        }) 
    }
}

/* 
users/
    decks: [
    {name: name,
     cards: card[]},
    {}
    ]
    


    battlehistory:[
    {battleID: "Battle 1",
    battledate: "05-05-2025"
    },
    
    ]



*/