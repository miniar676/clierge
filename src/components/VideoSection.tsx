const VideoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            SEE IT IN ACTION
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Watch How Clierge Works
          </h2>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-elevated border border-border">
          <video
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full"
            src="/demo.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
