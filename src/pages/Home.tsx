import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, FileCheck, Lock, Brain, Users, ArrowRight, CheckCircle, Fingerprint } from "lucide-react";
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
    },
    {
      icon: Fingerprint,
      title: "SentraVerify™",
      description: "AI-powered credential and access hygiene to protect digital identities.",
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
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
          <div className="absolute inset-0 bg-gradient-radial" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight drop-shadow-lg">
              Secure | Comply | Thrive
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/95 mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              Empowering organizations to thrive securely in the digital age with tailored cybersecurity solutions and AI literacy programs
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/contact">
                <Button variant="premium" size="lg" className="text-lg font-display">
                  Schedule Consultation
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-lg border-2 border-primary-foreground bg-background/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm font-display">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-in-left">
                <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
                  Who We Are
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  SentraCore is a cybersecurity and AI literacy consultancy committed to helping businesses build resilience against digital threats. We specialize in proactive risk management, compliance assurance, and workforce empowerment through education.
                </p>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground font-medium">{value}</p>
                    </div>
                  ))}
                </div>
                <Link to="/about">
                  <Button size="lg" variant="premium" className="mt-6 font-display">
                    Learn More About Us
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative animate-slide-in-right">
                <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
                <img 
                  src={teamCollab} 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-xl w-full relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-primary text-primary-foreground p-8 rounded-xl shadow-glow max-w-xs z-20 backdrop-blur-sm border border-primary-foreground/20">
                  <p className="text-4xl font-display font-bold">Est. 2025</p>
                  <p className="text-sm font-medium opacity-95">Building Digital Resilience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6">
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
                  className="p-8 hover-lift border-2 hover:border-primary/30 group animate-fade-up bg-gradient-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <Link to={service.link} className="text-primary font-semibold inline-flex items-center hover:gap-3 transition-all group-hover:text-accent">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" variant="premium" className="font-display">
                View All Services
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-scale-in">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-6 drop-shadow-lg">
              Ready to Secure Your Digital Future?
            </h2>
            <p className="text-xl text-primary-foreground/95 mb-10 leading-relaxed drop-shadow-md">
              Whether you need a comprehensive risk assessment, compliance audit, or want to empower your team with cybersecurity training, we're here to help.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="premium" className="text-lg font-display bg-card text-foreground hover:bg-card/95">
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
