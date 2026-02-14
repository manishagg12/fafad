import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg font-bold text-primary mb-3">
              Manish Pure Desi Ghee
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Crafted with traditional methods and modern hygiene standards. Premium quality desi ghee for wholesalers across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-3">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-3">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> New Delhi, India</span>
              <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> 9999999</span>
              <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> manishagg.@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Manish Pure Desi Ghee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
