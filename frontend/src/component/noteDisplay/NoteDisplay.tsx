import AddBlock from "../addBlock/AddBlock"
import NoteBlock from "../noteBlock/NoteBlock"


const NoteDisplay: React.FC = () => {

    return (
        <div className="flex flex-row items-center justify-start">
          <NoteBlock title="I" />
          <AddBlock />
        </div>
      );
      
}

export default NoteDisplay
