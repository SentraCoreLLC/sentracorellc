import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Award, GraduationCap, User, ArrowRight } from "lucide-react";
import { useState } from "react";

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const team = [
    {
      name: "Tatenda Chitanda",
      role: "Founder & CEO",
      tagline: "Visionary cybersecurity leader with 8+ years of HSSE experience, turning complex technical challenges into teachable moments",
      bio: "Tatenda Chitanda is the visionary behind SentraCore, a cybersecurity and AI consulting firm built on the belief that digital resilience starts with empowered people. With over 8 years of experience in Health, Safety, Security, and Environment (HSSE) leadership in South Africa, Tatenda brings a unique systems-thinking approach to cybersecurity, one that blends human behaviour, technical precision, and strategic foresight. After relocating to the U.S., Tatenda pivoted into cybersecurity and artificial intelligence, earning credentials including the Google Cybersecurity Certificate, AWS Certified Cloud Practitioner, and advanced training in Cyber Law, AI for Cybersecurity, and Leadership in Cybersecurity Management. His hands-on expertise spans risk assessment, compliance audits, incident response, and employee education, especially in phishing, social engineering, and digital hygiene. Tatenda is known for turning complex technical challenges into teachable moments. Whether he's troubleshooting a privilege escalation lab or crafting a witty analogy for a workshop, he thrives on making cybersecurity accessible, engaging, and unforgettable. His mission is to help organizations build not just secure systems, but security-aware cultures. When he's not leading client engagements or facilitating workshops, Tatenda documents technical wins, mentors newcomers, and shares insights that empower others—especially fellow immigrants navigating new frontiers in tech.",
      certifications: [
        "Google Cybersecurity Certificate",
        "Network Defence Essentials (EC-Council)",
        "Ethical Hacking Essentials (EC-Council)",
        "Digital Forensics Essentials: Hands-On Edition (EC-Council)",
        "Cybersecurity Management & Leadership (Macquarie University)",
        "Cyberlaw",
        "Google AI Essentials Certificate",
        "AI for Cybersecurity (Macquarie University)",
        "AWS Certified Cloud Practitioner",
        "SAMTRAC – Safety Management Training Course, South Africa",
        "Engineering Studies N4–N6, South Africa"
      ],
      education: "MSc Cyber Security with Artificial Intelligence - Robert Kennedy Switzerland (ongoing)"
    },
    {
      name: "Cuthbert Mutaurwa",
      role: "Senior Systems Developer",
      tagline: "Versatile Software Developer and IT Specialist with extensive experience in Python, Data Science, and Cybersecurity",
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
      tagline: "Digital Marketing & IT Specialist | Web Development Enthusiast | Cybersecurity & Cloud Advocate",
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

      {/* Team Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card 
                      className="group cursor-pointer border-2 overflow-hidden hover:shadow-hover hover:scale-105 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {/* Avatar Section */}
                      <div className="relative bg-gradient-primary p-12 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-background/20 backdrop-blur-sm border-4 border-background/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <User className="w-16 h-16 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                            {member.role}
                          </p>
                        </div>

                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {member.tagline}
                        </p>

                        {/* View Details Button */}
                        <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                          <span>View Full Profile</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Card>
                  </DialogTrigger>

                  {/* Modal Content */}
                  <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                    <ScrollArea className="max-h-[90vh]">
                      <div className="p-8 space-y-8">
                        {/* Modal Header */}
                        <DialogHeader>
                          <div className="flex items-start gap-6">
                            <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                              <User className="w-12 h-12 text-primary-foreground" />
                            </div>
                            <div className="space-y-2 flex-1">
                              <DialogTitle className="text-3xl font-bold text-foreground">
                                {member.name}
                              </DialogTitle>
                              <p className="text-lg font-semibold text-primary">
                                {member.role}
                              </p>
                            </div>
                          </div>
                        </DialogHeader>

                        {/* Bio */}
                        <div className="space-y-3">
                          <h4 className="text-xl font-semibold text-foreground">About</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {member.bio}
                          </p>
                        </div>

                        {/* Education */}
                        <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                          <div className="flex items-center gap-2 text-foreground font-semibold">
                            <GraduationCap className="w-5 h-5 text-primary" />
                            <span className="text-lg">Education</span>
                          </div>
                          <p className="text-muted-foreground">{member.education}</p>
                        </div>

                        {/* Certifications */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-foreground font-semibold">
                            <Award className="w-5 h-5 text-primary" />
                            <span className="text-lg">Certifications & Training</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
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
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
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
