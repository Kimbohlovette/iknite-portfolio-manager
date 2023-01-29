import { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

function Projects() {

    const [open, toggleDropdown] = useState(false)
    return (
        <div className="my-8">
            <header>
                <div className="relative">
                    <button 
                    className="text-purple-900 hover:text-purple-600 py-2 px-4 border rounded-md"
                    onClick={()=>{toggleDropdown(open=>!open)}}>All Projects <FaCaretDown className="inline" /></button>
                    <div
                    className="dropdown absolute top-full mt-2 rounded-md border-purple-500 shadow-inner bg-white py-5 px-2"
                    hidden={!open}>
                        <ul className="text-slate-600 [&>*]:py-2 [&>*]:px-4 hover:[&>*]:bg-slate-100 [&>*]:rounded-md [&>*]:cursor-pointer">
                            <li>All Projects</li>
                            <li>Design Project</li>
                            <li>Software Developmen</li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}


export default Projects