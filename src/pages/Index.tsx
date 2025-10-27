import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
      
      <footer className="bg-muted/30 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Agustín Gelos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
