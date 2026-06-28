import { SkillRow } from "../Components/SkillRow";

export function SkillPage() {
    const knowledges : {stack:string, skill: string[]}[] = [
        {
            stack : "Backend", 
            skill:["Node.js", "Express", "PostgreSQL","MongoDb", "Mongoose", "Prisma", "REST APIs"]
        }, 
        {
            stack : "Auth",
            skill: ["OAuth 2.0", "OIDC", "PKCE", "JWKS"]
        },
        {
            stack : "Frontend", 
            skill:["Html", "CSS", "Javascript", "React", "Tailwind CSS" ]
        },
        {
            stack: "Tooling", 
            skill:["Git", "Docker", "Manjaro Linux", "npm packages"]
        },
        {
            stack: "Learning", 
            skill:["Microservice", "API Gateways", "Python / Pygame"]
        }
    ]
    return (
        <section id="skills" className="w-full relative bg-main-bg text-text-primary flex items-center justify-center overflow-hidden px-6 py-30">
            <div className="relative z-10 max-w-[75%] w-full flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <span className="text-xs font-bold tracking-widest text-accent-primary uppercase">
                        Skills
                    </span>  
                    <h2 className="text-4xl sm:text-5xl font-bold traking-tight text-text-primary leading-none">
                        What I work with
                    </h2>
                </div>
                <div className="flex flex-col gap-4 mt-4 max-w-4xl">
                    {knowledges.map((knowledge, index)=>(
                        <SkillRow key={index} category={knowledge.stack} skills={knowledge.skill} />
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-[10%] right-[10%] border-b border-neutral-800" />
        </section>
    );
}