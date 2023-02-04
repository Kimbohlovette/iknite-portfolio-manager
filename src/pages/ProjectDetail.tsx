import { RxCaretRight, RxCaretLeft } from 'react-icons/rx'
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

function PojectDetail() {

    const projectId: number = Number(useParams()['projectId']);

    const project = useAppSelector( state => state.data.projects)
    .filter( project => project['id']===projectId)[0];

    const members = useAppSelector(state => state.data.members);

    const contributors = project.contributors
    .map( id => members[id])
    .map((member, key) => {
        return (
            <Link key={key} to={"/members/"+ member.id}>
                <img  
                src={member.profileImage} 
                alt={member.name}
                className="max-h-8 rounded-full" />
            </Link>
        )
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
                    <span className="text-sm ml-2 px-4 py-1 bg-purple-200 rounded-full">{project.status}</span>

                    <div className="py-4 px-2 bg-slate-50 rounded-md my-5">
                        <p className="py-2 text-slate-600">{project.desc}</p>
                    </div>

                    <div className="flex flex-row flex-wrap py-2 w-full [&>*]:flex-1 gap-x-4">
                        <div className="py-4">
                            <h2 className="font-semibold">Date Started</h2>   
                            <span className="text-purple-900 font-semibold text-lg">
                                {project.startDate}
                            </span>
                        </div>

                        <div className="py-4">
                            <h2 className="font-semibold">Date Completed</h2>
                            <span className="text-purple-900 font-semibold text-lg">
                                {project.endDate}
                            </span>
                        </div>
                        <div className="py-4">
                            <h2 className="font-semibold">Percentage complete</h2>
                            <div className="text-purple-900 font-semibold text-lg">
                                {project.percentageComplete + "%"}
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <h2 className="text-lg font-semibold">Contributors</h2>
                        <div className="flex flex-row my-2">
                            {contributors}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PojectDetail 