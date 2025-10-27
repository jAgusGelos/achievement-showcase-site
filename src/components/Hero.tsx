import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-[var(--gradient-glow)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hola, soy <span className="gradient-text">Agustín Gelos</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Desarrollador Full Stack & Creador de Experiencias Digitales
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transformo ideas en soluciones digitales innovadoras. 
            Especializado en desarrollo web moderno, con pasión por crear 
            productos que generen impacto real.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 glow-effect transition-all"
            >
              Ver Proyectos
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-secondary hover:bg-secondary/80"
            >
              Contactar
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-all hover:glow-effect"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-all hover:glow-effect"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-all hover:glow-effect"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating animation indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
