import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Challenges from "@/components/Challenges";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Challenges />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
