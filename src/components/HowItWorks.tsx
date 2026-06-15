import { Search, Wrench, Link, Rocket, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discover",
      description: "We learn about your business, your customers, and the conversations that matter most to you.",
    },
    {
      icon: Wrench,
      number: "02",
      title: "Build",
      description: "Our team creates your custom AI assistant with your brand voice and business logic built in.",
    },
    {
      icon: Link,
      number: "03",
      title: "Connect",
      description: "We integrate with your calendar, CRM, and communication channels so everything works together.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Launch",
      description: "Go live in as little as 48 hours. We handle everything so you can focus on your business.",
    },
    {
      icon: TrendingUp,
      number: "05",
      title: "Optimize",
      description: "Our team continuously improves your AI based on real conversations and performance insights.",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A fully managed service. From discovery to launch in days, not months.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-card rounded-2xl p-6 shadow-soft hover-lift border border-border/50 h-full">
                  {/* Step Number Badge */}
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-4 relative z-10">
                    {step.number}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-trust-blue">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {/* Connector dot for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 rounded-full bg-primary/20 -translate-y-1/2 z-20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
