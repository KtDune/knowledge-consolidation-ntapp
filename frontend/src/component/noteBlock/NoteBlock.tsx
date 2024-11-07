import { useState } from 'react';
import { MultiplicationSignIcon, NoteIcon } from 'hugeicons-react';
import { useOpenEditNote, useNoteBlockState } from './noteBlockHk';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../Itemtype';

interface noteBlockProp {
  title: string;
  currentContent: string;
}

const NoteBlock: React.FC<noteBlockProp> = ({ title, currentContent }) => {
  const {
    open,
    openModel,
    closeModel,
    saveData,
    currentTitle,
    titleRef,
    contentRef,
    content,
    handleTitleChange,
    handleContentChange,
  } = useNoteBlockState(title, currentContent);

  // Local state for the modal title and content (so we can modify them before saving)
  const [modalTitle, setModalTitle] = useState<string>(currentTitle);
  const [modalContent, setModalContent] = useState<string>(content);

  // Handle the change in title and content in the modal (not the parent state)
  const handleTitleChangeInModal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModalTitle(e.target.value);  // Update local modal state for title
  };

  const handleContentChangeInModal = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setModalContent(e.target.value);  // Update local modal state for content
  };

  // Setup the useDrag hook
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.Note_Block,
    item: { title: currentTitle, content: content },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [currentTitle, content]);

  const handleSave = () => {
    // Save the title and content when the save button is clicked
    saveData(modalTitle, modalContent);  // Update the parent state with the modified title and content
    closeModel();  // Close the modal
  };

  return (
    <>
      <div
        ref={drag}
        onClick={openModel}
        className={`min-w-40 min-h-40 max-w-40 max-h-40 p-6 bg-white border-2 border-black rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer flex flex-col items-center ${isDragging ? 'opacity-50' : ''}`}
      >
        <NoteIcon size={50} color="#000000" />
        <p className="font-bold text-black mt-4">{currentTitle}</p>
      </div>

      {open && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <input
                type="text"
                ref={titleRef}
                value={modalTitle}  // Use local state here
                onChange={handleTitleChangeInModal}  // Handle title change in modal
                className="text-xl font-bold text-gray-900 border-b focus:outline-none w-full"
              />
              <button
                onClick={closeModel}
                className="text-gray-600 hover:text-gray-800"
              >
                <MultiplicationSignIcon size={20} color="#000000" />
              </button>
            </div>

            {/* Modal body */}
            <div className="text-gray-700 mb-4">
              <textarea
                value={modalContent}  // Use local state here
                onChange={handleContentChangeInModal}  // Handle content change in modal
                ref={contentRef}
                className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSave}  // Save the changes when clicked
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
