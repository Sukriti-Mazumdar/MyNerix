import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, Globe, CheckCircle, TrendingUp, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver exceptional IT solutions that drive efficiency, security, and growth for our clients. We strive to understand your unique needs and tailor our services to ensure your business thrives in the digital age."
    },
    {
      icon: Award,
      title: "Our Vision",
      description: "We envision a future where technology seamlessly integrates into every aspect of business operations, enhancing productivity and security. Our goal is to be at the forefront of this transformation."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A dedicated team of skilled professionals passionate about leveraging the latest technologies to solve complex challenges and create opportunities for our clients."
    },
    {
      icon: Globe,
      title: "Our Reach",
      description: "Serving clients across industries including ABB India, TCS, NABARD, Shyam Steel, WBSETCL, TAJ, and many more with tailored solutions."
    }
  ];

  const achievements = [
    {
      icon: CheckCircle,
      title: "Successful Project Deliveries",
      description: "Completed projects across various sectors, consistently achieving year-over-year growth in both revenue and team size."
    },
    {
      icon: TrendingUp,
      title: "Innovative Solutions",
      description: "Launched proprietary tools and platforms that have revolutionized the way our clients operate, increasing efficiency and reducing costs."
    },
    {
      icon: Handshake,
      title: "99% Customer Satisfaction",
      description: "Our customer satisfaction rate stands at 99%, with significant business coming from repeat clients and referrals."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
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
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl opacity-90"
            >
              Where Innovation Meets Collaboration
            </motion.p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Welcome to Nerix Technoserve, where innovation meets collaboration. As a leading provider of 
                Networking, IT Infrastructure, Cyber Security, Data Center Infrastructure, Turnkey Projects, 
                Cloud, and Hosting services, we are dedicated to empowering businesses with cutting-edge 
                technology solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">Our Approach:</strong> Collaboration is at the heart of everything we do. 
                We believe in building strong partnerships with our clients, working together to overcome challenges 
                and achieve shared goals. Our team of skilled professionals is dedicated to providing personalized 
                solutions that meet the specific requirements of each project.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-foreground text-center mb-12"
            >
              Vision & Mission
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Business Achievements */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">Business Achievements</h2>
                <p className="text-muted-foreground">
                  Nerix Technoserve has rapidly established itself as a trusted leader in IT services, 
                  driven by our unwavering commitment to quality.
                </p>
              </motion.div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-3 gap-8"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                      <achievement.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-foreground text-center mb-12"
              >
                How We Work
              </motion.h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 gap-6"
              >
                {[
                  { num: 1, title: "Discovery & Consultation", desc: "We engage in detailed consultation to understand your business objectives, challenges, and goals." },
                  { num: 2, title: "Strategic Planning", desc: "Our team develops a strategic plan outlining project scope, timelines, and milestones." },
                  { num: 3, title: "Quality Assurance", desc: "Every solution undergoes rigorous testing to ensure it meets our high standards of performance and security." },
                  { num: 4, title: "Continuous Improvement", desc: "We regularly review and refine our processes, staying ahead of industry trends and incorporating the latest technology." }
                ].map((step) => (
                  <motion.div
                    key={step.num}
                    variants={itemVariants}
                    className="flex items-start space-x-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold"
                    >
                      {step.num}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partners Statement */}
        <section className="py-16 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Partner's Statement</h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg opacity-90 mb-8"
              >
                "Our mission is to empower businesses with innovative technology solutions that drive growth and efficiency. 
                Since our inception, we have been dedicated to delivering top-tier IT services tailored to the unique needs of each client. 
                As we continue to grow and evolve, our commitment to excellence, integrity, and client satisfaction remains at the core of everything we do. 
                Thank you for choosing Nerix Technoserve as your trusted technology partner."
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-semibold"
              >
                — Subhasis Mazumdar & Dola Mazumdar, Partners
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
