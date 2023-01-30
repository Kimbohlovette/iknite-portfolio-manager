import { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { BsPlus } from "react-icons/bs"
import ProjectDetail from './ProjectDetail'

function Projects() {

    const [open, toggleDropdown] = useState(false)
    return (
        <div className="my-8">
            <ProjectDetail />
            {/* <header className="flex justify-between items-center flex-row">
                <div className="relative">
                    <button 
                    className="text-purple-900 hover:text-purple-600 py-2 px-4 border rounded-md"
                    onClick={
                        ()=> {
                        toggleDropdown(open=>!open)
                        }
                    }
                    >All Projects <FaCaretDown className="inline" /></button>
                    <div
                    className="dropdown absolute top-full mt-2 rounded-md border border-purple-200 shadow-inner bg-white py-5 px-2 min-w-max"
                    hidden={!open}>
                        <ul className="text-slate-600 [&>*]:py-2 [&>*]:px-4 hover:[&>*]:bg-slate-100 [&>*]:rounded-md [&>*]:cursor-pointer">
                            <li>All Projects</li>
                            <li>Design Project</li>
                            <li>Software Developmen</li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <button className="text-slate-50 bg-purple-900 rounded-md py-2 px-4 text-sm">
                        <BsPlus className="inline mr-1 align-center text-xl"/>
                        <span className="hidden sm:inline">Add project</span>
                    </button>
                </div>
            </header>
            <div className="my-8">
                <table className="w-full text-left border-separate border-space-y-2">
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Status</th>
                            <th>%</th>
                            <th>Contributors</th>
                            <th>Start Date</th>
                            <th>End Date</th> 
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                    </tbody>
                </table>
            </div> */}
        </div>
    )
}

function Project(){
    return (
        <tr className="text-slate-500 [&>*]:py-4">
            <td>Bohikor App</td>
            <td>
                <span className="rounded-full py-1 px-4 text-sm bg-purple-600 text-slate-50 ">
                active
                </span>
            </td>
            <td>100%</td>
            <td>3</td>
            <td>02/02/2022</td>
            <td>01/11/2022</td>
        </tr>
    )
}


export default Projects