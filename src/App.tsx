import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import Projects from "./pages/Projects";
import Members from './pages/Members';
import Iknite from "./pages/Iknite";


const router = createBrowserRouter([
       { path: '/', element: <Home />},
       { path: '/members', element: <Members />},     
       { path: '/projects', element: <Projects />},     
       { path: '/iknite', element: <Iknite />},     
])

function App() {

  return (
    <div>
        <NavBar />
        <div className="px-4 sm:px-8 lg:px-12">
            <RouterProvider router={router} />
        </div>
        <Footer />
    </div>
  );
}

export default App; 

