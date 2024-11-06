import { Search01Icon } from "hugeicons-react"
import { useSearch } from "./searchBoxHk";
import { useNavigate } from "react-router-dom"

interface HookProp {
  title: string;
  content: string;
}

interface SearchBoxProps {
  itemList: HookProp[];
}

interface sessionStructure {
  searchQuery: string,
  noteList: HookProp[]
}

const SearchBox: React.FC<SearchBoxProps> = ({ itemList }) => {
  const { query, handleInputChange } = useSearch();

  const list = itemList;

  const navigate = useNavigate()

  const toQueryPage = () => {

    const sessionValue: sessionStructure = {
      searchQuery: query,
      noteList: itemList
    }

    sessionStorage.setItem("sessionValue", JSON.stringify(sessionValue))

  }

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
            onClick={() => navigate('/query')}  
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
          >
            <Search01Icon size={24} color={"#000000"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
