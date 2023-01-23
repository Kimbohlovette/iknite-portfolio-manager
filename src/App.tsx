import React from "react";
import NavBar from "./components/NavBar";
import Home from './pages/Home';
function App() {

  return (
    <div>
        <NavBar />
        <div className="container mx-auto">
        <Home />
        </div>
    </div>
  );
}

export default App; 

