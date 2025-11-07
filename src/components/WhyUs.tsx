import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      title: "Proactive Defence",
      description: "We don't wait for threats to strike; we help you identify and mitigate risks before they become breaches."
    },
    {
      title: "Compliance Simplified",
      description: "From GDPR to HIPAA, we translate complex standards into clear, actionable practices."
    },
    {
      title: "Empowering Teams",
      description: "Through AI literacy and cybersecurity training, we transform employees into confident digital defenders."
    },
    {
      title: "Tailored Solutions",
      description: "Whether you're a small startup or a growing enterprise, our strategies scale with your business needs."
    },
    {
      title: "Trusted Partnership",
      description: "We work alongside you, not just as consultants but as long-term partners in resilience."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Why Choose SentraCore
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At SentraCore, we don't just deliver cybersecurity and AI literacy services—we empower businesses to secure, comply, and thrive in an ever-evolving digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-2 hover:shadow-elegant transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Unique Value Proposition</h3>
              <p className="text-muted-foreground leading-relaxed">
                We blend technical expertise with human-centred education, giving organizations both the tools and the knowledge to protect themselves. Unlike providers who focus only on technology, we prioritize people + process + compliance, ensuring resilience from every angle.
              </p>
            </Card>

            <Card className="p-8 border-2 hover:shadow-elegant transition-all bg-gradient-primary">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">What Sets Us Apart</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-primary-foreground">{feature.title}</div>
                      <div className="text-primary-foreground/90 text-sm">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
