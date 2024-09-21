import { useState } from 'react'

export const useSearch = () => {
  const [query, setQuery] = useState<string>('')
  const [showQueryComponent, handleShowQueryComponent] = useState(false)

  const setShowQueryComponent = () => {
    handleShowQueryComponent((prev) => !prev)
  }


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const resetSearch = () => {
    setQuery('')
  }

  return {
    query,
    handleInputChange,
    resetSearch,
    showQueryComponent,
    setShowQueryComponent
  };
};
