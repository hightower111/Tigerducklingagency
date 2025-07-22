import { motion } from "framer-motion";

interface TechHexagonProps {
  size: string;
  position: string;
  delay?: number;
}

export default function TechHexagon({ size, position, delay = 0 }: TechHexagonProps) {
  return (
    <motion.div
      className={`tech-hexagon ${size} ${position}`}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        delay: delay,
      }}
    />
  );
}