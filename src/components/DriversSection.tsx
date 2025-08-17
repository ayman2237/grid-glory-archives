import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Star, Medal, Crown } from "lucide-react";

const legendaryDrivers = [
  {
    id: 1,
    name: "Juan Manuel Fangio",
    era: "1950s",
    titles: 5,
    tagline: "The Maestro—where control met courage",
    nationality: "Argentina",
    teams: ["Mercedes", "Ferrari", "Maserati"],
    legendary: true,
    icon: Crown
  },
  {
    id: 2,
    name: "Ayrton Senna",
    era: "1980s-90s",
    titles: 3,
    tagline: "Poetry in motion through Monaco's streets",
    nationality: "Brazil",
    teams: ["McLaren", "Williams", "Lotus"],
    legendary: true,
    icon: Star
  },
  {
    id: 3,
    name: "Michael Schumacher",
    era: "1990s-2000s",
    titles: 7,
    tagline: "The record-breaker who redefined excellence",
    nationality: "Germany",
    teams: ["Ferrari", "Mercedes", "Benetton"],
    legendary: true,
    icon: Trophy
  }
];

const currentDrivers = [
  {
    id: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
    nationality: "Netherlands",
    points: 125,
    position: 1,
    wins: 3
  },
  {
    id: 2,
    name: "Charles Leclerc",
    team: "Ferrari",
    nationality: "Monaco",
    points: 98,
    position: 2,
    wins: 2
  },
  {
    id: 3,
    name: "Lewis Hamilton",
    team: "Mercedes",
    nationality: "United Kingdom",
    points: 87,
    position: 3,
    wins: 1
  }
];

const DriversSection = () => {
  return (
    <section id="drivers" className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-racing tracking-tight mb-4">
            Legends 
            <span className="gradient-racing bg-clip-text text-transparent"> Behind the Wheel</span>
          </h2>
          <p className="text-xl text-muted-foreground font-display max-w-2xl mx-auto">
            From racing's golden era to today's championship battles—meet the drivers who define greatness.
          </p>
        </div>

        {/* Legendary Drivers */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold mb-8 flex items-center">
            <Crown className="mr-3 h-6 w-6 text-racing-gold" />
            Racing Legends
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legendaryDrivers.map(driver => (
              <Card key={driver.id} className="racing-card group hover:shadow-glow border-racing-gold/20">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-racing-gold to-racing-red rounded-full flex items-center justify-center">
                      <driver.icon className="h-8 w-8 text-racing-white" />
                    </div>
                  </div>
                  <CardTitle className="font-racing text-xl text-center">
                    {driver.name}
                  </CardTitle>
                  <div className="flex items-center justify-center space-x-2">
                    <Badge variant="outline" className="border-racing-gold text-racing-gold">
                      {driver.era}
                    </Badge>
                    <Badge className="bg-racing-red text-racing-white">
                      {driver.titles} Titles
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground italic mb-4 font-display">
                    "{driver.tagline}"
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Nationality:</span> {driver.nationality}
                    </div>
                    <div>
                      <span className="font-medium">Teams:</span> {driver.teams.join(", ")}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Championship */}
        <div>
          <h3 className="text-2xl font-display font-bold mb-8 flex items-center">
            <Trophy className="mr-3 h-6 w-6 text-racing-red" />
            2025 Championship Standings
          </h3>

          <div className="grid gap-4">
            {currentDrivers.map((driver, index) => (
              <Card key={driver.id} className="racing-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center font-racing text-lg font-bold
                        ${index === 0 ? 'bg-racing-gold text-racing-black' : 
                          index === 1 ? 'bg-gray-400 text-racing-white' : 
                          index === 2 ? 'bg-orange-600 text-racing-white' : 
                          'bg-secondary text-secondary-foreground'}
                      `}>
                        {driver.position}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg">{driver.name}</h4>
                        <p className="text-muted-foreground">{driver.team}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="text-center">
                        <div className="font-racing text-xl text-racing-red">{driver.points}</div>
                        <div className="text-muted-foreground">Points</div>
                      </div>
                      <div className="text-center">
                        <div className="font-racing text-xl text-racing-gold">{driver.wins}</div>
                        <div className="text-muted-foreground">Wins</div>
                      </div>
                      <div className="text-center">
                        <Badge variant="outline" className="text-xs">
                          {driver.nationality}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 space-y-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="racing-button border-racing-blue text-racing-blue hover:bg-racing-blue hover:text-racing-white mr-4"
            >
              View Full Standings
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="racing-button border-racing-gold text-racing-gold hover:bg-racing-gold hover:text-racing-black"
            >
              Explore Driver Profiles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriversSection;