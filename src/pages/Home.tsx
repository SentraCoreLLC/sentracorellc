import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, FileCheck, Lock, Brain, Users, ArrowRight, CheckCircle } from "lucide-react";
import heroCyber from "@/assets/hero-cyber.jpg";
import teamCollab from "@/assets/team-collab.jpg";

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: "Cyber Risk Assessments",
      description: "Uncover hidden vulnerabilities before attackers do with comprehensive infrastructure analysis.",
      link: "/services"
    },
    {
      icon: FileCheck,
      title: "Compliance Audits",
      description: "Align with HIPAA, GDPR, and NIST standards while maintaining operational agility.",
      link: "/services"
    },
    {
      icon: Lock,
      title: "Secure Login Practices",
      description: "Design robust authentication workflows with role-based access controls.",
      link: "/services"
    },
    {
      icon: Brain,
      title: "AI Literacy Workshops",
      description: "Empower your teams with practical AI understanding, tools, and ethics.",
      link: "/services"
    },
    {
      icon: Users,
      title: "Human Firewall Academy",
      description: "Transform employees into vigilant cyber defenders with hands-on training.",
      link: "/services"
    }
  ];

  const values = [
    "Security First – Prioritizing protection against evolving cyber threats",
    "Integrity – Transparency, accountability, and trust in every engagement",
    "Innovation – Forward-thinking solutions in cybersecurity and AI literacy",
    "Empowerment – Equipping businesses with knowledge and tools to thrive"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroCyber} 
            alt="Cybersecurity protection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/70" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Secure | Comply | Thrive
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Empowering organizations to thrive securely in the digital age with tailored cybersecurity solutions and AI literacy programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-6 bg-card text-foreground hover:bg-card/90 hover:scale-105 transition-transform shadow-elegant">
                  Schedule Consultation
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all shadow-elegant">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                  Who We Are
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  SentraCore is a cybersecurity and AI literacy consultancy committed to helping businesses build resilience against digital threats. We specialize in proactive risk management, compliance assurance, and workforce empowerment through education.
                </p>
                <div className="space-y-3">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-foreground">{value}</p>
                    </div>
                  ))}
                </div>
                <Link to="/about">
                  <Button size="lg" className="mt-4 hover:scale-105 transition-transform">
                    Learn More About Us
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative animate-scale-in">
                <img 
                  src={teamCollab} 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-elegant w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-primary text-primary-foreground p-8 rounded-xl shadow-hover max-w-xs">
                  <p className="text-3xl font-bold">Est. 2025</p>
                  <p className="text-sm opacity-90">Building Digital Resilience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cybersecurity and AI literacy solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/50 group hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <Link to={service.link} className="text-primary font-semibold inline-flex items-center hover:gap-2 transition-all">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" className="hover:scale-105 transition-transform">
                View All Services
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Secure Your Digital Future?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Whether you need a comprehensive risk assessment, compliance audit, or want to empower your team with cybersecurity training, we're here to help.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-card text-foreground hover:bg-card/90 text-lg px-8 py-6 hover:scale-105 transition-transform shadow-elegant">
                Schedule a Consultation
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
