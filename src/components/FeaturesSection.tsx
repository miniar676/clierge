import { Phone, MessageSquare, CalendarDays, Brain, Users, Puzzle } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Phone,
      title: "AI Voice Calls",
      description: "Natural sounding voice AI that handles inbound calls professionally, capturing every opportunity.",
      benefit: "Never miss a call again",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Automation",
      description: "Instant, intelligent responses to customer messages around the clock, every day of the year.",
      benefit: "Instant customer engagement",
    },
    {
      icon: CalendarDays,
      title: "Advanced Booking",
      description: "Smart scheduling that syncs with your calendar in real time, avoiding conflicts automatically.",
      benefit: "Automated appointment management",
    },
    {
      icon: Brain,
      title: "Human Like Conversations",
      description: "Context aware AI that understands customer intent and responds naturally and professionally.",
      benefit: "Premium customer experience",
    },
    {
      icon: Users,
      title: "Lead Capture",
      description: "Automatically qualify and capture leads from every interaction, so no inquiry goes unnoticed.",
      benefit: "Convert more inquiries",
    },
    {
      icon: Puzzle,
      title: "API & CRM Integrations",
      description: "Seamlessly connect with your existing tools and workflows for a unified customer experience.",
      benefit: "Works with your stack",
    },
  ];

  return (
    <section id="features" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Powered Communication That Actually Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to automate customer communication without sacrificing quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover-lift border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-trust-blue">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                {feature.description}
              </p>
              <p className="text-xs font-medium text-primary">
                {feature.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
