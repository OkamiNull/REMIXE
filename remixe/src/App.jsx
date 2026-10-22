import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presentation from './pages/presentation.jsx'
import LandingPage from './pages/landingPage.jsx'
import SelecaoCurso from './pages/selecaoCurso.jsx'
import Course from './pages/course.jsx'
import Creator from './pages/creator.jsx';


function App() {

  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/course" element={<Course />} />
        <Route path="/selecaoCurso" element={<SelecaoCurso />} />
        <Route path="/creatorPainel" element={<Creator />} />
      </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App
