// @ts-ignore
import { NoteIcon } from 'hugeicons-react'
/*

Noteblock requires one prop: to show the title of the note. Depend on the situation it may also
need an id to get note data from the server

*/

interface noteBlockProp {
    title: string
}

const NoteBlock: React.FC<noteBlockProp> = ({title}) => {
    return (

<div className="min-w-40 min-h-40 max-w-40 max-h-40 p-6 bg-white border-2 border-black rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer flex flex-col items-center">
    <NoteIcon size={50} color='#000000' />
    <p className="font-normal text-black mt-4">
        {title}
    </p>
</div>


    )
}

export default NoteBlock

