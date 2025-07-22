import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId!);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Cleanup
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
