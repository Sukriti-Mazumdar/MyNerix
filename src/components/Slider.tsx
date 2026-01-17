import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor } from "lucide-react";

const slides = [
  {
    id: 1,
    image: 'https://netcomsolutions.in/wp-content/uploads/2017/05/b5.jpg',
    title: 'TOTAL I.T INFRASTRUCTURE SOLUTION UNDER ONE ROOF',
    subtitle: 'Building I.T. Infrastructure for modern businesses with comprehensive solutions for network management, security, and technology integration.',
    showContent: true
  },
  {
    id: 2,
    image: 'https://netcomsolutions.in/wp-content/uploads/2017/05/b2.jpg',
    title: 'More than 23 years of experience',
    subtitle: 'Trusted by businesses worldwide for reliable IT solutions and exceptional service.',
    showContent: true
  },
  {
    id: 3,
    image: 'https://netcomsolutions.in/wp-content/uploads/2017/05/b4.jpg',
    title: '',
    subtitle: '',
    showContent: false
  },
  {
    id: 4,
    image: 'https://netcomsolutions.in/wp-content/uploads/2017/05/b3.jpg',
    title: 'IT SECURITY AT ITS BEST',
    subtitle: 'Advanced cybersecurity solutions to protect your business from evolving threats.',
    showContent: true
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000); // 9 seconds as in the original

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                alt={slide.title || `Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary/70" />
            </div>

            {/* Content */}
            {slide.showContent && (
              <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
                    <Monitor className="h-4 w-4 text-primary-foreground" />
                    <span className="text-sm font-medium text-primary-foreground">ISO 9001:2015 Certified Company</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight uppercase">
                    {slide.title}
                  </h1>

                  {slide.subtitle && (
                    <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                      {slide.subtitle}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Bullets */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-2">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-primary-foreground scale-125'
                : 'bg-primary-foreground/50 hover:bg-primary-foreground/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom Info Cards */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4">
            <div className="bg-accent/95 backdrop-blur-sm p-6 text-center md:text-left border-t md:border md:rounded-t-lg border-accent-foreground/10">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Monitor className="h-8 w-8 text-accent-foreground" />
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground">IT Infrastructure</h3>
                  <p className="text-sm text-accent-foreground/80">Complete Solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/95 backdrop-blur-sm p-6 text-center md:text-left border-t md:border md:rounded-t-lg border-primary-foreground/10">
              <a href="#services" className="flex items-center justify-center md:justify-start gap-3 group cursor-pointer">
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground group-hover:underline">SERVICES</h3>
                  <p className="text-sm text-primary-foreground/80">Explore Our Offerings</p>
                </div>
                <ArrowRight className="h-5 w-5 text-primary-foreground group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-secondary/95 backdrop-blur-sm p-6 text-center md:text-left border-t md:border md:rounded-t-lg border-secondary-foreground/10">
              <a href="#solutions" className="flex items-center justify-center md:justify-start gap-3 group cursor-pointer">
                <div>
                  <h3 className="text-lg font-semibold text-secondary-foreground group-hover:underline">SOLUTIONS</h3>
                  <p className="text-sm text-secondary-foreground/80">Custom for Your Business</p>
                </div>
                <ArrowRight className="h-5 w-5 text-secondary-foreground group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;