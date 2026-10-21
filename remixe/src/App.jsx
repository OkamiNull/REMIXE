import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/home.jsx'
import Presentation from './pages/presentation.jsx'

function App() {

  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
      </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App
