import { ProjectCard } from "../Components/ProjectCard";

export function ProjectPage(){
    const projects = [
        {
            category : "Auth Infrastructure",
            categoryColorClass:"text-accent-primary",
            dotColorClass:"bg-accent-primary",
            title:"Central Auth / Nexus Auth",
            description:"Production-grade OAuth 2.0 + OIDC authorization server built from scratch. Implements the full Authorization Code Flow with PKCE, RSA256 signed JWTs, token introspection, and OIDC discovery — no auth library used for the core flow.",
            tags:["OAuth 2.0", "OIDC", "PKCE", "RSA256", "Node.js", "PostgreSQL", "Prisma"],
            gitHubLink:"https://github.com/yubshan/Central_Auth",
            gitHubLabel:"github.com/yubshan/Central_Auth",
            status:"Live",
            statusVariant:"green",
        },
        {
            category : "NPM SDK",
            categoryColorClass:"text-accent-secondary",
            dotColorClass:"bg-accent-secondary",
            title:"NexusAuth SDK",
            description:"Authentication SDK published to npm. Provides a React AuthProvider and a useNexusAuth() hook that consumes the Central Auth token endpoints — letting any React app integrate SSO with a few lines of code.",
            tags:["React", "npm", "AuthProvider", "Custom hooks", "TypeScript"],
            gitHubLink:"https://github.com/yubshan/nexusauth",
            gitHubLabel:"github.com/yubshan/Central_Auth",
            status:"Published",
            statusVariant:"green",
        },
        {
            category:"Academic / Research",
            categoryColorClass:"text-purple-400",
            dotColorClass:"bg-purple-400",
            title:"SAR Robot Simulator",
            description:"Autonomous Search and Rescue robot simulator in Python/Pygame with a Hybrid Explainable Decision-Making Framework — combining Behavior Trees (py_trees), PPO reinforcement learning (Stable-Baselines3), and Genetic Algorithms (DEAP). Features differential-drive kinematics, a 6-sensor ultrasonic array, probabilistic occupancy grid mapping, and a VL53L5CX ToF sensor simulation for SLAM-quality perception.",
            tags:["Python", "Pygame", "Reinforcement Learning", "Genetic Algorithms", "SLAM"],
            gitHubLink:"https://github.com/yubshan/sar-robot",
            gitHubLabel:"github.com/yubshan/sar-robot",
            status:"On Going",
            statusVariant:"gray",
        }
    ]as const;
    return (
        <section id="projects" className="w-full relative bg-main-bg text-text-primary flex items-center justify-center overflow-hidden px-6 py-30">
                <div className="relative z-10 max-w-[75%] w-full flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <span className="text-xs font-bold tracking-widest text-accent-primary uppercase">
                            Projects
                        </span>

                        <h2 className="text-4xl sm:text-5xl font-bold traking-tight text-text-primary leading-none">
                            Things I've shipped
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {
                            projects.map((project, idx) => (
                                <ProjectCard
                                            key={idx} 
                                            category={project.category}
                                            categoryColorClass={project.categoryColorClass}
                                            dotColorClass={project.dotColorClass}
                                            title={project.title}
                                            description={project.description}
                                            tags={[...project.tags]} 
                                            gitHubLink={project.gitHubLink}
                                            gitHubLabel={project.gitHubLabel}
                                            status={project.status}
                                            statusVariant={project.statusVariant}
                                             />
                            ))
                        }
                       
                    </div>
                </div>
        </section>
    )
}