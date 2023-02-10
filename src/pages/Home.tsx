import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { MemberType } from "../shared/types";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const studentImage = require("../shared/student.png");

function Home() {
    const shortProjects = useAppSelector( state => state.data)
    .projects
    .filter( project => project.contributors.length>2)
    .map( project => {
        return {
            projectImage: project.demoImages[0],
            projectTitle: project.title,
            projectDesc: project.desc,
            projectId: project.id
        };
    });

    const leadEngineers = useAppSelector( state => state.data)
    .members
    .filter( (member) => member.level.toLocaleLowerCase()==="lead")
    .map( (member, key) => {
        return ( <Member key={key} member={member} />);
    });

    
    return (
        <div className="min-h-screen">
            <section className="px-2 border-b">
                <div className="grid grid-cols-1 sm:grid-cols-2 py-4">
                    <div className="text flex justify-start items-center min-h-[45vh]">
                        <div>
                        <span className="inline-block text-3xl sm:text-4xl lg:text-6xl font-bold w-4/5 sm:w-full xl:w-5/6 text-primary-900">
                            Showcasing Iknite Space talents
                        </span>
                        <span className="inline-block my-4 w-3/4 font-bold text-slate-700">Get to know more about Iknite Space talents and their projects here.</span>
                        <Link to="/members">
                            <button className="block text-sm py-2 px-4 my-4 bg-secondary-900 text-slate-50 rounded-md shadow-sm hover:bg-secondary-800">
                        <Icon icon="clarity:employee-solid" className="inline-block mr-2 text-base" />
                            Hire an expert</button>
                        </Link>
                        
                        </div>
                    </div>
                    <div className="hidden sm:flex caption justify-center items-center">
                        <img src={studentImage} className="object-cover object-center aspect-square w-3/4" alt="" />
                    </div>
                </div>
            </section>
            <section className="py-5">
                <h1 className="pb-5 px-2 max-w-xs text-slate-800 text-2xl sm:text-3xl lg:text-4xl font-semibold">Popular Projects</h1>
                <div className="cards flex flex-wrap gap-4 [&>*]:max-w-xs justify-center sm:justify-start">
                    {
                        shortProjects.map( (project,key) => {
                            return (
                                <Project key={key} project = {project} />
                            );
                        })
                    }
                </div>
            </section>
            <section className="py-5">
                <h1 className="rounded-md py-4 px-2 my-8 max-w-xs  text-2xl sm:text-3xl lg:text-4xl font-semibold">Senior Engineers</h1>
                <div className="cards flex flex-wrap gap-4 [&>*]:max-w-xs justify-center sm:justify-start">
                    {leadEngineers}
                </div>
            </section>
            <section className="py-5">
                <h1 className="py-4 px-2 my-5 max-w-xs text-slate-800 text-2xl sm:text-3xl lg:text-4xl font-semibold">Top News & Events</h1>
                <div className="cards flex flex-wrap gap-4 justify-center sm:justify-start sm:divide-y-0">
                    <Event />
                    <Event />
                    <Event />
                </div>
            </section>
        
        </div>
    );
    }

function Event() {
    return (
        <div className="flex flex-col [@media(min-width:520px)]:flex-row gap-2 p-4 rounded-md max-w-3xl hover:bg-slate-100 cursor-pointer">
            <div className="caption w-full max-w-xs">
                <img src="https://i0.wp.com/www.afrohustler.com/wp-content/uploads/2017/11/feature.jpg?fit=770%2C513&ssl=1" className="max-h-[12rem] aspect-video object-center object-cover overflow-hidden rounded-md" alt="" />
            </div>
            <div className="text p-2 rounded-md">
                <div>
                    <h1 className="text-lg font-semibold text-slate-800">SMCON23 - Silicon Mount Conference 2023</h1>
                    <p className="text-slate-600 text-sm p-2 rounded-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam neque harum adipisci atque odio...</p>
                </div>
                <div className="date italic">
                    November 11, 2023
                </div>
            </div>
        </div>
    );
}
function Member(props: { member: MemberType }) {
    return (
    <div className="relative p-8 border border-transparent hover:border-gray-200 rounded-md w-full  hover:shadow-inner flex flex-row gap-4 max-w-fit cursor-pointer bg-slate-100">
        <div className="avatar border w-20 h-fit aspect-square rounded-full bg-purple-50 flex justify-center items-center text-3xl overflow-hidden">
            <img src={props.member.profileImage} alt="" />
        </div>
        <div className=" flex flex-col justify-start items-start">
            <h1 className="font-semibold text-slate-800 text-lg">{props.member.name}</h1>
            <span className="text-sm text-slate-600">{"Lead "+ props.member.dept}</span>
            <div className="flex flex-row gap-2">
                <div className="reviews flex flex-row text-purple-900 py-1">
                <Icon icon="material-symbols:star" />
                <Icon icon="material-symbols:star" />
                <Icon icon="material-symbols:star" />
                <Icon icon="material-symbols:star" />
                </div>
                <span className="text-purple-800 text-sm">( 25 reviews)</span>
            </div>
        </div>
        <Link to={"/members/"+ props.member.id } className="absolute top-0 left-0 h-full w-full">  </Link>
    </div>
    );
}
function Project(props:{
    project: {
        projectId: number,
        projectImage: string,
        projectTitle: string,
        projectDesc: string}
    }) {
    return (
        <div className="card w-full sm:max-w-xs rounded-md p-4 shadow-lg border cursor-pointer">
        <div className="image my-2  rounded-md overflow-hidden">
            <img src={props.project.projectImage} className="object-cover object-center aspect-video" alt="" />
        </div>
        <div className="card-info">
            <h1 className="text-lg font-semibold text-slate-800">{props.project.projectTitle}</h1>
            <p className="text-sm text-slate-600">{props.project.projectDesc}</p>
        </div>
        <Link to={"/projects/"+ props.project.projectId}>
        <button className="text-sm bg-purple-600 hover:bg-purple-900 py-2 my-2 w-1/2 text-slate-100 rounded-md">View</button>
        </Link>
    </div>
    );
}

export default Home;