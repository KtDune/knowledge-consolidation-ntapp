// @ts-ignore
import { MultiplicationSignIcon, NoteIcon } from 'hugeicons-react'
import useOpenEditNote from './noteBlockHk'
/*

Noteblock requires one prop: to show the title of the note. Depend on the situation it may also
need an id to get note data from the server

*/

interface noteBlockProp {
    title: string
}

const NoteBlock: React.FC<noteBlockProp> = ({title}) => {

    const [open, openModel, closeModel] = useOpenEditNote()

    return (

        <>
            <div onClick={openModel}
            className="min-w-40 min-h-40 max-w-40 max-h-40 p-6 bg-white border-2 border-black rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer flex flex-col items-center">
                <NoteIcon size={50} color='#000000' />
                <p className="font-normal text-black mt-4">
                    {title}
                </p>
            </div>
            {
                open && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto p-6 relative">

                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-gray-900"> {title} </h3>
                        <button onClick={closeModel} className="text-gray-600 hover:text-gray-800">
                          <MultiplicationSignIcon size={20} color="#000000" />
                        </button>
                      </div>
          
                      <div className="text-gray-700">
                        <p>This is the best day of ma life</p>
                      </div>
                    </div>
                </div>
                )
            }
        </>


    )
}

export default NoteBlock

