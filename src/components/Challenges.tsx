import { CheckCircle, Database, Shield, Network, Server, AlertTriangle, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Challenges = () => {
  const challenges = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Understanding the Technologies & Products",
      description: "Required to build an I.T. Infrastructure"
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Requirement Analysis",
      description: "Of individual Organization"
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Dealing with Infrastructure Change",
      description: "Managing evolving technology needs"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Storage and Availability",
      description: "In case of system crash or failures...Time to recover & restore"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Managing and Validating",
      description: "Continuously the growing I.T. Infrastructure"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Securing the I.T.Infrastructure",
      description: "From external & internal threats and attacks"
    }
  ];

  const services = [
    "Storage Management",
    "Monitoring, Alerting & Auditing",
    "Database Management",
    "Application Management",
    "Network Management",
    "Security Management",
    "Server Management",
    "Server Provisioning"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Challenges Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Challenges of Managing Diverse IT Infrastructure
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6"
            >
              {challenges.slice(0, 3).map((challenge, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary transform hover:translate-x-2">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {challenge.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{challenge.title}</h3>
                        <p className="text-sm text-muted-foreground">{challenge.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6"
            >
              {challenges.slice(3).map((challenge, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary transform hover:translate-x-2">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                        {challenge.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{challenge.title}</h3>
                        <p className="text-sm text-muted-foreground">{challenge.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Why Building Right IT Infrastructure Section */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-card rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Building Right IT Infrastructure and Managing Them is Important?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A robust IT infrastructure is the backbone of modern business operations. It ensures seamless connectivity,
                secure data management, and reliable service delivery. Proper infrastructure management reduces downtime,
                enhances security, and supports business growth through scalable solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Infrastructure Management Service</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{service}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Challenges;
