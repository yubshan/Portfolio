export function ContactPage() {
  return (
    <section id="contact" className="w-full relative bg-main-bg text-text-primary flex items-center justify-center overflow-hidden px-6 py-30">
      <div className="max-w-3xl w-full flex flex-col items-center text-center gap-8">
        
        <span className="text-xs font-bold tracking-widest text-accent-primary uppercase">
          Contact
        </span>
        
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
          Let's build something real.
        </h2>
        
        <p className="text-neutral-400 text-[16px] font-light leading-relaxed max-w-xl">
          Open to backend internship roles focused on systems, security, and infrastructure architecture. If you care about correctness, let's connect.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-4 text-sm font-medium tracking-wide">
          
          <a 
            href="mailto:yubshanshrestha@gmail.com"
            className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-1.5"
          >
            Email
          </a>

          <span className="text-neutral-800 hidden sm:inline">/</span>

          <a 
            href="https://github.com/yubshan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-text-primary transition-colors duration-200"
          >
            GitHub
          </a>

          <span className="text-neutral-800 hidden sm:inline">/</span>

          <a 
            href="https://www.linkedin.com/in/yubshan-shrestha-8536a8299/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-text-primary transition-colors duration-200"
          >
            LinkedIn
          </a>

        </div>
      </div> 
        
    </section>
  );
}