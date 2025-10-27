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
    title: "E-Commerce Platform",
    description: "Plataforma completa de comercio electrónico con carrito de compras, procesamiento de pagos y gestión de inventario. Incluye panel de administración y analytics en tiempo real.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones push y sincronización multi-dispositivo. Diseño intuitivo y productivo.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop",
    tags: ["TypeScript", "Firebase", "React", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Dashboard analítico para redes sociales con métricas en tiempo real, generación de reportes y programación de contenido. Integración con múltiples plataformas.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
    tags: ["Next.js", "GraphQL", "MongoDB", "Redis"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio CMS",
    description: "Sistema de gestión de contenido personalizado para portfolios creativos. Editor visual drag-and-drop, optimización SEO y despliegue automático.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    tags: ["React", "Supabase", "Vercel", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Una selección de trabajos que demuestran mi experiencia en desarrollo full-stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:glow-effect animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.liveUrl && (
                    <Button 
                      variant="default"
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      variant="secondary"
                      size="sm"
                      className="bg-secondary hover:bg-secondary/80"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                  )}
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
