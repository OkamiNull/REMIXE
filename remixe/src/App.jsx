import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Presentation from './pages/presentation.jsx'
import LandingPage from './pages/landingPage.jsx'
import Course from './pages/course.jsx'

function App() {

  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App
