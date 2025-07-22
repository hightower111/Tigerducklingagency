import { motion } from "framer-motion";
import FlowingBlob from "./flowing-blob";
import LiquidOrb from "./liquid-orb";
import FloatingParticles from "./floating-particles";
import TechHexagon from "./tech-hexagon";
import PulseRings from "./pulse-rings";

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center tech-grid overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Original Flowing Blobs */}
        <FlowingBlob 
          size="w-96 h-96" 
          position="absolute top-20 left-10" 
          delay={0}
          opacity={0.6}
        />
        <FlowingBlob 
          size="w-64 h-64" 
          position="absolute top-40 right-20" 
          delay={-2}
          opacity={0.4}
        />
        <FlowingBlob 
          size="w-80 h-80" 
          position="absolute bottom-20 left-1/3" 
          delay={-4}
          opacity={0.5}
        />
        <FlowingBlob 
          size="w-48 h-48" 
          position="absolute bottom-40 right-1/4" 
          delay={-1}
          opacity={0.3}
        />
        
        {/* Liquid Orbs */}
        <LiquidOrb 
          size="w-32 h-32" 
          position="absolute top-60 left-20" 
          delay={1}
          duration={6}
        />
        <LiquidOrb 
          size="w-24 h-24" 
          position="absolute top-80 right-40" 
          delay={3}
          duration={8}
        />
        <LiquidOrb 
          size="w-40 h-40" 
          position="absolute bottom-60 right-20" 
          delay={2}
          duration={10}
        />
        
        {/* Tech Hexagons */}
        <TechHexagon 
          size="w-16 h-16" 
          position="absolute top-40 left-1/2" 
          delay={0}
        />
        <TechHexagon 
          size="w-12 h-12" 
          position="absolute bottom-80 left-40" 
          delay={5}
        />
        
        {/* Pulse Rings */}
        <PulseRings position="top-20 right-1/3" delay={0} count={3} />
        <PulseRings position="bottom-40 left-20" delay={2} count={2} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center depth-shadow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="block">Digital</span>
            <span className="block glow-text bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Experiences
            </span>
            <span className="block">That Flow</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We craft immersive web experiences that blend cutting-edge technology with stunning visual design. Your digital presence, reimagined.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="bg-gradient-to-r from-cyan-400 to-teal-400 text-black px-8 py-4 rounded-full font-semibold text-lg animate-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
            >
              Start Your Project
            </motion.button>
            <motion.button
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPortfolio}
            >
              View Our Work
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
