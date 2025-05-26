// import m2 from "../assets/platform1.png";
// import m3 from "../assets/platform2.svg";

// import Z from "../assets/logo4.svg";
// import avater from "../assets/avatar4.png";

// import icon1 from "../assets/icon5.png";
// import icon2 from "../assets/icon6.png";
// import icon3 from "../assets/icon7.png";
// import icon4 from "../assets/icon8.png";
// import b from "../assets/bottom.png";
// const LayoutgridPlatform = () => {
//   return (
//     <div className=" relative  mx-auto pb-16 px-4 py-12 space-y-12 bg-[#041527] ">
//       <div className="grid md:grid-cols-2 gap-6  max-w-7xl mx-auto  ">
//         <div className="relative overflow-hidden rounded-2xl bg-[#223140]">
//           <div className="p-5">
//             <h2 className="text-xl font-bold text-white">
//               Customizable Messenger
//             </h2>
//             <p className="text-sm max-w-[25rem] font-normal text-white mt-2">
//               It s <span className="italic">your</span> Messenger—so have it
//               match your brand with infinite design options.
//             </p>
//           </div>
//           <div className="px-5 w-full relative">
//             <img
//               src={m2}
//               alt="Three different messenger interfaces showing customization options"
//               width={400}
//               height={200}
//               className="w-full h-auto object-contain"
//             />
//           </div>
//         </div>

//         <div className="overflow-hidden  rounded-2xl bg-[#223140]">
//           <div className="p-5">
//             <div className="text-xl font-bold text-white">
//               Configurable experiences
//             </div>
//             <div className="text-sm max-w-[25rem] font-normal mt-2 text-white">
//               Show and hide different content, features—even entire Spaces—to
//               create bespoke Messenger experiences.
//             </div>
//           </div>
//           <div className="p-0">
//             <img
//               src={m3}
//               alt="Configurable experiences illustration"
//               width={400}
//               height={200}
//               className="w-full h-[20rem] object-fill"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Second row - 3 columns */}
//       <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto   ">
//         <div className="p-6 space-y-4  rounded-2xl bg-[#223140]">
//           <div className="bg-[#3F4C5A] w-12 h-12 rounded-lg flex items-center justify-center">
//             <img src={icon1} className="bg-muted  w-6 h-6 " />
//           </div>
//           <div className="pt-[2rem] pb-[2rem]">
//             <div className="text-2xl pb-[1rem] leading-tight text-white">
//               Mobile
//             </div>
//             <div className="text-sm max-w-[25rem] font-normal text-white">
//               Bring the Messenger to your mobile app with powerful iOS and
//               Android SDKs.
//             </div>
//           </div>
//         </div>

//         <div className="p-6 space-y-4 rounded-2xl  bg-[#223140]">
//           <div className="bg-[#3F4C5A] w-12 h-12 rounded-lg flex items-center justify-center">
//             <img src={icon2} className="bg-muted  w-6 h-6 " />
//           </div>
//           <div className="pt-[2rem] pb-[2rem]">
//             <div className="text-2xl pb-[1rem] leading-tight text-white ">
//               Omnichannel messaging
//             </div>
//             <div className="text-sm max-w-[25rem] font-normal text-white">
//               Support customers using their preferred channel— whether that’s
//               email, SMS, social, or more.
//             </div>
//           </div>
//         </div>

//         <div className="p-6 space-y-4  rounded-2xl bg-[#223140]">
//           <div className="bg-[#3F4C5A] w-12 h-12 rounded-lg flex items-center justify-center">
//             <img src={icon3} className="bg-muted  w-6 h-6 " />
//           </div>
//           <div className="pt-[2rem] pb-[2rem]">
//             <div className="text-2xl pb-[1rem] leading-tight text-white">
//               Phone
//             </div>
//             <div className="text-sm max-w-[25rem] font-normal text-white">
//               Centralize your phone support using our integrations (with more
//               coming soon).
//             </div>
//           </div>
//         </div>

//         <div className="p-6 space-y-4 rounded-2xl bg-[#223140] ">
//           <div className="bg-[#3F4C5A] w-12 h-12 rounded-lg flex items-center justify-center">
//             <img src={icon4} className="bg-muted  w-6 h-6 " />
//           </div>
//           <div className="pt-[2rem] pb-[2rem]">
//             <div className="text-2xl pb-[1rem] leading-tight text-white">
//               Switch
//             </div>
//             <div className="text-sm max-w-[12rem] font-normal text-white">
//               Reduce phone wait times by letting customers switch to messaging
//               mid-call.
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Testimonial section */}
//       <div className="pt-10 h-[25rem] text-center max-w-xl mx-auto space-y-8">
//         <img
//           src={Z}
//           alt="Zilch logo"
//           width={60}
//           height={40}
//           className="mx-auto"
//         />
//         <blockquote className="text-xl font-normal text-white">
//           &quot;We have almost all of our support channels integrated into one
//           system, making it easy for us to manage our support, as well as
//           <span className="font-bold">
//             take a data-driven approach to continuouslyimproving our service
//           </span>
//           .&quot;
//         </blockquote>
//         <div className="flex items-center justify-center ">
//           <img src={avater} width={60} height={40} />

//           <div className="pl-4 text-left">
//             <div className="font-semibold text-white">
//               Oda Skuggedal Wilhelmsen
//             </div>
//             <div className="text-sm text-muted-foreground text-white">
//               Nordic Customer Service Manager, Godtlevert
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className=" absolute bottom-[-0.1rem] left-0 w-full">
//         <img src={b} alt="Intercom Dashboard" className="w-full" />
//       </div>
//     </div>
//   );
// };

// export default LayoutgridPlatform;
"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import m2 from "../assets/platform1.png";
import m3 from "../assets/platform2.svg";
import Z from "../assets/logo4.svg";
import avater from "../assets/avatar4.png";
import icon1 from "../assets/icon5.png";
import icon2 from "../assets/icon6.png";
import icon3 from "../assets/icon7.png";
import icon4 from "../assets/icon8.png";
import b from "../assets/bottom.png";

const AnimatedCard = ({ children, index, delay = 0 }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1 + delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px -5px rgba(0, 100, 255, 0.2)",
        transition: { duration: 0.3 },
      }}
      className="overflow-hidden rounded-2xl bg-[#223140]"
    >
      {children}
    </motion.div>
  );
};

const IconCard = ({ icon, title, description, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px -5px rgba(0, 100, 255, 0.2)",
        transition: { duration: 0.3 },
      }}
      className="p-6 space-y-4 rounded-2xl bg-[#223140]"
    >
      <motion.div
        className="bg-[#3F4C5A] w-12 h-12 rounded-lg flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 0 rgba(0, 100, 255, 0)",
            "0 0 10px rgba(0, 100, 255, 0.3)",
            "0 0 0 rgba(0, 100, 255, 0)",
          ],
        }}
        transition={{
          duration: 3,
          delay: index * 0.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <motion.img
          src={icon}
          className="bg-muted w-6 h-6"
          alt={title}
          whileHover={{ rotate: 10 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      <div className="pt-[2rem] pb-[2rem]">
        <motion.div
          className="text-2xl pb-[1rem] leading-tight text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        >
          {title}
        </motion.div>
        <motion.div
          className="text-sm max-w-[25rem] font-normal text-white"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        >
          {description}
        </motion.div>
      </div>
    </motion.div>
  );
};

const AnimatedLayoutGridPlatform = () => {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const testimonialRef = useRef(null);
  const bottomRef = useRef(null);
  const containerRef = useRef(null);

  const firstRowInView = useInView(firstRowRef, { once: true, amount: 0.2 });
  const secondRowInView = useInView(secondRowRef, { once: true, amount: 0.2 });
  const testimonialInView = useInView(testimonialRef, {
    once: true,
    amount: 0.3,
  });
  const bottomInView = useInView(bottomRef, { once: true, amount: 0.2 });

  // Scroll-based parallax effect for the bottom wave
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bottomY = useTransform(scrollYProgress, [0.8, 1], ["10%", "0%"]);

  const fadeInUp = {
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div
      className="relative mx-auto pb-16 px-4 py-12 space-y-12 bg-[#041527]"
      ref={containerRef}
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-blue-500 blur-[150px] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[5%] w-[250px] h-[250px] rounded-full bg-purple-500 blur-[150px] opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>
      {/* First row - 2 columns */}
      <motion.div
        ref={firstRowRef}
        className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto"
        initial="hidden"
        animate={firstRowInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <AnimatedCard index={0}>
          <div className="p-5">
            <motion.h2
              className="text-xl font-bold text-white"
              variants={fadeInUp}
            >
              Customizable Messenger
            </motion.h2>
            <motion.p
              className="text-sm max-w-[25rem] font-normal text-white mt-2"
              variants={fadeInUp}
            >
              It's <span className="italic">your</span> Messenger—so have it
              match your brand with infinite design options.
            </motion.p>
          </div>
          <motion.div className="px-5 w-full relative" variants={fadeInUp}>
            <motion.img
              src={m2}
              alt="Three different messenger interfaces showing customization options"
              width={400}
              height={200}
              className="w-full h-auto object-contain"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </AnimatedCard>

        <AnimatedCard index={1}>
          <div className="p-5">
            <motion.div
              className="text-xl font-bold text-white"
              variants={fadeInUp}
            >
              Configurable experiences
            </motion.div>
            <motion.div
              className="text-sm max-w-[25rem] font-normal mt-2 text-white"
              variants={fadeInUp}
            >
              Show and hide different content, features—even entire Spaces—to
              create bespoke Messenger experiences.
            </motion.div>
          </div>
          <motion.div className="p-0" variants={fadeInUp}>
            <motion.img
              src={m3}
              alt="Configurable experiences illustration"
              width={400}
              height={200}
              className="w-full h-[20rem] object-fill"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </AnimatedCard>
      </motion.div>
      {/* Second row - 4 columns */}
      <motion.div
        ref={secondRowRef}
        className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto"
        initial="hidden"
        animate={secondRowInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <IconCard
          icon={icon1}
          title="Mobile"
          description="Bring the Messenger to your mobile app with powerful iOS and Android SDKs."
          index={0}
        />

        <IconCard
          icon={icon2}
          title="Omnichannel messaging"
          description="Support customers using their preferred channel— whether that's email, SMS, social, or more."
          index={1}
        />

        <IconCard
          icon={icon3}
          title="Phone"
          description="Centralize your phone support using our integrations (with more coming soon)."
          index={2}
        />

        <IconCard
          icon={icon4}
          title="Switch"
          description="Reduce phone wait times by letting customers switch to messaging mid-call."
          index={3}
        />
      </motion.div>
      {/* Testimonial section */}
      <motion.div
        ref={testimonialRef}
        className="pt-10 h-[25rem] text-center max-w-xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 30 }}
        animate={
          testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
        }
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={Z}
          alt="Zilch logo"
          width={60}
          height={40}
          className="mx-auto"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          animate={{
            filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.blockquote
          className="text-xl font-normal text-white"
          initial={{ opacity: 0 }}
          animate={testimonialInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          &quot;We have almost all of our support channels integrated into one
          system, making it easy for us to manage our support, as well as
          <motion.span
            className="font-bold"
            initial={{ color: "#fff" }}
            animate={
              testimonialInView
                ? {
                    color: "#4DA8FF",
                    textShadow: "0 0 10px rgba(77, 168, 255, 0.5)",
                  }
                : { color: "#fff" }
            }
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {" "}
            take a data-driven approach to continuously improving our service{" "}
          </motion.span>
          .&quot;
        </motion.blockquote>
        <motion.div
          className="flex items-center justify-center"
          initial={{ x: -20, opacity: 0 }}
          animate={
            testimonialInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
          }
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.img
            src={avater}
            width={60}
            height={40}
            alt="Oda Skuggedal Wilhelmsen"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />

          <div className="pl-4 text-left">
            <div className="font-semibold text-white">
              Oda Skuggedal Wilhelmsen
            </div>
            <div className="text-sm text-muted-foreground text-white">
              Nordic Customer Service Manager, Godtlevert
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* Bottom wave */}

      <div className=" absolute bottom-[-0.1rem] left-0 w-full">
        <img src={b} alt="Intercom Dashboard" className="w-full" />
      </div>
    </div>
  );
};

export default AnimatedLayoutGridPlatform;
