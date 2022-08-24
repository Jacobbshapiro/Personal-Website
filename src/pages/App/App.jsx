import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from "../HomePage/Home"
import NavBar from "../../Components/NavBar/NavBar"
import ContactPage from "../ContactPage/Contact"
import PortfolioPage from '../PortfolioPage/Portfolio';
import Footer from "../../Components/Footer/Footer"

function App() {
  return (
    <main>
      <>
        <NavBar />
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Portfolio" element={<PortfolioPage />} />
        </Routes>
        <Footer />
      </>
    </main>
  )
}

export default App;
