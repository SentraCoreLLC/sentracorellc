import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Tatenda Chitanda",
      role: "Founder & CEO",
      description: "A results-driven professional with a strong background in Agro Business and HSSE (Health, Safety, Security, and Environment), now strategically transitioning into the technology sector with a passion for Cybersecurity, Data Science, and Cloud Computing.",
      certifications: [
        "Google Cybersecurity Certificate",
        "Network Defense Essentials (EC-Council)",
        "Ethical Hacking Essentials (EC-Council)",
        "Digital Forensics Essentials (EC-Council)",
        "AWS Certified Cloud Practitioner",
        "Google AI Essentials Certificate"
      ],
      education: "MSc Cyber Security with Artificial Intelligence - Robert Kennedy Switzerland (ongoing)"
    },
    {
      name: "Cuthbert Mutaurwa",
      role: "Product/Service Director",
      description: "A versatile Software Developer and IT Specialist with extensive experience in Python development, Data Science, Cybersecurity, and IT Infrastructure. Combines technical proficiency with practical problem-solving skills to help organizations build scalable, secure, and innovative solutions.",
      certifications: [
        "Python 3 Programming Specialization",
        "Django for Everybody Specialization",
        "Google IT Support Professional Certificate",
        "IT Security: Defense Against the Digital Dark Arts",
        "Python for Data Science and AI",
        "DevOps Essentials"
      ],
      education: "Multiple specialized certifications in Software Development, Data Science, and Cybersecurity"
    }
  ];

  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet the experts dedicated to securing your digital future
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-8 border-2 hover:shadow-elegant transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                <Badge className="bg-primary text-primary-foreground">{member.role}</Badge>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {member.description}
              </p>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Key Certifications</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.certifications.slice(0, 4).map((cert, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                    {member.certifications.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{member.certifications.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Education</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.education}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
