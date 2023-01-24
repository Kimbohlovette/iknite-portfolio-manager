function Footer() {
    return (
    <footer className="py-8 px-4 sm:px-8 lg:px-12 bg-purple-900 text-slate-50">
        <div className="flex flex-col md:flex-row">
            <div className="sitemap flex-1">
                <h1 className="py-3 text-lg font-semibold">Sitemap</h1>
                <ul className="flex flex-col gap-2 text-sm font-light">
                    <a href="#home"><li className="hover:text-slate-300">Home</li></a>
                    <a href="#home"><li className="hover:text-slate-300">Projects</li></a>            
                    <a href="#home"><li className="hover:text-slate-300">Members</li></a>                
                    <a href="#home"><li className="hover:text-slate-300">About Iknite</li></a>
                </ul>
            </div>
            <div className="sitemap flex-1">
                <h1 className="py-3 text-lg font-semibold">Sitemap</h1>
                <ul className="flex flex-col gap-2 text-sm font-light">
                    <a href="#home"><li className="hover:text-slate-300">Home</li></a>
                    <a href="#home"><li className="hover:text-slate-300">Projects</li></a>            
                    <a href="#home"><li className="hover:text-slate-300">Members</li></a>                
                    <a href="#home"><li className="hover:text-slate-300">About Iknite</li></a>
                </ul>
            </div>
            <div className="sitemap flex-1">
                <h1 className="py-3 text-lg font-semibold">Sitemap</h1>
                <ul className="flex flex-col gap-2 text-sm font-light">
                    <a href="#home"><li className="hover:text-slate-300">Home</li></a>
                    <a href="#home"><li className="hover:text-slate-300">Projects</li></a>            
                    <a href="#home"><li className="hover:text-slate-300">Members</li></a>                
                    <a href="#home"><li className="hover:text-slate-300">About Iknite</li></a>
                </ul>
            </div>
        </div>
        <div className="w-full md:text-center py-5">
            <span className="text-xs italic">Copyright&copy;2023. iknitespace.com</span>
        </div>

    </footer>
    )
}

export default Footer;