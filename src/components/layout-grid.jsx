// import { Button } from "../components/ui/button";
import chat from "../assets/chat.png";
import s1 from "../assets/s1.svg";
import s2 from "../assets/s2.svg";
import s3 from "../assets/s3.svg";
import s4 from "../assets/s4.svg";
import s5 from "../assets/s5.svg";
import s6 from "../assets/s6.svg";
import Z from "../assets/logo1.svg";
import avater from "../assets/avatar1.png";
import check from "../assets/lightbluecheck.svg";

// export default function LayoutGrid() {
//   return (
//     <div className="relative    mx-auto p-4 md:p-6 lg:p-8 ">
//       <div className="absolute z-[0] w-full h-[10rem]  top-[10%] left-[0%]  bottom-20 blur-[3rem]  bg-[#CCF0F7] bg-opacity-100  " />

//       <div className="relative max-w-6xl mx-auto px-4  pt-20 pb-32">
//         {/* Header section */}
//         <div className="text-center space-y-6 mb-16 bg-gradient-to-tr">
//           <span className="bg-gradient-to-r  from-[#C4EEF7] via-[#BAEBF5] to-[#8ADDED] text-[#093E48] px-4 py-1.5 rounded-full text-sm font-medium">
//             Inbox
//           </span>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-3xl mx-auto">
//             Maximize team productivity with the world's fastest shared Inbox
//           </h1>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Our AI-enhanced Inbox is lightning fast, easy-to-use, and optimized
//             for efficiency—with everything a modern support team needs.
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
//         <div className="relative min-h-[15rem] sm:min-h-[25rem] md:min-h-[30rem] lg:min-h-[35rem] rounded-3xl overflow-hidden flex justify-center bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] backdrop-blur-[10rem] border border-[#D3D5D8] mb-8 sm:mb-12 md:mb-16 lg:mb-[10rem]">
//           <div className="absolute bottom-0 w-full px-4 sm:px-8 md:px-12 lg:px-16 pt-4 sm:pt-6 md:pt-8 lg:pt-0">
//             <img
//               src={chat || "/placeholder.svg"}
//               width={1062}
//               height={524}
//               alt="Chat illustration"
//               className="w-full h-auto object-contain max-w-[100%] mx-auto"
//             />
//           </div>
//         </div>

//         {/* Features */}
//         <div className="grid md:grid-cols-3 gap-1 max-w-6xl ">
//           <div className=" flex justify-start items-start text-start  min-w-[15rem]">
//             <div className="w-12 h-12  mr-4 ">
//               <img src={check} />
//             </div>
//             <h3 className="font-normal">Faster customer resolutions</h3>
//           </div>
//           <div className="flex justify-start items-start text-start  min-w-[15rem]">
//             <div className="w-10 h-10  mr-4 ">
//               <img src={check} />
//             </div>
//             <h3 className="font-normal ">Prevent team burnout</h3>
//           </div>
//           <div className="flex justify-start items-start text-start  min-w-[15rem]">
//             <div className="w-10 h-10  mr-4 ">
//               <img src={check} />
//             </div>
//             <h3 className="font-normal ">Lower your costs</h3>
//           </div>
//         </div>
//       </div>
//       {/* First Row */}
//       <div className="grid gap-6 md:grid-cols-2 mb-6 max-w-7xl mx-auto ">
//         {/* Left Side - Single Div */}
//         <div className="w-full h-full bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8] overflow-hidden">
//           <div className="p-0">
//             <div className="p-6 h-full">
//               <div className="p-0">
//                 <div className="text-2xl font-bold mb-4">Ticketing</div>
//               </div>
//               <p className="text-gray-700">
//                 The thing I noticed most about Inbox is the speed. In a test,we
//                 saw a 15% increase in the number of conversations
//               </p>
//             </div>
//           </div>
//           <img src={s1} />
//         </div>

//         {/* Right Side - Column with Two Divs */}
//         <div className="flex flex-col gap-6 ">
//           <div className="w-full bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8]">
//             <div className="p-0 flex overflow-hidden">
//               <div className=" p-6">
//                 <div className="p-0">
//                   <div className="text-2xl font-bold mb-4">Configurable</div>
//                 </div>
//                 <p className="text-gray-700">
//                   Change language, turn on dark mode, save custom views, and
//                   more.
//                 </p>
//               </div>
//               <img src={s2} />
//             </div>
//           </div>

//           <div className="w-full bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8]">
//             <div className=" relative p-0 flex  overflow-hidden">
//               <div className="p-6">
//                 <div className="p-0">
//                   <div className="text-2xl font-bold mb-4">Omnichannel</div>
//                 </div>
//                 <p className="text-gray-700">
//                   See all your support conversations in one place.
//                 </p>
//               </div>
//               <img src={s3} className="pl-10" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Second Row - Three Equal Divs */}
//       <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto">
//         <div className="w-full overflow-hidden bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8]">
//           <div className="p-0">
//             <div className=" p-6">
//               <div className="p-0">
//                 <div className="text-2xl font-bold mb-4">Multiplayer</div>
//               </div>
//               <p className="text-gray-700">
//                 Collaborate efficiently with teammates in real time thanks to
//                 co-presence indicators, notes, and @mentions.
//               </p>
//             </div>
//             <img src={s4} />
//           </div>
//         </div>

//         <div className="w-full overflow-hidden bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8]">
//           <div className="p-0">
//             <div className=" p-6">
//               <div className="p-0">
//                 <div className="text-2xl font-bold mb-4">Lightning fast</div>
//               </div>
//               <p className="text-gray-700">
//                 Win time back with powerful macros, nonexistent load times, and
//                 simple shortcuts that put your entire Inbox a Cmd+K away.
//               </p>
//             </div>
//             <div className="flex justify-end">
//               <img src={s5} />
//             </div>
//           </div>
//         </div>

//         <div className="w-full overflow-hidden bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8]">
//           <div className="p-0">
//             <div className=" p-6">
//               <div className="p-0">
//                 <div className="text-2xl font-bold mb-4">Team management</div>
//               </div>
//               <p className="text-gray-700">
//                 Get more done by optimizing operations with live dashboards,
//                 reporting, work management tools, and more.
//               </p>
//             </div>
//             <div className="flex justify-end">
//               <img src={s6} />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Testimonial section */}
//       <div className="pt-10 text-center max-w-xl mx-auto space-y-8">
//         <img
//           src={Z}
//           alt="Zilch logo"
//           width={60}
//           height={40}
//           className="mx-auto"
//         />
//         <blockquote className="text-xl font-normal">
//           &quot;Intercom powers our customer communications, delivering
//           conversions, customer engagement, and personalized support.
//           <span className="font-bold">
//             The Messenger is the heart of this strategy
//           </span>
//           &quot;
//         </blockquote>
//         <div className="flex items-center justify-center ">
//           <img src={avater} width={60} height={40} />

//           <div className="pl-4 text-left">
//             <div className="font-semibold">Geronimo Chala</div>
//             <div className="text-sm text-muted-foreground">
//               Chief Consumer Officer, Rebag
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
("use client");

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AnimatedLayoutGrid() {
  // Images would normally be imported, but we'll use the paths as provided
  const images = {
    chat: chat,
    s1: s1,
    s2: s2,
    s3: s3,
    s4: s4,
    s5: s5,
    s6: s6,
    Z: Z,
    avater: avater,
    check: check,
  };

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

  const floatAnimation = {
    hidden: { y: 0 },
    visible: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // Refs for scroll-triggered animations
  const headerRef = useRef(null);
  const chatRef = useRef(null);
  const featuresRef = useRef(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const testimonialRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.2 });
  const chatInView = useInView(chatRef, { once: true, amount: 0.2 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const firstRowInView = useInView(firstRowRef, { once: true, amount: 0.2 });
  const secondRowInView = useInView(secondRowRef, { once: true, amount: 0.2 });
  const testimonialInView = useInView(testimonialRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <div className="relative mx-auto p-4 md:p-6 lg:p-8">
      {/* Animated gradient background */}
      <motion.div
        className="absolute z-[0] w-full h-[10rem] top-[10%] left-[0%] bottom-20 blur-[3rem] bg-[#CCF0F7] bg-opacity-100"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-32">
        {/* Header section */}
        <motion.div
          ref={headerRef}
          className="text-center space-y-6 mb-16 bg-gradient-to-tr"
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-[#C4EEF7] via-[#BAEBF5] to-[#8ADDED] text-[#093E48] px-4 py-1.5 rounded-full text-sm font-medium"
            variants={scaleIn}
          >
            Inbox
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Maximize team productivity with the world's fastest shared Inbox
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Our AI-enhanced Inbox is lightning fast, easy-to-use, and optimized
            for efficiency—with everything a modern support team needs.
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

        {/* Chat preview */}
        <motion.div
          ref={chatRef}
          className="relative min-h-[15rem] sm:min-h-[25rem] md:min-h-[30rem] lg:min-h-[35rem] rounded-3xl overflow-hidden flex justify-center bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] backdrop-blur-[10rem] border border-[#D3D5D8] mb-8 sm:mb-12 md:mb-16 lg:mb-[10rem]"
          initial={{ opacity: 0, y: 40 }}
          animate={chatInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="absolute bottom-0 w-full px-4 sm:px-8 md:px-12 lg:px-16 pt-4 sm:pt-6 md:pt-8 lg:pt-0"
            initial={{ y: 100, opacity: 0 }}
            animate={chatInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.img
              src={images.chat || "/placeholder.svg"}
              width={1062}
              height={524}
              alt="Chat illustration"
              className="w-full h-auto object-contain max-w-[100%] mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          ref={featuresRef}
          className="grid md:grid-cols-3 gap-1 max-w-6xl"
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div
            className="flex justify-start items-start text-start min-w-[15rem]"
            variants={fadeInUp}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-12 h-12 mr-4"
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.2 }}
            >
              <img src={images.check || "/placeholder.svg"} alt="Check" />
            </motion.div>
            <h3 className="font-normal">Faster customer resolutions</h3>
          </motion.div>
          <motion.div
            className="flex justify-start items-start text-start min-w-[15rem]"
            variants={fadeInUp}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-10 h-10 mr-4"
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.2 }}
            >
              <img src={images.check || "/placeholder.svg"} alt="Check" />
            </motion.div>
            <h3 className="font-normal">Prevent team burnout</h3>
          </motion.div>
          <motion.div
            className="flex justify-start items-start text-start min-w-[15rem]"
            variants={fadeInUp}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-10 h-10 mr-4"
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.2 }}
            >
              <img src={images.check || "/placeholder.svg"} alt="Check" />
            </motion.div>
            <h3 className="font-normal">Lower your costs</h3>
          </motion.div>
        </motion.div>
      </div>

      {/* First Row */}
      <motion.div
        ref={firstRowRef}
        className="grid gap-6 md:grid-cols-2 mb-6 max-w-7xl mx-auto"
        initial="hidden"
        animate={firstRowInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Left Side - Single Div */}
        <motion.div
          className="w-full h-full bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8] overflow-hidden"
          variants={scaleIn}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-0">
            <div className="p-6 h-full">
              <div className="p-0">
                <div className="text-2xl font-bold mb-4">Ticketing</div>
              </div>
              <p className="text-gray-700">
                The thing I noticed most about Inbox is the speed. In a test, we
                saw a 15% increase in the number of conversations
              </p>
            </div>
          </div>
          <motion.img
            src={images.s1}
            alt="Ticketing illustration"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Right Side - Column with Two Divs */}
        <motion.div className="flex flex-col gap-6" variants={staggerContainer}>
          <motion.div
            className="w-full bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8]"
            variants={scaleIn}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-0 flex overflow-hidden">
              <div className="p-6">
                <div className="p-0">
                  <div className="text-2xl font-bold mb-4">Configurable</div>
                </div>
                <p className="text-gray-700">
                  Change language, turn on dark mode, save custom views, and
                  more.
                </p>
              </div>
              <motion.img
                src={images.s2}
                alt="Configurable illustration"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8]"
            variants={scaleIn}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative p-0 flex overflow-hidden">
              <div className="p-6">
                <div className="p-0">
                  <div className="text-2xl font-bold mb-4">Omnichannel</div>
                </div>
                <p className="text-gray-700">
                  See all your support conversations in one place.
                </p>
              </div>
              <motion.img
                src={images.s3}
                className="pl-10"
                alt="Omnichannel illustration"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Second Row - Three Equal Divs */}
      <motion.div
        ref={secondRowRef}
        className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto"
        initial="hidden"
        animate={secondRowInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.div
          className="w-full overflow-hidden bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8]"
          variants={scaleIn}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-0">
            <div className="p-6">
              <div className="p-0">
                <div className="text-2xl font-bold mb-4">Multiplayer</div>
              </div>
              <p className="text-gray-700">
                Collaborate efficiently with teammates in real time thanks to
                co-presence indicators, notes, and @mentions.
              </p>
            </div>
            <motion.img
              src={images.s4}
              alt="Multiplayer illustration"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full overflow-hidden bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8]"
          variants={scaleIn}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-0">
            <div className="p-6">
              <div className="p-0">
                <div className="text-2xl font-bold mb-4">Lightning fast</div>
              </div>
              <p className="text-gray-700">
                Win time back with powerful macros, nonexistent load times, and
                simple shortcuts that put your entire Inbox a Cmd+K away.
              </p>
            </div>
            <div className="flex justify-end">
              <motion.img
                src={images.s5}
                alt="Lightning fast illustration"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full overflow-hidden bg-gradient-to-r from-[#EAFAFD] via-[#CBF1F8] to-[#CAF0F7] rounded-lg border border-[#D3D5D8]"
          variants={scaleIn}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-0">
            <div className="p-6">
              <div className="p-0">
                <div className="text-2xl font-bold mb-4">Team management</div>
              </div>
              <p className="text-gray-700">
                Get more done by optimizing operations with live dashboards,
                reporting, work management tools, and more.
              </p>
            </div>
            <div className="flex justify-end">
              <motion.img
                src={images.s6}
                alt="Team management illustration"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Testimonial section */}
      <motion.div
        ref={testimonialRef}
        className="pt-10 text-center max-w-xl mx-auto space-y-8"
        initial="hidden"
        animate={testimonialInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.img
          src={images.Z}
          alt="Zilch logo"
          width={60}
          height={40}
          className="mx-auto"
          variants={scaleIn}
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.blockquote className="text-xl font-normal" variants={fadeInUp}>
          &quot;Intercom powers our customer communications, delivering
          conversions, customer engagement, and personalized support.
          <motion.span
            className="font-bold"
            initial={{ color: "#000" }}
            animate={
              testimonialInView ? { color: "#3B82F6" } : { color: "#000" }
            }
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {" "}
            The Messenger is the heart of this strategy
          </motion.span>
          &quot;
        </motion.blockquote>
        <motion.div
          className="flex items-center justify-center"
          variants={fadeInUp}
        >
          <motion.img
            src={images.avater}
            width={60}
            height={40}
            alt="Geronimo Chala"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />

          <div className="pl-4 text-left">
            <div className="font-semibold">Geronimo Chala</div>
            <div className="text-sm text-muted-foreground">
              Chief Consumer Officer, Rebag
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
