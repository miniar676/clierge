import { Clock, PhoneOff, CalendarCheck } from "lucide-react";

const SocialProof = () => {
  const stats = [
    {
      icon: Clock,
      value: "<1s",
      label: "Average Response Time",
      sublabel: "Instant replies to every message",
    },
    {
      icon: PhoneOff,
      value: "80%",
      label: "Reduction in Missed Calls",
      sublabel: "Based on client reported data",
    },
    {
      icon: CalendarCheck,
      value: "3x",
      label: "Increase in Bookings",
      sublabel: "When compared to voicemail",
    },
  ];

  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="section-container">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by service businesses worldwide
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto md:divide-x md:divide-border">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:px-8">
              <div className="flex justify-center mb-2">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-trust-blue">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
