import React from "react";
import NavBar from "./components/NavBar";
import Home from './pages/Home';
function App() {

  return (
    <div>
        <NavBar />
        <div className="container mx-auto px-4 sm:px-8 xl:px-12">
        <Home />
        </div>
    </div>
  );
}

export default App; 

