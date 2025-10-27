import { Github, Linkedin, Mail, MapPin, Calendar, Award, Code2, Database, Globe, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  const quickStats = [
    { label: "Años de experiencia", value: "4+" },
    { label: "Proyectos completados", value: "50+" },
    { label: "Empresas internacionales", value: "3" },
    { label: "Tecnologías dominadas", value: "15+" }
  ];

  const topSkills = [
    "React", "TypeScript", "Node.js", "NestJs", "PostgreSQL", "AWS", "Docker", "Git"
  ];

  const currentRole = {
    title: "Fullstack React + NestJs Developer",
    company: "Squaduplabs LLC",
    location: "Boston, USA",
    period: "Feb 2025 - Presente"
  };

  const keyAchievements = [
    "Desarrollo de MVP completo con arquitectura escalable",
    "40% incremento en cobertura de tests",
    "50% reducción en tiempo de deploy",
    "Liderazgo y mentoría de desarrolladores"
  ];

  return (
    <section className="relative min-h-screen overflow-hidden border-b border-border flex items-center">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10 py-6 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="gradient-text">Agustín Gelos</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Fullstack Developer & Tech Lead
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Córdoba, Argentina</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Disponible para proyectos</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Left Column - Current Role & Stats */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary">
                      <Award className="h-4 w-4" />
                      <span className="font-semibold text-sm">Rol Actual</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{currentRole.title}</h3>
                      <p className="text-xs text-muted-foreground">{currentRole.company}</p>
                      <p className="text-xs text-muted-foreground">{currentRole.location} • {currentRole.period}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary">
                      <Code2 className="h-4 w-4" />
                      <span className="font-semibold text-sm">Estadísticas</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {quickStats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-sm font-bold text-primary">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Center Column - Skills & Achievements */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary">
                      <Database className="h-4 w-4" />
                      <span className="font-semibold text-sm">Skills Principales</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {topSkills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary">
                      <Globe className="h-4 w-4" />
                      <span className="font-semibold text-sm">Logros Clave</span>
                    </div>
                    <ul className="space-y-1.5">
                      {keyAchievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="h-1 w-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact & Quick Info */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary">
                      <Smartphone className="h-4 w-4" />
                      <span className="font-semibold text-sm">Contacto</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-3 w-3 text-muted-foreground" />
                        <span className="text-muted-foreground">agustin.gelos@email.com</span>
                      </div>
                      <div className="flex gap-3 pt-2">
                        <a 
                          href="https://github.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a 
                          href="https://linkedin.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary">
                      <Award className="h-4 w-4" />
                      <span className="font-semibold text-sm">Especialización</span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs text-muted-foreground">
                        <strong>Frontend:</strong> React, Next.js, TypeScript
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <strong>Backend:</strong> Node.js, NestJs, PostgreSQL
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <strong>DevOps:</strong> AWS, Docker, CI/CD
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Desarrollando soluciones full-stack escalables para empresas internacionales
            </p>
            <a 
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Experiencia
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
