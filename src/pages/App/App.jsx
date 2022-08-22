import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "../HomePage/Home"
import NavBar from "../../components/NavBar/NavBar"

function App() {
  return (
    <main className="App">
      <>
      <NavBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
      </>
    </main>
  )
}

export default App;
