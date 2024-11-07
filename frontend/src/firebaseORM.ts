import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase"
import { v4 as uuidv4 } from 'uuid';

export const createNoteBlock: (title: string, content: string) => Promise<void> = async (title, content) => {
    try {
        const collectionRef = collection(db, "NoteBlock")

        await setDoc(doc(collectionRef, uuidv4()), {
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
    const docs: {id: string, title: string, currentContent: string}[] = docSnap.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        currentContent: doc.data().content
    }))

    return docs

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

