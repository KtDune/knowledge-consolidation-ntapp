import useNoteDisplayHk from "./noteDisplayHk";

const NoteDisplay: React.FC = () => {

    const [renderRows, prevPage,nextPage] = useNoteDisplayHk()

    return (
        <div className="p-4">
          {/* Grid layout with 8 columns */}
          <div className="grid grid-cols-8 gap-x-4 gap-y-4">
            {renderRows()}
          </div>
    
          {/* Pagination controls */}
          <div className="flex justify-between mt-4">
            <button className="px-4 py-2 bg-gray-300 rounded" onClick={prevPage}>
              Previous
            </button>
            <button className="px-4 py-2 bg-gray-300 rounded" onClick={nextPage}>
              Next
            </button>
          </div>
        </div>
    )
      
}

export default NoteDisplay
