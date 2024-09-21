import NoteDisplay from "./component/noteDisplay/NoteDisplay"
import DhdBox from "./component/searchDnd/dhdBox/dhdBox"
import SearchBox from "./component/searchDnd/searchBox/searchBox"


function App() {

  return (
    <>
      <NoteDisplay />
      <div className="fixed bottom-0 left-0 w-full text-white text-center p-4">
        <DhdBox />
        <SearchBox />
      </div>
    </>
  )
}

export default App
