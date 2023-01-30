import { Icon } from '@iconify/react'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function MemberProfile() {
  return (
    <div className="max-w-5xl mx-auto">
        <div className="header">
            <div className="min-h-[8rem] border w-full rounded-md relative shadow-inner  my-12">
            <div className="avatar border w-28 h-fit aspect-square rounded-full bg-purple-50 flex justify-center items-center text-3xl overflow-hidden absolute left-1/3 sm:left-[5%] -bottom-8">
                <img src="https://pbs.twimg.com/profile_images/1605890194200207360/4sRtb9LT_400x400.jpg"alt='' className="max-h-full"/>
            </div>
            </div>
            <div className="py-2">
                <h1 className="py-2 font-semibold text-2xl">KIMBOH LOVETTE BANTAR</h1>
                <p className="text-slate-600 py-2">Software Developer Trainee</p>
                <div className="flex flex-row gap-2">
                    <div className="reviews flex flex-row items-center text-purple-900">
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                    </div>
                    <span className="text-purple-800 text-sm">( 25 reviews)</span>
                </div>
            </div>
        </div>

        <header className="w-full py-4 my-2 border-b text-slate-600">
            <div className="flex flex-row flex-wrap gap-8 [&>*]:pb-1">
                <NavLink to="/members" className={({isActive})=> isActive?" border-purple-800 border-b-4":"border-b-transparent border-b-4"} end>
                    Education
                    <span className="hidden sm:inline-block">/Qualifications</span>
                </NavLink>
                <NavLink to="/members/contributions" className={({isActive})=> isActive?"border-b-4 pb-1 border-purple-800":""}>
                    Projects 
                    <span className="hidden sm:inline-block"> /Contributions</span>
                </NavLink>
                <NavLink to="/members/contacts" className={({isActive})=> isActive?"border-b-4 pb-1 border-purple-800":""}>
                    <span className="hidden sm:block">Contact information</span>
                    <span className="sm:hidden">Contacts</span>
                    </NavLink>
            </div>
        </header>
        <Outlet />
    </div>
  )
}


export function Education() {
    return (
        <div className="my-8 divide-y [&>*]:py-4">
            <Certificate />
            <Certificate />
        </div>
    )
}

export function Contributions() {
    return (
        <div className="my-5">
            <table className="w-full divide-y text-sm">
                <thead className="bg-purple-900 text-white [&>*]:py-4">
                    <td></td>
                    <td>Project</td>
                    <td>Contributors</td>
                    <td>Status</td>
                </thead>
                <tr className="[&>*]:py-2 hover:bg-slate-200 text-slate-500 rounded-sm">
                    <td>icon</td>
                    <td className="flex-1">Bohikor</td>
                    <td className="flex flex-row justify-start items-center">
                        <Avatar />
                        <Avatar />
                        <Avatar />
                        <Avatar />
                    </td>
                    <td className="text-green-600">completed</td>
                </tr>
                <tr className="[&>*]:py-2 hover:bg-slate-200 text-slate-500 rounded-sm">
                    <td>icon</td>
                    <td className="flex-1">Cliqets</td>
                    <td className="flex flex-row justify-start items-center">
                        <Avatar />
                        <Avatar />
                    </td>
                    <td className="text-blue-500">in progress</td>
                </tr>
            </table>
        </div>
    )
}


// ============== Helper components ===================
function Certificate(){
    return (
        <div>
            <h1 className="my-1 text-lg text-slate-700 font-semibold">BSc. Mathematics and Computer Science</h1>
            <p className="py-1 text-slate-500">University of Buea</p>
            <p className="py-1 text-purple-900">From 2017 to 2020</p>
            <div className="text-slate-600 my-2">Remark: <span className="px-4 py-1 rounded-lg text-sm bg-purple-200">Excellent</span></div>
        </div>
    )
}

export function Avatar(){
    return (
        <div className="max-h-8 overflow-hidden rounded-full shadow-inner border aspect-square">
            <img src="https://pbs.twimg.com/profile_images/1605890194200207360/4sRtb9LT_400x400.jpg" className="h" alt="" />
        </div>
    )
}

// ====================================================



export function ContactInfo():JSX.Element {
    return (
        <div>
            <div className="rounded-md w-full shadow-inner border p-4 my-8">
                <h1 className="py-4 text-xl font-medium">Contact Information</h1>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <ul className="flex-1 flex flex-col gap-4">
                        <li>
                            <h2 className="text-purple-900 font-medium">
                            <Icon icon="ic:baseline-email" className="inline-block text-xl mr-2" />
                                Email
                            </h2>

                            <ul className="text-sm text-slate-500 px-10 flex flex-col gap-2 py-2 list-disc">
                                <li>kimbohlovette@gmail.com</li>
                                <li>kimboh.lovette@iknite.space</li>
                            </ul>
                        </li>
                        <li>
                            <h2 className="text-purple-900 font-medium">
                            <Icon icon="material-symbols:mobile-friendly-rounded" className="inline-block text-xl mr-2" />
                            Mobile & Whatsapp</h2>

                            <ul className="text-sm text-slate-500 px-10 flex flex-col gap-2 py-2 list-disc">
                                <li>+237 654 11 59 22</li>
                                <li>+237 671 92 70 65</li>
                            </ul>
                        </li>
                        <li>
                            <h2 className="text-purple-900 font-medium">
                            <Icon icon="ph:address-book-fill" className="inline-block text-xl mr-2" />
                            Address Lines</h2>
                            <ul className="text-sm text-slate-500 px-10 flex flex-col gap-2 py-2 list-disc">
                                <li>Razel street, molyko buea</li>
                                <li>Kitchen corner, Untarred malingo, Molyko Buea</li>
                            </ul>
                        </li>
                    </ul>
                    <div className="form flex-1">
                        <div className="name w-full">
                            <label htmlFor="name"
                                className="block py-2">Full Names</label>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                className="border p-2 rounded-md focus:outline-none w-full min-w-0 placeholder:text-sm placeholder:text-slate-400 placeholder:font-extralight text-slate-600" />
                        </div>
                        <div className="email w-full">
                            <label htmlFor="email"
                                className="block py-2">Email</label>
                            <input
                                id="email"
                                name="email"
                                placeholder="johndoe@domain.com"
                                className="border p-2 rounded-md focus:outline-none w-full min-w-0 placeholder:text-slate-400 placeholder:font-extralight placeholder:text-sm text-slate-600"/>
                        </div>
                        <div className="message">
                            <label htmlFor="message"
                                className="block py-2"
                                >Message</label>
                            <textarea 
                            name="message"
                            id="message"
                            cols= {30}
                            rows={4}
                            placeholder="Write message here..."
                            className="border p-2 rounded-md focus:outline-none w-full min-w-0 placeholder:text-sm placeholder:text-slate-400 placeholder:font-extralight text-slate-600">
                            </textarea>
                        </div>
                        <button className="py-2 px-4 my-2 text-sm bg-purple-900 hover:bg-purple-800 hover:scale-[1.01] text-slate-50 rounded-md focus:ring-2 ring-purple-900 ring-offset-1 focus:shadow-lg shadow-purple-500">Send message</button>

                    </div>
                </div>
            </div>
            <Social />
        </div>
    )
}

function Social() {
    return (
        <div className="rounded-md w-full shadow-inner border p-4 my-8 sm:text-center">
           <h1 className="py-4 text-xl font-medium">Contact Information</h1>
           <div className="flex flex-row sm:justify-center my-2 gap-4 text-4xl text-purple-900 [&>*]:cursor-pointer hover:[&>*]:scale-[1.03]">
                <Icon icon="mdi:github" />
                <Icon icon="mdi:linkedin" />
                <Icon icon="ant-design:twitter-square-filled" />
                <Icon icon="fe:facebook" />
                <Icon icon="ri:instagram-fill" />
           </div>
        </div>
    )
}

export default MemberProfile