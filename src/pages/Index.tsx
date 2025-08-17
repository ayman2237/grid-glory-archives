import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/LatestNews";
import RaceCalendar from "@/components/RaceCalendar";
import DriversSection from "@/components/DriversSection";
import Footer from "@/components/Footer";

const Index = () => {
  console.log("Index page is rendering"); // Debug log
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
