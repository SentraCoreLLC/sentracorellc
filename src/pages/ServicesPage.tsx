import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileCheck, Lock, Brain, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import cyberRiskService from "@/assets/cyber-risk-service.jpg";
import complianceAuditService from "@/assets/compliance-audit-service.jpg";
import secureLoginService from "@/assets/secure-login-service.jpg";
import aiLiteracyService from "@/assets/ai-literacy-service.jpg";
import humanFirewallService from "@/assets/human-firewall-service.jpg";

const ServicesPage = () => {
  const services = [
    {
      icon: Shield,
      title: "Cyber Risk Assessments",
      description: "We help businesses uncover hidden vulnerabilities before attackers do. Our comprehensive assessments analyze your digital infrastructure, identify potential threat vectors, and evaluate overall exposure.",
      features: [
        "Digital infrastructure analysis",
        "Threat vector identification",
        "Risk exposure evaluation",
        "Actionable defense strategies",
        "Ongoing threat monitoring"
      ],
      image: cyberRiskService
    },
    {
      icon: FileCheck,
      title: "Compliance Audits",
      description: "Staying compliant with industry regulations isn't just a legal requirement—it's essential for building trust with clients and partners. Our compliance audits align your processes with global standards such as HIPAA, GDPR, and NIST.",
      features: [
        "HIPAA, GDPR, NIST compliance",
        "Process alignment",
        "Regulatory requirement analysis",
        "Documentation support",
        "Ongoing compliance monitoring"
      ],
      image: complianceAuditService
    },
    {
      icon: Lock,
      title: "Secure Login Practices",
      description: "Your login system is the first line of defence against unauthorized access. We design and implement robust authentication workflows, enforce strong password hygiene, and set up role-based access controls tailored to your business.",
      features: [
        "Robust authentication workflows",
        "Strong password policies",
        "Role-based access controls",
        "Multi-factor authentication",
        "Session management"
      ],
      image: secureLoginService
    },
    {
      icon: Brain,
      title: "AI Literacy Workshops",
      description: "Artificial Intelligence is reshaping industries, but only businesses that understand its responsible use will thrive. Our workshops demystify AI, providing your teams with a practical understanding of AI concepts, tools, and ethics.",
      features: [
        "AI fundamentals and concepts",
        "Practical tool training",
        "Ethical AI usage",
        "Opportunity identification",
        "Risk mitigation strategies"
      ],
      image: aiLiteracyService
    },
    {
      icon: Users,
      title: "Human Firewall Academy",
      description: "Technology alone can't stop cyberattacks; your people are the strongest defence. Our Human Firewall Academy equips employees with hands-on cybersecurity awareness training, teaching them how to detect phishing attempts, prevent breaches, and respond effectively to incidents.",
      features: [
        "Phishing & scam detection",
        "Social engineering defense",
        "Password & access hygiene",
        "Safe browsing & device use",
        "Incident response basics",
        "AI & emerging threats module"
      ],
      image: humanFirewallService
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive cybersecurity and AI literacy solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                
                return (
                  <Card 
                    key={index} 
                    className="group overflow-hidden border-2 hover:border-primary/50 hover:shadow-hover transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Features List */}
                      <div className="space-y-2 pt-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-muted-foreground">{feature}</p>
                          </div>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all pt-2">
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Human Firewall Academy Highlight */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="p-12 bg-gradient-primary border-0 shadow-elegant animate-fade-in">
              <div className="text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
                  Human Firewall Academy
                </h2>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Transform employees into your first line of cyber defense with comprehensive training covering:
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-primary-foreground/90 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Phishing & Scam Detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Social Engineering Defense</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Password & Access Hygiene</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Safe Browsing & Device Use</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Incident Response Basics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>AI & Emerging Threats</span>
                  </div>
                </div>
                <div className="pt-6 space-y-4">
                  <p className="text-primary-foreground font-semibold text-lg">
                    Includes a Free Cyber Hygiene Checklist with every booking
                  </p>
                  <Link to="/contact">
                    <Button size="lg" className="bg-card text-foreground hover:bg-card/90 text-lg px-8 py-6 hover:scale-105 transition-transform">
                      Book Training Now
                      <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to discuss how we can help secure your organization
            </p>
            <Link to="/contact">
              <Button size="lg" className="hover:scale-105 transition-transform">
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

export default ServicesPage;
