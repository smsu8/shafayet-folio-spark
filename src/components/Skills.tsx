
import React from "react";
import { cn } from "@/lib/utils";

interface SkillCategory {
  title: string;
  items: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React"]
    },
    {
      title: "Backend",
      items: ["PHP", "Java", "Node.js"]
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Firebase" , "Supabase"]
    },
    {
      title: "Others",
      items: ["Flutter", "PostgreSQL", "MySQL", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className={cn(
                "bg-card rounded-lg p-6 shadow-md transition-all duration-300",
                "hover:shadow-lg hover:-translate-y-1 animate-slide-up"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap">
                {category.items.map(skill => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-slide-up" style={{animationDelay: "0.4s"}}>
          <h3 className="text-xl font-semibold mb-4">My Development Process</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-0">
            <div className="w-full md:w-1/5 p-4">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2">
                <span className="text-lg font-semibold">1</span>
              </div>
              <h4 className="text-lg font-medium">Research</h4>
            </div>
            <div className="w-full md:w-1/5 p-4">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2">
                <span className="text-lg font-semibold">2</span>
              </div>
              <h4 className="text-lg font-medium">Plan</h4>
            </div>
            <div className="w-full md:w-1/5 p-4">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2">
                <span className="text-lg font-semibold">3</span>
              </div>
              <h4 className="text-lg font-medium">Develop</h4>
            </div>
            <div className="w-full md:w-1/5 p-4">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2">
                <span className="text-lg font-semibold">4</span>
              </div>
              <h4 className="text-lg font-medium">Test</h4>
            </div>
            <div className="w-full md:w-1/5 p-4">
              <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2">
                <span className="text-lg font-semibold">5</span>
              </div>
              <h4 className="text-lg font-medium">Deliver</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
