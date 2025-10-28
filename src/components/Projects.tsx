import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import ProjectGallery from "./ProjectGallery";
import { useTranslation } from "react-i18next";

interface Project {
  title: string;
  description: string;
  image: string;
  images: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const getProjects = (t: any): Project[] => [
  {
    title: t("projects.items.erp.title"),
    description: t("projects.items.erp.description"),
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    images: ["/erp-1.png", "/erp-2.png", "/erp-3.png"],
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: t("projects.items.ecommerce.title"),
    description: t("projects.items.ecommerce.description"),
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    images: ["/eccom-1.png", "/eccom-2.png", "/eccom-3.png"],
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: t("projects.items.booking.title"),
    description: t("projects.items.booking.description"),
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    images: ["/beauty-1.png", "/beauty-2.png", "/beauty-3.png"],
    tags: ["React", "NestJs", "Stripe", "Firebase"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  const { t } = useTranslation();
  const projects = getProjects(t);
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
    <section id="projects" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 space-y-2">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-2">
            <span className="text-primary font-semibold text-base">{t("projects.founder")}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("projects.title")} <span className="gradient-text">{t("projects.subtitle")}</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
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
              
              <CardContent className="p-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full mt-2 text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      openGallery(project);
                    }}
                  >
                    {t("projects.viewMore")}
                  </Button>
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
