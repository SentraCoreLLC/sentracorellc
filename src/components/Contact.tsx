import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to secure your digital future? Let's start a conversation.
            </p>
          </div>

          <Card className="p-8 md:p-12 border-2 shadow-elegant">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Phone</div>
                      <a href="tel:+18542577769" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 854 257 7769
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Website</div>
                      <a href="https://www.sentracore.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        www.sentracore.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Social Media</div>
                      <a href="https://twitter.com/sentracorellc" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        @sentracorellc
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-primary p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h3>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  Whether you need a comprehensive risk assessment, compliance audit, or want to empower your team with cybersecurity training, we're here to help.
                </p>
                <Button 
                  size="lg"
                  className="w-full bg-card text-foreground hover:bg-card/90"
                  onClick={() => window.location.href = 'tel:+18542577769'}
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
