// import { Button } from "../components/ui/button";
import bank from "../assets/bank.svg";
import browncheck from "../assets/brownchack.svg";

// const ProactiveSupport = () => {
//   return (
//     <div className="relative overflow-hidden min-h-screen  ">
//       <div className="absolute z-[0] w-full h-[20rem]  top-[10%] left-[0%]  bottom-20 blur-[3rem]  bg-[#FFF7E8] bg-opacity-80  " />

//       <div className="relative max-w-6xl mx-auto px-4  pt-20 pb-32 flex flex-col justify-center items-center">
//         {/* Header section */}

//         <div className="text-center space-y-6 mb-16 bg-gradient-to-tr">
//           <span className="bg-[#FBD482] text-[#423200] px-4 py-1.5 rounded-full text-sm font-medium">
//             Proactive Support
//           </span>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-3xl mx-auto">
//             Get ahead of known issues and slash support volume
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

//         <div className="relative w-full max-w-7xl mb-[5rem]">
//           <img
//             src={bank}
//             alt="Intercom Dashboard"
//             width={1200}
//             height={800}
//             className="rounded-lg border border-gray-100 shadow-2xl shadow-orange-100"
//           />
//         </div>

//         {/* Features grid md:grid-cols-3 gap-1 max-w-6xl*/}
//         <div className="w-full  px-4 py-4 ">
//           <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-6 md:space-y-0">
//             <div className=" flex justify-start items-start text-start  min-w-[15rem]">
//               <div className="w-12 h-12  mr-4 ">
//                 <img src={browncheck} />
//               </div>
//               <h3 className="font-normal">Reduce inbound volume</h3>
//             </div>
//             <div className="flex justify-start items-start text-start  min-w-[15rem]">
//               <div className="w-10 h-10  mr-4 ">
//                 <img src={browncheck} />
//               </div>
//               <h3 className="font-normal ">Increase CSAT</h3>
//             </div>
//             <div className="flex justify-start items-start text-start  min-w-[15rem]">
//               <div className="w-10 h-10  mr-4 ">
//                 <img src={browncheck} />
//               </div>
//               <h3 className="font-normal ">No engineering resources needed</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProactiveSupport;
("use client");

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

const AnimatedProactiveSupport = () => {
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
        className="absolute z-[0] w-full h-[20rem] top-[10%] left-[0%] bottom-20 blur-[3rem] bg-[#FFF7E8] bg-opacity-80"
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
            className="inline-block bg-gradient-to-r from-[#FFEFD4] via-[#FDE2AA] to-[#FBD482] text-[#423200] px-8 py-2.5 rounded-[2rem] text-[1rem] font-medium tracking-wide"
            variants={scaleIn}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 12px rgba(251, 212, 130, 0.3)",
            }}
          >
            Proactive Support
          </motion.span>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal text-gray-900 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            Get ahead of known issues and slash support volume
          </motion.h1>

          <motion.p
            className="text-gray-600 text-lg max-w-3xl mx-auto"
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
              Learn more about Proactive Support
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Main image with simple fade-in animation */}
        <motion.div
          ref={imageRef}
          className=" relative w-full max-w-7xl mb-[5rem]"
          initial={{ opacity: 0 }}
          animate={imageInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          exit={{ opacity: 0 }}
        >
          <img
            src={bank || "/placeholder.svg"}
            alt="Intercom Dashboard"
            className="w-full h-auto rounded-lg border border-gray-100 shadow-2xl shadow-orange-100"
          />
        </motion.div>

        {/* Features section */}
        <motion.div
          ref={featuresRef}
          className="w-full px-2 sm:px-4 py-4"
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="flex justify-start items-start text-start"
              variants={featureItem}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 mr-4 flex-shrink-0">
                <img src={browncheck || "/placeholder.svg"} alt="Check" />
              </div>
              <h3 className="font-normal">Reduce inbound volume</h3>
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
              <h3 className="font-normal">Increase CSAT</h3>
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
              <h3 className="font-normal">No engineering resources needed</h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedProactiveSupport;
