import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/sentracore-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-elegant" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="SentraCore Logo" className="h-12 w-12" />
            <div>
              <div className="text-xl font-bold text-foreground">SentraCore</div>
              <div className="text-xs text-muted-foreground font-medium">Secure | Comply | Thrive</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection("why-us")} className="text-foreground hover:text-primary transition-colors font-medium">
              Why Us
            </button>
            <button onClick={() => scrollToSection("team")} className="text-foreground hover:text-primary transition-colors font-medium">
              Team
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                About
              </button>
              <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Services
              </button>
              <button onClick={() => scrollToSection("why-us")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Why Us
              </button>
              <button onClick={() => scrollToSection("team")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Team
              </button>
              <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 w-full">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
