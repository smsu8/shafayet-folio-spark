
import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thanks for your message! This is a placeholder form - in a real implementation, this would be connected to Formspree or a similar service.");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  // Initialize Googlemaps
  useEffect(() => {
    const initMap = () => {
      const mapElement = document.getElementById("google-map");
      if (mapElement && window.google && window.google.maps) {
        const mapOptions = {
          center: { lat: 50.5841, lng: 8.6784 }, // Coordinates for Gießen, Germany
          zoom: 14,
          styles: [
            {
              featureType: "administrative",
              elementType: "all",
              stylers: [{ saturation: "-100" }]
            },
            {
              featureType: "administrative.province",
              elementType: "all",
              stylers: [{ visibility: "off" }]
            },
            {
              featureType: "landscape",
              elementType: "all",
              stylers: [{ saturation: -100 }, { lightness: 65 }, { visibility: "on" }]
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: [{ saturation: -100 }, { lightness: "50" }, { visibility: "simplified" }]
            },
            {
              featureType: "road",
              elementType: "all",
              stylers: [{ saturation: "-100" }]
            },
            {
              featureType: "road.highway",
              elementType: "all",
              stylers: [{ visibility: "simplified" }]
            },
            {
              featureType: "road.arterial",
              elementType: "all",
              stylers: [{ lightness: "30" }]
            },
            {
              featureType: "road.local",
              elementType: "all",
              stylers: [{ lightness: "40" }]
            },
            {
              featureType: "transit",
              elementType: "all",
              stylers: [{ saturation: -100 }, { visibility: "simplified" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ hue: "#ffff00" }, { lightness: -25 }, { saturation: -97 }]
            },
            {
              featureType: "water",
              elementType: "labels",
              stylers: [{ lightness: -25 }, { saturation: -100 }]
            }
          ]
        };
        
        const map = new window.google.maps.Map(mapElement, mapOptions);
        
        new window.google.maps.Marker({
          position: { lat: 50.5841, lng: 8.6784 },
          map: map,
          title: "Technische Hochschule Mittelhessen"
        });
      }
    };
    
    // If Google Maps API is not loaded, load it
    if (!window.google || !window.google.maps) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBGCQL8Zul8HcG9vZbGgzNQXn9Nk-sXm0I`; // Use a placeholder key - replace with your own
      script.defer = true;
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-28 pb-12 bg-background">
        <div className="section-container">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Me</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="bg-card rounded-lg overflow-hidden shadow-md">
                <div id="google-map" className="h-64 w-full"></div>
                <div className="p-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Address</h3>
                      <p className="text-muted-foreground">
                        Technische Hochschule Mittelhessen<br />
                        Wiesenstraße 14<br />
                        35390 Gießen, Germany
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Phone</h3>
                      <p className="text-muted-foreground">+49 178 886 4657</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Email</h3>
                      <a 
                        href="mailto:sheikhshafayet@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        sheikhshafayet@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{animationDelay: "0.2s"}}>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>
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
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
