
import React from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-background to-muted"
    >
      <div className="section-container flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi! I'm <span className="text-primary">Shafayet</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-muted-foreground mb-6">
            Computer Science Student & Developer
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            I build web applications, mobile apps, and backend systems. 
            Passionate about creating meaningful solutions through code.
          </p>
          <div className="space-x-4">
            <Link 
              to="/projects" 
              className={cn(
                "inline-flex items-center px-6 py-3 border border-transparent",
                "rounded-md shadow-sm text-base font-medium text-white bg-primary",
                "hover:bg-primary/90 transition-colors duration-200"
              )}
            >
              View Projects
            </Link>
            <Link
              to="/contact" 
              className={cn(
                "inline-flex items-center px-6 py-3 border border-primary",
                "rounded-md text-base font-medium text-primary",
                "hover:bg-primary/10 transition-colors duration-200"
              )}
            >
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center animate-fade-in" style={{animationDelay: "0.2s"}}>
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-muted rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="/shafayet-folio-spark/images/Ullahfoto.png" 
              alt="Shafayet" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToNextSection} 
          className="p-2 rounded-full bg-primary/10 text-primary"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
