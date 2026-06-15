import { Phone, MessageSquare } from "lucide-react";

const AIDemo = () => {
  return (
    <section className="relative section-padding bg-trust-blue text-primary-foreground overflow-hidden">
      {/* Decorative glows */}
      <div className="bg-glow top-0 right-1/4 w-96 h-96 bg-primary/20" />
      <div className="bg-glow bottom-0 left-1/4 w-96 h-96 bg-primary/10" />

      <div className="section-container relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            See Clierge in Action
          </h2>
          <p className="text-lg text-white/70">
            Natural conversations that feel human, powered by advanced AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Voice Call Demo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-white">Voice Call</p>
                <p className="text-xs text-white/60">AI-Powered Response</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-xs">
                  👤
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-sm text-white/90">
                  "Hi, I'd like to schedule a dental cleaning for next week."
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="bg-white/20 rounded-xl p-3 text-sm text-white max-w-[85%]">
                  "Of course! I have openings on Tuesday at 9 AM, Wednesday at 2 PM, or Thursday at 11 AM. Which works best for your schedule?"
                </div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-xs">
                  AI
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-xs">
                  👤
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-sm text-white/90">
                  "Wednesday at 2 PM please."
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="bg-white/20 rounded-xl p-3 text-sm text-white max-w-[85%]">
                  "Perfect! I've booked your dental cleaning for Wednesday at 2 PM. You'll receive a confirmation text shortly. Is there anything else I can help you with?"
                </div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-xs">
                  AI
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Demo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-white">WhatsApp Chat</p>
                <p className="text-xs text-white/60">Instant Response</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white/10 rounded-xl rounded-tl-sm p-3 text-sm text-white/90 max-w-[85%]">
                Hi! Do you have any availability for a massage this weekend?
              </div>
              <div className="bg-primary/80 rounded-xl rounded-tr-sm p-3 text-sm text-white ml-auto max-w-[85%]">
                Hello! 👋 Yes, we have availability on Saturday and Sunday. Would you prefer a specific time?
              </div>
              <div className="bg-white/10 rounded-xl rounded-tl-sm p-3 text-sm text-white/90 max-w-[85%]">
                Saturday afternoon would be great. What's available?
              </div>
              <div className="bg-primary/80 rounded-xl rounded-tr-sm p-3 text-sm text-white ml-auto max-w-[85%]">
                On Saturday afternoon I have: 1:00 PM, 3:00 PM, and 4:30 PM. A 60-minute session is $90 and 90-minute is $120. Which would you prefer?
              </div>
              <div className="bg-white/10 rounded-xl rounded-tl-sm p-3 text-sm text-white/90 max-w-[85%]">
                3pm, 60 minutes please!
              </div>
              <div className="bg-primary/80 rounded-xl rounded-tr-sm p-3 text-sm text-white ml-auto max-w-[85%]">
                Booked! ✅ Saturday 3PM, 60-min massage. See you then! I'll send a reminder Friday evening.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;
