interface SkillRowProps {
  category: string;
  skills: string[];
}


export function SkillRow({ category, skills }: SkillRowProps) {
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 items-center py-4 ">
        <div className="md:col-span-2 text-text-secondary text-base font-medium">
            {category}
        </div>

        <div className="md:col-span-9 flex flex-wrap gap-3">
            {
                skills.map((skill, index) =>(
                    <span 
                    key={index}
                    className="px-4 py-1.5 rounded-xl border text-[14px] font-medium transition-all
                                 duration-200 hover:scale-[1.02] select-none bg-border-main/40
                                  border-border-main/80 text-text-secondary hover:border-accent-primary/50"
                    >
                        {skill}
                    </span>
                ))
            }
        </div>
    </div>
  );
}