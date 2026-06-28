// 2. Reusable Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'ghost';
}


export function Button({ children, variant = 'outline', className = '', ...props }: ButtonProps) {
  const baseStyles = "px-5 py-3 text-sm font-bold rounded-lg transition-all duration-200 whitespace-nowrap";
  const variants = {
    outline: "border border-neutral-700 hover:border-neutral-500 text-neutral-100 hover:bg-neutral-800/40",
    ghost: "text-neutral-400 hover:text-neutral-100 p-2 rounded-lg hover:bg-neutral-800"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
