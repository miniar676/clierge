import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { goToSection } from "@/lib/navigation";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "API"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Legal: ["Privacy Policy", "Terms of Service", "GDPR"],
    Support: ["Help Center", "Documentation", "Status"],
  };

  return (
    <footer className="bg-trust-blue text-white">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Clierge" className="h-8 w-auto" />
            </div>
            <p className="text-white/70 text-sm mb-6 max-w-xs">
              AI-powered client concierge that handles WhatsApp messages and phone calls 24/7 for service businesses.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-trust-blue hover:bg-white/90"
              onClick={() => goToSection(navigate, location.pathname, "contact")}
            >
              Get Free Demo
            </Button>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Clierge. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/50 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              GDPR Ready
            </span>
            <span className="text-xs text-white/50">SOC 2 Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
