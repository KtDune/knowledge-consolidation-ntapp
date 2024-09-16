import { ReactNode, useState } from "react";
import AddBlock from "../addBlock/AddBlock";
import NoteBlock from "../noteBlock/NoteBlock";

const useNoteDisplayHk = (): [() => ReactNode[], () => void, () => void] => {
  const [notes, setNotes] = useState<string[]>(["Note 1", "Note 2"]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const itemsPerRow = 8;
  const rowsPerPage = 3;
  const itemsPerPage = itemsPerRow * rowsPerPage;

  const addBlock = () => {
    const newNote = `Note ${notes.length + 1}`
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
