import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  delay: number;
  duration: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleArray: Particle[] = [];
    for (let i = 0; i < 20; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * window.innerWidth,
        delay: Math.random() * 10,
        duration: 15 + Math.random() * 10,
      });
    }
    setParticles(particleArray);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="floating-particles absolute"
          style={{ left: `${particle.x}px` }}
          animate={{
            y: [-100, -window.innerHeight - 100],
            x: [0, Math.sin(particle.id) * 100],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}