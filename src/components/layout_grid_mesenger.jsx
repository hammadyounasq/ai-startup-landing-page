// import m2 from "../assets/m2.svg";
// import m3 from "../assets/m3.svg";

// import Z from "../assets/logo3.svg";
// import avater from "../assets/avatar3.png";

// import icon1 from "../assets/icon1.png";
// import icon2 from "../assets/icon2.png";
// import icon3 from "../assets/icon3.png";
// import icon4 from "../assets/icon14.png";

// const Layoutgridmesenger = () => {
//   return (
//     <div className="container mx-auto px-4 py-12 space-y-12">
//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="relative overflow-hidden border border-[#D3D5D8] rounded-2xl bg-gradient-to-b from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]">
//           <div className="p-5">
//             <h2 className="text-xl font-bold text-gray-900">
//               Customizable Messenger
//             </h2>
//             <p className="text-sm max-w-[25rem] font-normal text-gray-600 mt-2">
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

//         <div className="overflow-hidden border border-[#D3D5D8] rounded-2xl bg-gradient-to-b from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]">
//           <div className="p-5">
//             <div className="text-xl font-bold">Configurable experiences</div>
//             <div className="text-sm max-w-[25rem] font-normal mt-2">
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
//       <div className="grid md:grid-cols-4 gap-6">
//         <div className="p-6 space-y-4 border border-[#D3D5D8] rounded-2xl  bg-gradient-to-b  from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]">
//           <div className="bg-[#F5D7CC] w-12 h-12 rounded-lg flex items-center justify-center">
//             <img src={icon1} className="bg-muted  w-6 h-6 " />
//           </div>
//           <div className="pt-[2rem] pb-[2rem]">
//             <div className="text-2xl pb-[1rem] leading-tight">Mobile</div>
//             <div className="text-sm max-w-[25rem] font-normal">
//               Bring the Messenger to your mobile app with powerful iOS and
//               Android SDKs.
//             </div>
//           </div>
//         </div>

//         <div className="p-6 space-y-4 border border-[#D3D5D8] rounded-2xl  bg-gradient-to-b  from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]">
//           <div className="bg-[#F5D7CC] w-12 h-12 rounded-lg flex items-center justify-center">
//             <img src={icon2} className="bg-muted  w-6 h-6 " />
//           </div>
//           <div className="pt-[2rem] pb-[2rem]">
//             <div className="text-2xl pb-[1rem] leading-tight ">
//               Omnichannel messaging
//             </div>
//             <div className="text-sm max-w-[25rem] font-normal">
//               Support customers using their preferred channel— whether that’s
//               email, SMS, social, or more.
//             </div>
//           </div>
//         </div>

//         <div className="p-6 space-y-4 border border-[#D3D5D8] rounded-2xl  bg-gradient-to-b  from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]">
//           <div className="bg-[#F5D7CC] w-12 h-12 rounded-lg flex items-center justify-center">
//             <img src={icon3} className="bg-muted  w-6 h-6 " />
//           </div>
//           <div className="pt-[2rem] pb-[2rem]">
//             <div className="text-2xl pb-[1rem] leading-tight">Phone</div>
//             <div className="text-sm max-w-[25rem] font-normal">
//               Centralize your phone support using our integrations (with more
//               coming soon).
//             </div>
//           </div>
//         </div>

//         <div className="p-6 space-y-4 border  border-[#D3D5D8] rounded-2xl  bg-gradient-to-b  from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]">
//           <div className="bg-[#F5D7CC] w-12 h-12 rounded-lg flex items-center justify-center">
//             <img src={icon4} className="bg-muted  w-6 h-6 " />
//           </div>
//           <div className="pt-[2rem] pb-[2rem]">
//             <div className="text-2xl pb-[1rem] leading-tight">Switch</div>
//             <div className="text-sm max-w-[12rem] font-normal ">
//               Reduce phone wait times by letting customers switch to messaging
//               mid-call.
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
//           "Our bot deflection rate with our previous customer service solution
//           was 5–10%. With Intercom, we achieved
//           <span className="font-bold">
//             {" "}
//             65% bot deflection within just one week{" "}
//           </span>
//           of going live."
//         </blockquote>
//         <div className="flex items-center justify-center ">
//           <img src={avater} width={60} height={40} />

//           <div className="pl-4 text-left">
//             <div className="font-semibold">Stuart Sykes</div>
//             <div className="text-sm text-muted-foreground">
//               VP of Service Operations, Zilch
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layoutgridmesenger;
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import m2 from "../assets/m2.svg";
import m3 from "../assets/m3.svg";
import Z from "../assets/logo3.svg";
import avater from "../assets/avatar3.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon14.png";

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
        boxShadow: "0 10px 30px -5px rgba(251, 176, 152, 0.3)",
        transition: { duration: 0.3 },
      }}
      className="overflow-hidden border border-[#D3D5D8] rounded-2xl bg-gradient-to-b from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]"
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
        boxShadow: "0 10px 30px -5px rgba(251, 176, 152, 0.3)",
        transition: { duration: 0.3 },
      }}
      className="p-6 space-y-4 border border-[#D3D5D8] rounded-2xl bg-gradient-to-b from-[#FEF6F3] via-[#FDF0EB] to-[#FBE4DB]"
    >
      <motion.div
        className="bg-[#F5D7CC] w-12 h-12 rounded-lg flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
        animate={{
          scale: [1, 1.05, 1],
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
          className="text-2xl pb-[1rem] leading-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        >
          {title}
        </motion.div>
        <motion.div
          className="text-sm max-w-[25rem] font-normal"
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

const AnimatedLayoutGridMessenger = () => {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const testimonialRef = useRef(null);

  const firstRowInView = useInView(firstRowRef, { once: true, amount: 0.2 });
  const secondRowInView = useInView(secondRowRef, { once: true, amount: 0.2 });
  const testimonialInView = useInView(testimonialRef, {
    once: true,
    amount: 0.3,
  });

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
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* First row - 2 columns */}
      <motion.div
        ref={firstRowRef}
        className="grid md:grid-cols-2 gap-6"
        initial="hidden"
        animate={firstRowInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <AnimatedCard index={0}>
          <div className="p-5">
            <motion.h2
              className="text-xl font-bold text-gray-900"
              variants={fadeInUp}
            >
              Customizable Messenger
            </motion.h2>
            <motion.p
              className="text-sm max-w-[25rem] font-normal text-gray-600 mt-2"
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
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </AnimatedCard>

        <AnimatedCard index={1}>
          <div className="p-5">
            <motion.div className="text-xl font-bold" variants={fadeInUp}>
              Configurable experiences
            </motion.div>
            <motion.div
              className="text-sm max-w-[25rem] font-normal mt-2"
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
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                delay: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </AnimatedCard>
      </motion.div>

      {/* Second row - 4 columns */}
      <motion.div
        ref={secondRowRef}
        className="grid md:grid-cols-4 gap-6"
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
        className="pt-10 text-center max-w-xl mx-auto space-y-8"
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
        />
        <motion.blockquote
          className="text-xl font-normal"
          initial={{ opacity: 0 }}
          animate={testimonialInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          "Our bot deflection rate with our previous customer service solution
          was 5–10%. With Intercom, we achieved
          <motion.span
            className="font-bold"
            initial={{ color: "#000" }}
            animate={
              testimonialInView
                ? {
                    color: "#EC926C",
                    textShadow: "0 0 10px rgba(236, 146, 108, 0.3)",
                  }
                : { color: "#000" }
            }
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {" "}
            65% bot deflection within just one week{" "}
          </motion.span>
          of going live."
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
            alt="Stuart Sykes"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />

          <div className="pl-4 text-left">
            <div className="font-semibold">Stuart Sykes</div>
            <div className="text-sm text-muted-foreground">
              VP of Service Operations, Zilch
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedLayoutGridMessenger;
