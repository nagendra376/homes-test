import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import OurImpactSection from './components/OurImpactSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import OurServicesSection from './components/OurServicesSection.jsx';
import PropertyListingsSection from './components/PropertyListingsSection.jsx';
import HighlightedHomeSection from './components/HighlightedHomeSection.jsx';
import FaqSection from './components/FaqSection.jsx';
import Footer from './components/Footer.jsx';
import SmoothScroll from './components/SmoothScroll.jsx';

export default function App() {
  return (
    <div className="homy-app-root">
      {/* Lenis Smooth Scroll Engine (Framer Identical) */}
      <SmoothScroll />

      {/* Top Header */}
      <Header />

      {/* Main Content Flow */}
      <main className="homy-main-flow">
        {/* Sticky Hero Section with Villa & Parallax Smoke */}
        <HeroSection />

        {/* Relative Our Impact Section with Cloud Fog Transition & Bento Stats */}
        <OurImpactSection />

        {/* About Section (Bildora 3D Curved Cylindrical Carousel & 4 Stats) */}
        <AboutSection />

        {/* Our Services Section (Interactive Accordion with 3D Villa Render) */}
        <OurServicesSection />

        {/* Property Listings Section (2x2 Luxury Properties Grid with Glass Badges) */}
        <PropertyListingsSection />

        {/* Highlighted Home Section (Infinite Ticker Marquee with Pool Villa Thumbnail) */}
        <HighlightedHomeSection />

        {/* FAQ Section ("Things You Should Know") */}
        <FaqSection />
      </main>

      {/* Luxury Grand CTA & Site Footer */}
      <Footer />
    </div>
  );
}
