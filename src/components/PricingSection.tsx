import { Button } from "@/components/ui/button";
import { Check, MessageSquare, Phone, PhoneCall } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate();

  const plans = [
    {
      icon: MessageSquare,
      name: "Automated Chat",
      description: "WhatsApp automation for your business",
      setupPrice: "$800",
      monthlyPrice: "from $150",
      features: [
        "WhatsApp Business integration",
        "AI-powered responses around the clock",
        "Appointment booking & cancellations",
        "Email confirmations sent automatically",
        "Google Calendar integration",
        "CRM-style data capture",
      ],
    },
    {
      icon: Phone,
      name: "Voice Only",
      description: "AI voice agent for inbound calls",
      setupPrice: "$1,000",
      monthlyPrice: "from $200",
      features: [
        "AI voice call handling",
        "Inbound call management",
        "Natural voice interactions",
        "Appointment request capture",
        "Emergency call detection & instant alerts",
        "Call transcript analysis",
        "Multi-intent routing",
      ],
    },
    {
      icon: PhoneCall,
      name: "Voice + Chat",
      description: "Complete AI communication suite",
      setupPrice: "$1,200",
      monthlyPrice: "from $250",
      popular: true,
      features: [
        "Everything in Chat plan",
        "AI voice call handling",
        "Inbound call management",
        "Natural voice interactions",
        "Appointment request capture",
        "Emergency call detection & instant alerts",
        "Call transcript analysis",
        "Multi-intent routing",
        "Priority support",
      ],
    },
  ];

  const guarantees = [
    "No contracts, cancel anytime",
    "Usage based pricing",
    "7 day launch guarantee",
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-soft-blue/50 to-background">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Start automating your customer communication today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-elevated ring-1 ring-primary/20 md:scale-[1.02]"
                  : "border-border shadow-card hover-lift"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-6">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-soft-blue flex items-center justify-center">
                  <plan.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.setupPrice}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    one time setup
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-primary">
                    {plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "hero-outline"}
                size="lg"
                className="w-full"
                onClick={() => navigate("/plans")}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {guarantees.map((guarantee) => (
            <div key={guarantee} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{guarantee}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
