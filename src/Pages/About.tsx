import { StatsCard } from "../Components/StatsCard";

export function AboutPage() {
  const stats = [
    { title: "2+", subtitle: "Production systems built", titleColorClass: "text-blue-500" },
    { title: "7th", subtitle: "Semester, IOE Purwanchal", titleColorClass: "text-emerald-400" },
    { title: "PERN", subtitle: "Primary stack", titleColorClass: "text-blue-500" },
    { title: "Open", subtitle: "To internship offers", titleColorClass: "text-emerald-400" },
  ];

  return (
    <section id="about" className="w-full relative bg-main-bg text-text-primary flex items-center justify-center overflow-hidden px-6 py-30">
      
      <div className="relative z-10 max-w-[75%] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side Column:) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="text-xs font-bold tracking-widest text-blue-500 uppercase">
            About
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary leading-none mb-4">
            Engineered from first principles
          </h2>
          
          <div className="text-text-secondary text-lg font-light leading-relaxed space-y-6 max-w-2xl">
            <p>
              I'm a 7th-semester Electronics and Computer Engineering student at IOE 
              Purwanchal Campus, Dharan — specializing in backend systems and 
              authentication infrastructure.
            </p>
            <p>
              My approach: understand the protocol before reaching for the library. I've built 
              an OAuth 2.0 + OIDC server from scratch, not because it was required — because 
              knowing how it works at every layer changes how you build everything else.
            </p>
            <p>
              Based in Nepal, relocating to Kathmandu post-graduation. Looking for a backend 
              team with real problems and high standards.
            </p>
          </div>
        </div>

        {/* Right Side Column: 2x2 Stats Grid (Takes 5 of 12 grid spaces on desktop) */}
        <div className="lg:col-span-5 w-full grid grid-cols-2 gap-4 sm:gap-6 self-center">
          {stats.map((stat, index) => (
            <StatsCard 
              key={index}
              title={stat.title}
              subtitle={stat.subtitle}
              titleColorClass={stat.titleColorClass}
            />
          ))}
        </div>

      </div>

      <div className="absolute bottom-0 left-[10%] right-[10%] border-b border-neutral-800" />
    </section>
  );
}