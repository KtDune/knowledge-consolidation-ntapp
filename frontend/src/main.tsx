import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './output.css'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QueryComponent from './component/QueryComponent/QueryComponent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/query' element={<QueryComponent />} />
      </Routes>
      </BrowserRouter>
    </DndProvider>
  </StrictMode>
)
