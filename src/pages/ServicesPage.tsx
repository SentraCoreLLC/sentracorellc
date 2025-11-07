import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileCheck, Lock, Brain, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import aiService from "@/assets/ai-service.jpg";
import complianceService from "@/assets/compliance-service.jpg";
import trainingService from "@/assets/training-service.jpg";

const ServicesPage = () => {
  const services = [
    {
      icon: Shield,
      title: "Cyber Risk Assessments",
      description: "We help businesses uncover hidden vulnerabilities before attackers do. Our comprehensive assessments analyze your digital infrastructure, identify potential threat vectors, and evaluate overall exposure. Beyond detection, we provide clear, actionable strategies to strengthen defences and reduce risks; ensuring your organization is resilient against both current and emerging cyber threats.",
      features: [
        "Digital infrastructure analysis",
        "Threat vector identification",
        "Risk exposure evaluation",
        "Actionable defense strategies",
        "Ongoing threat monitoring"
      ],
      image: complianceService
    },
    {
      icon: FileCheck,
      title: "Compliance Audits",
      description: "Staying compliant with industry regulations isn't just a legal requirement—it's essential for building trust with clients and partners. Our compliance audits align your processes with global standards such as HIPAA, GDPR, and NIST, ensuring your business meets and maintains critical regulatory requirements. We simplify the complexity of compliance so you can focus on growth while maintaining a secure and credible operation.",
      features: [
        "HIPAA, GDPR, NIST compliance",
        "Process alignment",
        "Regulatory requirement analysis",
        "Documentation support",
        "Ongoing compliance monitoring"
      ],
      image: complianceService
    },
    {
      icon: Lock,
      title: "Secure Login Practices",
      description: "Your login system is the first line of defence against unauthorized access. We design and implement robust authentication workflows, enforce strong password hygiene, and set up role-based access controls tailored to your business. By combining convenience with cutting-edge security measures, we help protect sensitive data while keeping user experiences seamless.",
      features: [
        "Robust authentication workflows",
        "Strong password policies",
        "Role-based access controls",
        "Multi-factor authentication",
        "Session management"
      ],
      image: complianceService
    },
    {
      icon: Brain,
      title: "AI Literacy Workshops",
      description: "Artificial Intelligence is reshaping industries, but only businesses that understand its responsible use will thrive. Our workshops demystify AI, providing your teams with a practical understanding of AI concepts, tools, and ethics. From recognizing AI opportunities to avoiding misuse, we empower your workforce to harness AI confidently and responsibly for innovation and growth.",
      features: [
        "AI fundamentals and concepts",
        "Practical tool training",
        "Ethical AI usage",
        "Opportunity identification",
        "Risk mitigation strategies"
      ],
      image: aiService
    },
    {
      icon: Users,
      title: "Human Firewall Academy",
      description: "Technology alone can't stop cyberattacks; your people are the strongest defence. Our Human Firewall Academy equips employees with hands-on cybersecurity awareness training, teaching them how to detect phishing attempts, prevent breaches, and respond effectively to incidents. By transforming staff into vigilant defenders, we help reduce human error, which remains the number one cause of cyber incidents.",
      features: [
        "Phishing & scam detection",
        "Social engineering defense",
        "Password & access hygiene",
        "Safe browsing & device use",
        "Incident response basics",
        "AI & emerging threats module"
      ],
      image: trainingService
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

      {/* Services Detail */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3 pt-4">
                      <h3 className="font-semibold text-foreground text-lg">Key Features:</h3>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-muted-foreground">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`relative ${!isEven ? 'lg:order-1' : ''}`}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-2xl shadow-elegant w-full"
                    />
                  </div>
                </div>
              );
            })}
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
