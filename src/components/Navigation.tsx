
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      // Update active section based on scroll position on home page
      if (window.location.pathname === "/") {
        const sections = ["home", "about", "skills", "education", "certificates", "contact"];
        
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/projects", label: "Projects" },
    { id: "/contact", label: "Contact" },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    
    // If on home page and clicking home link, scroll to top
    if (window.location.pathname === "/" && path === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-xl tracking-tight">
            <Link to="/" className="text-primary">Shafayet<span className="text-accent">.</span></Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "nav-link",
                      (window.location.pathname === item.id || 
                       (window.location.pathname === "/" && item.id === "/")) && "active"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-md p-2 inline-flex items-center justify-center text-muted-foreground hover:text-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium w-full text-left",
                (window.location.pathname === item.id || 
                 (window.location.pathname === "/" && item.id === "/")) 
                  ? "text-accent font-semibold"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
