import { motion } from "framer-motion";

interface LiquidOrbProps {
  size: string;
  position: string;
  delay?: number;
  duration?: number;
}

export default function LiquidOrb({ size, position, delay = 0, duration = 8 }: LiquidOrbProps) {
  return (
    <motion.div
      className={`liquid-orb ${size} ${position}`}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.3, 0.8, 0.4, 0.6],
        scale: [1, 1.2, 0.8, 1.1, 1],
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        delay: delay,
      }}
    />
  );
}