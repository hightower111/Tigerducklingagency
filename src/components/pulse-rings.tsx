import { motion } from "framer-motion";

interface PulseRingsProps {
  position: string;
  count?: number;
  delay?: number;
}

export default function PulseRings({ position, count = 3, delay = 0 }: PulseRingsProps) {
  return (
    <div className={`absolute ${position}`}>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="pulse-ring absolute w-20 h-20"
          animate={{
            scale: [0.5, 2.5],
            opacity: [1, 0],
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
            repeat: Infinity,
            delay: delay + index * 0.6,
          }}
        />
      ))}
    </div>
  );
}