import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/sentracore-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Team", path: "/team" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md shadow-lg border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 hover:scale-105">
            <img src={logo} alt="SentraCore" className="h-12 w-12 drop-shadow-md" />
            <div>
              <h1 className="text-xl font-display font-bold text-foreground">SentraCore</h1>
              <p className="text-xs text-muted-foreground font-medium">Secure | Comply | Thrive</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-foreground hover:text-primary transition-all duration-300 font-medium relative group ${
                  isActive(item.path) ? "text-primary" : ""
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full transition-transform duration-300 ${
                  isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="premium" size="sm" className="font-display">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2 animate-fade-in">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors ${
                  isActive(item.path) ? "bg-muted text-primary font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full mt-2">Get Started</Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
