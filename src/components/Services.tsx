import { Network, Shield, Server, HardDrive, Cloud, Building2, Camera, Wrench, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: Network,
    title: "Networking",
    description: "SD-WAN, Load Balancer, Enterprise WiFi, Structured Cabling, Routing & Switching, Racks/Smart Rack solutions."
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Firewall/UTM, MDM, WAF, NAC, Disk Encryption, Email Security, and Data Loss Prevention solutions."
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description: "Laptops, Desktops, TVs, Projectors, Audio Video, UPS, OS & Software Licenses, Telephony, and Printers."
  },
  {
    icon: HardDrive,
    title: "DC Infrastructure",
    description: "Server Installation, Virtualization, Hyperconverged, Backup, Storage, and Archival solutions."
  },
  {
    icon: Cloud,
    title: "Cloud & Hosting",
    description: "Microsoft Azure, AWS, Google Cloud, Alibaba Cloud, and managed hosting services."
  },
  {
    icon: Building2,
    title: "Turnkey Projects",
    description: "In-House DC/Server Room, Cooling, Office Space Infra, Power, HVAC, and Electrical solutions."
  },
  {
    icon: Camera,
    title: "Physical Security",
    description: "Fire Suppression, Queue Management, Access Control, Visitor Management, CCTV, and Canteen Management."
  },
  {
    icon: Wrench,
    title: "Professional Services",
    description: "AMC, On-Call Support, Project Management, Implementation, Resident Engineer, and Remote Support."
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our IT Solutions & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs, from networking to cloud services.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group border-t-4 border-t-primary hover:translate-y-[-4px]">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold group"
          >
            View All Services
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
