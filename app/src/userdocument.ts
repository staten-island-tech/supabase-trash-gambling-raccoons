import { doc, Timestamp, setDoc, collection } from "firebase/firestore"
import { auth, db } from "../firebase"

async function additemstouser(item){
    const userId = auth.currentUser.uid;
    const itemId = crypto.randomUUID();
    const itemref = doc(collection(db, `user/${userId}/items`), itemId);

    const itemData = {
        name: item.name,
        type: item.type,
        createAt: Timestamp.now()
    }

    await setDoc(itemref, itemData)
}