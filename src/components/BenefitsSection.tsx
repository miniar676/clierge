import { Zap, Clock, CalendarCheck, DollarSign, TrendingUp } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Instant Response",
      description: "Answer every call and message in under a second, every single time.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss an opportunity, even at 2 AM on a Sunday.",
    },
    {
      icon: CalendarCheck,
      title: "Fewer No-Shows",
      description: "Automated reminders and confirmations reduce no-shows by up to 50%.",
    },
    {
      icon: DollarSign,
      title: "Lower Costs",
      description: "Replace expensive answering services with intelligent automation.",
    },
    {
      icon: TrendingUp,
      title: "More Revenue",
      description: "Convert more inquiries into paying customers automatically.",
    },
  ];

  return (
    <section className="section-padding bg-soft-blue">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Replace Missed Calls With Booked Appointments
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop losing customers to voicemail and slow responses.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-card rounded-2xl p-6 text-center shadow-soft hover-lift border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-trust-blue mb-2 text-sm md:text-base">
                {benefit.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
