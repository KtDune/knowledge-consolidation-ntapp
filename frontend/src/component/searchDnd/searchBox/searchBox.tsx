import { Search01Icon } from "hugeicons-react";
import QueryComponent from "../../QueryComponent/QueryComponent";
import { useSearch } from "./searchBoxHk";

interface HookProp {
  title: string;
  content: string;
}

interface SearchBoxProps {
  itemList: HookProp[];
}

const SearchBox: React.FC<SearchBoxProps> = ({ itemList }) => {
  const { query, handleInputChange, showQueryComponent, setShowQueryComponent } = useSearch();

  const list = itemList

  return (
    <div className="w-full flex flex-col items-center">
      {/* Search section */}
      <div className="w-full flex justify-center">
        <div className="flex w-full max-w-lg">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
            className="w-full px-4 text-black py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={() => setShowQueryComponent()} 
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
          >
            <Search01Icon size={24} color={"#000000"} />
          </button>
        </div>
      </div>

      {showQueryComponent && <QueryComponent query={query} list={list} setShowQueryComponent={setShowQueryComponent} />}
    </div>
  );
};

export default SearchBox;
