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
  return (
    <section id="about" className="py-12 md:py-16 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Skills</span> Técnicas
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-primary">Frontend</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "Next.js", "TypeScript", "Tailwind"].map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary hover:bg-primary transition-colors text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-primary">Backend</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Node.js", "NestJs", "PostgreSQL", "MongoDB"].map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary hover:bg-primary transition-colors text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-primary">DevOps</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Docker", "AWS", "GCloud", "CI/CD"].map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary hover:bg-primary transition-colors text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-primary">Testing</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Jest", "Testing Library", "E2E"].map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary hover:bg-primary transition-colors text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
