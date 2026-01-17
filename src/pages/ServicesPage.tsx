import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Network, Shield, Server, HardDrive, Cloud, Building2, Camera, Wrench } from "lucide-react";

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: "networking",
      title: "Networking",
      icon: <Network className="h-12 w-12" />,
      description: "Complete networking solutions for seamless connectivity and infrastructure management.",
      details: [
        "SD-WAN Implementation",
        "Load Balancer Solutions",
        "Enterprise WiFi Deployment",
        "Structured Cabling",
        "Routing & Switching",
        "Racks/Smart Rack Installation"
      ]
    },
    {
      id: "cyber-security",
      title: "Cyber Security",
      icon: <Shield className="h-12 w-12" />,
      description: "Comprehensive security solutions to protect your data and infrastructure from threats.",
      details: [
        "Firewall/UTM Configuration",
        "Mobile Device Management (MDM)",
        "Web Application Firewall (WAF)",
        "Network Access Control (NAC)",
        "Disk Encryption Solutions",
        "Email Security",
        "Data Loss Prevention (DLP)"
      ]
    },
    {
      id: "it-infra",
      title: "IT Infrastructure",
      icon: <Server className="h-12 w-12" />,
      description: "End-to-end IT infrastructure solutions for modern business environments.",
      details: [
        "Laptops & Desktops",
        "TVs & Projectors",
        "Audio Video Solutions",
        "UPS Systems",
        "OS & Software Licenses",
        "Telephony Solutions",
        "Printers & Scanners",
        "Telephone EPABX Systems"
      ]
    },
    {
      id: "dc-infra",
      title: "DC Infrastructure",
      icon: <HardDrive className="h-12 w-12" />,
      description: "Complete datacenter infrastructure solutions with focus on reliability and scalability.",
      details: [
        "Server Installation & Configuration",
        "Virtualization Solutions",
        "Hyperconverged Infrastructure",
        "Backup & Recovery",
        "Storage Solutions",
        "Archival Services"
      ]
    },
    {
      id: "cloud-hosting",
      title: "Cloud & Hosting",
      icon: <Cloud className="h-12 w-12" />,
      description: "Cloud platform services and hosting solutions for your business needs.",
      details: [
        "Microsoft Azure",
        "Amazon Web Services (AWS)",
        "Google Cloud Platform",
        "Alibaba Cloud",
        "Managed Hosting Services",
        "Cloud Migration Support"
      ]
    },
    {
      id: "turnkey-projects",
      title: "Turnkey Projects",
      icon: <Building2 className="h-12 w-12" />,
      description: "Complete turnkey solutions for office and datacenter setup.",
      details: [
        "In-House DC/Server Room Setup",
        "Cooling Solutions",
        "Office Space Infrastructure",
        "Power Solutions",
        "HVAC Systems",
        "Electrical Jobs"
      ]
    },
    {
      id: "physical-security",
      title: "Physical Security",
      icon: <Camera className="h-12 w-12" />,
      description: "Advanced physical security systems for comprehensive protection.",
      details: [
        "Fire Suppression Systems",
        "Queue Management",
        "Access Control Systems",
        "Visitor Management",
        "CCTV Installation",
        "Canteen Management Systems"
      ]
    },
    {
      id: "professional-services",
      title: "Professional Services",
      icon: <Wrench className="h-12 w-12" />,
      description: "Expert professional services for ongoing support and maintenance.",
      details: [
        "Annual Maintenance Contracts (AMC)",
        "On-Call Support",
        "Project Management",
        "Implementation Services",
        "Resident Engineer Services",
        "Remote Support"
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl opacity-90 max-w-2xl mx-auto"
            >
              Experience the difference that a committed and innovative IT partner can make. 
              Let's work together to build a secure, efficient, and technologically advanced future for your business.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8, 
                    transition: { duration: 0.3 } 
                  }}
                  onClick={() => setSelectedService(service)}
                  className="group cursor-pointer overflow-hidden rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card"
                >
                  <div className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                  <div className="bg-primary hover:bg-primary-dark transition-colors p-3 text-center">
                    <span className="text-primary-foreground text-sm font-semibold">VIEW DETAILS</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Service Detail Dialog */}
      <AnimatePresence>
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-3">
                <span className="text-primary">{selectedService?.icon}</span>
                {selectedService?.title}
              </DialogTitle>
              <DialogDescription className="text-base pt-4">
                {selectedService?.description}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Services Include:</h4>
              <ul className="grid md:grid-cols-2 gap-2">
                {selectedService?.details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-2">✓</span>
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </DialogContent>
        </Dialog>
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;
