import { Icon } from '@iconify/react';
const studentImage = require("../shared/student.png")
function Home() {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 py-8">
            <div className="text flex justify-start items-center min-h-[45vh]">
                <div>
                <span className="inline-block text-3xl sm:text-4xl lg:text-5xl font-bold w-4/5 sm:w-full xl:w-4/5">
                    Showcasing Iknite Space talents
                </span>
                <span className="inline-block my-4 w-3/4 font-medium text-slate-800">Get to know more about Iknite Space talents and their projects here.</span>
                <button className="block text-sm py-2 px-4 my-4 bg-purple-800 text-slate-50 rounded-md shadow-sm hover:bg-purple-900">
                <Icon icon="clarity:employee-solid" className="inline-block mr-2 text-base" />
                    Hire an Expert</button>
                </div>
            </div>
            <div className="caption flex justify-center items-center">
                <img src={studentImage} className="object-cover object-center aspect-square w-3/4" alt="" />
            </div>
        </div>
        <Projects />
    </div>
  );
}
export default Home;