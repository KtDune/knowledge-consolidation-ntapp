import { useDrop } from "react-dnd";
import { ItemTypes } from "../../Itemtype"
import { ReactNode } from "react";

const DhdBox: React.FC = () => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.Note_Block, // Define what type of items this box can accept.
    drop: (item: ReactNode) => handleDrop(item), // Define what happens on drop.
    collect: (monitor) => ({
      isOver: !!monitor.isOver(), // Track if an item is being dragged over this box.
      canDrop: !!monitor.canDrop(), // Check if this box can accept the item.
    }),
  }));

  // This function will handle the drop logic.
  const handleDrop = (item: any) => {
    console.log("Dropped item:", item);
    // You can update state here or trigger any action you want when an item is dropped.
  }

  return (
    <div
      ref={drop} // Attach the drop ref to make this component a drop target.
      className={`border border-dashed border-black rounded m-4 ${ isOver ? "bg-green-600" : "bg-white" }`}
      style={{ opacity: canDrop ? 1 : 0.5 }}>
      <h5 className="text-center text-black m-20">Drop something inside</h5>
    </div>
  );
};

export default DhdBox;
