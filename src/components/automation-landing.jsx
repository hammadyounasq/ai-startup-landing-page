"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import chat2 from "../assets/chat2.png";
import check from "../assets/chectblue.svg";
import { ArrowRight, MessageCircle, TrendingDown, Shield } from "lucide-react";

// export default function AutomationLanding() {
//   return (
//     <div className="relative overflow-hidden min-h-screen ">
//       <div className="absolute z-[0] w-full h-[10rem]  top-[10%] left-[0%]  bottom-20 blur-[3rem]  bg-blue-300 bg-opacity-50  " />

//       <div className="relative max-w-6xl mx-auto px-4  pt-20 pb-32">
//         {/* Header section */}

//         <div className="text-center space-y-6 mb-16 bg-gradient-to-tr">
//           <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
//             AUTOMATION
//           </span>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-3xl mx-auto">
//             Automate conversations with the power of AI
//           </h1>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Reduce support volumes and increase customer satisfaction in minutes
//             with Intercom s AI-powered chatbots and automation tools.
//           </p>
//           <Button
//             variant="link"
//             className="text-blue-600 hover:text-blue-700 group"
//           >
//             Learn more about automation
//             {/* <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /> */}
//           </Button>
//         </div>

//         {/* Chat preview */}
//         <div className="relative min-h-[25rem]  rounded-b-3xl overflow-hidden flex justify-center  bg-gradient-to-r  from-blue-50 via-[#D1E8FE] to-[#C6E1FD] backdrop-blur-[10rem] mb-[5rem]">
//           <div className=" absolute min-h-[20rem] rounded-[0.9rem] overflow-hidden top-[3.10rem]  w-[20rem]  mb-24 shadow-xl">
//             <img
//               src={chat2}
//               width={630}
//               height={750}
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Features */}
//         <div className="grid md:grid-cols-3 gap-1 max-w-6xl ">
//           <div className=" flex justify-start items-start text-start  min-w-[15rem]">
//             <div className="w-12 h-12  mr-4 ">
//               <img src={check} />
//             </div>
//             <h3 className="font-normal">
//               Unlock the best AI-powered customer service tools in minutes
//             </h3>
//           </div>
//           <div className="flex justify-start items-start text-start  min-w-[15rem]">
//             <div className="w-10 h-10  mr-4 ">
//               <img src={check} />
//             </div>
//             <h3 className="font-normal ">
//               Lower your costs with more efficient support teams
//             </h3>
//           </div>
//           <div className="flex justify-start items-start text-start  min-w-[15rem]">
//             <div className="w-10 h-10  mr-4 ">
//               <img src={check} />
//             </div>
//             <h3 className="font-normal ">
//               Scale support without sacrificing customer experience
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function AutomationLanding() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const featureItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  const gradientAnimation = {
    background: [
      "linear-gradient(120deg, rgba(209,232,254,0.7) 0%, rgba(198,225,253,0.7) 100%)",
      "linear-gradient(120deg, rgba(198,225,253,0.7) 0%, rgba(209,232,254,0.7) 100%)",
    ],
    transition: {
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    },
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Animated background blur */}
      <motion.div
        className="absolute z-[0] w-full h-[10rem] top-[10%] left-[0%] bottom-20 blur-[3rem] bg-blue-300 bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.5,
          scale: [1, 1.1, 1],
          transition: {
            opacity: { duration: 1 },
            scale: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          },
        }}
      />

      {/* Floating particles */}
      <Particles />

      <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-32">
        {/* Header section */}
        <motion.div
          className="text-center space-y-6 mb-16"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.span
            className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
          >
            AUTOMATION
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            <GradientText text="Automate conversations with the power of AI" />
          </motion.h1>

          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Reduce support volumes and increase customer satisfaction in minutes
            with Intercom's AI-powered chatbots and automation tools.
          </motion.p>

          <motion.div variants={fadeIn}>
            <Button
              variant="link"
              className="text-blue-600 hover:text-blue-700 group"
            >
              Learn more about automation
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>

        {/* Chat preview */}
        <motion.div
          className="relative min-h-[25rem] rounded-b-3xl overflow-hidden flex justify-center mb-[5rem]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            ...gradientAnimation,
          }}
          style={{
            background:
              "linear-gradient(120deg, rgba(209,232,254,0.7) 0%, rgba(198,225,253,0.7) 100%)",
            backdropFilter: "blur(10rem)",
          }}
        >
          <motion.div
            className="absolute min-h-[20rem] rounded-[0.9rem] overflow-hidden top-[3.10rem] w-[20rem] mb-24 shadow-xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 0.5,
              },
            }}
            whileHover={{
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 82, 255, 0.25)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent"
              animate={{
                opacity: [0, 0.5, 0],
                transition: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              }}
            />
            <motion.img
              src={chat2}
              width={630}
              height={750}
              className="h-full w-full object-cover"
              initial={{ filter: "blur(5px)" }}
              animate={{
                filter: "blur(0px)",
                transition: { duration: 1, delay: 0.7 },
              }}
            />
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-6xl"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <FeatureItem
            icon={check}
            text="Lower your costs with more efficient support teams"
            iconComponent={<TrendingDown className="w-6 h-6 text-blue-500" />}
          />
          <FeatureItem
            icon={check}
            text="Unlock the best AI-powered customer service tools in minutes"
            iconComponent={<MessageCircle className="w-6 h-6 text-blue-500" />}
          />

          <FeatureItem
            icon={check}
            text="Scale support without sacrificing customer experience"
            iconComponent={<Shield className="w-6 h-6 text-blue-500" />}
          />
        </motion.div>
      </div>
    </div>
  );
}

// Feature item component with animations
function FeatureItem({ icon, text, iconComponent }) {
  return (
    <motion.div
      className="flex justify-start items-start text-start min-w-[15rem] p-4 rounded-lg"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
          },
        },
      }}
      whileHover={{
        backgroundColor: "",
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        className="w-12 h-12 mr-4 flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {icon ? (
          <img
            src={icon || "/placeholder.svg"}
            alt="Check"
            className="w-8 h-8"
          />
        ) : (
          iconComponent
        )}
      </motion.div>
      <motion.h3
        className="font-normal"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {text}
      </motion.h3>
    </motion.div>
  );
}

// Animated gradient text component
function GradientText({ text }) {
  return (
    <motion.span
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        transition: {
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        },
      }}
      style={{
        backgroundImage:
          "linear-gradient(90deg, #2563EB, #3B82F6, #60A5FA, #3B82F6, #2563EB)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent",
        display: "inline-block",
      }}
    >
      {text}
    </motion.span>
  );
}

// Animated particles component
function Particles() {
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
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
          className="absolute rounded-full bg-blue-300/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.3, 0],
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
