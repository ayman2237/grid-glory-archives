import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    title: "Ferrari's Vintage Victory Spirit Returns in Monza",
    excerpt: "Monza roared like it was 1965 as Ferrari took the checkered flag, reminding fans why the Prancing Horse is eternal.",
    date: "March 15, 2025",
    readTime: "4 min read",
    category: "Race Report",
    featured: true
  },
  {
    id: 2,
    title: "The Lost Art of Manual Gear Changes",
    excerpt: "Before paddle shifters and DRS, drivers were true masters of their machines. A look back at racing's golden era.",
    date: "March 12, 2025",
    readTime: "6 min read",
    category: "History"
  },
  {
    id: 3,
    title: "Monaco 2025: Where Legends Are Made",
    excerpt: "The most prestigious street circuit in motorsport prepares for another chapter in its storied history.",
    date: "March 10, 2025",
    readTime: "3 min read",
    category: "Preview"
  },
  {
    id: 4,
    title: "Ayrton Senna's Lasting Legacy",
    excerpt: "Thirty years later, the Brazilian maestro's influence still echoes through the paddock.",
    date: "March 8, 2025",
    readTime: "8 min read",
    category: "Legends"
  }
];

const LatestNews = () => {
  return (
    <section id="news" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-racing tracking-tight mb-4">
            Breaking News, 
            <span className="gradient-vintage bg-clip-text text-transparent"> Classic Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground font-display max-w-2xl mx-auto">
            From the latest race reports to timeless racing tales that shaped the sport we love.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          {newsArticles
            .filter(article => article.featured)
            .map(article => (
              <Card key={article.id} className="racing-card bg-gradient-to-r from-card to-card/80 border-racing-red/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-racing-red text-racing-white text-sm font-display font-semibold rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-display text-foreground leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Button className="racing-button shadow-racing hover:shadow-glow group">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsArticles
            .filter(article => !article.featured)
            .map(article => (
              <Card key={article.id} className="racing-card hover:border-racing-gold/40 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-display font-medium rounded">
                      {article.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-display leading-tight group-hover:text-racing-gold transition-racing">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.date}
                    </span>
                    <ArrowRight className="h-4 w-4 text-racing-red group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="racing-button border-racing-gold text-racing-gold hover:bg-racing-gold hover:text-racing-black"
          >
            View All News & Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;