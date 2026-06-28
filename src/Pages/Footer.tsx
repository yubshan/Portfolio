export function Footer(){
    return (
        <footer className="w-full bg-main-bg py-8 px-6  flex items-center justify-center border border-neutral-800">
            <div className="max-w-[75%] w-full flex flex-col sm:flex-row items-center 
            justify-between gap-4 text-xs font-medium text-neutral-500 select-none" >
                <div className="tracking-tight text-sm">
                    <span className="text-text-primary font-bold">Yubshan</span>
                    <span className="text-accent-primary font-bold">.</span>
                </div>
                <div className="font-light tracking-wide">
                    © 2026 Yubshan Shrestha
                </div>
                <nav className="flex items-center gap-6 text-neutral-400 font-normal">
                    <a 
                        href="https://github.com/yubshan" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-text-primary transition-colors duration-200"
                    >
                        GitHub
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/yubshan-shrestha-8536a8299/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-text-primary transition-colors duration-200"
                    >
                        LinkedIn
                    </a>
                    {/* update needed : upload pdf */}
                    <a 
                        href="/resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-text-primary transition-colors duration-200"
                    >
                        Resume
                    </a>
                </nav>
            </div>

        </footer>
    )
}