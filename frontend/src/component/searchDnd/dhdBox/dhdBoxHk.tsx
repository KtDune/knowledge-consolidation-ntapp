import { ReactNode, useState } from "react"
import NoteBlock from "../../noteBlock/NoteBlock";

export interface hookProp {
  title: string;
  content: string;
}

interface UseDHDBOXHkReturn {
  list: hookProp[];
  renderBlock: () => ReactNode
  addToList: (item: hookProp) => void
  removeFromList: (item: hookProp) => void
  emptyList: () => void;
}

export const useDHDBOXHk = (): UseDHDBOXHkReturn => {
  const [list, setList] = useState<hookProp[]>([])

  const addToList = (item: hookProp) => {
    console.log(item)
    if (list.length < 3) {
      setList((prevList) => [...prevList, item])
    }
  }

  const removeFromList = (item: hookProp) => {
    const newList: hookProp[] = list.filter(i => i !== item)
    setList(newList)
  }

  const emptyList = () => {
    setList([])
  }

  const renderBlock = (): ReactNode => {
    return (
      <>
        {list.map((item, index) => (
          <NoteBlock key={index} title={item.title} currentContent={item.content} />
        ))}
      </>
    )
  }

  return { list, renderBlock, addToList, removeFromList, emptyList }
}
