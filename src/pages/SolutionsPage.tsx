import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Building2, Factory, GraduationCap, Stethoscope, Landmark, ShoppingBag } from "lucide-react";

interface Solution {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  features: string[];
}

const SolutionsPage = () => {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  const solutions: Solution[] = [
    {
      id: "enterprise",
      title: "Enterprise Solutions",
      icon: Building2,
      description: "Comprehensive IT infrastructure solutions designed for large enterprises requiring scalable, secure, and high-performance systems.",
      features: [
        "Enterprise network architecture design",
        "Multi-site connectivity solutions",
        "High-availability infrastructure",
        "Unified communications platforms",
        "Enterprise security frameworks",
        "Disaster recovery and business continuity"
      ]
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Industrial",
      icon: Factory,
      description: "Specialized solutions for manufacturing facilities requiring robust, reliable, and industrial-grade IT infrastructure.",
      features: [
        "Industrial ethernet networks",
        "SCADA system integration",
        "Environmental monitoring systems",
        "Industrial wireless solutions",
        "Production floor connectivity",
        "Asset tracking and management"
      ]
    },
    {
      id: "education",
      title: "Education Sector",
      icon: GraduationCap,
      description: "Technology solutions tailored for educational institutions to support modern learning environments.",
      features: [
        "Campus-wide WiFi deployment",
        "Smart classroom technology",
        "Learning management system integration",
        "Student information system support",
        "Secure network access for students",
        "Video conferencing for distance learning"
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare Solutions",
      icon: Stethoscope,
      description: "HIPAA-compliant IT solutions for healthcare providers ensuring secure, reliable patient data management.",
      features: [
        "Medical network infrastructure",
        "HIPAA-compliant security systems",
        "Electronic health record integration",
        "Medical imaging network (PACS)",
        "Telemedicine platforms",
        "Patient monitoring systems"
      ]
    },
    {
      id: "government",
      title: "Government & Public Sector",
      icon: Landmark,
      description: "Secure and compliant IT infrastructure solutions for government agencies and public sector organizations.",
      features: [
        "Secure government networks",
        "Compliance with government standards",
        "Public safety communications",
        "Citizen service platforms",
        "Data center modernization",
        "Identity and access management"
      ]
    },
    {
      id: "retail",
      title: "Retail & Hospitality",
      icon: ShoppingBag,
      description: "Customer-focused IT solutions for retail and hospitality businesses to enhance customer experience.",
      features: [
        "Point-of-sale system integration",
        "Customer WiFi solutions",
        "Digital signage networks",
        "Inventory management systems",
        "Multi-location connectivity",
        "Customer analytics platforms"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Industry Solutions</h1>
            <p className="text-xl opacity-90">Tailored IT Infrastructure for Every Sector</p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Solutions by Industry</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We understand that different industries have unique requirements. Our specialized solutions 
                are designed to address the specific challenges and opportunities in your sector.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <div
                  key={solution.id}
                  onClick={() => setSelectedSolution(solution)}
                  className="group cursor-pointer bg-muted/30 rounded-lg p-6 hover:bg-primary/5 border border-border hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <solution.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground ml-4">{solution.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{solution.description}</p>
                  <span className="text-primary font-semibold group-hover:underline">Learn More →</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              We work with businesses across all sectors. Contact us to discuss how we can create 
              a custom solution tailored to your specific needs.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />

      {/* Solution Detail Dialog */}
      <Dialog open={!!selectedSolution} onOpenChange={() => setSelectedSolution(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center mb-2">
              {selectedSolution && (
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
                  <selectedSolution.icon className="h-6 w-6" />
                </div>
              )}
              <DialogTitle className="text-2xl">{selectedSolution?.title}</DialogTitle>
            </div>
            <DialogDescription className="text-base pt-2">
              {selectedSolution?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Key Features:</h4>
            <ul className="space-y-2">
              {selectedSolution?.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SolutionsPage;
