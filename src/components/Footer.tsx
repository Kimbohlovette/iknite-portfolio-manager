import React from "react";
import { Link } from "react-router-dom";
function Footer() {
    return (
    <footer className="py-8 px-4 sm:px-8 lg:px-12 bg-primary-900 text-slate-200">
        <div className="flex flex-col md:flex-row">
            <div className="sitemap flex-1">
                <h1 className="py-3 text-lg font-semibold text-secondary-600">Sitemap</h1>
                <ul className="flex flex-col gap-2 text-sm font-light">
                    <Link to="/"><li className="hover:text-secondary-400">Home</li></Link>
                    <Link to="/projects"><li className="hover:text-secondary-400">Projects</li></Link>
                    <Link to="/members"><li className="hover:text-slate-300">Members</li></Link>
                    <Link to="/iknite"><li className="hover:text-secondary-400">About Iknite</li></Link>
                </ul>
            </div>
            <div className="socials flex-1">
                <h1 className="py-3 text-lg font-semibold text-secondary-600">Follow Us</h1>
                <ul className="flex flex-col gap-2 text-sm font-light">
                    <a href="#home"><li className="hover:text-secondary-400">LinkedIn</li></a>
                    <a href="#home"><li className="hover:text-secondary-400">Twitter</li></a>
                    <a href="#home"><li className="hover:text-secondary-400">Facebook</li></a>
                    <a href="#home"><li className="hover:text-secondary-400">Official website</li></a>
                </ul>
            </div>
            <div className="partners flex-1">
                <h1 className="py-3 text-lg font-semibold text-secondary-600">Partners</h1>
                <ul className="flex flex-col gap-2 text-sm font-light">
                    <a href="#home"><li className="hover:text-secondary-400">Mountain Hub</li></a>
                    <a href="#home"><li className="hover:text-secondary-400">MOCU</li></a>
                    <a href="#home"><li className="hover:text-secondary-400">Kuelabs</li></a>
                    <a href="#home"><li className="hover:text-secondary-400">Iknite Studio</li></a>
                </ul>
            </div>
        </div>
        <div className="w-full md:text-center py-5">
            <span className="text-xs italic">Copyright&copy;2023. iknitespace.com</span>
        </div>

    </footer>
    );
}

export default Footer;