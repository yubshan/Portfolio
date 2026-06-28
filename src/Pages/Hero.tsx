import { Button } from "../Components/Button";

export function HeroSection() {
    const handleContactClick = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    }
    const handleProjectsClick = () => {
        const contactSection = document.getElementById("projects");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    }
  return (
    <section>
        {/* The main section container is relative */}
        <div className="w-full min-h-[calc(100vh-6rem)] relative bg-main-bg text-text-primary flex items-center justify-center overflow-hidden px-6 py-30">

            {/* Glowing atmospheric background element */}
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 pointer-events-none select-none opacity-20 mix-blend-screen blur-[120px] rounded-full bg-linear-to-r from-accent-primary to-accent-secondary"
                aria-hidden="true"
            />
            
            {/* Main content grid wrapper (defines our 80% width guideline) */}
            <div className="relative z-10 max-w-[75%] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">  
                
                {/* Left Side: Copywriting Content */}
                <div className="flex flex-col items-start gap-6">
                   <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary animate-pulse" />
                        Available for internships
                    </div>

                    <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-text-secondary leading-none">
                        Yubshan Shrestha<br/>
                        <span className="text-accent-primary">Backend</span> 
                        <span className="text-text-primary"> engineer</span>
                    </h1>
                    <p className="text-text-secondary text-lg max-w-md font-light leading-relaxed">
                        Building the systems that power products
                        — authentication infrastructure, API design,
                        and distributed services that hold up under pressure.
                    </p>
                    
                    <div className="flex gap-4 mt-2">   
                        <Button onClick={handleProjectsClick}>View Projects</Button>
                        <Button  onClick={handleContactClick}>Contact me</Button>
                    </div>
                </div>

                {/* Right Side: Mock Terminal Panel */}
                <div className="w-full max-w-lg justify-self-center lg:justify-self-end rounded-2xl border border-border-main bg-border-main/30 backdrop-blur-xl p-6 shadow-2xl shadow-black/40">
                    <div className="flex items-center justify-between mb-6 border-b border-border-main pb-3">
                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-500/80" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <span className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-xs text-text-secondary font-mono">central-auth — node</span>
                        <div className="w-12" /> 
                    </div>

                    <pre className="font-mono text-sm text-text-primary space-y-2 overflow-x-auto">
                        <div><span className="text-neutral-500">~/central-auth $</span> node server.js</div>
                        <div className="text-neutral-500">✓ PostgreSQL connected</div>
                        <div className="text-neutral-500">✓ Redis cache ready</div>
                        <div className="text-neutral-500">✓ JWKS endpoint live</div>
                        <div className="text-accent-secondary">→ Listening on :3000</div>

                        <div className="pt-2"><span className="text-neutral-500">~/central-auth $</span> curl /oauth/token </div>
                        <div>{`{`}</div>
                        <div className="pl-4">
                            <span className="text-blue-400">"token_type"</span>: <span className="text-emerald-400">"Bearer"</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-blue-400">"access_token"</span>: <span className="text-emerald-400">"eyJ..."</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-blue-400">"expires_in"</span>: <span className="text-amber-500">3600</span>
                        </div>
                        <div>{`}`}</div>

                        <div className="pt-2 flex items-center gap-1.5">
                            <span className="text-neutral-600 font-mono">~/central-auth $</span> 
                            <span className="inline-block w-1.5 h-4 bg-accent-primary animate-[pulse_0.9s_infinite_steps(1)]" />
                        </div>
                    </pre>
                </div>
            </div>

            <div className="absolute bottom-0 left-[10%] right-[10%] border-b border-neutral-800" />

        </div>
    </section>
  );
}