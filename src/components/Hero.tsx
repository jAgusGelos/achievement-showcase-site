import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden border-b border-border">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="gradient-text">Agustín Gelos</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Fullstack Developer & Tech Lead
            </p>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            +4 años desarrollando soluciones full-stack para empresas internacionales
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
