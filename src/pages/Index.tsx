import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-['Inter',sans-serif]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
