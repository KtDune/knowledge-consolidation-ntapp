import { useState } from "react"

const useOpenEditNote = (): [boolean, () => void, () => void] => {

    const [open, setOpen] = useState<boolean>(false)

    const openModel = () => {
        setOpen(true)
    }

    const closeModel = () => {
        setOpen(false)
    }

    return [open, openModel, closeModel]

}

export default useOpenEditNote