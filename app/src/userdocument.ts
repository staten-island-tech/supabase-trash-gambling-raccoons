import { doc, collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"

const usersCollectionRef = collection(db, 'users');

export async function addUser() {
    const docRef = await addDoc(usersCollectionRef, {
        name: "Alice",
        age: 25,
    });
    console.log("Document added with ID:", docRef.id); // Outputs the unique ID Firebase generates
}


