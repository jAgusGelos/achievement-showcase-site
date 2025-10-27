import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
  detailedDescription?: string;
  projects?: Array<{
    name: string;
    description: string;
    achievements: string[];
  }>;
}

const experiences: ExperienceItem[] = [
  {
    title: "Ingeniero de Software",
    company: "Squadup Labs",
    location: "Remoto",
    period: "2025 - Presente",
    description: "Desarrollador full-stack construyendo plataformas SaaS escalables con tecnologías modernas. Lideró el desarrollo de 3 productos principales sirviendo a empresas de múltiples industrias.",
    achievements: [
      "Desarrolló arquitectura serverless escalable con 3 funciones Lambda especializadas procesando más de 10,000 escaneos mensuales de competidores",
      "Implementó sistema automatizado de escaneo en cuadrícula reduciendo el tiempo de escaneo de 2 horas a 15 minutos por ubicación (mejora del 87.5%)",
      "Optimizó consultas SQL complejas con CTEs y LATERAL JOINs, mejorando el rendimiento de reportes en 75% (de 8 segundos a 2 segundos)",
      "Integró más de 8 servicios externos (Google Maps, Stripe, AWS Location, Slack, PostHog) con 99.9% de disponibilidad"
    ],
    tags: ["NestJS", "React", "TypeScript", "PostgreSQL", "AWS Lambda", "AWS CDK", "Serverless", "TanStack Stack"],
    detailedDescription: "Desarrollador full-stack construyendo plataformas SaaS escalables con tecnologías modernas. Lideró el desarrollo de 3 productos principales sirviendo a empresas de múltiples industrias.",
    projects: [
      {
        name: "Local Business Protection - Plataforma de Monitoreo y Protección SEO Local",
        description: "Sistema SaaS para monitoreo automatizado de competidores en Google Maps y protección de posicionamiento SEO local para negocios.",
        achievements: [
          "Desarrolló arquitectura serverless escalable con 3 funciones Lambda especializadas procesando más de 10,000 escaneos mensuales de competidores",
          "Implementó sistema automatizado de escaneo en cuadrícula reduciendo el tiempo de escaneo de 2 horas a 15 minutos por ubicación (mejora del 87.5%)",
          "Optimizó consultas SQL complejas con CTEs y LATERAL JOINs, mejorando el rendimiento de reportes en 75% (de 8 segundos a 2 segundos)",
          "Integró más de 8 servicios externos (Google Maps, Stripe, AWS Location, Slack, PostHog) con 99.9% de disponibilidad"
        ]
      },
      {
        name: "Afterhour - Plataforma de Asistente de Voz con IA",
        description: "Plataforma SaaS de asistentes de voz con IA para empresas (principalmente firmas legales) manejando llamadas entrantes 24/7 y calificación automática de prospectos.",
        achievements: [
          "Implementó sistema de asistente de voz con IA procesando y analizando llamadas en tiempo real, extrayendo información estructurada de clientes potenciales",
          "Automatizó la calificación de prospectos con algoritmos de IA",
          "Diseñó arquitectura multi-tenant escalable soportando múltiples organizaciones con control de acceso basado en roles"
        ]
      },
      {
        name: "Aptiqude - Plataforma SaaS de Evaluación de Candidatos mediante Tests de IQ",
        description: "Sistema completo de evaluación de talentos permitiendo a las empresas evaluar candidatos mediante tests de IQ con análisis avanzado de rendimiento y gestión integral del proceso de reclutamiento.",
        achievements: [
          "Desarrolló arquitectura multi-tenant escalable con aislamiento de datos por organización, manejando múltiples empresas simultáneamente",
          "Implementó arquitectura serverless en AWS Lambda con despliegue automatizado",
          "Optimizó rendimiento con lazy loading, code splitting y caché con TanStack Query, mejorando tiempos de carga en 40%"
        ]
      }
    ]
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
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [showAllExpanded, setShowAllExpanded] = useState(false);

  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleShowAll = () => {
    if (showAllExpanded) {
      setExpandedCards([]);
      setShowAllExpanded(false);
    } else {
      setExpandedCards(experiences.map((_, index) => index));
      setShowAllExpanded(true);
    }
  };

  const isExpanded = (index: number) => expandedCards.includes(index);

  return (
    <section id="experience" className="py-8 relative pattern-gradient-grid">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 space-y-2">
          <div className="flex justify-between items-center mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleShowAll}
              className="ml-4"
            >
              {showAllExpanded ? 'Ocultar todo' : 'Mostrar todo'}
            </Button>
          </div>
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
                {experiences.map((exp, index) => {
                  // Extract year from period (e.g., "Feb 2025 - Presente" -> "2025")
                  const yearMatch = exp.period.match(/\d{4}/);
                  const year = yearMatch ? yearMatch[0] : '';

                  return (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Timeline dot with year */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                      <div className="w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                      <span className="mt-2 text-base md:text-lg font-bold text-primary bg-background px-3 py-1.5 rounded-md shadow-sm whitespace-nowrap">
                        {year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <Card
                        className="group bg-card border-border hover:border-primary/50 transition-all duration-500 hover:glow-effect cursor-pointer hover:scale-105"
                        onMouseEnter={() => !showAllExpanded && toggleCard(index)}
                        onMouseLeave={() => !showAllExpanded && toggleCard(index)}
                      >
                        <CardContent className="p-6 transition-all duration-500">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-base font-semibold text-muted-foreground transition-all duration-300">
                              <Briefcase className="h-5 w-5" />
                              {exp.company}
                            </div>
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground transition-all duration-300">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>

                            {/* Collapsed View */}
                            <div className={`transition-all duration-500 overflow-hidden ${!isExpanded(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {exp.description}
                              </p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                {exp.tags.slice(0, 3).map((tag, tagIndex) => (
                                  <Badge
                                    key={tagIndex}
                                    variant="secondary"
                                    className="bg-secondary hover:bg-primary transition-colors text-sm"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                                {exp.tags.length > 3 && (
                                  <Badge variant="secondary" className="text-sm">
                                    +{exp.tags.length - 3}
                                  </Badge>
                                )}
                              </div>
                            </div>

                            {/* Expanded View */}
                            <div className={`transition-all duration-500 overflow-hidden ${isExpanded(index) ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                              <div className="space-y-4 mt-4">
                                <p className="text-sm text-muted-foreground">
                                  {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                  {exp.tags.map((tag, tagIndex) => (
                                    <Badge
                                      key={tagIndex}
                                      variant="secondary"
                                      className="bg-secondary hover:bg-primary transition-colors text-sm"
                                    >
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>

                                {exp.projects && exp.projects.length > 0 && (
                                  <div className="space-y-4 mt-4">
                                    <h4 className="text-sm font-semibold text-primary">Proyectos:</h4>
                                    {exp.projects.map((project, projectIndex) => (
                                      <div key={projectIndex} className="bg-muted/50 p-4 rounded-md space-y-3 transition-all duration-300">
                                        <h5 className="text-sm font-semibold">{project.name}</h5>
                                        <p className="text-sm text-muted-foreground">{project.description}</p>
                                        <ul className="space-y-2">
                                          {project.achievements.map((achievement, achIndex) => (
                                            <li key={achIndex} className="text-sm text-muted-foreground flex gap-2">
                                              <span className="text-primary">•</span>
                                              <span>{achievement}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {(!exp.projects || exp.projects.length === 0) && exp.achievements.length > 0 && (
                                  <div className="space-y-3">
                                    <h4 className="text-sm font-semibold text-primary">Logros:</h4>
                                    <ul className="space-y-2">
                                      {exp.achievements.map((achievement, achIndex) => (
                                        <li key={achIndex} className="text-sm text-muted-foreground flex gap-2">
                                          <span className="text-primary">•</span>
                                          <span>{achievement}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Compact Grid for Mobile/Tablet */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-500 hover:glow-effect cursor-pointer hover:scale-105"
                onMouseEnter={() => !showAllExpanded && toggleCard(index)}
                onMouseLeave={() => !showAllExpanded && toggleCard(index)}
              >
                <CardContent className="p-6 transition-all duration-500">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-base font-semibold text-muted-foreground transition-all duration-300">
                      <Briefcase className="h-5 w-5" />
                      {exp.company}
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground transition-all duration-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Collapsed View */}
                    <div className={`transition-all duration-500 overflow-hidden ${!isExpanded(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-secondary hover:bg-primary transition-colors text-sm"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {exp.tags.length > 3 && (
                          <Badge variant="secondary" className="text-sm">
                            +{exp.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Expanded View */}
                    <div className={`transition-all duration-500 overflow-hidden ${isExpanded(index) ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="space-y-4 mt-4">
                        <p className="text-sm text-muted-foreground">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="bg-secondary hover:bg-primary transition-colors text-sm"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {exp.projects && exp.projects.length > 0 && (
                          <div className="space-y-4 mt-4">
                            <h4 className="text-sm font-semibold text-primary">Proyectos:</h4>
                            {exp.projects.map((project, projectIndex) => (
                              <div key={projectIndex} className="bg-muted/50 p-4 rounded-md space-y-3 transition-all duration-300">
                                <h5 className="text-sm font-semibold">{project.name}</h5>
                                <p className="text-sm text-muted-foreground">{project.description}</p>
                                <ul className="space-y-2">
                                  {project.achievements.map((achievement, achIndex) => (
                                    <li key={achIndex} className="text-sm text-muted-foreground flex gap-2">
                                      <span className="text-primary">•</span>
                                      <span>{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}

                        {(!exp.projects || exp.projects.length === 0) && exp.achievements.length > 0 && (
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-primary">Logros:</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="text-sm text-muted-foreground flex gap-2">
                                  <span className="text-primary">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
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
