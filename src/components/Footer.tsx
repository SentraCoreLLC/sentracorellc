import logo from "@/assets/sentracore-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="SentraCore Logo" className="h-10 w-10" />
            <div>
              <div className="text-lg font-bold text-foreground">SentraCore LLC</div>
              <div className="text-xs text-muted-foreground">Secure | Comply | Thrive</div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SentraCore LLC. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Empowering organizations to thrive securely in the digital age
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
