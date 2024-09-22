import { useDrop } from "react-dnd";
import { ItemTypes } from "../../Itemtype"
import { useDHDBOXHk } from "./dhdBoxHk"
import SearchBox from "../searchBox/searchBox";

const DhdBox: React.FC = () => {

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.Note_Block, 
    drop: (item: {title: string, content: string}) => handleDrop(item), 
    collect: (monitor) => ({
      isOver: !!monitor.isOver(), 
      canDrop: !!monitor.canDrop(), 
    }),
  }))

  const handleDrop = (item: any) => {
    addToList(item)
  }

  const {list, addToList, renderBlock} = useDHDBOXHk()

  return (
    <>
      <div
        ref={drop} // Attach the drop ref to make this component a drop target.
        className={`border border-dashed border-black min-h-48 space-x-4 rounded flex flex-row justify-center items-center m-4 ${isOver ? "bg-green-600" : "bg-white"}`}
        style={{ opacity: canDrop ? 1 : 0.5 }}
      >
        {list.length > 0 ? (
          renderBlock()
        ) : (
          <h4 className="text-black">Drop some files here</h4>
        )}
      </div>
      <SearchBox itemList={list} />
    </>

  );
};

export default DhdBox;
