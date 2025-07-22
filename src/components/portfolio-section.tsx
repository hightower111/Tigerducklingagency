import { motion } from "framer-motion";
import FlowingBlob from "./flowing-blob";
import LiquidOrb from "./liquid-orb";
import PulseRings from "./pulse-rings";

export default function PortfolioSection() {
  const featuredProjects = [
    {
      title: "BloomNest",
      category: "SUSTAINABLE BUSINESS",
      description: "A beautiful web platform for sustainable business solutions with eco-friendly design and natural aesthetics.",
      technologies: ["React", "Node.js"],
      metric: "Eco-friendly digital presence",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Voltix",
      category: "TECH PLATFORM",
      description: "High-energy technology platform with dynamic design and powerful user experience for modern tech solutions.",
      technologies: ["Vue.js", "Python"],
      metric: "Lightning-fast performance",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    }
  ];

  const additionalProjects = [
    {
      title: "Whiskella",
      category: "FOOD & BEVERAGE",
      description: "Delightful bakery website with sweet design elements",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300"
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <FlowingBlob 
        size="w-64 h-64" 
        position="absolute top-20 right-10" 
        opacity={0.3}
      />
      <LiquidOrb 
        size="w-28 h-28" 
        position="absolute bottom-10 left-10" 
        delay={2}
        duration={14}
      />
      <PulseRings position="top-60 left-1/2" delay={1} count={2} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 glow-text">Recent Work</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our latest projects and see how we transform ideas into digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-gray-900 rounded-3xl border border-gray-800 group-hover:border-cyan-400 transition-all duration-300 overflow-hidden depth-shadow transform-gpu">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 text-sm font-mono"># {project.category}</span>
                    <div className="flex space-x-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-800 px-3 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{project.metric}</span>
                    <button className="text-cyan-400 hover:text-white transition-colors">
                      <i className="fas fa-external-link-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
          {additionalProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-gray-900 rounded-2xl border border-gray-800 group-hover:border-cyan-400 transition-colors overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-cyan-400 text-xs font-mono"># {project.category}</span>
                  <h4 className="text-lg font-semibold mb-2 mt-2">{project.title}</h4>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
