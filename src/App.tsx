import React from "react";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from "./pages/Projects";
import Members from './pages/Members';
import Iknite from "./pages/Iknite";



const MyApp = (): JSX.Element =>{
        return (
            <div>
                <NavBar />
                <div className="px-4 sm:px-8 lg:px-12">
                    <Outlet />
                </div>
                <Footer />
            </div>);
        }

// const routeDefinitions = createRoutesFromElements(
//     <Route element={<MyApp />}>
//         <Route path='/' element={<Home />} />
//         <Route path='/projects' element={<Projects />} />
//         <Route path='/members' element={<Members />} />
//         <Route path='/iknite' element={<Iknite />} />
//     </Route>
// )
// const router = createBrowserRouter(routeDefinitions)

const router = createBrowserRouter(
    [
        { 
            element: <MyApp />,
            children: [
                {   path: '/', element: <Home />},
                {   path: '/projects', element: <Projects />},
                {   path: '/members', element: <Members />},
                {   path: '/iknite', element: <Iknite />},
            ] 
        },
    ]
);

function App() {

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App; 

