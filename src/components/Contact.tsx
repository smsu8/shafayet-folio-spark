
import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "62d58ecb-bac5-4a70-9530-4f6de6643143";


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitMessage("");
    
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", WEB3FORMS_ACCESS_KEY);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
    
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formDataToSend,
        });
    
        const result = await response.json();
    
        if (result.success) {
          setSubmitMessage("EMAIL SENT!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          setSubmitMessage("Email could not be sent");
        }
      } catch (error) {
        setSubmitMessage("network error, please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    };
    

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact form */}
          <div className="md:w-3/5 animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="contact-input"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-md font-medium transition-colors duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              
              {submitMessage && (
                <div className="mt-4 p-3 bg-accent/10 text-accent border border-accent/20 rounded-md">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
          
          {/* Contact info */}
          <div className="md:w-2/5 md:pl-10 animate-slide-up" style={{animationDelay: "0.2s"}}>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="mb-6 text-muted-foreground">
                Feel free to reach out if you have any questions or just want to connect. 
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <a href="mailto:sheikhshafayet@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    sheikhshafayet@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Find me on</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="social-icon" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
