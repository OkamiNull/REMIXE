import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from './pages/landingPage.jsx'
import Informacoes from './pages/informacoes.jsx'
import Modulo from './pages/modulo.jsx'
import Edicao from './pages/edicao.jsx'
import Finalizacao from './pages/finalizacao.jsx'

function App() {

  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Informacoes" element={<Informacoes />} />
        <Route path="/Modulo" element={<Modulo />} />
        <Route path="/Edicao" element={<Edicao />} />
        <Route path="/Finalizacao" element={<Finalizacao />} />
      </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App
