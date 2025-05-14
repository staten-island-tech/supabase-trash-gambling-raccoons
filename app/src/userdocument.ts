import { doc, updateDoc} from "firebase/firestore"


export async function updateUserDocument(db, userId, updatedData) {
    try {
        // Reference to the user's document in Firestore
        const userDocRef = doc(db, 'users', userId);

        // Update the document with the provided data
        await updateDoc(userDocRef, updatedData);

        console.log(`User document with ID: ${userId} successfully updated!`);
    } catch (error) {
        console.error("Error updating user document: ", error);
    }
}

