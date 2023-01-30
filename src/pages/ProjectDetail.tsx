import { Avatar } from "./MemberProfile"
import { RxCaretRight, RxCaretLeft } from 'react-icons/rx'

function PojectDetail() {
    return (
        <div className="py-8 flex flex-col md:flex-row gap-x-10">
            <div className="flex-1">
                <div className="rounded-md overflow-hidden shadow-inner relative">
                    <img src="https://pbs.twimg.com/media/Fa2Di9bWIAEYTtk?format=jpg&name=small" className="object-center object-cover" alt="" />

                    <RxCaretLeft className="absolute text-4xl top-1/2 text-slate-600 z-20" />
                    <RxCaretRight className="absolute text-4xl top-1/2 right-0 text-slate-600 z-20" />
                    
                </div>
            </div>
            <div className="flex-1">
                <div>
                    <h1 className="text-2xl my-4 relative">
                        Bohikor 
                        <span className="absolute text-sm ml-2 px-4 py-1 bg-slate-200 rounded-full">not started</span>
                    </h1>
                    <div>
                        <p className="py-2 text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur impedit dolore velit nisi consequatur quod asperiores culpa ex officia, ipsam porro recusandae. Soluta molestiae exercitationem cupiditate, adipisci qui rerum dignissimos?</p>
                    </div>
                    <div className="py-4">
                        <h2 className="text-lg font-medium">Contributors</h2>
                        <div className="flex flex-row my-2">
                            <Avatar />
                            <Avatar />
                            <Avatar />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PojectDetail 