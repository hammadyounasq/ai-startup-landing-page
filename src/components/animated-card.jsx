"use client";

import { motion } from "framer-motion";

export default function AnimatedCard({
  title,
  description,
  imageSrc,
  imageAlt,
  className,
}) {
  return (
    <motion.div
      className={`overflow-hidden border border-[#D3D5D8] rounded-2xl ${className} hover:shadow-lg transition-shadow duration-300`}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="p-7">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-sm max-w-[25rem] font-normal">{description}</div>
      </div>
      <div className="p-0">
        <motion.img
          src={imageSrc}
          className="bg-muted w-full"
          alt={imageAlt}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
