"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingElement({
  children,
  delay = 0,
  amplitude = 10,
}) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Delay the start of animation to prevent layout shifts during page load
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={
        shouldAnimate
          ? {
              y: [0, -amplitude, 0],
              transition: {
                delay,
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }
          : {}
      }
    >
      {children}
    </motion.div>
  );
}
