import { motion } from "framer-motion";
import FlowingBlob from "./flowing-blob";
import LiquidOrb from "./liquid-orb";
import TechHexagon from "./tech-hexagon";

export default function AboutSection() {
  const values = [
    {
      icon: "fas fa-rocket",
      title: "Innovation First",
      description: "Always pushing boundaries with the latest technologies and creative solutions."
    },
    {
      icon: "fas fa-users",
      title: "Client Partnership",
      description: "We work closely with our clients as trusted partners, not just vendors."
    },
    {
      icon: "fas fa-award",
      title: "Quality Excellence",
      description: "Every project receives our full attention to detail and commitment to excellence."
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "8+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <FlowingBlob 
        size="w-80 h-80" 
        position="absolute bottom-20 left-10" 
        opacity={0.4}
      />
      <LiquidOrb 
        size="w-36 h-36" 
        position="absolute top-20 right-20" 
        delay={1.5}
        duration={16}
      />
      <TechHexagon 
        size="w-10 h-10" 
        position="absolute top-40 left-1/3" 
        delay={2}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8 glow-text">We Are TigerDuckling</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              A collective of designers, developers, and digital strategists passionate about creating experiences that matter. We believe in the power of technology to transform businesses and connect people.
            </p>
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center">
                    <i className={`${value.icon} text-black text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{value.title}</h4>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="FlowTech team collaborating" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold glow-text mb-2">{stat.number}</div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
