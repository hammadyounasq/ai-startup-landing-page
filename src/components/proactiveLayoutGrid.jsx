// import p1 from "../assets/ps1.svg";
// import p2 from "../assets/ps2.svg";
// import p3 from "../assets/ps3.svg";
// import p4 from "../assets/p4.svg";
// import p5 from "../assets/p5.svg";
// import p6 from "../assets/p6.svg";
// import Z from "../assets/logo2.svg";
// import avater from "../assets/avatar2.png";

// const FeatureCard = ({
//   title,
//   description,
//   imageSrc,
//   imageAlt,
//   className = "",
// }) => (
//   <div
//     className={`w-full bg-gradient-to-r from-[#FFF7E8] via-[#FFF1D9] to-[#FFF1D9] rounded-lg border border-[#D3D5D8] overflow-hidden ${className}`}
//   >
//     <div className="flex flex-col sm:flex-row">
//       <div className="p-6 flex-1">
//         <h2 className="text-2xl font-bold mb-4">{title}</h2>
//         <p className="text-gray-700">{description}</p>
//       </div>
//       <div className="relative w-full sm:w-1/2 h-48 sm:h-auto">
//         <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} />
//       </div>
//     </div>
//   </div>
// );

// export default function ProactiveLayoutGrid() {
//   return (
//     <div className="relative  mx-auto p-4 md:p-6 lg:p-8">
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
//         {[
//           {
//             title: "Help Center",
//             description:
//               "Let customers search and browse supportarticles directly in your product and on the web.",
//             image: p1,
//           },
//           {
//             title: "Checklists",
//             description:
//               "Onboard customers without taking time from your team thanks to contextual and personalized task lists.",
//             image: p2,
//           },
//           {
//             title: "Banners",
//             description:
//               "Inform specific customers of plannedchanges, events, or service interruptions.",
//             image: p3,
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="w-full flex flex-col justify-between bg-gradient-to-b from-[#FFFBF2] via-[#FFF1D9] to-[#FFF1D9] rounded-lg border border-[#D3D5D8] overflow-hidden"
//           >
//             <div className="p-6 flex-grow">
//               <h2 className="text-xl sm:text-2xl font-bold mb-4">
//                 {item.title}
//               </h2>
//               <p className="text-gray-700 text-sm sm:text-base">
//                 {item.description}
//               </p>
//             </div>
//             <div className="w-full aspect-[2/1]">
//               <img
//                 src={item.image || "/placeholder.svg"}
//                 alt={`${item.title} feature`}
//                 className="w-full "
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Second Row */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid gap-6 md:grid-cols-2">
//           {/* Left column */}
//           <div className="flex flex-col gap-6">
//             <FeatureCard
//               title="Tooltips"
//               description="Add help content directly into your product without engineering resources using our no-code UI."
//               imageSrc={p4}
//               imageAlt="Configurable feature"
//             />
//             <FeatureCard
//               title="Omnichannel"
//               description="Automatically trigger an in-app chat, email, or SMS message when a customer needs help."
//               imageSrc={p5}
//               imageAlt="Omnichannel feature"
//             />
//           </div>
//           {/* Right column */}
//           <div className=" relative w-full h-full flex flex-col  bg-gradient-to-b from-[#FFF7E8] via-[#FFF1D9] to-[#FFF1D9] rounded-lg border border-[#D3D5D8] overflow-hidden">
//             <div className="p-6 ">
//               <div className="text-2xl font-bold mb-4">Product Tours</div>
//               <p className="text-gray-700">
//                 Drive adoption of new features and deepen customer engagement
//                 with guided experiences.
//               </p>
//             </div>

//             <div className=" absolute bottom-0  w-full h-auto flex justify-center">
//               <img src={p6} className="w-full h-[200px] object-cover" />
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
//           &quot;Self-service and proactive support have helped us
//           <span className="font-bold">
//             reduce inbound conversation volume by 20%
//           </span>
//           over the past two years, even as our user base has continued to
//           grow.&quot;
//         </blockquote>
//         <div className="flex items-center justify-center ">
//           <img src={avater} width={60} height={40} />

//           <div className="pl-4 text-left">
//             <div className="font-semibold">Christian Parker</div>
//             <div className="text-sm text-muted-foreground">
//               Director of Managed Services, TrueCommerce
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import p1 from "../assets/ps1.svg";
import p2 from "../assets/ps2.svg";
import p3 from "../assets/ps3.svg";
import p4 from "../assets/p4.svg";
import p5 from "../assets/p5.svg";
import p6 from "../assets/p6.svg";
import Z from "../assets/logo2.svg";
import avater from "../assets/avatar2.png";

const AnimatedFeatureCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  className = "",
  index = 0,
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className={`w-full bg-gradient-to-r from-[#FFF7E8] via-[#FFF1D9] to-[#FFF1D9] rounded-lg border border-[#D3D5D8] overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px -5px rgba(251, 212, 130, 0.3)",
        transition: { duration: 0.3 },
      }}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="p-6 flex-1">
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-gray-700"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            {description}
          </motion.p>
        </div>
        <motion.div
          className="relative w-full sm:w-1/2 h-48 sm:h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const AnimatedGridCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="w-full flex flex-col justify-between bg-gradient-to-b from-[#FFFBF2] via-[#FFF1D9] to-[#FFF1D9] rounded-lg border border-[#D3D5D8] overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px -5px rgba(251, 212, 130, 0.3)",
        transition: { duration: 0.3 },
      }}
    >
      <div className="p-6 flex-grow">
        <motion.h2
          className="text-xl sm:text-2xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
        >
          {item.title}
        </motion.h2>
        <motion.p
          className="text-gray-700 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
        >
          {item.description}
        </motion.p>
      </div>
      <motion.div
        className="w-full aspect-[2/1]"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={item.image}
          alt={`${item.title} feature`}
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function AnimatedProactiveLayoutGrid() {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const testimonialRef = useRef(null);

  const firstRowInView = useInView(firstRowRef, { once: true, amount: 0.2 });
  const secondRowInView = useInView(secondRowRef, { once: true, amount: 0.2 });
  const testimonialInView = useInView(testimonialRef, {
    once: true,
    amount: 0.5,
  });

  const featureItems = [
    {
      title: "Help Center",
      description:
        "Let customers search and browse support articles directly in your product and on the web.",
      image: p1,
    },
    {
      title: "Checklists",
      description:
        "Onboard customers without taking time from your team thanks to contextual and personalized task lists.",
      image: p2,
    },
    {
      title: "Banners",
      description:
        "Inform specific customers of planned changes, events, or service interruptions.",
      image: p3,
    },
  ];

  return (
    <div className="relative mx-auto p-4 md:p-6 lg:p-8">
      {/* First Row */}
      <motion.div
        ref={firstRowRef}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6"
        initial="hidden"
        animate={firstRowInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {featureItems.map((item, index) => (
          <AnimatedGridCard key={index} item={item} index={index} />
        ))}
      </motion.div>

      {/* Second Row */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          ref={secondRowRef}
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          animate={secondRowInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {/* Left column */}
          <motion.div
            className="flex flex-col gap-6"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <AnimatedFeatureCard
              title="Tooltips"
              description="Add help content directly into your product without engineering resources using our no-code UI."
              imageSrc={p4}
              imageAlt="Tooltips feature"
              index={0}
            />
            <AnimatedFeatureCard
              title="Omnichannel"
              description="Automatically trigger an in-app chat, email, or SMS message when a customer needs help."
              imageSrc={p5}
              imageAlt="Omnichannel feature"
              index={1}
            />
          </motion.div>

          {/* Right column */}
          <motion.div
            className="relative w-full h-full flex flex-col bg-gradient-to-b from-[#FFF7E8] via-[#FFF1D9] to-[#FFF1D9] rounded-lg border border-[#D3D5D8] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={
              secondRowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 30px -5px rgba(251, 212, 130, 0.3)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="p-6">
              <motion.div
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  secondRowInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Product Tours
              </motion.div>
              <motion.p
                className="text-gray-700"
                initial={{ opacity: 0 }}
                animate={secondRowInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Drive adoption of new features and deepen customer engagement
                with guided experiences.
              </motion.p>
            </div>

            <motion.div
              className="absolute bottom-0 w-full h-auto flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={
                secondRowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <motion.img
                src={p6}
                className="w-full h-[200px] object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

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
          alt="Logo"
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
          &quot;Self-service and proactive support have helped us
          <motion.span
            className="font-bold"
            initial={{ color: "#000" }}
            animate={
              testimonialInView
                ? {
                    color: "#F59E0B",
                    textShadow: "0 0 10px rgba(251, 212, 130, 0.3)",
                  }
                : { color: "#000" }
            }
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {" "}
            reduce inbound conversation volume by 20%{" "}
          </motion.span>
          over the past two years, even as our user base has continued to
          grow.&quot;
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
            alt="Christian Parker"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />

          <div className="pl-4 text-left">
            <div className="font-semibold">Christian Parker</div>
            <div className="text-sm text-muted-foreground">
              Director of Managed Services, TrueCommerce
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
