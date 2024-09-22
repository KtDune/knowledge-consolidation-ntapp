import { ReactNode, useState } from "react"
import RemovableNoteBlock from "../../removeableNoteBlock/removableNoteBlock"

export interface hookProp {
  title: string;
  content: string;
}

interface UseDHDBOXHkReturn {
  list: hookProp[];
  renderBlock: () => ReactNode;
  addToList: (item: hookProp) => void;
  removeFromList: (item: hookProp) => void;
  emptyList: () => void;
}

export const useDHDBOXHk = (): UseDHDBOXHkReturn => {

  const [list, setList] = useState<hookProp[]>([])

  // Helper function to check if there's a duplicate
  const isTheSame = (item: hookProp, listToCheck: hookProp[]) => {
    return listToCheck.some(
      (value) => item.title === value.title && item.content === value.content
    );
  };

  const addToList = (item: hookProp) => {
    setList((prevList) => {
      // Check against the current list (prevList) to avoid duplicates
      if (prevList.length < 3 && !isTheSame(item, prevList)) {
        return [...prevList, item];
      }
      return prevList
    })
  }

  const removeFromList = (item: hookProp) => {
    const newList: hookProp[] = list.filter((i) => i !== item);
    setList(newList);
  };

  const emptyList = () => {
    setList([]);
  };

  const renderBlock = (): ReactNode => {
    return (
      <>
        {list.map((item, index) => (
          <RemovableNoteBlock
            key={index}
            title={item.title}
            onClick={() => {
              removeFromList(list[index]);
            }}
          />
        ))}
      </>
    );
  };

  return { list, renderBlock, addToList, removeFromList, emptyList };
};
