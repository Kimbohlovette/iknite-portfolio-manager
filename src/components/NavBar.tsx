import React from 'react';

import { Icon } from '@iconify/react';

export default function NavBar(){

  return (
    <header className=''>
        <div className="brand text-2xl font-bold">Brand</div>
        <nav className="hidden sm:block">
            <ul className="flex flex-row gap-4 font-medium [&>*]:px-2 [&>*]:py-1">
                <li className="hover:bg-purple-100/80 hover:backdrop-blur-sm rounded-md hover:text-slate-800 ">Home</li>
                <li className="hover:bg-purple-100/80 hover:backdrop-blur-sm rounded-md hover:text-slate-800 ">Projects</li>
                <li className="hover:bg-purple-100/80 hover:backdrop-blur-sm rounded-md hover:text-slate-800 ">Members</li>
                <li className="hover:bg-purple-100/80 hover:backdrop-blur-sm rounded-md hover:text-slate-800 ">About Iknite</li>
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
