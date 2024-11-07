import { useState, useRef } from "react"

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

    const [open, openModel, closeModel] = useOpenEditNote()
    const [currentTitle, setCurrentTitle] = useState<string>(initialTitle);
    const [content, setContent] = useState<string>(initialContent);
    const [temptitle, setTempTitle] = useState<string>("")
    const [tempContent, setTempContent] = useState<string>("")


    const titleRef = useRef<HTMLInputElement | null>(null)
    const contentRef = useRef<HTMLTextAreaElement | null>(null)

    const saveData = () => {

      setCurrentTitle(titleRef.current ? titleRef.current.value : '')
      setContent(contentRef.current ? contentRef.current.value : '')

      closeModel()

    }
  
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTempTitle(e.target.value);
    };
  
    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTempContent(e.target.value);
    }
  
    return {

      open,
      openModel,
      closeModel,
      saveData,
      currentTitle,
      titleRef,
      contentRef,
      content,
      handleTitleChange,
      handleContentChange,

    };
  };
  