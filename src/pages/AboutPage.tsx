import { Card } from "@/components/ui/card";
import { Shield, Target, Lightbulb, Users, Award, Handshake } from "lucide-react";
import teamCollab from "@/assets/team-collab.jpg";

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize safeguarding digital assets and protecting businesses from evolving cyber threats."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We uphold transparency, accountability, and trust in every engagement."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace forward-thinking solutions in cybersecurity and AI literacy to stay ahead of emerging challenges."
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "We equip businesses and their people with the knowledge and tools to thrive in the digital age."
    },
    {
      icon: Target,
      title: "Compliance Excellence",
      description: "We guide organizations in meeting regulatory standards without compromising agility or growth."
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We build strong partnerships with clients, fostering shared responsibility for digital resilience."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold text-primary-foreground mb-6">
              About SentraCore
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Building resilience against digital threats through proactive risk management, compliance assurance, and workforce empowerment
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                  Who We Are
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  SentraCore is a cybersecurity and AI literacy consultancy committed to helping businesses build resilience against digital threats. We specialize in proactive risk management, compliance assurance, secure authentication practices, and workforce empowerment through AI and cybersecurity education.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our approach blends technical expertise with a deep understanding of operational safety, making us a trusted partner for small businesses, startups, and growing enterprises navigating today's complex digital landscape.
                </p>
              </div>
              <div className="relative animate-scale-in">
                <img 
                  src={teamCollab} 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-elegant w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-10 border-2 shadow-elegant hover:shadow-hover transition-all animate-fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower organizations to thrive securely in the digital age by delivering tailored cybersecurity solutions, compliance frameworks, and AI literacy programs that foster awareness, resilience, and innovation.
              </p>
            </Card>

            <Card className="p-10 border-2 shadow-elegant hover:shadow-hover transition-all animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create a future where every business, regardless of size, operates with confidence, resilience, and ethical intelligence in a secure digital world.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do at SentraCore
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-8 border-2 hover:border-primary/50 hover:shadow-elegant transition-all group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
