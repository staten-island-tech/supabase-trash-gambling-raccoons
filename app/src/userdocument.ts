import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase"

const UserArrays = async (uid: string) => {
    try {
        const userDocRef = doc(db, "users", uid);
        /* reference user doc */

        /* await changedoc(userDocRef, {
            profile: {
                email: ,
                name: ,
            },
            inventory: {
                decks: []
            }
        }) */
    }
}