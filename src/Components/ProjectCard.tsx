interface ProjectCardProps {
  category: string;
  categoryColorClass: string; 
  dotColorClass: string;      
  title: string;
  description: string;
  tags: string[];
  gitHubLink: string;
  gitHubLabel: string;
  status: string;
  statusVariant: 'green' | 'gray';
}

export function ProjectCard({
  category,
  categoryColorClass,
  dotColorClass,
  title,
  description,
  tags,
  gitHubLink,
  gitHubLabel,
  status,
  statusVariant
}: ProjectCardProps) {
  
  const statusStyles = {
    green: "bg-accent-secondary/10 border-accent-secondary/20 text-emerald-400",
    gray: "bg-border-main/10 border-text-primary/20 text-text-secondary"
  };

  return (
    <div className="w-full rounded-2xl border border-border-main bg-border-main/20 
    backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300
     hover:border-accent-primary/50 shadow-xl shadow-black/10">
      
      <div>
        {/* Category Label */}
        <div className={`flex items-center gap-2 text-xs font-bold tracking-widest uppercase ${categoryColorClass}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${dotColorClass}`} />
          {category}
        </div>

        {/* Project Title */}
        <h3 className="text-2xl font-bold text-text-primary mt-4 tracking-tight">
          {title}
        </h3>

        {/* Project Body Text */}
        <p className="text-text-secondary text-[15px] font-light leading-relaxed mt-3">
          {description}
        </p>

        {/* Tech Stack Pills List */}
        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 text-xs font-medium rounded-lg bg-neutral-900/50 border border-neutral-800/80 text-neutral-400 select-none"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Links / Status Indicators */}
      <div className="flex items-center justify-between mt-8 pt-4 border-t border-neutral-900/40">
        <a 
          href={gitHubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium font-mono"
        >
          {/* Minimal Inline GitHub SVG Icon */}
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          {gitHubLabel}
        </a>

        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${statusStyles[statusVariant]}`}>
          {status}
        </span>
      </div>

    </div>
  );
}