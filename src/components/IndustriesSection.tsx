import { Sparkles, Stethoscope, Dumbbell, Briefcase } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Sparkles,
      title: "Beauty & Wellness",
      description: "Salons, spas, and beauty studios use Clierge to handle appointment bookings, product inquiries, and client follow ups. Fewer missed calls, more filled chairs.",
      examples: ["Hair Salons", "Nail Studios", "Med Spas", "Wellness Centers"],
    },
    {
      icon: Stethoscope,
      title: "Medical & Dental",
      description: "Healthcare practices rely on Clierge to manage patient scheduling, answer common questions, and reduce admin workload. More appointments, less overhead.",
      examples: ["Dental Clinics", "Private Practices", "Specialists", "Therapy Offices"],
    },
    {
      icon: Dumbbell,
      title: "Fitness & Training",
      description: "Gyms and personal trainers use Clierge to book sessions, handle membership inquiries, and engage prospects around the clock. More sign ups, fewer lost leads.",
      examples: ["Personal Trainers", "Yoga Studios", "Fitness Centers", "Sports Clubs"],
    },
    {
      icon: Briefcase,
      title: "Service Businesses",
      description: "Professional service providers use Clierge to capture leads, schedule consultations, and maintain client relationships. More booked calls, better conversion.",
      examples: ["Consultants", "Legal Services", "Real Estate", "Financial Advisors"],
    },
  ];

  return (
    <section id="solutions" className="section-padding bg-soft-blue">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Service Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            Clierge is designed specifically for businesses that depend on appointments and client relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-card rounded-2xl p-8 shadow-card hover-lift border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-trust-blue">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.examples.map((example) => (
                      <span
                        key={example}
                        className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
