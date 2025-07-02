
import React, { useState } from "react";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import { Phone, Mail } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: "academic" | "personal";
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "academic" | "personal">("all");
  
  const projects: Project[] = [
    {
      title: "Frag.jetzt",
      description: "Open-source tool from THM; worked on UI customization, i18n, and Git workflows. Enhanced the user experience and contributed to internationalization efforts.",
      image: "/shafayet-folio-spark/images/fragjetzt.png",
      technologies: ["Angular", "TypeScript", "i18n", "Git"],
      
      category: "academic",
    },
    {
      title: "Scrumptious Cooking App",
      description: "Built with Flutter & Firebase, featuring real-time data synchronization. Served as team lead (Product Owner), managing backlog and coordinating development efforts.",
      image: "/shafayet-folio-spark/images/scrumptious.png",
      technologies: ["Flutter", "Firebase", "Dart", "Scrum"],
      
      category: "academic",
    },
    {
      title: "Compiler construction – language processor & code generation",
      description: "Implementation of a simple compiler using scanner and parser generators. All phases of a compiler were mapped out – from lexical and syntactic analysis and semantic checking to code generation for a stack machine and a simple RISC architecture. The focus was on the practical application of theoretical concepts such as automata, grammars, and compiler architecture.",
      image: "/shafayet-folio-spark/images/c_shell2.png",
      technologies: ["Java", "Code Generation", "Compiler Construction", "Syntax analysis"],
      
      category: "academic",
    },
    {
      title: "Achievement Collector – Academic Achievement Tracker",
      description: "A cross-platform app for managing and analyzing academic performance. Students can view and share their grade overviews and access statistics. Instructors can create new modules, add, or edit grades. The app offers features such as automatic calculation of grade point averages, credit points remaining until graduation, and other performance statistics.",
      image: "/shafayet-folio-spark/images/leistung.png",
      technologies: ["Supabase", "Flutter", "Flutter", "Dart"],
      
      category: "academic",
    },
    {
      title: "Ninja Virtual Machine (C-based VM)",
      description: "Development of a virtual machine in C for a simple object-oriented language. The goal of the project was to implement system-level concepts such as memory management, bytecode interpretation, and low-level abstractions in a practical way. The VM supports elementary language constructs, control structures, and method calls. This project provided in-depth insights into compiler construction, programming language execution, and the implementation of higher abstractions at a lower system level. Highlights: Implementation of custom bytecode and interpreter Memory management on the heap/stack Use of system-level development tools (GCC, GDB) In-depth understanding of CPU-level processes, register handling, and runtime behavior",
      image: "/shafayet-folio-spark/images/ninja_vm2.png",
      technologies: ["C", "Virtual machines", "System-level Development", "GDB debugging" ,"Git"],
     
      category: "academic",
    },
    {
      title: "PostgreSQL Database System",
      description: "Designed and implemented a robust and scalable database system to efficiently manage university course data and student records. The system supports functionalities such as course enrollment, student performance tracking, and instructor assignments, ensuring data integrity and consistency across various operations. Applied advanced SQL queries and normalization techniques to optimize performance and reduce redundancy. Leveraged PostgreSQL for its powerful relational capabilities and reliability in handling complex data relationships. The solution significantly improved data accessibility and administrative efficiency for academic departments and student services.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=350",
      technologies: ["PostgreSQL", "SQL", "Database Design"],
      category: "academic",
    },
    {
      title: "Web Security Analysis Tool",
      description: "Developed a tool for analyzing web applications for common security vulnerabilities and providing remediation suggestions.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&h=350",
      technologies: ["PHP", "JavaScript", "Security"],
      
      category: "personal",
    },
    {
      title: "News App",
      description: "Designed and developed a responsive portfolio website using modern web technologie.",
      image: "/shafayet-folio-spark/images/newsapp.png",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      
      category: "personal",
    },
    {
      title: "Personal Portfolio",
      description: "Designed and developed a responsive portfolio website using modern web technologies.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&h=350",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      
      category: "personal",
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-28 pb-20 bg-background">
        <div className="section-container">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">My Projects</h1>
          
          <div className="mb-8 flex flex-wrap gap-4">
            <button
              onClick={() => setActiveFilter("all")}
              className={cn(
                "px-4 py-2 rounded-md transition-colors",
                activeFilter === "all" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted hover:bg-muted/80"
              )}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter("academic")}
              className={cn(
                "px-4 py-2 rounded-md transition-colors",
                activeFilter === "academic" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted hover:bg-muted/80"
              )}
            >
              Academic Projects
            </button>
            <button
              onClick={() => setActiveFilter("personal")}
              className={cn(
                "px-4 py-2 rounded-md transition-colors",
                activeFilter === "personal" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted hover:bg-muted/80"
              )}
            >
              Personal Projects
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.title} 
                className="project-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 w-full bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap mb-4">
                    {project.technologies.map(tech => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium",
                          "bg-muted text-foreground hover:bg-muted/80 transition-colors"
                        )}
                      >
                        <Github className="h-4 w-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium",
                          "bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                        )}
                      >
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+49 178 886 4657</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:sheikhshafayet@gmail.com" className="font-medium hover:text-primary transition-colors">
                  sheikhshafayet@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Projects;
