import { useState } from "react"

export const useOpenEditNote = (): [boolean, () => void, () => void] => {

    const [open, setOpen] = useState<boolean>(false)

    const openModel = () => {
        setOpen(true)
    }

    const closeModel = () => {
        setOpen(false)
    }

    return [open, openModel, closeModel]

}

export const useNoteBlockState = (initialTitle: string, initialContent: string) => {
    const [currentTitle, setCurrentTitle] = useState<string>(initialTitle);
    const [content, setContent] = useState<string>(initialContent);
  
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentTitle(e.target.value);
    };
  
    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
    }
  
    return {
      currentTitle,
      content,
      handleTitleChange,
      handleContentChange,
    };
  };
  