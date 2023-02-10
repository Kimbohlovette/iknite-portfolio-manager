import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { authActions } from "../app/store";
function Auth() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSignIn = ()=>{
        dispatch(authActions.login());
        navigate("/");
    };
    return (
        <div className="min-h-screen w-full fixed bg-white left-0 top-0 overflow-y-scroll">
            <div className="flex justify-center items-center">
                <div className="border w-full max-w-lg px-8 py-4 rounded-sm shadow-inner bg-white my-4">
                    <div className="py-4 transition-all duration-200 ease-linear">
                        <h1 className="py-2 text-slate-800 text-2xl font-medium">Sign into your account</h1>
                        <div className="my-5 flex flex-wrap gap-2 [&>*]:h-fit">
                            <button className="px-4 py-3 border border-slate-300 rounded-md focus:focus:border-primary-400 focus:shadow-lg hover:shadow-primary-200 flex-1 hover:bg-slate-100 w-full">
                                <FcGoogle className="inline pr-2 text-3xl" />Signup with Google</button>
                            <button className="px-4 py-3 border border-slate-300 rounded-md focus:focus:border-primary-400 focus:shadow-lg hover:shadow-primary-200 hover:bg-slate-100 w-full">
                                <AiFillTwitterCircle className="inline pr-2 text-3xl text-blue-400 flex-1" />Signup with Twitter</button>
                        </div>
                        <div className="flex flex-row items-center [&>div]:border-b [&>div]:grow my-8">
                            <div className="inline h-fit"></div>
                            <span className="px-2 text-slate-500">or</span>
                            <div className="inline h-fit"></div>
                        </div>
                        <div className="flex flex-col gap-4 [&>*]:placeholder:text-slate-600">
                            <input type="text" className="block focus:outline-none border border-slate-300 px-4 py-3 min-w-0 w-full rounded-md focus:border-primary-400 focus:shadow-sm focus:shadow-primary-200 hover:bg-slate-50" placeholder="Email or Phone number" />
                            <input type="password" className="block focus:outline-none border px-4 py-3 border-slate-300 min-w-0 w-full rounded-md focus:border-primary-400 focus:shadow-sm focus:shadow-primary-200 hover:bg-slate-50" placeholder="Password" />
                        </div>
                        <p className="my-4 text-slate-600 text-sm">Forgotten your password? <Link to="/auth/signup" className="text-primary-800 font-medium underline underline-offset-4">Reset Password</Link></p>
                        <button className="px-4 py-3 bg-primary-800 text-slate-50 font-bold max-w-xs rounded-md flex-1 hover:bg-primary-900 w-full" onClick={()=>handleSignIn()}>Sign in</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Auth;