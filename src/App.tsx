import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from './pages/Home';
function App() {

  return (
    <div>
        <NavBar />
        <div className="px-4 sm:px-8 lg:px-12">
        <Home />
        </div>
        <Footer />
    </div>
  );
}

export default App; 

