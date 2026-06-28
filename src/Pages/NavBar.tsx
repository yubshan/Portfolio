import { Button } from "../Components/Button";

// 1. Generic Types
interface NavItem {
  name: string;
  link: string;
}

interface HeaderProps {
  logoText?: string;
  navItems?: NavItem[];
}


// 3. Main Header Component
export function Header({ 
  logoText = "YS", 
  navItems = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ] 
}: HeaderProps) {

    const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    };
    return (
        <header className="sticky top-0 z-50 w-full bg-main-bg/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-[75%] mx-auto h-24 px-6 sm:px-12 flex items-center justify-between">
            
            {/* Logo Section */}
            <a href="/" className="flex items-baseline tracking-tight select-none group">
            <span className="text-text-primary font-bold text-2xl">{logoText}</span>
            <span className="text-accent-primary font-bold text-2xl">.</span>
            </a>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
                <a 
                key={index} 
                href={item.link} 
                className="text-neutral-400 hover:text-neutral-200 text-[18px] font-medium transition-colors duration-200"
                >
                {item.name}
                </a>
            ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
            <Button onClick={handleContactClick}>Get in Touch</Button>
            </div>

        </div>
        </header>
    );
    }