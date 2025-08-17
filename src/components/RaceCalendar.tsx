import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Trophy, Clock } from "lucide-react";

const upcomingRaces = [
  {
    id: 1,
    name: "Monaco Grand Prix",
    location: "Monte Carlo, Monaco",
    date: "May 25, 2025",
    status: "upcoming",
    round: "Round 6",
    trackLength: "3.337 km",
    firstHeld: "1929",
    legendary: true
  },
  {
    id: 2,
    name: "British Grand Prix",
    location: "Silverstone, UK",
    date: "July 6, 2025",
    status: "upcoming",
    round: "Round 11",
    trackLength: "5.891 km",
    firstHeld: "1950",
    legendary: true
  },
  {
    id: 3,
    name: "Italian Grand Prix",
    location: "Monza, Italy",
    date: "September 7, 2025",
    status: "upcoming",
    round: "Round 16",
    trackLength: "5.793 km",
    firstHeld: "1922",
    legendary: true
  }
];

const recentResults = [
  {
    id: 1,
    name: "Australian Grand Prix",
    location: "Melbourne, Australia",
    date: "March 15, 2025",
    winner: "Max Verstappen",
    team: "Red Bull Racing",
    time: "1:28:45.123"
  },
  {
    id: 2,
    name: "Saudi Arabian Grand Prix",
    location: "Jeddah, Saudi Arabia",
    date: "March 8, 2025",
    winner: "Charles Leclerc",
    team: "Ferrari",
    time: "1:24:12.456"
  }
];

const RaceCalendar = () => {
  return (
    <section id="races" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-racing tracking-tight mb-4">
            From Past to Present,
            <span className="gradient-speed bg-clip-text text-transparent"> Every Race Matters</span>
          </h2>
          <p className="text-xl text-muted-foreground font-display max-w-2xl mx-auto">
            Follow the championship battle across legendary circuits that have witnessed racing history.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upcoming Races */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center">
              <Calendar className="mr-3 h-6 w-6 text-racing-red" />
              Upcoming Races
            </h3>
            
            <div className="space-y-4">
              {upcomingRaces.map(race => (
                <Card key={race.id} className="racing-card border-l-4 border-l-racing-red hover:border-l-racing-gold transition-racing">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-display text-lg">
                          {race.name}
                          {race.legendary && (
                            <Badge variant="outline" className="ml-2 border-racing-gold text-racing-gold">
                              Legendary
                            </Badge>
                          )}
                        </CardTitle>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{race.location}</span>
                        </div>
                      </div>
                      <Badge className="bg-racing-red text-racing-white">
                        {race.round}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Race Date</div>
                        <div className="font-medium">{race.date}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Track Length</div>
                        <div className="font-medium">{race.trackLength}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">First Held</div>
                        <div className="font-medium">{race.firstHeld}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6">
              <Button 
                variant="outline" 
                className="w-full racing-button border-racing-blue text-racing-blue hover:bg-racing-blue hover:text-racing-white"
              >
                View Full Race Calendar
              </Button>
            </div>
          </div>

          {/* Recent Results */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center">
              <Trophy className="mr-3 h-6 w-6 text-racing-gold" />
              Latest Results
            </h3>

            <div className="space-y-4">
              {recentResults.map(result => (
                <Card key={result.id} className="racing-card border-l-4 border-l-racing-gold">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-display text-lg">{result.name}</CardTitle>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{result.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">{result.date}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-racing-gold rounded-full flex items-center justify-center text-racing-black font-bold text-sm">
                          1
                        </div>
                        <div>
                          <div className="font-display font-semibold">{result.winner}</div>
                          <div className="text-sm text-muted-foreground">{result.team}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {result.time}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Flashback Feature */}
            <Card className="racing-card mt-6 gradient-vintage text-racing-black">
              <CardHeader>
                <CardTitle className="font-display flex items-center">
                  <Trophy className="mr-2 h-5 w-5" />
                  Flashback: Senna's Masterclass at Monaco '88
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">
                  In wet conditions that separated legends from mortals, Ayrton Senna delivered one of the greatest drives in F1 history.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="racing-button border-racing-black text-racing-black hover:bg-racing-black hover:text-racing-gold"
                >
                  Watch Historic Race
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaceCalendar;