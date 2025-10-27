import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="space-y-0">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>

      <footer className="bg-muted/30 border-t border-border py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">© 2025 Agustín Gelos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
