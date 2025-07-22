import { motion } from "framer-motion";
import LiquidOrb from "./liquid-orb";
import TechHexagon from "./tech-hexagon";

export default function ServicesSection() {
  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks and cutting-edge technologies.",
      features: ["React & Next.js", "Node.js & Python", "Responsive Design"]
    },
    {
      icon: "fas fa-palette",
      title: "UI/UX Design",
      description: "Intuitive interfaces that users love, crafted with attention to detail and user psychology.",
      features: ["User Research", "Prototyping", "Design Systems"]
    },
    {
      icon: "fas fa-chart-line",
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that amplify your brand and drive conversions.",
      features: ["SEO Optimization", "Social Media", "Analytics & Tracking"]
    },
    {
      icon: "fas fa-headset",
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance to keep your digital assets performing optimally.",
      features: ["24/7 Monitoring", "Security Updates", "Performance Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden liquid-gradient">
      {/* Additional animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <LiquidOrb 
          size="w-20 h-20" 
          position="absolute top-10 right-10" 
          delay={1}
          duration={12}
        />
        <TechHexagon 
          size="w-8 h-8" 
          position="absolute bottom-20 left-10" 
          delay={3}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 glow-text">Our Expertise</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to launch, we deliver comprehensive digital solutions that drive results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
              <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-800 group-hover:border-cyan-400 transition-all duration-300 depth-shadow transform-gpu">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-black text-xl`}></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <i className="fas fa-check text-cyan-400 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
