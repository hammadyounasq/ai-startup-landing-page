// import { Button } from "../components/ui/button";
// import m1 from "../assets/m1.svg";
// import browncheck from "../assets/check1.svg";
// const Messenger = () => {
//   return (
//     <div className="relative overflow-hidden min-h-screen  ">
//       <div className="absolute z-[0] w-full h-[20rem]  top-[10%] left-[0%]  bottom-20 blur-[3rem]  bg-[#FCEEE8] bg-opacity-80  " />

//       <div className="relative max-w-6xl mx-auto px-4  pt-20 pb-32 flex flex-col justify-center items-center">
//         {/* Header section */}

//         <div className="text-center space-y-6 mb-16 bg-gradient-to-tr">
//           <span className="bg-[#EC926C] text-[#423200] px-4 py-1.5 rounded-full text-sm font-medium">
//             Messenger and Omnichannel
//           </span>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-3xl mx-auto">
//             Deliver conversational support where it works best for your
//             customers
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

//         <div className="relative    w-full max-w-7xl mb-[10rem]">
//           <img
//             src={m1}
//             alt="Intercom Dashboard"
//             width={1200}
//             height={800}
//             className="rounded-lg object-fill border border-gray-100 shadow-2xl shadow-orange-100  "
//           />
//         </div>

//         {/* Features */}
//         <div className="grid md:grid-cols-3 gap-1 max-w-6xl ">
//           <div className=" flex justify-start items-start text-start  min-w-[15rem]">
//             <div className="w-12 h-12  mr-4 ">
//               <img src={browncheck} />
//             </div>
//             <h3 className="font-normal">
//               Unlock the best AI-powered customer service tools in minutes
//             </h3>
//           </div>
//           <div className="flex justify-start items-start text-start  min-w-[15rem]">
//             <div className="w-10 h-10  mr-4 ">
//               <img src={browncheck} />
//             </div>
//             <h3 className="font-normal ">
//               Lower your costs with more efficient support teams
//             </h3>
//           </div>
//           <div className="flex justify-start items-start text-start  min-w-[15rem]">
//             <div className="w-10 h-10  mr-4 ">
//               <img src={browncheck} />
//             </div>
//             <h3 className="font-normal ">
//               Scale support without sacrificing customer experience
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Messenger;
"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import m1 from "../assets/m1.svg";
import browncheck from "../assets/check1.svg";

const AnimatedMessenger = () => {
  // Refs for scroll-triggered animations
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);

  // Check if elements are in view
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const imageInView = useInView(imageRef, { once: true, amount: 0.2 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.5 });

  // Scroll-based parallax effect for the background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const featureItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden min-h-screen" ref={containerRef}>
      {/* Animated background blur */}
      <motion.div
        className="absolute z-[0] w-full h-[20rem] top-[10%] left-[0%] bottom-20 blur-[3rem] bg-[#FCEEE8] bg-opacity-80"
        style={{
          y: backgroundY,
          scale: backgroundScale,
        }}
        animate={{
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 flex flex-col justify-center items-center">
        {/* Header section */}
        <motion.div
          ref={headerRef}
          className="text-center space-y-6 mb-16 bg-gradient-to-tr"
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.span
            className="inline-block bg-[#EC926C] text-[#423200] px-4 py-1.5 rounded-full text-sm font-medium"
            variants={scaleIn}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 12px rgba(236, 146, 108, 0.3)",
            }}
          >
            Messenger and Omnichannel
          </motion.span>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Deliver conversational support where it works best for your
            customers
          </motion.h1>

          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Reduce support volumes and increase customer satisfaction in minutes
            with Intercom's AI-powered chatbots and automation tools.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button
              variant="link"
              className="text-blue-600 hover:text-blue-700 group"
            >
              Learn more about automation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Main image with simple fade-in animation */}
        <motion.div
          ref={imageRef}
          className="relative w-full max-w-7xl mb-[5rem] sm:mb-[7rem] lg:mb-[10rem]"
          initial={{ opacity: 0 }}
          animate={imageInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          exit={{ opacity: 0 }}
        >
          <img
            src={m1 || "/placeholder.svg"}
            alt="Intercom Dashboard"
            className="w-full h-auto rounded-lg border border-gray-100 shadow-2xl shadow-orange-100"
          />
        </motion.div>

        {/* Features section */}
        <motion.div
          ref={featuresRef}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl px-2 sm:px-4"
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div
            className="flex justify-start items-start text-start"
            variants={featureItem}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 mr-4 flex-shrink-0">
              <img src={browncheck || "/placeholder.svg"} alt="Check" />
            </div>
            <h3 className="font-normal">
              Unlock the best AI-powered customer service tools in minutes
            </h3>
          </motion.div>

          <motion.div
            className="flex justify-start items-start text-start"
            variants={featureItem}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 mr-4 flex-shrink-0">
              <img src={browncheck || "/placeholder.svg"} alt="Check" />
            </div>
            <h3 className="font-normal">
              Lower your costs with more efficient support teams
            </h3>
          </motion.div>

          <motion.div
            className="flex justify-start items-start text-start"
            variants={featureItem}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 mr-4 flex-shrink-0">
              <img src={browncheck || "/placeholder.svg"} alt="Check" />
            </div>
            <h3 className="font-normal">
              Scale support without sacrificing customer experience
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedMessenger;
