import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">SentraCore LLC</h3>
            <p className="text-muted-foreground mb-4">
              Secure | Comply | Thrive
            </p>
            <p className="text-sm text-muted-foreground">
              Empowering organizations to thrive securely in the digital age.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Bluffton, South Carolina, USA</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:+18542577769" className="hover:text-primary transition-colors">
                  +1 854 257 7769
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@sentracorellc.com" className="hover:text-primary transition-colors">
                  info@sentracorellc.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Facebook className="w-4 h-4" />
                <a href="https://www.facebook.com/sentracorellc" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Facebook
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Linkedin className="w-4 h-4" />
                <a href="https://www.linkedin.com/company/sentracorellc" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SentraCore LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
