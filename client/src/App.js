import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage.jsx";
import Home from "./components/home/Home.jsx";
import Crear from "./components/crear/Crear.jsx";
import Detalle from "./components/detalle/Detalle.jsx";

function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
       
        <Routes>
            <Route path="/" element={<LandingPage></LandingPage>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/crear" element={<Crear></Crear>}></Route>
            <Route path="/detalle/:id" element={<Detalle></Detalle>}></Route>
        </Routes>
      </div>
      
    
    </BrowserRouter>
  );
}

export default App;
