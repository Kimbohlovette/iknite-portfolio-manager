import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="flex justify-center items-center my-16">
            <div>
                <h1 className="text-3xl text-slate-800 py-2">Page Not Found!</h1>
                <p>Page could not be found.</p>
                <Link to="/" className="text-blue-400 my-2">Go Home</Link>
            </div>
        </div>
    );
}

