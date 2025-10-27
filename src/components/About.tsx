import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Globe, Smartphone } from "lucide-react";

const skills = [
  "React", "TypeScript", "Node.js", "Next.js",
  "PostgreSQL", "MongoDB", "Tailwind CSS", "GraphQL",
  "Docker", "AWS", "Git", "Figma"
];

const expertise = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Creación de interfaces modernas y responsive con React, Next.js y las últimas tecnologías web."
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "APIs robustas y escalables con Node.js, bases de datos relacionales y NoSQL."
  },
  {
    icon: Globe,
    title: "Full Stack Solutions",
    description: "Desarrollo completo de aplicaciones web desde la concepción hasta el despliegue."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Experiencias perfectas en todos los dispositivos con diseño mobile-first."
  }
];

const About = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Angular", "Next.js", "TypeScript", "Tailwind" ],
      icon: Code2
    },
    {
      title: "Backend", 
      skills: ["Node.js", "NestJs", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      icon: Database
    },
    {
      title: "DevOps",
      skills: ["Docker", "AWS", "GCloud", "CI/CD", "GCP"],
      icon: Globe
    },
    {
      title: "Testing",
      skills: ["Jest", "Testing Library", "E2E", "Cypress"],
      icon: Smartphone
    }
  ];

  return (
    <section id="about" className="py-16 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="gradient-text">Skills</span> Técnicas
          </h2>
        </div>

        <div className="w-full px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary">
                      <category.icon className="h-5 w-5" />
                      <h4 className="font-semibold text-base">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-secondary hover:bg-primary transition-colors text-sm"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">4+</div>
                  <div className="text-base text-muted-foreground">Años de experiencia</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-base text-muted-foreground">Proyectos completados</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-base text-muted-foreground">Tecnologías dominadas</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
