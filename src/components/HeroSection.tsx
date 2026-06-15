import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Phone, Sparkles } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToSection } from "@/lib/navigation";

const HeroSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const trustIndicators = [
    "Live in 48 hours",
    "WhatsApp & Phone",
    "No contracts",
  ];

  return (
    <section className="relative gradient-hero pt-28 md:pt-36 pb-20 overflow-hidden">
      {/* Decorative glows */}
      <div className="bg-glow -top-32 -right-24 w-96 h-96 bg-primary/10" />
      <div className="bg-glow top-1/3 -left-32 w-80 h-80 bg-trust-blue/5" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="eyebrow mb-6 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5" />
              AI Concierge for Service Businesses
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              AI That Answers, Books & Converts{" "}
              <span className="text-gradient">Around the Clock</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Stop missing calls, messages, and appointments. Clierge handles customer conversations on WhatsApp and phone with natural, professional responses, 24 hours a day.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button
                variant="hero"
                size="xl"
                onClick={() => goToSection(navigate, location.pathname, "contact")}
              >
                Get Free Demo
              </Button>
              <Button
                variant="hero-outline"
                size="xl"
                onClick={() => goToSection(navigate, location.pathname, "how-it-works")}
              >
                See How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {trustIndicators.map((indicator) => (
                <div
                  key={indicator}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="w-4 h-4 text-primary" />
                  <span>{indicator}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              {/* Main Chat Card */}
              <div className="bg-card rounded-2xl shadow-card p-6 max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-trust-blue">Clierge AI</p>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-3">
                  <div className="bg-soft-blue rounded-xl rounded-tl-sm p-3 text-sm max-w-[85%]">
                    Hi! I'd like to book a haircut for Saturday. Do you have any slots available?
                  </div>
                  <div className="bg-primary text-primary-foreground rounded-xl rounded-tr-sm p-3 text-sm ml-auto max-w-[85%]">
                    Of course! I have availability at 10am, 2pm, and 4pm on Saturday. Which works best for you?
                  </div>
                  <div className="bg-soft-blue rounded-xl rounded-tl-sm p-3 text-sm max-w-[85%]">
                    2pm would be perfect!
                  </div>
                  <div className="bg-primary text-primary-foreground rounded-xl rounded-tr-sm p-3 text-sm ml-auto max-w-[85%]">
                    Great! I've booked you in for 2pm on Saturday. You'll receive a confirmation shortly. See you then!
                  </div>
                </div>
              </div>

              {/* Floating Phone Card */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-card rounded-xl shadow-soft p-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Incoming Call</p>
                  <p className="font-medium text-trust-blue text-sm">Answered in 0.8s</p>
                </div>
              </div>

              {/* Floating WhatsApp Badge */}
              <div className="absolute -top-2 -right-2 md:-right-4 bg-card rounded-lg shadow-soft px-3 py-2 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <span className="text-xs font-medium text-trust-blue">WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
