// @ts-ignore
import { MultiplicationSignIcon, NoteIcon } from 'hugeicons-react';
import { useState } from 'react';
import useOpenEditNote from './noteBlockHk';

interface noteBlockProp {
  title: string;
}

const NoteBlock: React.FC<noteBlockProp> = ({ title }) => {
  const [open, openModel, closeModel] = useOpenEditNote()
  const [currentTitle, setCurrentTitle] = useState<string>(title)
  const [content, setContent] = useState<string>("This is the best day of ma life")

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSave = () => {
    closeModel();
  };

  return (
    <>
      <div
        onClick={openModel}
        className="min-w-40 min-h-40 max-w-40 max-h-40 p-6 bg-white border-2 border-black rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer flex flex-col items-center"
      >
        <NoteIcon size={50} color='#000000' />
        <p className="font-bold text-black mt-4">
          {currentTitle}
        </p>
      </div>
      
      {open && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto p-6 relative">

            <div className="flex justify-between items-center mb-4">

              <input
                type="text"
                value={currentTitle}
                onChange={handleTitleChange}
                className="text-xl font-bold text-gray-900 border-b focus:outline-none w-full"
              />
              <button onClick={closeModel} className="text-gray-600 hover:text-gray-800">
                <MultiplicationSignIcon size={20} color="#000000" />
              </button>
            </div>

            {/* Modal body */}
            <div className="text-gray-700 mb-4">
              <textarea
                value={content}
                onChange={handleContentChange}
                className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Modal footer */}
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteBlock;
