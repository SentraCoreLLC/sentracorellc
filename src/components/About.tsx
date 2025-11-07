import { Card } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About SentraCore
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SentraCore is a cybersecurity and AI literacy consultancy committed to helping businesses build resilience against digital threats. We specialize in proactive risk management, compliance assurance, secure authentication practices, and workforce empowerment through AI and cybersecurity education.
          </p>
          <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
            Our approach blends technical expertise with a deep understanding of operational safety, making us a trusted partner for small businesses, startups, and growing enterprises navigating today's complex digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 hover:shadow-elegant transition-all duration-300 border-2">
            <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower organizations to thrive securely in the digital age by delivering tailored cybersecurity solutions, compliance frameworks, and AI literacy programs that foster awareness, resilience, and innovation.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-elegant transition-all duration-300 border-2">
            <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To create a future where every business, regardless of size, operates with confidence, resilience, and ethical intelligence in a secure digital world.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-elegant transition-all duration-300 border-2">
            <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Values</h3>
            <ul className="text-muted-foreground space-y-2 leading-relaxed">
              <li>• Security First</li>
              <li>• Integrity</li>
              <li>• Innovation</li>
              <li>• Empowerment</li>
              <li>• Compliance Excellence</li>
              <li>• Collaboration</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
