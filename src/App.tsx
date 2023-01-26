import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import Projects from "./pages/Projects";
import Members from './pages/Members';
import Iknite from "./pages/Iknite";
function App() {

  return (
    <div>
        <NavBar />
        <div className="px-4 sm:px-8 lg:px-12">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/members' element={<Members />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/iknite' element={<Iknite />} />
        </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App; 

