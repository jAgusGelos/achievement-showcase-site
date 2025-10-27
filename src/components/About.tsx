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
    <section className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Sobre <span className="gradient-text">Mí</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desarrollador apasionado por crear soluciones tecnológicas que marcan la diferencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Software Engineer con más de 4 años de experiencia especializado en React, Node.js y 
                pipelines CI/CD. Fundador de <span className="text-primary font-semibold">Prometeo Software</span>, 
                donde desarrollo soluciones personalizadas para empresas.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Mi experiencia abarca desde startups en Boston hasta empresas consolidadas en San Francisco, 
                trabajando como contractor full-stack. Experto en construir aplicaciones escalables, 
                optimizar workflows y mentorar equipos para entregar soluciones de impacto.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Combino sólidas habilidades técnicas con liderazgo, habiendo aumentado cobertura de tests 
                en 40%, reducido tiempos de deploy en 50%, y acelerado desarrollo mediante bibliotecas de 
                componentes reutilizables.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Tecnologías & Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="text-base px-4 py-2 bg-secondary hover:bg-primary transition-all hover:glow-effect"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-effect group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary transition-colors">
                    <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
