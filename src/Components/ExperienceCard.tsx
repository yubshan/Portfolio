export interface ExperienceCardProps{
  role: string;
  project: string;
  institution: string;
  date: string;
  description: string;
  dotColorClass: string; 
}

export function ExperienceCard({role, project, institution, date, description, dotColorClass}: ExperienceCardProps){
    return(
        <div className="relative pl-8 md:pl-12 group last:pb-0 pb-12">
            <div className="absolute left-0.75 top-2  bottom-0 w-px bg-neutral-900 group-last:hidden"/>

            <div className={`absolute left-0 top-2 w-2 h-2 rounded-full ring-4 ring-main-bg transition-transform duration-300
                group-hover:scale-125 ${dotColorClass} `}/>

            <div className="w-full rounded-2xl border border-border-main bg-border-main/20 backdrop-blur-xl p-6 sm:p-8 transition-all duration-300 hover:border-neutral-800 hover:bg-border-main/30 shadow-xl shadow-black/5">
        
            {/* Header Metadata Container */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-text-primary tracking-tight">
                {role}
            </h3>
            <span className="text-xs font-mono text-neutral-500 bg-neutral-900/60 border border-neutral-800/60 px-2.5 py-1 rounded-md self-start sm:self-auto">
                {date}
            </span>
            </div>

            {/* Project Context Links */}
            <div className="text-sm font-medium text-blue-400 mb-4">
            {project} <span className="text-neutral-600 mx-1.5">•</span> <span className="text-neutral-400 font-light">{institution}</span>
            </div>

            {/* Summary Details Body Paragraph */}
            <p className="text-text-secondary text-[15px] font-light leading-relaxed">
            {description}
            </p>
            
        </div>
        </div>
    )
}