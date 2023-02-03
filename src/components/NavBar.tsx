import React from 'react';

import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

export default function NavBar(): JSX.Element {
    const isAuthenticated = useAppSelector(state=> state.auth.isAuthenticated)
    return (
        <header className="flex flex-row justify-between items-center bg-purple-900 py-4 text-white px-4 sm:px-8">
            <Link to="/"><div className="brand text-2xl font-bold">ISPM</div></Link>
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
                    !isAuthenticated && <button className="py-2 px-4 rounded-md bg-white text-slate-800 text-sm">Login</button>
                }
                <div className="avatar p-2 rounded-full text-xl bg-white">
                <Icon icon="mdi:user" className='text-purple-900'/>
                </div>
            </div>
            <div className="menu text-3xl sm:hidden">
            <Icon icon="material-symbols:menu" />
            </div>
        </header>
    )
}
