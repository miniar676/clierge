import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { API_BASE_URL } from "@/lib/api";
import { useLocation } from "react-router-dom";

const ContactSection = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });
  const [interest, setInterest] = useState("Free Demo");

  useEffect(() => {
    const plan = new URLSearchParams(location.search).get("plan");
    if (plan) {
      setInterest(plan);
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Hi, I'm interested in the ${plan} plan. Please tell me more.`,
      }));
    }
  }, [location.search]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          business_name: formData.businessName,
          email: formData.email,
          phone: formData.phone || null,
          services: formData.services || null,
          message: formData.message || null,
          interest,
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        services: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                CONTACT US
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Let's Automate Your Business
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Ready to never miss a call again? Get in touch and we'll show you how AI can transform your customer communication.
              </p>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-soft-blue flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary font-medium">Email us at</p>
                    <p className="text-foreground font-semibold">clierge.solution@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 bg-foreground rounded-xl p-6">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-background">48h</p>
                <p className="text-sm text-muted">Setup Time</p>
              </div>
              <div className="text-center border-x border-muted">
                <p className="text-3xl md:text-4xl font-bold text-background">24/7</p>
                <p className="text-sm text-muted">Availability</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-background">99%</p>
                <p className="text-sm text-muted">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    placeholder="Your Business"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@business.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone / WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 234 567 890"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="services">Services You Offer</Label>
                <Input
                  id="services"
                  name="services"
                  placeholder="e.g., Hair styling, Dental care, Personal training..."
                  value={formData.services}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your business and how we can help..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to our privacy policy. We'll respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
