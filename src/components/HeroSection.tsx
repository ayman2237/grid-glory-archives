import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, Trophy, Clock } from "lucide-react";
import heroRacing from "@/assets/hero-racing.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden racing-grid">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroRacing} 
          alt="Vintage Formula 1 Racing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        <div className="absolute inset-0 racing-stripes opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-left max-w-4xl">
        <div className="space-y-6">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="vintage-heading text-foreground leading-none">
              Relive the 
              <span className="block gradient-racing bg-clip-text text-transparent">
                Glory Days
              </span>
              of Racing.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-display max-w-2xl leading-relaxed">
              From roaring engines to legendary rivalries—your pit stop for everything Formula racing, past and present.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="racing-button shadow-racing hover:shadow-glow group">
              Explore Latest News
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="racing-button border-racing-gold text-racing-gold hover:bg-racing-gold hover:text-racing-black"
            >
              View Race Calendar
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 max-w-md">
            <div className="text-center">
              <div className="text-2xl font-racing text-racing-red">75+</div>
              <div className="text-sm text-muted-foreground font-display">Years of History</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-racing text-racing-gold">24</div>
              <div className="text-sm text-muted-foreground font-display">Races This Season</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-racing text-racing-blue">10</div>
              <div className="text-sm text-muted-foreground font-display">Racing Teams</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-8 hidden lg:block">
        <div className="racing-card max-w-xs">
          <div className="flex items-center space-x-3">
            <Clock className="h-6 w-6 text-racing-red" />
            <div>
              <div className="font-display font-semibold">Next Race</div>
              <div className="text-sm text-muted-foreground">Monaco Grand Prix • May 25</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="racing-card max-w-xs">
          <div className="flex items-center space-x-3">
            <Trophy className="h-6 w-6 text-racing-gold" />
            <div>
              <div className="font-display font-semibold">Championship Leader</div>
              <div className="text-sm text-muted-foreground">Max Verstappen • 125 pts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-racing-red rounded-full flex justify-center">
          <div className="w-1 h-3 bg-racing-red rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;