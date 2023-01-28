import { Icon } from '@iconify/react'
import React from 'react'

function Members() {
  return (
    <div className="my-5">
        <h1 className="text-2xl font-medium my-2">Members</h1>

        <div className="filters flex flex-row flex-wrap gap-2">
            <input 
            type="search" 
            name="search" 
            id="search-name"
            placeholder="Search for people"
            className="border focus:outline-none py-2 px-4 min-w-0 rounded-md"
            />
            <button className="border py-2 px-4 rounded-md text-slate-600 text-sm w-fit">All</button>
            <button className="border py-2 px-4 rounded-md text-slate-600 text-sm w-fit">Designers</button>
            <button className="border py-2 px-4 rounded-md text-slate-600 text-sm w-fit">Developers</button>
        </div>

        <div className="members my-8 ">
            <Member />
            <Member />
            <Member />
        </div>
    </div>
  )
}

function Member(){
    return (
        <div className="member flex flex-row items-center [&>*]:grow gap-4 py-2 hover:bg-purple-200 px-2 rounded-sm cursor-pointer">
                
            <div>
                <div className="avatar rounded-full aspect-squre border p-4 flex items-center justify-center w-fit">
                <Icon icon="mdi:user" color="purple"/>
                </div>
            </div>

            <div className="name">
                <h1 className="text-sm sm:text-base text-slate-600">Kimboh Lovette Bantar</h1>
                <span className="text-xs sm:text-sm font-extralight text-slate-400 italic">Software Developer</span>
            </div>
            <div className="hidden sm:block">
                <span className="text-slate-400 text-sm">Trainee</span>
            </div>
            <div className="num_projects text-purple-900">
                35
            </div>
        
        </div>
    )
}

export default Members