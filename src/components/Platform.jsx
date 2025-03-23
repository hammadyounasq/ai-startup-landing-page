import { Button } from "../components/ui/button";
import Platform1 from "../assets/Platform.svg";
import browncheck from "../assets/checkwhite.svg";

const Platform = () => {
  return (
    <div className="bg-[#041527] relative overflow-hidden min-h-screen  ">
      {/* <div className="absolute z-[0] w-full h-[20rem]  top-[10%] left-[0%]  bottom-20 blur-[3rem]  bg-[#FCEEE8] bg-opacity-80  " /> */}

      <div className="relative max-w-6xl mx-auto px-4  pt-20 pb-32 flex flex-col justify-center items-center">
        {/* Header section */}

        <div className="text-center space-y-6 mb-16 bg-gradient-to-tr">
          <span className="bg-gradient-to-r  from-[#F3F9FF] via-[#F0E5C4] to-[#F4B896] text-[#423200] px-4 py-1.5 rounded-full text-sm font-medium">
            Messenger and Omnichannel
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto">
            Deliver conversational support where it works best for your
            customers
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Reduce support volumes and increase customer satisfaction in minutes
            with Intercom s AI-powered chatbots and automation tools.
          </p>
          <Button
            variant="link"
            className="text-blue-600 hover:text-blue-700 group"
          >
            Learn more about automation
            {/* <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /> */}
          </Button>
        </div>

        {/* Chat preview */}

        <div className="relative    w-full max-w-7xl mb-[10rem]">
          <img
            src={Platform1}
            alt="Intercom Dashboard"
            width={1200}
            height={800}
            className="rounded-lg object-fill  "
          />
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-1 max-w-6xl ">
          <div className=" flex justify-start items-start text-start  min-w-[15rem]">
            <div className="w-12 h-12  mr-4 ">
              <img src={browncheck} />
            </div>
            <h3 className="font-normal text-white ">
              Deliver support at the exact right moment
            </h3>
          </div>
          <div className="flex justify-start items-start text-start  min-w-[15rem]">
            <div className="w-10 h-10  mr-4 ">
              <img src={browncheck} />
            </div>
            <h3 className="font-normal text-white  ">
              Give your customers more flexibility and control over support
              channels
            </h3>
          </div>
          <div className="flex justify-start items-start text-start  min-w-[15rem]">
            <div className="w-10 h-10  mr-4 ">
              <img src={browncheck} />
            </div>
            <h3 className="font-normal text-white ">
              A seamless, beautiful customer experience
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
// "use client";

// import { useRef } from "react";
// import { motion, useInView, useScroll, useTransform } from "framer-motion";
// import { Button } from "../components/ui/button";
// import { ArrowRight } from "lucide-react";
// import Platform1 from "../assets/Platform.svg";
// import browncheck from "../assets/checkwhite.svg";

// const AnimatedPlatform = () => {
//   // Refs for scroll-triggered animations
//   const containerRef = useRef(null);
//   const headerRef = useRef(null);
//   const imageRef = useRef(null);
//   const featuresRef = useRef(null);

//   // Check if elements are in view
//   const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
//   const imageInView = useInView(imageRef, { once: true, amount: 0.2 });
//   const featuresInView = useInView(featuresRef, { once: true, amount: 0.5 });

//   // Scroll-based parallax effect
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const scaleIn = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   const featureItem = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <div
//       className="bg-[#041527] relative overflow-hidden min-h-screen"
//       ref={containerRef}
//     >
//       {/* Animated background elements */}
//       <motion.div
//         className="absolute top-0 left-0 w-full h-full opacity-20"
//         style={{ y: backgroundY }}
//       >
//         <motion.div
//           className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-blue-500 blur-[120px]"
//           animate={{
//             opacity: [0.3, 0.5, 0.3],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-[20%] left-[5%] w-[250px] h-[250px] rounded-full bg-purple-500 blur-[100px]"
//           animate={{
//             opacity: [0.2, 0.4, 0.2],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{
//             duration: 7,
//             delay: 1,
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//           }}
//         />
//       </motion.div>

//       <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-32 flex flex-col justify-center items-center">
//         {/* Header section */}
//         <motion.div
//           ref={headerRef}
//           className="text-center space-y-6 mb-16 bg-gradient-to-tr"
//           initial="hidden"
//           animate={headerInView ? "visible" : "hidden"}
//           variants={staggerContainer}
//         >
//           <motion.span
//             className="inline-block bg-gradient-to-r from-[#F3F9FF] via-[#F0E5C4] to-[#F4B896] text-[#423200] px-4 py-1.5 rounded-full text-sm font-medium"
//             variants={scaleIn}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 0 20px rgba(243, 249, 255, 0.3)",
//             }}
//           >
//             Messenger and Omnichannel
//           </motion.span>

//           <motion.h1
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto"
//             variants={fadeInUp}
//           >
//             Deliver conversational support where it works best for your
//             customers
//           </motion.h1>

//           <motion.p
//             className="text-gray-400 text-lg max-w-2xl mx-auto"
//             variants={fadeInUp}
//           >
//             Reduce support volumes and increase customer satisfaction in minutes
//             with Intercom's AI-powered chatbots and automation tools.
//           </motion.p>

//           <motion.div variants={fadeInUp}>
//             <Button
//               variant="link"
//               className="text-blue-400 hover:text-blue-300 group"
//             >
//               Learn more about automation
//               <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* Main image */}
//         <motion.div
//           ref={imageRef}
//           className="relative w-full max-w-7xl mb-[10rem]"
//           initial={{ opacity: 0, y: 50 }}
//           animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{
//             duration: 0.8,
//             ease: "easeOut",
//             delay: 0.2,
//           }}
//         >
//           {/* absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-30
//           blur-xl */}
//           <motion.div
//             className=" absolute -inset-1"
//             animate={{
//               opacity: [0.2, 0.4, 0.2],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Number.POSITIVE_INFINITY,
//               repeatType: "reverse",
//               ease: "easeInOut",
//             }}
//           />
//           <motion.img
//             src={Platform1}
//             alt="Intercom Dashboard"
//             width={1200}
//             height={800}
//             className="rounded-lg object-fill relative z-10"
//             whileHover={{
//               scale: 1.02,
//               filter: "brightness(1.1)",
//             }}
//             transition={{ duration: 0.4 }}
//             animate={{
//               y: [0, -8, 0],
//             }}
//             transition={{
//               duration: 6,
//               repeat: Number.POSITIVE_INFINITY,
//               repeatType: "reverse",
//               ease: "easeInOut",
//             }}
//           />
//         </motion.div>

//         {/* Features section */}
//         <motion.div
//           ref={featuresRef}
//           className="grid md:grid-cols-3 gap-1 max-w-6xl"
//           initial="hidden"
//           animate={featuresInView ? "visible" : "hidden"}
//           variants={staggerContainer}
//         >
//           <motion.div
//             className="flex justify-start items-start text-start min-w-[15rem]"
//             variants={featureItem}
//             whileHover={{ x: 5 }}
//             transition={{ duration: 0.2 }}
//           >
//             <motion.div
//               className="w-12 h-12 mr-4"
//               whileHover={{ rotate: 10 }}
//               animate={{
//                 scale: [1, 1.1, 1],
//                 filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
//               }}
//               transition={{
//                 duration: 2,
//                 delay: 0.5,
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "reverse",
//               }}
//             >
//               <img src={browncheck || "/placeholder.svg"} alt="Check" />
//             </motion.div>
//             <h3 className="font-normal text-white">
//               Deliver support at the exact right moment
//             </h3>
//           </motion.div>

//           <motion.div
//             className="flex justify-start items-start text-start min-w-[15rem]"
//             variants={featureItem}
//             whileHover={{ x: 5 }}
//             transition={{ duration: 0.2 }}
//           >
//             <motion.div
//               className="w-10 h-10 mr-4"
//               whileHover={{ rotate: 10 }}
//               animate={{
//                 scale: [1, 1.1, 1],
//                 filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
//               }}
//               transition={{
//                 duration: 2,
//                 delay: 1,
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "reverse",
//               }}
//             >
//               <img src={browncheck || "/placeholder.svg"} alt="Check" />
//             </motion.div>
//             <h3 className="font-normal text-white">
//               Give your customers more flexibility and control over support
//               channels
//             </h3>
//           </motion.div>

//           <motion.div
//             className="flex justify-start items-start text-start min-w-[15rem]"
//             variants={featureItem}
//             whileHover={{ x: 5 }}
//             transition={{ duration: 0.2 }}
//           >
//             <motion.div
//               className="w-10 h-10 mr-4"
//               whileHover={{ rotate: 10 }}
//               animate={{
//                 scale: [1, 1.1, 1],
//                 filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
//               }}
//               transition={{
//                 duration: 2,
//                 delay: 1.5,
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "reverse",
//               }}
//             >
//               <img src={browncheck || "/placeholder.svg"} alt="Check" />
//             </motion.div>
//             <h3 className="font-normal text-white">
//               A seamless, beautiful customer experience
//             </h3>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedPlatform;
