import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Home from './pages/home.jsx'

function App() {

  return (
    <main>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </main>
  )
}

export default App
