import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap } from "lucide-react";

const TeamPage = () => {
  const team = [
    {
      name: "Tatenda Chitanda",
      role: "Founder & CEO",
      bio: "Tatenda Chitanda is a results-driven professional with a strong background in Agro Business and HSSE (Health, Safety, Security, and Environment), now strategically transitioning into the technology sector. With a passion for Cybersecurity, Data Science, and Cloud Computing, Tatenda brings a unique blend of industry knowledge, safety management expertise, and advanced technical skills to every project.",
      certifications: [
        "Google Cybersecurity Certificate",
        "Network Defense Essentials (EC-Council)",
        "Ethical Hacking Essentials (EC-Council)",
        "Digital Forensics Essentials (EC-Council)",
        "Cybersecurity Management & Leadership (Macquarie University)",
        "Google AI Essentials Certificate",
        "AI for Cybersecurity (Macquarie University)",
        "AWS Certified Cloud Practitioner",
        "SAMTRAC – Safety Management Training Course"
      ],
      education: "MSc Cyber Security with Artificial Intelligence - Robert Kennedy Switzerland (ongoing)"
    },
    {
      name: "Cuthbert Mutaurwa",
      role: "Product/Service Director",
      bio: "Cuthbert Mutaurwa is a versatile Software Developer and IT Specialist with extensive experience in Python development, Data Science, Cybersecurity, and IT Infrastructure. He combines technical proficiency with practical problem-solving skills, enabling organizations to build scalable, secure, and innovative solutions.",
      certifications: [
        "Python 3 Programming Specialization – University of Michigan",
        "Django for Everybody Specialization – Coursera",
        "Introduction to Test-Driven Development (TDD)",
        "Python for Data Science and AI – Coursera",
        "Google IT Support Professional Certificate",
        "IT Security: Defense Against the Digital Dark Arts",
        "Network Protocols and Architecture – Cisco",
        "System Administration and IT Infrastructure Services",
        "DevOps Essentials – Coursera",
        "IBM Introduction to DevOps"
      ],
      education: "Multiple professional certifications in Software Development, Data Science & AI, and Cybersecurity"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold text-primary-foreground mb-6">
              Our Team
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Meet the experts dedicated to securing your digital future
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="p-10 border-2 shadow-elegant hover:shadow-hover transition-all animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                      {member.name}
                    </h2>
                    <p className="text-xl text-primary font-semibold">
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Education */}
                  <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                    <div className="flex items-center gap-2 text-foreground font-semibold">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span>Education</span>
                    </div>
                    <p className="text-muted-foreground pl-7">{member.education}</p>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-foreground font-semibold">
                      <Award className="w-5 h-5 text-primary" />
                      <span>Certifications & Training</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-7">
                      {member.certifications.map((cert, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="text-sm py-2 px-3 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground">
              Expertise You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team brings together diverse expertise in cybersecurity, software development, data science, and AI. With a comprehensive mix of technical and regulatory knowledge, we equip organizations with robust security frameworks and innovative approaches that support both client and organizational growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This unique blend of safety management, compliance understanding, and cutting-edge technical skills enables us to analyze, protect, and optimize digital systems while understanding the broader implications of security, compliance, and leadership in modern organizations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
