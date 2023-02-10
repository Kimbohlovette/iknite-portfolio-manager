import React from "react";
import { RxCaretRight, RxCaretLeft } from "react-icons/rx";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

function PojectDetail() {

    const projectId = Number(useParams()["projectId"]);

    const project = useAppSelector( state => state.data.projects)
    .filter( project => project["id"]===projectId)[0];

    const members = useAppSelector(state => state.data.members);

    const contributors = project.contributors
    .map( id => members[id])
    .map((member, key) => {
        return (
            <Link key={key} to={"/members/"+ member.id}>
                <img
                src={member.profileImage}
                alt={member.name}
                className="max-h-8 rounded-full hover:scale-105 transition-transform duration-100 ease-linear" />
            </Link>
        );
    });

    return (
        <div className="py-8 min-h-screen flex flex-col md:flex-row gap-x-10">
            <div className="flex-1">
                <div className="rounded-md overflow-hidden shadow-inner relative">
                    <img src={project.demoImages[0]} className="object-center object-cover" alt="" />

                    <RxCaretLeft className="absolute text-4xl top-1/2 text-slate-600 z-20" />
                    <RxCaretRight className="absolute text-4xl top-1/2 right-0 text-slate-600 z-20" />
                    
                </div>
            </div>
            <div className="flex-1">
                <div>
                    <h1 className="text-2xl sm:text-3xl text-slate-700 font-bold my-4 max-w-md">
                        {project.title}
                    </h1>
                    <span className="text-sm ml-2 px-4 py-1 bg-secondary-50 rounded-full capitalize">{project.status}</span>

                    <div className="py-4 px-2 bg-slate-50 rounded-md my-4">
                        <p className="py-2 text-slate-600">{project.desc}</p>
                    </div>

                    <div className="flex flex-col flex-wrap py-2 w-full [&>*]:flex-1">
                        <div className="my-2">
                            <h2 className="font-medium text-primary-900">Date Started</h2>
                            <span className="text-primary-600 text-sm">
                                {project.startDate}
                            </span>
                        </div>

                        <div className="my-2">
                            <h2 className="font-medium text-primary-900">Date Completed</h2>
                            <span className="text-primary-600 text-sm">
                                {project.endDate}
                            </span>
                        </div>
                    </div>
                    <div className="my-2">
                        <h2 className="font-medium text-primary-900">Contributors</h2>
                        <div className="flex flex-row my-2">
                            {contributors}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PojectDetail;