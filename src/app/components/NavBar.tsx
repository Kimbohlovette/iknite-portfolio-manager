import React from "react";
import { CiLogout } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { useState } from "react";
import { authActions } from "../store/store";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require("../shared/logo.png");
export default function NavBar(): JSX.Element {
	const isAuthenticated = useAppSelector(
		(state) => state.auth.isAuthenticated
	);
	const dispatch = useAppDispatch();
	const [isOpen, toggleDropdownMenu] = useState(false);
	const handleLogout = () => {
		dispatch(authActions.logout());
		toggleDropdownMenu(false);
	};
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate("/auth");
		toggleDropdownMenu(false);
	};

	const handleMobileNavigation = (path: string) => {
		navigate(path);
		toggleDropdownMenu(false);
	};

	return (
		<header className="relative flex flex-row justify-between items-center bg-primary-900 py-4 text-white px-4 sm:px-8">
			<Link to="/">
				<div className="brand flex flex-row justify-center gap-1 items-center font-black text-primary-50">
					<img src={logo} className="max-h-14" alt="" />
				</div>
			</Link>
			{isOpen && (
				<nav
					id="mobile-nav"
					className="absolute left-0 top-full sm:hidden bg-slate-50 text-slate-800 font-medium px-4 py-8 w-full z-50 rounded-b-md shadow-sm"
				>
					<ul className="flex flex-col divide-y [&>*]:py-3 [&>*:hover]:bg-slate-100  [&>*]:px-2  [&>*]:rounded-sm">
						<li onClick={() => handleMobileNavigation("/")}>
							Home
						</li>
						<li onClick={() => handleMobileNavigation("/projects")}>
							Projects
						</li>
						<li onClick={() => handleMobileNavigation("/members")}>
							Members
						</li>
						<a
							href="https://iknite.space"
							target="_blank"
							rel="noreferrer"
						>
							<li>Iknite</li>
						</a>
					</ul>
					{isAuthenticated ? (
						<div className="mt-5 bg-slate-100 w-fit rounded-md px-4">
							<CiLogout
								className="inline"
								onClick={() => handleLogout()}
							/>
							<span>Logout</span>
						</div>
					) : (
						<div
							className="mt-5 bg-slate-200 w-fit rounded-md px-4 py-1"
							onClick={() => handleLogin()}
						>
							<CiLogin className="inline" />
							<span className="px-2">Login</span>
						</div>
					)}
				</nav>
			)}
			<nav className="hidden sm:block">
				<ul className="flex flex-row gap-4 font-medium">
					<Link to="/">
						<li className="hover:backdrop-blur-sm rounded-md hover:text-secondary-600 px-4 py-2">
							Home
						</li>
					</Link>
					<Link to="/projects">
						<li className="hover:backdrop-blur-sm rounded-md hover:text-secondary-600 px-4 py-2">
							Projects
						</li>
					</Link>

					<Link to="/members">
						<li className="hover:backdrop-blur-sm rounded-md hover:text-secondary-600 px-4 py-2">
							Members
						</li>
					</Link>
					<a
						href="https://iknite.space"
						target="_blank"
						rel="noreferrer"
					>
						<li className="hover:backdrop-blur-sm rounded-md hover:text-secondary-600 px-4 py-2">
							Iknite
						</li>
					</a>
				</ul>
			</nav>
			<div className="auth hidden  sm:flex flex-row items-center gap-8">
				{!isAuthenticated && (
					<button
						className="py-2 px-4 rounded-md bg-white hover:bg-slate-100 text-slate-800 text-sm"
						onClick={() => navigate("/auth")}
					>
						Login
					</button>
				)}
				<div className="avatar p-2 rounded-full text-xl bg-white">
					<Icon icon="mdi:user" className="text-primary-900" />
				</div>
			</div>
			{!isOpen ? (
				<div className="menu text-3xl sm:hidden">
					<Icon
						icon="material-symbols:menu"
						onClick={() => toggleDropdownMenu((isOpen) => !isOpen)}
					/>
				</div>
			) : (
				<div className="menu text-3xl sm:hidden">
					<AiOutlineClose
						onClick={() => toggleDropdownMenu((isOpen) => !isOpen)}
					/>
				</div>
			)}
		</header>
	);
}
