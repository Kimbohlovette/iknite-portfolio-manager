import React from 'react';

import { Icon } from '@iconify/react';

export default function NavBar(): JSX.Element {

  return (
    <header className="flex flex-row justify-between items-center bg-purple-900 py-4 text-white px-4 sm:px-8">
        <div className="brand text-2xl font-bold">Brand</div>
        <nav className="hidden sm:block">
            <ul className="flex flex-row gap-4 font-medium [&>*]:px-2 [&>*]:py-1">
                <a href="/">
                <li className="hover:bg-purple-100/80 hover:backdrop-blur-sm rounded-md hover:text-slate-800 ">
                <Icon icon="material-symbols:add-home" className="inline-block mr-2 text-base" />
                Home</li>
                </a>
                <a href="./projects">
                <li className="hover:bg-purple-100/80 hover:backdrop-blur-sm rounded-md hover:text-slate-800 ">
                <Icon icon="grommet-icons:projects" className="inline-block mr-2 text-sm" />
                Projects</li>
                </a>
                <a href="/members">
                <li className="hover:bg-purple-100/80 hover:backdrop-blur-sm rounded-md hover:text-slate-800 ">
                <Icon icon="ri:team-fill" className="inline-block mr-2 text-base" />
                Members</li>
                </a>
                <a href="/iknite">
                <li className="hover:bg-purple-100/80 hover:backdrop-blur-sm rounded-md hover:text-slate-800 ">
                <Icon icon="mdi:about"  className="inline-block mr-2 text-base" />
                About Iknite</li>
                </a>
            </ul>
        </nav>
        <div className="auth hidden  sm:flex flex-row items-center gap-8">
            <button className="py-1 px-4 rounded-md bg-white text-slate-800 text-sm">Login</button>
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
