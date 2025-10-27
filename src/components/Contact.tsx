import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "contacto@ejemplo.com",
    href: "mailto:contacto@ejemplo.com"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/agustin-gelos",
    href: "https://linkedin.com"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/agelos",
    href: "https://github.com"
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "Buenos Aires, Argentina",
    href: null
  }
];

const Contact = () => {
  return (
    <section className="py-24 relative bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Trabajemos <span className="gradient-text">Juntos</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all hover:glow-effect group"
              >
                <CardContent className="p-6">
                  {method.href ? (
                    <a 
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary transition-colors">
                        <method.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-muted-foreground">{method.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{method.title}</h3>
                        <p className="text-muted-foreground">{method.value}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-[var(--gradient-card)] border-primary/20 glow-effect">
            <CardContent className="p-8 text-center space-y-6">
              <h3 className="text-2xl font-bold">
                ¿Listo para comenzar tu proyecto?
              </h3>
              <p className="text-muted-foreground text-lg">
                Estoy disponible para nuevas oportunidades y colaboraciones
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 glow-effect"
                asChild
              >
                <a href="mailto:contacto@ejemplo.com">
                  Enviar Mensaje
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
