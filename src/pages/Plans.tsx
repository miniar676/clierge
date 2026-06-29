import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, MessageSquare, Phone, PhoneCall, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToSection } from "@/lib/navigation";

const Pricing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedFeatures, setExpandedFeatures] = useState<Record<string, boolean>>({});

  const toggleFeature = (planName: string, featureIndex: number) => {
    const key = `${planName}-${featureIndex}`;
    setExpandedFeatures(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const plans = [
    {
      icon: MessageSquare,
      name: "Automated Chat",
      description: "WhatsApp automation for your business. Automate customer inquiries and appointment scheduling.",
      setupPrice: "$800",
      monthlyPrice: "$150",
      pricingNote: "based on conversation volume",
      setupNote: "+$800 one time setup fee",
      features: [
        {
          title: "WhatsApp Business Integration",
          description: "Connect your WhatsApp Business account for seamless customer communication on the platform they already use."
        },
        {
          title: "AI Powered Responses",
          description: "Intelligent responses around the clock using advanced language models trained on your business data."
        },
        {
          title: "Appointment Booking",
          description: "Automated scheduling that syncs with your calendar and confirms appointments instantly."
        },
        {
          title: "Lead Capture and Qualification",
          description: "Automatically collect and qualify leads based on your custom criteria before routing to your team."
        },
        {
          title: "Custom Conversation Flows",
          description: "Design personalized conversation paths tailored to your specific business processes."
        },
      ],
      channels: ["WhatsApp"],
    },
    {
      icon: Phone,
      name: "Voice Only",
      description: "AI voice agent for inbound calls. Never miss a call without needing a chat channel.",
      setupPrice: "$1,000",
      monthlyPrice: "$200",
      pricingNote: "based on call volume",
      setupNote: "+$1,000 one time setup fee",
      features: [
        {
          title: "AI Voice Call Handling",
          description: "Natural sounding voice AI that handles inbound calls, answers questions, and routes appropriately."
        },
        {
          title: "Inbound Call Management",
          description: "Never miss a call again. AI answers instantly and handles common requests autonomously."
        },
        {
          title: "Appointment Booking",
          description: "Automated scheduling that syncs with your calendar and confirms appointments instantly."
        },
        {
          title: "Call Analytics and Recordings",
          description: "Full transcriptions, sentiment analysis, and actionable insights from every conversation."
        },
        {
          title: "CRM Integration",
          description: "Seamless sync with popular CRM platforms to keep all customer data in one place."
        },
      ],
      channels: ["Voice", "SMS"],
    },
    {
      icon: PhoneCall,
      name: "Voice + Chat",
      description: "Complete AI communication suite. Handle calls and messages with one unified solution.",
      setupPrice: "$1,200",
      monthlyPrice: "$250",
      pricingNote: "based on usage volume",
      setupNote: "+$1,200 one time setup fee",
      popular: true,
      features: [
        {
          title: "Everything in Chat Plan",
          description: "All features from the Automated Chat plan included as your foundation."
        },
        {
          title: "AI Voice Call Handling",
          description: "Natural sounding voice AI that handles inbound calls, answers questions, and routes appropriately."
        },
        {
          title: "Inbound Call Management",
          description: "Never miss a call again. AI answers instantly and handles common requests autonomously."
        },
        {
          title: "Call Analytics and Recordings",
          description: "Full transcriptions, sentiment analysis, and actionable insights from every conversation."
        },
        {
          title: "Priority Support",
          description: "Dedicated support team with faster response times and direct access to technical specialists."
        },
        {
          title: "CRM Integration",
          description: "Seamless sync with popular CRM platforms to keep all customer data in one place."
        },
      ],
      channels: ["WhatsApp", "Voice", "SMS"],
    },
  ];

  const guarantees = [
    "No contracts, cancel anytime",
    "Usage based pricing",
    "7 day launch guarantee",
  ];

  const comparisonCategories = [
    {
      name: "Core Features",
      features: [
        { name: "AI Response Time", chat: "Instant", voiceOnly: "Instant", voice: "Instant" },
        { name: "Languages Supported", chat: "10+", voiceOnly: "10+", voice: "10+" },
        { name: "Custom Training", chat: true, voiceOnly: true, voice: true },
        { name: "Business Hours Configuration", chat: true, voiceOnly: true, voice: true },
        { name: "Conversation History", chat: "30 days", voiceOnly: "90 days", voice: "90 days" },
      ]
    },
    {
      name: "Communication Channels",
      features: [
        { name: "WhatsApp Business", chat: true, voiceOnly: false, voice: true },
        { name: "Voice Calls", chat: false, voiceOnly: true, voice: true },
        { name: "SMS Messages", chat: false, voiceOnly: true, voice: true },
        { name: "Web Chat Widget", chat: true, voiceOnly: false, voice: true },
      ]
    },
    {
      name: "Automation",
      features: [
        { name: "Appointment Scheduling", chat: true, voiceOnly: true, voice: true },
        { name: "Lead Qualification", chat: true, voiceOnly: true, voice: true },
        { name: "Follow up Reminders", chat: true, voiceOnly: true, voice: true },
        { name: "Call Routing", chat: false, voiceOnly: true, voice: true },
        { name: "Voicemail Transcription", chat: false, voiceOnly: true, voice: true },
      ]
    },
    {
      name: "Analytics and Reporting",
      features: [
        { name: "Conversation Analytics", chat: true, voiceOnly: true, voice: true },
        { name: "Call Recordings", chat: false, voiceOnly: true, voice: true },
        { name: "Sentiment Analysis", chat: "Basic", voiceOnly: "Advanced", voice: "Advanced" },
        { name: "Custom Reports", chat: false, voiceOnly: true, voice: true },
        { name: "Export Data", chat: true, voiceOnly: true, voice: true },
      ]
    },
    {
      name: "Integrations",
      features: [
        { name: "Calendar Sync", chat: true, voiceOnly: true, voice: true },
        { name: "CRM Integration", chat: "Basic", voiceOnly: "Full", voice: "Full" },
        { name: "Webhook Support", chat: true, voiceOnly: true, voice: true },
        { name: "API Access", chat: false, voiceOnly: true, voice: true },
      ]
    },
    {
      name: "Support",
      features: [
        { name: "Email Support", chat: true, voiceOnly: true, voice: true },
        { name: "Priority Support", chat: false, voiceOnly: false, voice: true },
        { name: "Dedicated Account Manager", chat: false, voiceOnly: false, voice: true },
        { name: "Onboarding Assistance", chat: true, voiceOnly: true, voice: true },
      ]
    },
  ];

  const faqs = [
    {
      question: "What is included in the setup fee?",
      answer: "The setup fee covers complete configuration of your AI assistant, including custom conversation flows, integration with your existing tools, training on your business specifics, and launch support."
    },
    {
      question: "How does usage based pricing work?",
      answer: "Monthly fees are based on the volume of conversations and calls handled. We provide transparent reporting so you always know exactly what you are paying for."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades apply at your next billing cycle."
    },
    {
      question: "Is there a minimum contract period?",
      answer: "No, there are no long term contracts. You can cancel your subscription at any time with no penalties."
    },
    {
      question: "What happens if I need custom features?",
      answer: "We offer custom development for specific requirements. Contact our team to discuss your needs and receive a tailored quote."
    },
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-primary mx-auto" />
      ) : (
        <span className="text-muted-foreground/50">—</span>
      );
    }
    return <span className="text-foreground">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-trust-blue mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground">
              Start automating your customer communication today. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-card rounded-2xl border overflow-hidden ${
                  plan.popular
                    ? "border-primary shadow-elevated"
                    : "border-border shadow-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-b-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold ${plan.popular ? "text-primary" : "text-trust-blue"}`}>
                        {plan.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="px-8 py-6 bg-muted/30 border-y border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Starting at</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-4xl font-bold ${plan.popular ? "text-primary" : "text-trust-blue"}`}>
                      {plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{plan.pricingNote}</p>
                  <p className="text-sm text-muted-foreground">{plan.setupNote}</p>
                </div>

                {/* CTA Button */}
                <div className="px-8 py-6">
                  <Button
                    variant={plan.popular ? "hero" : "hero-outline"}
                    size="lg"
                    className="w-full"
                    onClick={() => goToSection(navigate, location.pathname, "contact", { plan: plan.name })}
                  >
                    Subscribe Now
                  </Button>
                </div>

                {/* Expandable Features */}
                <div className="px-8 pb-8">
                  {!plan.popular && (
                    <div className="space-y-2">
                      {plan.features.map((feature, index) => {
                        const isExpanded = expandedFeatures[`${plan.name}-${index}`];
                        return (
                          <div
                            key={index}
                            className="border border-border rounded-lg overflow-hidden"
                          >
                            <button
                              onClick={() => toggleFeature(plan.name, index)}
                              className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                            >
                              <span className="font-medium text-foreground">{feature.title}</span>
                              {isExpanded ? (
                                <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                              ) : (
                                <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                              )}
                            </button>
                            {isExpanded && (
                              <div className="px-4 pb-4 text-sm text-muted-foreground">
                                {feature.description}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {plan.popular && (
                    <>
                      <p className="text-sm text-muted-foreground mb-3">Everything included in the Chat plan plus:</p>
                      <div className="space-y-2">
                        {plan.features.slice(1).map((feature, index) => {
                          const isExpanded = expandedFeatures[`${plan.name}-${index}`];
                          return (
                            <div
                              key={index}
                              className="border border-primary/30 bg-primary/5 rounded-lg overflow-hidden"
                            >
                              <button
                                onClick={() => toggleFeature(plan.name, index)}
                                className="w-full flex items-center justify-between p-4 text-left hover:bg-primary/10 transition-colors"
                              >
                                <span className="font-medium text-foreground">{feature.title}</span>
                                {isExpanded ? (
                                  <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                                ) : (
                                  <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                                )}
                              </button>
                              {isExpanded && (
                                <div className="px-4 pb-4 text-sm text-muted-foreground">
                                  {feature.description}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}

                  {/* Channels */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Channels:</p>
                    <p className="text-sm text-foreground">{plan.channels.join(" + ")}</p>
                  </div>
                </div>
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

      {/* Detailed Overview Table */}
      <section className="py-16 bg-muted/30">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-trust-blue text-center mb-12">
            Detailed Overview of Our Plans
          </h2>
          
          <div className="max-w-5xl mx-auto bg-card rounded-2xl border border-border overflow-hidden shadow-card">
            {/* Table Header */}
            <div className="grid grid-cols-4 border-b border-border bg-muted/50">
              <div className="p-4"></div>
              <div className="p-4 text-center border-x border-border">
                <span className="font-semibold text-trust-blue">Automated Chat</span>
              </div>
              <div className="p-4 text-center border-r border-border">
                <span className="font-semibold text-trust-blue">Voice Only</span>
              </div>
              <div className="p-4 text-center">
                <span className="font-semibold text-primary">Voice + Chat</span>
              </div>
            </div>

            {/* Categories and Features */}
            {comparisonCategories.map((category, catIndex) => (
              <div key={catIndex}>
                {/* Category Header */}
                <div className="grid grid-cols-4 bg-muted/30 border-b border-border">
                  <div className="p-4 col-span-4">
                    <span className="font-semibold text-foreground">{category.name}</span>
                  </div>
                </div>

                {/* Features */}
                {category.features.map((feature, featIndex) => (
                  <div
                    key={featIndex}
                    className="grid grid-cols-4 border-b border-border last:border-b-0 hover:bg-muted/20 transition-colors"
                  >
                    <div className="p-4 text-sm text-muted-foreground">
                      {feature.name}
                    </div>
                    <div className="p-4 text-center text-sm border-x border-border">
                      {renderFeatureValue(feature.chat)}
                    </div>
                    <div className="p-4 text-center text-sm border-r border-border">
                      {renderFeatureValue(feature.voiceOnly)}
                    </div>
                    <div className="p-4 text-center text-sm">
                      {renderFeatureValue(feature.voice)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-trust-blue mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-8">
              For larger organizations or specific requirements, we offer tailored solutions with dedicated support and custom integrations.
            </p>
            <Button
              variant="hero-outline"
              size="lg"
              onClick={() => goToSection(navigate, location.pathname, "contact", { plan: "Enterprise / Custom Solution" })}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-trust-blue text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-semibold text-trust-blue mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-trust-blue">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 mb-8">
              Schedule a free demo and see how Clierge can transform your customer communication.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => goToSection(navigate, location.pathname, "contact")}
            >
              Get Free Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
