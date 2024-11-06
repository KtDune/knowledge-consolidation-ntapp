import { useState, useEffect } from 'react';

interface HookProp {
  title: string;
  content: string;
}

interface sessionStructure {
  searchQuery: string,
  noteList: HookProp[]
}

export const useTextApi = (): [query: string, itemList: HookProp[]] => {

  const [query, setQuery] = useState<string>('')
  const [itemList, setItemList] = useState<HookProp[]>([])

  useEffect(() => {

    const sessionValue: string | null = sessionStorage.getItem("sessionValue")
    if (sessionValue) {

      const parsedValue: sessionStructure = JSON.parse(sessionValue)
      setQuery(parsedValue.searchQuery)
      setItemList(parsedValue.noteList)

    }

  }, [])

  return [query, itemList]

}