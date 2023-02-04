import { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { BsPlus } from "react-icons/bs"
import { useAppSelector } from '../app/hooks';
import { ProjectType } from '../shared/types';
import { Link } from 'react-router-dom';

function Projects() {

    const [open, toggleDropdown] = useState(false);
    const [filter, setFilter] = useState('all');
    const handleFilter = (key:string)=>{
        setFilter(filter=>key);
        toggleDropdown(open=>false);
    }

    let projects = useAppSelector(state => state.data.projects);
    projects = filterProjects(projects,filter)
    return (
        <div className="my-8">
            <header className="flex justify-between items-center flex-row">
                <div className="relative" id="dropdown">
                    <button 
                    className="text-purple-900 hover:text-purple-600 py-2 px-4 border rounded-md"
                    onClick={
                        ()=> {
                        toggleDropdown(open=>!open)
                        }
                    }
                    >All Projects <FaCaretDown className="inline" /></button>
                    <div
                    className="dropdown absolute z-50 top-full mt-2 rounded-md border border-purple-200 shadow-inner bg-white py-5 px-2 min-w-max"
                    hidden={!open}>
                        <ul className="text-slate-600 [&>*]:py-2 [&>*]:px-4 hover:[&>*]:bg-slate-100 [&>*]:rounded-md [&>*]:cursor-pointer">
                            <li  onClick={()=>handleFilter('all')}>All Projects</li>
                            <li onClick={()=>handleFilter('design')}>Design Project</li>
                            <li onClick={()=>handleFilter('dev')}>Software Developmen</li>
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
                <table className="w-full text-left [&>*]:divide-y">
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
                        {
                            projects.map( (project, key) => {
                                return (
                                <Project key={key} project={project}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function Project(props: {project: ProjectType}){
    return (
        <tr className="relative text-slate-500 [&>*]:py-5 hover:bg-slate-100">
            <td className="px-2">{props.project.title}</td>
            <td>
                <span className="rounded-full py-1 px-4 text-sm bg-purple-200 text-slate-600 ">
                {props.project.status}
                </span>
            </td>
            <td>{props.project.percentageComplete}</td>
            <td className="text-center">{props.project.contributors.length}</td>
            <td >{props.project.startDate}</td>
            <td>{props.project.endDate}</td>
            <Link to={"/projects/"+ props.project.id} className="absolute left-0 top-0 h-full w-full "></Link>
        </tr>
    )

}


export default Projects


function filterProjects(list: ProjectType[],key: string): ProjectType[] {
        switch(key){
            case "design":
                return list.filter( project=>{
                    return project.dept==="design";
                });
            
            case "dev":
                return list.filter( project=>{
                    return project.dept==="dev";
                });
                
            case "all":
                return list;

            default:
                return list;
        }
}

