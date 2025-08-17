import { Trophy, Calendar, Users, BookOpen, Star, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Racing Hub",
      links: [
        { name: "Latest News", href: "#news", icon: Trophy },
        { name: "Race Calendar", href: "#races", icon: Calendar },
        { name: "Driver Profiles", href: "#drivers", icon: Users },
        { name: "History Archive", href: "#history", icon: BookOpen },
      ]
    },
    {
      title: "Fan Zone",
      links: [
        { name: "Vintage Wallpapers", href: "#fanzone", icon: Star },
        { name: "Racing Trivia", href: "#trivia", icon: Star },
        { name: "Classic Posters", href: "#posters", icon: Star },
        { name: "Community", href: "#community", icon: Users },
      ]
    },
    {
      title: "Heritage",
      links: [
        { name: "Racing Legends", href: "#legends", icon: Trophy },
        { name: "Classic Races", href: "#classics", icon: Calendar },
        { name: "Vintage Archives", href: "#archive", icon: BookOpen },
        { name: "Era by Era", href: "#eras", icon: BookOpen },
      ]
    }
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Trophy className="h-8 w-8 text-racing-red" />
                <span className="font-racing text-2xl tracking-tight">
                  Grand Prix Heritage
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Celebrating the speed, style, and stories of racing. From vintage circuits to modern championships—where legends never fade.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>heritage@grandprix.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Monaco, Monte Carlo</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-display font-bold text-lg mb-4 text-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="flex items-center space-x-2 text-muted-foreground hover:text-racing-red transition-racing group"
                      >
                        <link.icon className="h-4 w-4 group-hover:text-racing-gold transition-racing" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Racing Stripe Divider */}
        <div className="h-1 bg-gradient-to-r from-racing-red via-racing-gold to-racing-blue"></div>

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Grand Prix Heritage. Celebrating the speed, style, and stories of racing.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-racing-red transition-racing">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-racing-red transition-racing">
                Terms of Service
              </a>
              <a href="#about" className="text-muted-foreground hover:text-racing-red transition-racing">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-racing-red transition-racing">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Vintage Racing Quote */}
        <div className="border-t border-border pt-6 pb-4">
          <div className="text-center">
            <p className="text-muted-foreground italic font-display text-lg">
              "Racing is life. Anything that happens before or after is just waiting."
            </p>
            <p className="text-racing-gold font-medium mt-2">— Steve McQueen</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;