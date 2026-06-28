
interface StatCardProps{
  title: string;
  subtitle: string;
  titleColorClass: string;
}
export function StatsCard({title, subtitle, titleColorClass}: StatCardProps){
    return (
        <div className="w-full rounded-2xl border border-border-main bg-border-main/20 backdrop-blur-md p-6  flex flex-col 
                        justify-between transition-all duration-300
                         hover:border-neutral-700 hover:bg-border-main/30">
            <h3 className={`text-4xl sm:text-5xl font-bold tracking-bold  ${titleColorClass}`}>{title}</h3>
            <p className="text-sm text-text-secondary font-medium leading-snug mt-4">{subtitle}</p>
        </div>
    )
}