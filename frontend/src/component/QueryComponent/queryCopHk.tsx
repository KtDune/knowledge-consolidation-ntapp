import { useState, useEffect } from 'react';

interface HookProp {
  title: string;
  content: string;
}

interface sessionStructure {
  searchQuery: string,
  noteList: HookProp[]
}

export const useTextApi = (): [query: string, result: string | undefined] => {

  const [query, setQuery] = useState<string>('')
  const [itemList, setItemList] = useState<HookProp[]>([])
  const [initialLoad, setInitialLoad] = useState<boolean>(false)
  const [result, setResult] = useState<string>()

  useEffect(() => {

    const sessionValue: string | null = sessionStorage.getItem("sessionValue")
    if (sessionValue) {

      const parsedValue: sessionStructure = JSON.parse(sessionValue)
      setQuery(parsedValue.searchQuery)
      setItemList(parsedValue.noteList)

      setInitialLoad(true)

    }

  }, [])

  useEffect(() => {

    fetch('http://localhost:3000/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({  query: query, itemList: itemList })
    })
      .then(response => response.json())
      .then(data => setResult(data.output))
      .catch(error => console.error("Error:", error));

  }, [initialLoad])


  return [query, result]

}