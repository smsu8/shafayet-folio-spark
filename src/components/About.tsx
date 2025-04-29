
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <p className="text-lg mb-4 animate-slide-up">
              I'm a Computer Science student with a passion for building innovative 
              software solutions. My journey in technology started with a curiosity 
              about how digital systems work, and it evolved into a deep interest 
              in software development and cybersecurity.
            </p>
            <p className="text-lg mb-4 animate-slide-up" style={{animationDelay: "0.1s"}}>
              I have experience working with various programming languages and frameworks, 
              including Java, Flutter, PostgreSQL, PHP, and more. I enjoy both frontend and 
              backend development, and I'm constantly expanding my knowledge in IT security.
            </p>
            <p className="text-lg animate-slide-up" style={{animationDelay: "0.2s"}}>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
              projects, and finding innovative solutions to complex problems.
            </p>
          </div>
          
          <div className="md:w-1/2 bg-card rounded-lg p-6 shadow-md animate-slide-up" style={{animationDelay: "0.3s"}}>
            <h3 className="text-xl font-semibold mb-4 text-primary">Profile</h3>
            <ul className="space-y-3">
              <li className="flex">
                <span className="font-medium w-24">Name:</span> 
                <span>Sheikh Md Shafayet Ullah</span>
              </li>
              <li className="flex">
                <span className="font-medium w-24">Focus:</span> 
                <span>Software Development & IT Security</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-24">Interests:</span> 
                <span>Web Technologies, Cybersecurity, Mobile Development</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-24">Studies:</span> 
                <span>Computer Science at THM</span>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-muted-foreground italic">
                "Computer Science student with experience in Java, Flutter, PostgreSQL, 
                PHP, and IT security. Passionate about software development, web technologies, 
                and cybersecurity."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
