
import React from "react";
import { School, GraduationCap } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  icon: "school" | "graduation";
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      institution: "Technische Hochschule Mittelhessen (THM)",
      degree: "Bachelor of Science in Computer Science",
      period: "2020 - Present",
      location: "Gießen, Germany",
      description: "Focusing on software development, database systems, and IT security. Participating in various programming projects and research activities.",
      icon: "school"
    },
    {
      institution: "Studienkolleg",
      degree: "T-Kurs (Technical Course)",
      period: "2019 - 2020",
      location: "Germany",
      description: "Preparatory course for international students focusing on mathematics, physics, and computer science to prepare for university studies in Germany.",
      icon: "graduation"
    },
    {
      institution: "Udemy",
      degree: "Various Technical Courses",
      period: "2018 - Present",
      location: "Online",
      description: "Completed multiple courses in web development, mobile app development with Flutter, and database administration to supplement formal education.",
      icon: "graduation"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 h-full w-1 bg-border"></div>
          
          {/* Education items */}
          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <div 
                key={item.institution} 
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline circle */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-4 md:-translate-x-4 flex items-center justify-center">
                  <div className="bg-primary h-8 w-8 rounded-full flex items-center justify-center">
                    {item.icon === "school" ? (
                      <School className="h-4 w-4 text-primary-foreground" />
                    ) : (
                      <GraduationCap className="h-4 w-4 text-primary-foreground" />
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="ml-16 md:ml-0 md:w-5/12 md:pr-8 md:text-right md:mr-auto">
                  <h3 className="text-xl font-semibold text-primary">{item.institution}</h3>
                  <h4 className="font-medium">{item.degree}</h4>
                  <div className="flex flex-wrap text-sm text-muted-foreground mt-1 gap-2">
                    <span>{item.period}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{item.location}</span>
                  </div>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
                
                {/* For medium and above screens, alternate positioning */}
                <div className="hidden md:block md:absolute md:left-1/2 md:w-5/12 md:pl-8">
                  {index % 2 === 1 && (
                    <>
                      <h3 className="text-xl font-semibold text-primary">{item.institution}</h3>
                      <h4 className="font-medium">{item.degree}</h4>
                      <div className="flex flex-wrap text-sm text-muted-foreground mt-1 gap-2">
                        <span>{item.period}</span>
                        <span>•</span>
                        <span>{item.location}</span>
                      </div>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
