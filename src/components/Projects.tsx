import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Sistema de Gestión Empresarial",
    description: "Plataforma integral para gestión de recursos, inventario y procesos empresariales. Incluye dashboards personalizables, reportería avanzada y automatización de workflows.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Plataforma de E-Learning",
    description: "Solución completa de aprendizaje online con gestión de cursos, seguimiento de progreso, evaluaciones interactivas y certificaciones. Sistema de videoconferencia integrado.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "WebRTC", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Sistema de Reservas",
    description: "Aplicación de reservas multi-negocio con calendario inteligente, pagos integrados, notificaciones automáticas y gestión de recursos. Panel administrativo completo.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    tags: ["React", "NestJs", "Stripe", "Firebase"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Dashboard Analítico",
    description: "Plataforma de visualización de datos en tiempo real con KPIs personalizables, reportes automatizados y predicciones basadas en ML. Integración con múltiples fuentes de datos.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    tags: ["React", "Python", "TensorFlow", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 space-y-2">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-2">
            <span className="text-primary font-semibold text-sm">Prometeo Software</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Proyectos <span className="gradient-text">Independientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:glow-effect"
            >
              <div className="relative overflow-hidden h-32">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-xs line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-2 pt-0">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary transition-colors text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
