import { Icon } from '@iconify/react';
const studentImage = require("../shared/student.png")
function Home() {
  return (
    <div>
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 py-8">
                <div className="text flex justify-start items-center min-h-[45vh]">
                    <div>
                    <span className="inline-block text-3xl sm:text-4xl lg:text-5xl font-bold w-4/5 sm:w-full xl:w-4/5">
                        Showcasing Iknite Space talents
                    </span>
                    <span className="inline-block my-4 w-3/4 font-bold text-slate-600">Get to know more about Iknite Space talents and their projects here.</span>
                    <button className="block text-sm py-2 px-4 my-4 bg-purple-800 text-slate-50 rounded-md shadow-sm hover:bg-purple-900">
                    <Icon icon="clarity:employee-solid" className="inline-block mr-2 text-base" />
                        Hire an expert</button>
                    </div>
                </div>
                <div className="caption flex justify-center items-center">
                    <img src={studentImage} className="object-cover object-center aspect-square w-3/4" alt="" />
                </div>
            </div>
        </section>
        <section className="py-5">
            <h1 className="py-4 px-2 my-5 max-w-xs text-slate-800 text-2xl sm:text-3xl lg:text-4xl font-semibold">Popular Projects</h1>
            <div className="cards flex flex-wrap gap-4 [&>*]:max-w-xs justify-center sm:justify-start">
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </section>
        <section className="py-5">
            <h1 className="rounded-md py-4 px-2 my-8 max-w-xs  text-2xl sm:text-3xl lg:text-4xl font-semibold">Senior Engineers</h1>
            <div className="cards flex flex-wrap gap-4 [&>*]:max-w-xs justify-center sm:justify-start">
                <Member />
                <Member />
                <Member />
                <Member />
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
    )
}
function Member() {
    return (
    <div className="p-8 border border-transparent hover:border-gray-200 rounded-md w-full  hover:shadow-inner flex flex-row gap-4 max-w-fit cursor-pointer bg-slate-100">
        <div className="avatar border w-20 h-fit aspect-square rounded-full bg-purple-50 flex justify-center items-center text-3xl">
            <Icon icon="mdi:user" className='text-purple-900'/>
        </div>
        <div className=" flex flex-col justify-start items-start">
            <h1 className="font-semibold text-slate-800 text-lg">Tambua Evaristus</h1>
            <span className="text-sm text-slate-600">Lead Software Developer</span>
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
    </div>
    )
}
function Project() {
    return (
        <div className="card w-full sm:max-w-xs rounded-md p-4 shadow-lg border cursor-pointer">
        <div className="image my-2  rounded-md overflow-hidden">
            <img src="https://pbs.twimg.com/media/Fa2Di9bWIAEYTtk?format=jpg&name=small" className="object-cover object-center aspect-video" alt="" />
        </div>
        <div className="card-info">
            <h1 className="text-lg font-semibold text-slate-800">Bohikor</h1>
            <p className="text-sm text-slate-600">Bohikor is mobile application for managing your money. From each stream of income ...</p>
        </div>
        <button className="text-sm bg-purple-600 py-2 my-2 w-1/2 text-slate-100 rounded-md">View</button>
    </div>
    )
}

export default Home;