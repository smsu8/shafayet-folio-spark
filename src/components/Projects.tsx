
import React from "react";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Frag.jetzt",
      description: "Open-source tool from THM; worked on UI customization, i18n, and Git workflows. Enhanced the user experience and contributed to internationalization efforts.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=350",
      technologies: ["Angular", "TypeScript", "i18n", "Git"],
      githubUrl: "#",
    },
    {
      title: "Scrumptious Cooking App",
      description: "Built with Flutter & Firebase, featuring real-time data synchronization. Served as team lead (Product Owner), managing backlog and coordinating development efforts.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=350",
      technologies: ["Flutter", "Firebase", "Dart", "Scrum"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "PostgreSQL Database System",
      description: "Designed and implemented a comprehensive database system for managing university course data and student information.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=350",
      technologies: ["PostgreSQL", "SQL", "Database Design"],
    },
    {
      title: "News App",
      description: "Designed and developed a responsive portfolio website using modern web technologies.",
      image: "src/lib/newsapp.png",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Web Security Analysis Tool",
      description: "Developed a tool for analyzing web applications for common security vulnerabilities and providing remediation suggestions.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&h=350",
      technologies: ["PHP", "JavaScript", "Security"],
      githubUrl: "#",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
  );
};

export default Projects;
