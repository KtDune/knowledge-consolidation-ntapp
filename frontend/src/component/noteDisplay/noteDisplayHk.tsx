import { ReactNode, useId, useState } from "react";
import AddBlock from "../addBlock/AddBlock";
import NoteBlock from "../noteBlock/NoteBlock";
import { v4 as uuidv4 } from "uuid"

interface noteProp {
  title: string,
  currentContent: string
}

const useNoteDisplayHk = (): [() => ReactNode[], () => void, () => void] => {
  const [notes, setNotes] = useState<noteProp[]>([{title: "Untitled 1", currentContent: "Jintia shi shang fen de hao ri zi"}])
  const [currentPage, setCurrentPage] = useState<number>(0)

  const itemsPerRow = 8;
  const rowsPerPage = 3;
  const itemsPerPage = itemsPerRow * rowsPerPage

  const addBlock = () => {
    const newtitle = `Untitled ${notes.length + 1}`
    const newcontent = ''
    setNotes([...notes, {title: newtitle, currentContent: newcontent}])
  }

  const getPaginatedNotes = (): noteProp[] => {
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    return notes.slice(startIndex, endIndex)
  }

  const renderRows = (): ReactNode[] => {
    const paginatedNotes = getPaginatedNotes()
    const blocks: ReactNode[] = []

    // Add all notes as NoteBlock components
    paginatedNotes.map((note, _) => {
        blocks.push(<NoteBlock key={uuidv4()} title={note.title} currentContent={note.currentContent} />)
    })

    if (paginatedNotes.length < itemsPerPage) {
        blocks.push(<AddBlock key="add-block" onClick={addBlock} />)
    }

    
    return blocks;
  };

  const nextPage = () => {
    if ((currentPage + 1) * itemsPerPage <= notes.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return [renderRows, prevPage, nextPage];
};

export default useNoteDisplayHk;
