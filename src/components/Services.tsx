import { Card } from "@/components/ui/card";
import { Shield, FileCheck, Lock, Brain, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Cyber Risk Assessments",
      description: "We help businesses uncover hidden vulnerabilities before attackers do. Our comprehensive assessments analyze your digital infrastructure, identify potential threat vectors, and evaluate overall exposure with clear, actionable strategies to strengthen defences."
    },
    {
      icon: FileCheck,
      title: "Compliance Audits",
      description: "Staying compliant with industry regulations isn't just a legal requirement—it's essential for building trust. Our compliance audits align your processes with global standards such as HIPAA, GDPR, and NIST, ensuring your business meets and maintains critical regulatory requirements."
    },
    {
      icon: Lock,
      title: "Secure Login Practices",
      description: "Your login system is the first line of defence against unauthorized access. We design and implement robust authentication workflows, enforce strong password hygiene, and set up role-based access controls tailored to your business."
    },
    {
      icon: Brain,
      title: "AI Literacy Workshops",
      description: "Artificial Intelligence is reshaping industries, but only businesses that understand its responsible use will thrive. Our workshops demystify AI, providing your teams with practical understanding of AI concepts, tools, and ethics."
    },
    {
      icon: Users,
      title: "Human Firewall Academy",
      description: "Technology alone can't stop cyberattacks; your people are the strongest defence. Our Human Firewall Academy equips employees with hands-on cybersecurity awareness training, teaching them how to detect phishing attempts, prevent breaches, and respond effectively to incidents."
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive cybersecurity and AI literacy solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/50 group"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-primary border-0">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Human Firewall Academy - Premium Training
              </h3>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                Transform employees into your first line of cyber defense with comprehensive training covering:
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-primary-foreground/90">
                <div>• Phishing & Scam Detection</div>
                <div>• Social Engineering Defense</div>
                <div>• Password & Access Hygiene</div>
                <div>• Safe Browsing & Device Use</div>
                <div>• Incident Response Basics</div>
                <div>• AI & Emerging Threats</div>
              </div>
              <p className="text-primary-foreground font-semibold mt-6">
                Includes a Free Cyber Hygiene Checklist with every booking
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
