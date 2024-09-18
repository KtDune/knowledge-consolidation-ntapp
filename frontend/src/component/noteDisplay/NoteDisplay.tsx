import useNoteDisplayHk from "./noteDisplayHk";

const NoteDisplay: React.FC = () => {

    const [renderRows, prevPage,nextPage] = useNoteDisplayHk()

    return (
        <div className="p-4">
            <div className="flex justify-between">
                <button className="px-4 py-2 bg-gray-300 rounded" onClick={prevPage}>
                    Previous
                </button>
                <button className="px-4 py-2 bg-gray-300 rounded" onClick={nextPage}>
                    Next
                </button>
            </div>

            <div className="grid grid-cols-8 gap-x-4 gap-y-4 mt-4">
                {renderRows()}
            </div>
        </div>
    )
      
}

export default NoteDisplay
