import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase"

const collectionRef = collection(db, "NoteBlock")

export const createNoteBlock: (title: string, content: string) => Promise<void> = async (title, content) => {
    try {
        await setDoc(doc(collectionRef, new Date(8.64e15).toString()), {
            title,
            content
        });
    } catch (e) {
        console.error("Block creation failed", e);
    }
}

export const readNoteBlock: (id: string) => Promise<{}> = async (id) => {
    const docRef = doc(db, "NoteBlock", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return docSnap.data()
    }

    return {"error": "document not found"}
}

// Retrieve all note blocks
export const readAllNoteBlock = async () => {
    
    const docSnap = await getDocs(collection(db, "NoteBlock"))

    return docSnap

}

// Update a note block by document ID
export const updateNoteBlock: (id: string, title: string, content: string) => Promise<void> = async (id, title, content) => {
    try {
        const docRef = doc(db, "NoteBlock", id);
        await updateDoc(docRef, { title, content });
    } catch (e) {
        console.error("Block update failed", e);
    }
}

// Delete a note block by document ID
export const deleteNoteBlock: (id: string) => Promise<void> = async (id) => {
    try {
        const docRef = doc(db, "NoteBlock", id);
        await deleteDoc(docRef);
    } catch (e) {
        console.error("Block deletion failed", e);
    }
}

