import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/LatestNews";
import RaceCalendar from "@/components/RaceCalendar";
import DriversSection from "@/components/DriversSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <LatestNews />
      <RaceCalendar />
      <DriversSection />
      <Footer />
    </div>
  );
};

export default Index;
