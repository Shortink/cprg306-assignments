import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId, updateItemList) {
    const dbList = [];

    const collectionReference = collection(db, "users", userId, "items");
    const snapshot = await getDocs(query(collectionReference));


    snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
    });
    
    updateItemList(dbList);
  }
  
  export async function addItem(userId, newItem) {
    try {
      const collectionReference = collection(db, "users", userId, "items");
      const addedItemPromise = await addDoc(collectionReference, newItem);
    } catch (error) {
      console.log(error);
    }
  }