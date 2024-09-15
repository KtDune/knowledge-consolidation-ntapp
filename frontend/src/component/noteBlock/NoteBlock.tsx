import { NoteIcon } from '@hugeicons/react'
/*

Noteblock requires one prop: to show the title of the note. Depend on the situation it may also
need an id to get note data from the server

*/

interface noteBlockProp {
    title: string
}

const NoteBlock: React.FC<noteBlockProp> = ({title}) => {
    return (

        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <NoteIcon 
            size={24} 
            color={"#000000"}
            variant={"stroke"}
            />
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {title}
            </p>
        </a>

    )
}

export default NoteBlock

