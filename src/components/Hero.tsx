import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroTech from "@/assets/hero-tech.jpg";
import heroTeam from "@/assets/hero-team.jpg";
import heroCloud from "@/assets/hero-cloud.jpg";

const heroImages = [heroTech, heroTeam, heroCloud];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center overflow-hidden"
    >
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`IT Infrastructure ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary/70" />
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary-foreground w-6"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-primary-foreground/20 mb-6"
          >
            <Monitor className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">ISO 9001:2015 Certified Company</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            End-to-End I.T. Infrastructure Services for Modern Enterprises
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed"
          >
            Empowering businesses with cutting-edge technology solutions in Networking, IT Infrastructure, Cyber Security, Data Center, Cloud, and Hosting services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-8"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg hover:shadow-xl transition-all"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8"
          >
            <div className="bg-accent p-8 text-center md:text-left md:rounded-t-lg shadow-lg">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Monitor className="h-8 w-8 text-accent-foreground" />
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground">IT Infrastructure</h3>
                  <p className="text-sm text-accent-foreground/80">Complete Solutions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary p-8 text-center md:text-left md:rounded-t-lg shadow-lg">
              <a href="#services" className="flex items-center justify-center md:justify-start gap-3 group cursor-pointer">
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground group-hover:underline">SERVICES</h3>
                  <p className="text-sm text-primary-foreground/80">Explore Our Offerings</p>
                </div>
                <ArrowRight className="h-6 w-6 text-primary-foreground group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
              </a>
            </div>
            
            <div className="bg-secondary p-8 text-center md:text-left md:rounded-t-lg shadow-lg">
              <a href="#solutions" className="flex items-center justify-center md:justify-start gap-3 group cursor-pointer">
                <div>
                  <h3 className="text-lg font-semibold text-secondary-foreground group-hover:underline">SOLUTIONS</h3>
                  <p className="text-sm text-secondary-foreground/80">Custom for Your Business</p>
                </div>
                <ArrowRight className="h-6 w-6 text-secondary-foreground group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
