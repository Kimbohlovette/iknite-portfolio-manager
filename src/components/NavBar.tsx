import React from "react";
import { GiDiamonds } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useState } from "react";
import { authActions } from "../app/store";

export default function NavBar(): JSX.Element {
    const isAuthenticated = useAppSelector(state=> state.auth.isAuthenticated);
    const dispatch = useAppDispatch();
    const [isOpen, toggleDropdownMenu] = useState(false);
    const handleLogout= ()=>{
        dispatch(authActions.logout());
        toggleDropdownMenu(false);
    };
    const navigate = useNavigate();

    const handleLogin= ()=>{
        navigate("/auth");
        toggleDropdownMenu(false);
    };

    const handleMobileNavigation = (path:string)=>{
        navigate(path);
        toggleDropdownMenu(false);
    };

    return (
        <header className="relative flex flex-row justify-between items-center bg-primary-900 py-4 text-white px-4 sm:px-8">
            <Link to="/">
                <div className="brand flex flex-row justify-center gap-1 items-center font-black text-primary-50">
                    <span className="">
                    <GiDiamonds className="-rotate-[30deg] text-xl text-secondary-900" />
                    </span>
                    <div>
                        <span className="leading-3">iknite</span>
                        <span className="leading-3">.space</span>
                    </div>
                </div>
            </Link>
            {
                isOpen &&
                <nav id="mobile-nav" className="absolute left-0 top-full sm:hidden bg-slate-50 text-slate-800 font-medium px-4 py-8 w-full z-50 rounded-b-md shadow-sm">
                    <ul className="flex flex-col divide-y [&>*]:py-3 [&>*:hover]:bg-slate-100  [&>*]:px-2  [&>*]:rounded-sm">
                        <li onClick={()=>handleMobileNavigation("/")}>Home</li>
                        <li onClick={()=>handleMobileNavigation("/projects")}>Projects</li>
                        <li onClick={()=>handleMobileNavigation("/members")}>Members</li>
                        <li onClick={()=>handleMobileNavigation("/iknite")}>Iknite</li>
                    </ul>
                    {
                        isAuthenticated?
                            <div className="mt-5 bg-slate-100 w-fit rounded-md px-4">
                                <CiLogout className="inline" onClick={()=>handleLogout()}/>
                                <span>Logout</span>
                            </div>
                            :
                        <div className="mt-5 bg-slate-200 w-fit rounded-md px-4 py-1" onClick={()=>handleLogin()}>
                            <CiLogin className="inline" />
                            <span className="px-2">Login</span>
                        </div>
                    }
                </nav>
            }
            <nav className="hidden sm:block">
                <ul className="flex flex-row gap-4 font-medium">
                    <Link to="/">
                        <li className="hover:bg-purple-100/80 hover:backdrop-blur-sm rounded-md hover:text-slate-800 px-4 py-2">Home</li>
                    </Link>
                    <Link to="/projects">
                        <li className="hover:bg-purple-100/80 hover:backdrop-blur-sm rounded-md hover:text-slate-800 px-4 py-2">Projects</li>
                    </Link>

                    <Link to="/members">
                        <li className="hover:bg-purple-100/80 hover:backdrop-blur-sm rounded-md hover:text-slate-800 px-4 py-2">Members</li>
                    </Link>
                    <Link to="/iknite">
                        <li className="hover:bg-purple-100/80 hover:backdrop-blur-sm rounded-md hover:text-slate-800 px-4 py-2">Iknite</li>
                    </Link>
                </ul>
            </nav>
            <div className="auth hidden  sm:flex flex-row items-center gap-8">
                {
                    !isAuthenticated && <button className="py-2 px-4 rounded-md bg-white hover:bg-slate-100 text-slate-800 text-sm" onClick={()=>navigate("/auth")}>Login</button>
                }
                <div className="avatar p-2 rounded-full text-xl bg-white">
                <Icon icon="mdi:user" className='text-primary-900'/>
                </div>
            </div>
            {
                !isOpen?
            <div className="menu text-3xl sm:hidden">
                <Icon icon="material-symbols:menu" onClick={()=>toggleDropdownMenu(isOpen=>!isOpen)} />
            </div>:
                <div className="menu text-3xl sm:hidden">
                    <AiOutlineClose onClick={()=>toggleDropdownMenu(isOpen=>!isOpen)} />
                </div>
            }
        </header>
    );
}
