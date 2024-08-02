import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageListPerson } from './pages/Person/ListPerson'
import { PageAddEditPerson } from './pages/Person/AddEditPerson'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageListPerson />}/>
        <Route path="/NewPerson" element={<PageAddEditPerson />}/>
        <Route path="/EditPerson/:id" element={<PageAddEditPerson />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
