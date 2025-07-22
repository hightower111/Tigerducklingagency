import { motion } from "framer-motion";

interface FlowingBlobProps {
  size: string;
  position: string;
  delay?: number;
  opacity?: number;
}

export default function FlowingBlob({ size, position, delay = 0, opacity = 0.6 }: FlowingBlobProps) {
  return (
    <motion.div
      className={`flowing-blob ${size} rounded-full ${position}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 1, 0],
      }}
      transition={{
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        delay: delay,
      }}
      style={{ opacity }}
    />
  );
}
