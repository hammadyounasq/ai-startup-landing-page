import { Button } from "../components/ui/button";
import heroimage from "../assets/heroimage.png";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";
import c7 from "../assets/c7.png";
import c8 from "../assets/c8.png";
import b from "../assets/bottom.png";

// const companylogo = [
//   { image: c1 },
//   { image: c2 },
//   { image: c3 },
//   { image: c4 },
//   { image: c5 },
//   { image: c6 },
//   { image: c7 },
//   { image: c8 },
// ];

// export function HeroSection() {
//   return (
//     <section className="relative pt-32 pb-16 bg-[#0e1622] min-h-screen flex flex-col justify-between">
//       <div className="flex flex-col justify-center items-center text-center flex-grow">
//         <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white mb-6">
//           The <span className="text-[#E6B45E]">only</span> AI customer service
//           solution you need
//         </h1>
//         <p className="max-w-2xl text-lg text-gray-400 mb-8">
//           Resolve issues faster and boost customer satisfaction—all while
//           reducing team workload—with the <em>only</em> customer service
//           solution you&apos;ll ever need.
//         </p>
//         <div className="flex gap-4 mb-16">
//           <Button
//             size="lg"
//             className="bg-[#0052FF] hover:bg-[#0040CC] text-white"
//           >
//             Start free trial
//           </Button>
//           <Button
//             size="lg"
//             variant="outline"
//             className="border-gray-700 text-white hover:bg-gray-800"
//           >
//             View demo
//           </Button>
//         </div>
//         <div className="relative w-full max-w-5xl">
//           <img
//             src={heroimage}
//             alt="Intercom Dashboard"
//             width={1200}
//             height={800}
//             className="rounded-lg border border-gray-800 shadow-2xl"
//           />
//         </div>
//         <div className="mt-20 mb-20">
//           <p className="text-sm font-medium text-gray-400 mb-8">
//             TRUSTED BY +25,000 BUSINESSES
//           </p>
//           <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center opacity-70">
//             {companylogo.map((e, i) => (
//               <img key={i} src={e.image} className="object-cover w-[9rem]" />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="absolute bottom-[-0.1rem] w-full">
//         <img src={b} alt="Intercom Dashboard" className="w-full" />
//       </div>
//     </section>
//   );
// }
("use client");

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Company logos - using placeholder images for demonstration
// const companylogo = [
//   { image: "/placeholder.svg?height=80&width=150" },
//   { image: "/placeholder.svg?height=80&width=150" },
//   { image: "/placeholder.svg?height=80&width=150" },
//   { image: "/placeholder.svg?height=80&width=150" },
//   { image: "/placeholder.svg?height=80&width=150" },
//   { image: "/placeholder.svg?height=80&width=150" },
//   { image: "/placeholder.svg?height=80&width=150" },
//   { image: "/placeholder.svg?height=80&width=150" },
// ];

const companylogo = [
  { image: c1 },
  { image: c2 },
  { image: c3 },
  { image: c4 },
  { image: c5 },
  { image: c6 },
  { image: c7 },
  { image: c8 },
];
export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: 0.6,
      },
    },
  };

  const logoContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.2,
      },
    },
  };

  const logoVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 0.7,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative pt-32 pb-16 bg-[#0e1622] min-h-screen flex flex-col justify-between overflow-hidden">
      <motion.div
        className="flex flex-col justify-center items-center text-center flex-grow px-4 sm:px-6"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1
          className="max-w-4xl text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          variants={itemVariants}
        >
          The{" "}
          <motion.span
            className="text-[#E6B45E]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.8, duration: 0.5 },
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
          >
            only
          </motion.span>{" "}
          AI customer service solution you need
        </motion.h1>

        <motion.p
          className="max-w-2xl text-base sm:text-lg text-gray-400 mb-8"
          variants={itemVariants}
        >
          Resolve issues faster and boost customer satisfaction—all while
          reducing team workload—with the <em>only</em> customer service
          solution you&apos;ll ever need.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-16"
          variants={containerVariants}
        >
          <motion.div variants={buttonVariants} whileHover="hover">
            <Button
              size="lg"
              className="bg-[#0052FF] hover:bg-[#0040CC] text-white w-full sm:w-auto"
            >
              Start free trial
            </Button>
          </motion.div>

          <motion.div variants={buttonVariants} whileHover="hover">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800 w-full sm:w-auto"
            >
              View demo
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full max-w-5xl"
          variants={imageVariants}
        >
          <motion.img
            src={heroimage}
            alt="Intercom Dashboard"
            width={1200}
            height={800}
            className="rounded-lg border border-gray-800 shadow-2xl w-full"
            initial={{ filter: "blur(10px)" }}
            animate={{
              filter: "blur(0px)",
              transition: { duration: 1.2, delay: 0.7 },
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              transition: { duration: 0.3 },
            }}
          />

          <motion.div
            className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#0052FF]/20 to-[#E6B45E]/20 opacity-0"
            animate={{
              opacity: [0, 0.5, 0],
              transition: {
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
          />
        </motion.div>

        <div className="mt-20 mb-20">
          <motion.p
            className="text-sm font-medium text-gray-400 mb-8"
            variants={itemVariants}
          >
            TRUSTED BY +25,000 BUSINESSES
          </motion.p>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center"
            variants={logoContainerVariants}
          >
            {companylogo.map((e, i) => (
              <motion.img
                key={i}
                src={e.image}
                className="object-cover w-full max-w-[9rem] mx-auto"
                variants={logoVariants}
                whileHover={{
                  scale: 1.1,
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[-0.1rem] w-full"
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 1,
            duration: 0.8,
            type: "spring",
            stiffness: 50,
          },
        }}
      >
        <img
          src={b || "/placeholder.svg"}
          alt="Wave background"
          className="w-full"
        />
      </motion.div>

      {/* Floating particles animation */}
      <Particles />
    </section>
  );
}

// Animated particles component
function Particles() {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#E6B45E]/10"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
