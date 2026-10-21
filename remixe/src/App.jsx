import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Presentation from './pages/presentation.jsx'
import LandingPage from './pages/landingPage.jsx'

function App() {

  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/presentation" element={<Presentation />} />
      </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App
