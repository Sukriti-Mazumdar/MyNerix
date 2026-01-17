import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import nerixLogo from "@/assets/nerix-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-footer text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img src={nerixLogo} alt="Nerix Technoserve" className="h-20 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
             End-to-end IT infrastructure services designed to support business growth through reliable networking, security, and integrated technology solutions. 
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary-foreground/80" />
                <p className="text-sm text-primary-foreground/80">
                  10/1D, White Meadows, 1529 Dwarir Road, Kolkata - 700151
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary-foreground/80" />
                <a href="tel:+919903562217" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +91 9903562217
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary-foreground/80" />
                <a href="mailto:support@mynerix.com" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  support@mynerix.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>&copy; 2024-2025 Nerix Technoserve. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
