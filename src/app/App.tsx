import React from "react";
import {
	createBrowserRouter,
	// createRoutesFromElements,
	Outlet,
	// Route,
	RouterProvider
} from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Auth from "./pages/Auth";
import EventDetail from "./pages/EventDetail";
import Events from "./pages/Events";
import Home from "./pages/Home";
import MemberProfile, {
	Education,
	Contributions,
	ContactInfo
} from "./pages/MemberProfile";
import Error from "./pages/Error";
import Members from "./pages/Members";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";

const MyApp = (): JSX.Element => {
	return (
		<div className="font-poppins">
			<NavBar />
			<div className="px-2 sm:px-8 lg:px-16 xl:px-20">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

// const routeDefinitions = createRoutesFromElements(
//     <Route element={<MyApp />}>
//         <Route path='/' element={<Home />} />
//         <Route path='/projects' element={<Projects />} />
//         <Route path='/members' element={<Members />} />
//         <Route path='/iknite' element={<Iknite />} />
//     </Route>
// )
// const router = createBrowserRouter(routeDefinitions)

const router = createBrowserRouter([
	// Route,
	{
		element: <MyApp />,
		errorElement: <Error />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/projects", element: <Projects /> },
			{
				path: "/projects/:projectId",
				element: <ProjectDetail />
			},
			{
				path: "/members",
				element: <Members />
			},
			{
				path: "/members/:memberId",
				element: <MemberProfile />,
				children: [
					{ path: "/members/:memberId", element: <Education /> },
					{
						path: "/members/:memberId/contributions",
						element: <Contributions />
					},
					{
						path: "/members/:memberId/contacts",
						element: <ContactInfo />
					},
				]
			},
			{ path: "/events", element: <Events /> },
			{ path: "/auth", element: <Auth /> },
			{ path: "/events/:eventId", element: <EventDetail /> }
		],
	}
]);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
