import { Icon } from '@iconify/react'
import React from 'react'
import { BsPlus } from 'react-icons/bs'

function Members() {
  return (
    <div className="my-5">
        <h1 className="text-2xl font-medium my-2">Members</h1>
        <div className="flex justify-between items-start">
            <div className="filters flex flex-row flex-wrap gap-2 [&>*:focus]:shadow [&>*:focus]:shadow-purple-200 [&>*:focus]:border-purple-400">
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
            <div className="">
                <button className="text-slate-50 bg-purple-900 rounded-md py-2 px-4 text-sm">
                    <BsPlus className="inline mr-1 align-center text-xl"/>
                    <span className="hidden sm:inline">Add member</span>
                </button>
            </div>
        </div>

        <table className="my-5 border-spacing-y-2 border-separate w-full text-left">
            <thead>
                <tr className="text-sm sm:text-base [&>*]:py-1 text-slate-800 text-center sm:text-left">
                    <th></th>
                    <th>Full Names</th>
                    <th className="hidden sm:block">Level</th>
                    <th>Contributions</th>
                </tr>
            </thead>
            <tbody className="text-sm">
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
            </tbody>
        </table>
    </div>
  )
}

function Member(){
    return (
        <tr className="gap-y-5 px-2 [&>*]:py-2 rounded-sm cursor-pointer hover:bg-slate-100">
            <td className="flex justify-center">
                <div className="avatar rounded-full aspect-square border p-4 flex items-center justify-center w-fit">
                    <Icon icon="mdi:user"/>
                </div>
            </td>

            <td>
                <h1 className="">Kimboh Lovette Bantar</h1>
                <span className="text-xs sm:text-sm font-extralight text-slate-400 italic">Software Developer</span>
            </td>
            <td className="hidden sm:block text-slate-400">
                Trainee
            </td>
            <td className="text-center sm:text-left">
                35
            </td>
        
        </tr>
    )
}

export default Members