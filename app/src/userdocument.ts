import { doc, updateDoc, getDoc } from "firebase/firestore"
import { db } from "../firebase"

export const getdata = async(userId:string) => {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()){
        return userDoc.data();
    } else {
        console.log("No user found")
        return null
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