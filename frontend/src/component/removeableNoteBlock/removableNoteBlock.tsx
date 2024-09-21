// @ts-ignore
import { MultiplicationSignIcon, NoteIcon } from 'hugeicons-react'

interface noteBlockProp {
  title: string
  onClick: () => void
}

const RemovableNoteBlock: React.FC<noteBlockProp> = ({ title, onClick }) => { 

  return (
    <div className="relative">

      <button
        onClick={onClick}
        className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 hover:cursor-pointer focus:outline-none"
      >
        <MultiplicationSignIcon size={16} color="#FFFFFF" /> 
      </button>

      <div
        className="min-w-40 min-h-40 max-w-40 max-h-40 p-6 bg-white border-2 border-black rounded-lg shadow hover:bg-gray-100 flex flex-col"
      >
        <NoteIcon size={50} color="#000000" />
        <p className="font-bold text-black mt-4">{title}</p>
      </div>
    </div>
  );
};

export default RemovableNoteBlock;
