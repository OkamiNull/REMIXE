import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from './pages/landingPage.jsx'

function App() {

  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App
