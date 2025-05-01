import React from "react";
import { Award, Shield } from "lucide-react";
interface CertificateItem {
  title: string;
  issuer: string;
  icon: "award" | "shield";
}
const Certificates: React.FC = () => {
  const certificateItems: CertificateItem[] = [{
    title: "The Complete Web Developer Bootcamp",
    issuer: "Udemy",
    icon: "award"
  }, {
    title: "Grundwissen Cybersecurity",
    issuer: "bereitgestellt von Microsoft und LinkedIn",
    icon: "shield"
  }, {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    icon: "shield"
  },{
    title: "Basic cybersecurity knowledge",
    issuer: "Microsoft and LinkedIn",
    icon: "shield"
  },{
    title: "React Basic Course",
    issuer: "LinkedIn",
    icon: "shield"
  },{
    title: "Bootstrap 5: A first Look",
    issuer: "LinkedIn",
    icon: "shield"
  },{
    title: "Git Basic Course",
    issuer: "LinkedIn",
    icon: "shield"
  }];
  return <section id="certificates" className="py-20 bg-background">
      <div className="section-container">
        <h2 className="section-title">Certificates</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 h-full w-1 bg-border"></div>
          
          {/* Certificate items */}
          <div className="space-y-12">
            {certificateItems.map((item, index) => <div key={item.title} className="relative animate-slide-up" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                {/* Timeline circle */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-4 md:-translate-x-4 flex items-center justify-center">
                  <div className="bg-accent h-8 w-8 rounded-full flex items-center justify-center">
                    {item.icon === "award" ? <Award className="h-4 w-4 text-accent-foreground" /> : <Shield className="h-4 w-4 text-accent-foreground" />}
                  </div>
                </div>
                
                {/* Content */}
                <div className="ml-16 md:ml-0 md:w-5/12 md:pr-8 md:text-right md:mr-auto">
                  <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.issuer}</p>
                </div>
                
                {/* For medium and above screens, alternate positioning */}
                <div className="hidden md:block md:absolute md:left-1/2 md:w-5/12 md:pl-8">
                  {index % 2 === 1 && <>
                      
                      
                    </>}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Certificates;