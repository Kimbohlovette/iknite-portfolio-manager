import React from 'react'

function Members() {
  return (
    <div className="my-5">
        <h1 className="text-2xl font-medium my-2">Members</h1>

        <div className="filters flex flex-row gap-2">
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

        <div className="members my-4">
            <div className="member flex flex-row">
                <div className="avatar rounded-full max-h-[2rem]">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Members