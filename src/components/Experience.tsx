import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Fullstack React + NestJs Developer",
    company: "Squaduplabs LLC",
    location: "Boston, USA",
    period: "Feb 2025 - Presente",
    description: "Desarrollo full-stack en startup de alto crecimiento",
    achievements: [
      "MVP Delivery: Entrega de producto full-stack incluyendo integración con Bubble, flujos de onboarding y bots de Slack usando GAE",
      "Code Quality: Creación de infraestructura de testing e integración end-to-end con GitHub Actions",
      "Infrastructure as Code: Implementación de funcionalidades de envío de emails y colas usando Amazon CDK"
    ],
    tags: ["React", "NestJs", "Bubble", "AWS CDK", "Slack API", "GAE"]
  },
  {
    title: "Fullstack React + Node Developer",
    company: "Valdera Inc",
    location: "San Francisco, USA",
    period: "Abril 2022 - Feb 2025",
    description: "Desarrollo de plataforma empresarial de alta escala",
    achievements: [
      "Feature Delivery: Entrega quincenal de nuevas funcionalidades mejorando la experiencia de usuario",
      "Code Quality: Incremento del 40% en cobertura de tests, reduciendo defectos de producción en 20%",
      "Shared Component Library: Diseño y mantenimiento de biblioteca de componentes reutilizables, acelerando desarrollo en 25%",
      "CI/CD Optimization: Optimización de pipelines con GitHub Actions y GCloud Build, reduciendo tiempo de deploy en 50%",
      "Leadership: Onboarding y mentoría de desarrolladores junior, fomentando cultura de colaboración"
    ],
    tags: ["React", "Node.js", "GitHub Actions", "GCloud", "Testing", "Mentoring"]
  },
  {
    title: "Fullstack React + Node Developer",
    company: "Darwoft S.A",
    location: "Córdoba, Argentina",
    period: "Mayo 2021 - Abril 2022",
    description: "Desarrollo de MVPs y soluciones empresariales",
    achievements: [
      "MVP Development: Liderazgo en desarrollo de MVPs con ReactJS, incrementando velocidad de entrega en 30%",
      "UI/UX Implementation: Desarrollo de componentes estilizados y responsive alineados con estándares modernos",
      "Authentication Systems: Integración de soluciones de autenticación seguras multi-plataforma",
      "Collaboration: Trabajo con equipos cross-funcionales para cumplir deadlines ajustados"
    ],
    tags: ["React", "Node.js", "Authentication", "UI/UX", "MVP Development"]
  },
  {
    title: "Internship - Research & Development",
    company: "Universidad Tecnológica Nacional",
    location: "Córdoba, Argentina",
    period: "Feb 2020 - Feb 2021",
    description: "Investigación y desarrollo de soluciones innovadoras",
    achievements: [
      "Fullstack Development: Desarrollo de soluciones innovadoras usando .NET Core y FastAPI",
      "Technical Documentation: Preparación de documentación detallada para facilitar desarrollo futuro"
    ],
    tags: [".NET Core", "FastAPI", "Python", "Documentation"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-8 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold">
            Experiencia <span className="gradient-text">Profesional</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Timeline View for Desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-primary/20"></div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background z-10"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-500 hover:glow-effect">
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                              <Briefcase className="h-3 w-3" />
                              {exp.company}
                            </div>
                            <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                              {exp.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {exp.tags.slice(0, 3).map((tag, tagIndex) => (
                                <Badge 
                                  key={tagIndex}
                                  variant="secondary"
                                  className="bg-secondary hover:bg-primary transition-colors text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                              {exp.tags.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{exp.tags.length - 3}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compact Grid for Mobile/Tablet */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-500 hover:glow-effect"
              >
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <Briefcase className="h-3 w-3" />
                      {exp.company}
                    </div>
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-1">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {exp.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex}
                          variant="secondary"
                          className="bg-secondary hover:bg-primary transition-colors text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {exp.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{exp.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
