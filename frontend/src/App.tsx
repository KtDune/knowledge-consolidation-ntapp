import NoteDisplay from "./component/noteDisplay/NoteDisplay"
import DhdBox from "./component/searchDnd/dhdBox/dhdBox"


function App() {

  return (
    <>
      <NoteDisplay />
      <div className="fixed bottom-0 left-0 w-full text-white text-center p-4">
        <DhdBox />
      </div>
    </>
  )
}

export default App
