import { ReactNode, useState } from "react";
import AddBlock from "../addBlock/AddBlock";
import NoteBlock from "../noteBlock/NoteBlock";

const useNoteDisplayHk = (): [() => ReactNode[], () => void, () => void] => {
  const [notes, setNotes] = useState<string[]>(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"])
  const [currentPage, setCurrentPage] = useState<number>(0);

  const itemsPerRow = 8;
  const rowsPerPage = 3;
  const itemsPerPage = itemsPerRow * rowsPerPage

  const addBlock = () => {
    const newNote = `Untitled ${notes.length + 1}`
    setNotes([...notes, newNote])
  }

  const getPaginatedNotes = (): string[] => {
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    return notes.slice(startIndex, endIndex)
  }

  const renderRows = (): ReactNode[] => {
    const paginatedNotes = getPaginatedNotes()
    const blocks: ReactNode[] = []

    // Add all notes as NoteBlock components
    paginatedNotes.forEach((note, index) => { // Find the index of 0
        blocks.push(<NoteBlock key={index} title={note} />)
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
