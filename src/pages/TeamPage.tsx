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
        "Digital Forensics Essentials: Hands-On Edition (EC-Council)",
        "Cybersecurity Management & Leadership (Macquarie University)",
        "Cyberlaw",
        "Google AI Essentials Certificate",
        "AI for Cybersecurity (Macquarie University)",
        "AWS Certified Cloud Practitioner",
        "SAMTRAC – Safety Management Training Course",
        "Engineering Studies N4–N6, South Africa"
      ],
      education: "MSc Cyber Security with Artificial Intelligence - Robert Kennedy Switzerland (ongoing)"
    },
    {
      name: "Cuthbert Mutaurwa",
      role: "Senior Systems Developer",
      bio: "Cuthbert Mutaurwa is a versatile Software Developer and IT Specialist with extensive experience in Python development, Data Science, Cybersecurity, and IT Infrastructure. He combines technical proficiency with practical problem-solving skills, enabling organizations to build scalable, secure, and innovative solutions.",
      certifications: [
        "Python 3 Programming Specialization – University of Michigan",
        "Programming for Everybody (Getting Started with Python) – Coursera",
        "Django for Everybody Specialization – Coursera",
        "Introduction to Test-Driven Development (TDD) – Coursera",
        "Python for Data Science and AI – Coursera",
        "Python for Data Science, AI & Development – Coursera",
        "Data Science Orientation – Coursera",
        "Google IT Support Professional Certificate",
        "IT Security: Defense Against the Digital Dark Arts – Coursera",
        "Network Protocols and Architecture – Cisco Networking Academy",
        "System Administration and IT Infrastructure Services – Coursera",
        "Technical Support Fundamentals – Google",
        "DevOps Essentials – Coursera",
        "IBM Introduction to DevOps – IBM",
        "Cisco Networking Basics Specialization – Coursera",
        "Bits and Bytes of Computer Networking – Google",
        "Data Communications and Network Services – Cisco Networking Academy",
        "Introduction to the Internet of Things and Embedded Systems – Coursera",
        "Brand Management: Aligning Business, Brand and Behaviour – London Business School",
        "Use Mailchimp to Build an E-mail Marketing Campaign – Coursera",
        "The Fundamentals of Digital Marketing – Grow with Google Africa",
        "Responsive Web Design – freeCodeCamp",
        "EF SET English Certificate (C1 Advanced)"
      ],
      education: "Multiple professional certifications in Software Development, Data Science & AI, and Cybersecurity"
    },
    {
      name: "Munyaradzi L Kavhai",
      role: "Marketing & Administration Director",
      bio: "Munyaradzi L Kavhai is a passionate and results-driven digital marketer and IT specialist with a unique blend of technical and creative expertise. He combines a strong foundation in computer science with hands-on experience in digital marketing, WordPress development, cloud solutions, and IT management, delivering impactful online experiences and measurable results. Having developed user-friendly, high-conversion websites through WordPress and web development, and as an Associate Google Cloud Engineer, he leverages cloud-based solutions to improve efficiency, scalability, and business performance.",
      certifications: [
        "Introduction to Cybersecurity Essentials – IBM (2025)",
        "Introduction to OSINT & Penetration Testing – Security Blue Team (2025)",
        "ISO/IEC 27001 Information Security Associate – SkillFront (2022)",
        "Management Information Systems – Saylor Academy (2022)",
        "Technical Support Fundamentals – Google (2019)",
        "Data Analysis and Visualization – State University of New York (2025)",
        "Data Science & Analytics – HP LIFE (2024)",
        "Business Analysis & Process Management – Coursera Project Network (2025)",
        "Advance as a Digital Marketing Specialist – LinkedIn (2024)",
        "Customer Relationship Management – HP LIFE (2024)",
        "Market Research and Consumer Behavior – IE Business School (2024)",
        "Foundations of Digital Marketing and E-commerce – Grow with Google on Coursera (2024)",
        "Diploma in Marketing – Impact Training Institute (2023)",
        "Marketing Management (National Certificate) – HEXCO (2019)",
        "Python Essential Training – LinkedIn (2024)",
        "Django Essential Training – LinkedIn (2023)",
        "WordPress – Treehouse (2017)",
        "Front-End Web Development – Treehouse (2017)",
        "Associate Google Cloud Engineer – Google (2023)",
        "DevOps on AWS: Code, Build, and Test – AWS (2024)",
        "DevOps on AWS: Operate and Monitor – AWS (2024)"
      ],
      education: "Digital Marketing & IT Specialist | Web Development Enthusiast | Cybersecurity & Cloud Advocate"
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
