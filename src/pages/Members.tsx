import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {  useAppSelector } from '../app/hooks';
import { MemberType } from '../shared/types';
import { useState } from 'react';

function Members() {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
    let members = useAppSelector( state => state.data.members);
    const [search, setSearchKey] = useState("");
    const [filter, setFilter] = useState("dev");

    members = filterMembers(members, search, filter);

    const formatedMembers = members.map( (member, key) => {
        return (
            <Member member ={member} key={key} />
        );
    });
  return (
    <div className="my-8 min-h-screen">
        <h1 className="text-2xl font-medium my-2">Members</h1>
        <div className="flex justify-between items-start">
            <div className="filters flex flex-row flex-wrap gap-2 [&>*:focus]:shadow [&>*:focus]:shadow-purple-200 [&>*:focus]:border-purple-400">
                <input 
                type="search" 
                name="search" 
                id="search-name"
                value={search}
                onChange={(e)=>setSearchKey(search=>e.target.value)}
                placeholder="Search for people"
                className="border focus:outline-none py-2 px-4 min-w-0 rounded-md"
                />
                <button className="border py-2 px-4 rounded-md text-slate-600 text-sm w-fit" onClick={()=>setFilter('all')}>All</button>
                <button className="border py-2 px-4 rounded-md text-slate-600 text-sm w-fit" onClick={()=>setFilter('design')}>Designers</button>
                <button className="border py-2 px-4 rounded-md text-slate-600 text-sm w-fit" onClick={()=>setFilter('dev')}>Developers</button>
            </div>
            { 
                isAuthenticated && 
                <div className="">
                    <button className="text-slate-50 bg-purple-900 rounded-md py-2 px-4 text-sm">
                        <BsPlus className="inline mr-1 align-center text-xl"/>
                        <span className="hidden sm:inline">Add member</span>
                    </button>
                </div>
            }
        </div>

        {
        formatedMembers.length<1 ?
        <p className="my-5">No matches found for <span className="italic text-base text-purple-600">{search}</span></p>:
        <table className="my-5 border-spacing-y-2 [&>*]:divide-y w-full text-left">
            <thead>
                <tr className="text-sm sm:text-base [&>*]:py-1 text-slate-800 text-center sm:text-left">
                    <th></th>
                    <th>Full Names</th>
                    <th className="hidden sm:block">Level</th>
                    <th>Contributions</th>
                </tr>
            </thead>
            <tbody className="text-sm">
                {formatedMembers}
            </tbody>
        </table>
        }
    </div>
  )
}

function Member(prop: {member: MemberType}){
    return (
        <tr className="relative gap-y-5 px-2 [&>*]:py-2 rounded-sm cursor-pointer hover:bg-slate-100  align-middle">
            <td className="flex justify-center">
                <div className="avatar rounded-full aspect-square border flex items-center justify-center w-fit">
                    <img src={prop.member.profileImage} className="h-12 aspect-square w-auto object-center object-cover rounded-full" alt="" />
                </div>
            </td>

            <td>
                <h1 className="">{prop.member.name}</h1>
                <span className="text-xs sm:text-sm font-extralight text-slate-400">{prop.member.dept}</span>
            </td>
            <td className="hidden sm:block text-slate-400">
                {prop.member.level + " " + prop.member.dept}
            </td>
            <td className="text-center sm:text-left">
                {prop.member.contributions.length}
            </td>
            <Link to={"/members/"+ prop.member.id} className="absolute left-0 top-0 h-full w-full "></Link>
        </tr>
    )
}

export default Members;


function filterMembers(members: MemberType[], searchKey:string ="",filter: string ="all"): MemberType[]{
    let matched = members.filter( member => (new RegExp(searchKey.toLocaleLowerCase())).test(member.name.toLowerCase()));
    switch(filter){
        case "dev":
            return matched.filter( member => member.dept==='Software Developer');
        case "design":
            return matched.filter(member => member.dept==="Designer");
        case "all":
            return matched
        default:
            return matched;
    }
}