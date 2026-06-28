import { ExperienceCard } from "../Components/ExperienceCard";

export function ExperiencePage() {
  const timelineData= [
    {
      role: "Backend Engineer (Self-directed)",
      project: "Portfolio Projects",
      institution: "Self-driven Development",
      date: "2023 — present",
      description: "Built Central Auth, a production OAuth 2.0 + OIDC server from scratch, followed by NexusAuth SDK — an npm package for consuming the auth server from React applications. Studying microservices architecture and planning an API Gateway to complete the ecosystem.",
      dotColorClass: "bg-accent-primary shadow-[0_0_8px_rgba(59,130,246,0.4)]"
    },
    {
      role: "B.E. Electronics and Computer Engineering",
      project: "7th Semester Focus Matrix",
      institution: "IOE Purwanchal Campus, Dharan",
      date: "2023 — 2027",
      description: "7th semester. Coursework in AI, embedded systems, and computer networks. Backend engineering and authentication systems as a self-directed specialization alongside the degree program.",
      dotColorClass: "bg-neutral-500"
    }
  ];

  return (
    <section id="experience" className="w-full relative bg-main-bg text-text-primary flex items-center justify-center overflow-hidden px-6 py-30">
      <div className="relative z-10 max-w-[75%] w-full flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold tracking-widest text-accent-primary uppercase">
            Experience
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary leading-none">
            Where I've been
          </h2>
        </div>

        <div className="flex flex-col gap-4 mt-4 max-w-4xl">
          {timelineData.map((item, index) => (
            <ExperienceCard 
              key={index}
              role={item.role}
              project={item.project}
              institution={item.institution}
              date={item.date}
              description={item.description}
              dotColorClass={item.dotColorClass}
            />
          ))}
        </div>

      </div>

      {/* Middle 80% screen section breaker line anchor */}
      <div className="absolute bottom-0 left-[10%] right-[10%] border-b border-neutral-800" />
    </section>
  );
}