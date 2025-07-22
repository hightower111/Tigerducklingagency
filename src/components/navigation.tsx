import { useState } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg flex items-center justify-center">
              <i className="fas fa-code text-black text-sm"></i>
            </div>
            <span className="text-xl font-bold glow-text">TigerDuckling</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-white hover:text-cyan-400"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 border-t border-gray-800 pt-4"
          >
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-cyan-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#services" className="hover:text-cyan-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#portfolio" className="hover:text-cyan-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
