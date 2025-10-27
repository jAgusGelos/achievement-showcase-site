import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import ProjectGallery from "./ProjectGallery";

interface Project {
  title: string;
  description: string;
  image: string;
  images: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Sistema de Gestión Empresarial",
    description: "Plataforma integral para gestión de recursos, inventario y procesos empresariales. Incluye dashboards personalizables, reportería avanzada y automatización de workflows.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    images: ["/project1-1.jpg", "/project1-2.jpg", "/project1-3.jpg"],
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Plataforma de E-commerce",
    description: "Solución completa de comercio electrónico con gestión de productos, carrito de compras, pagos integrados y panel administrativo. Sistema de inventario y reportes avanzados.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    images: ["/project2-1.jpg", "/project2-2.jpg", "/project2-3.jpg"],
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Sistema de Reservas",
    description: "Aplicación de reservas multi-negocio con calendario inteligente, pagos integrados, notificaciones automáticas y gestión de recursos. Panel administrativo completo.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    images: ["/project3-1.jpg", "/project3-2.jpg", "/project3-3.jpg"],
    tags: ["React", "NestJs", "Stripe", "Firebase"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-8 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 space-y-2">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-2">
            <span className="text-primary font-semibold text-sm">Prometeo Software - Founder</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Proyectos <span className="gradient-text">Independientes</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Desarrollo de soluciones empresariales innovadoras como founder de Prometeo Software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:glow-effect cursor-pointer"
              onClick={() => openGallery(project)}
            >
              <div className="relative overflow-hidden h-24">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                <div className="absolute top-2 right-2 flex gap-1">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 bg-background/80 rounded hover:bg-primary/20 transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 bg-background/80 rounded hover:bg-primary/20 transition-colors"
                    >
                      <Github className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
              
              <CardContent className="p-3">
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
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
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedProject && (
        <ProjectGallery
          isOpen={isGalleryOpen}
          onClose={closeGallery}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
