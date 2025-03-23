import botchat from "../assets/botchat.png";
import snoozo from "../assets/snoozo.png";
import AI from "../assets/AI.png";
import search from "../assets/search.png";
import topice from "../assets/topice.png";
import Z from "../assets/Z.png";
import avater from "../assets/avater.png";
// export default function FeaturesGrid() {
//   return (
//     <div className="container mx-auto px-4 py-12 space-y-12">
//       {/* First row - 2 columns */}
//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="overflow-hidden  border border-[#D3D5D8] rounded-2xl bg-gradient-to-b  from-blue-50 to-blue-100">
//           <div className="p-7">
//             <div className="text-2xl font-bold ">Fin</div>
//             <div className="text-sm max-w-[25rem] font-normal">
//               Our AI-powered bot automatically and accurately answers support
//               questions with zero training required.
//             </div>
//           </div>
//           <div className="p-0">
//             <img src={botchat} className="bg-muted w-full" />
//           </div>
//         </div>

//         <div className="overflow-hidden border border-[#D3D5D8] rounded-2xl  bg-gradient-to-b  from-[#F3F9FF] to-[#C4E0FD]">
//           <div className="p-7">
//             <div className="text-2xl font-bold ">Workflows</div>
//             <div className="text-sm max-w-[25rem] font-normal">
//               Easily build powerful no-code automations with bots, triggers,
//               conditions, and rules—all in one place.
//             </div>
//           </div>
//           <div className="p-0">
//             <img src={snoozo} className="bg-muted  w-full" />
//           </div>
//         </div>
//       </div>

//       {/* Second row - 3 columns */}
//       <div className="grid md:grid-cols-3 gap-6">
//         <div className="overflow-hidden border border-[#D3D5D8] rounded-2xl  bg-gradient-to-b  from-[#F3F9FF] to-[#C4E0FD]">
//           <div className="p-7">
//             <div className="text-2xl font-bold">AI-powered Inbox</div>
//             <div className="text-sm max-w-[25rem] font-normal">
//               Instantly generate replies, recap conversations for other agents,
//               and create new help articles.
//             </div>
//           </div>
//           <div className="p-0">
//             <img src={AI} className="bg-muted w-full" />
//           </div>
//         </div>

//         <div className="overflow-hidden  border border-[#D3D5D8] rounded-2xl  bg-gradient-to-b  from-[#F3F9FF] to-[#C4E0FD]">
//           <div className="p-7">
//             <div className="text-2xl font-bold ">Article suggestions</div>
//             <div className="text-sm max-w-[25rem] font-normal">
//               Immediately recommend helpful content with machine
//               learning—directly in your product.
//             </div>
//           </div>
//           <div className="p-0">
//             <img src={search} className="bg-muted  w-full" />
//           </div>
//         </div>

//         <div className="overflow-hidde  border border-[#D3D5D8] rounded-2xl bg-gradient-to-b  from-[#F3F9FF] to-[#C4E0FD]">
//           <div className="p-7 ">
//             <div className="text-2xl font-bold ">Conversation topics</div>
//             <div className="text-sm max-w-[25rem] font-normal">
//               Better understand your customers with AI-powered analysis of
//               support conversations.
//             </div>
//           </div>
//           <div className="pt-10">
//             <img src={topice} className="bg-muted aspect-video w-full" />
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
// }
("use client");

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function FeaturesGrid() {
  // Images would normally be imported, but we'll use the paths as provided
  const images = {
    botchat: botchat,
    snoozo: snoozo,
    AI: AI,
    search: search,
    topice: topice,
    Z: Z,
    avater: avater,
  };

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
        damping: 15,
      },
    },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Refs for scroll-triggered animations
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const testimonialRef = useRef(null);

  const row1InView = useInView(row1Ref, { once: true, amount: 0.2 });
  const row2InView = useInView(row2Ref, { once: true, amount: 0.2 });
  const testimonialInView = useInView(testimonialRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* First row - 2 columns */}
      <motion.div
        ref={row1Ref}
        className="grid md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={row1InView ? "visible" : "hidden"}
      >
        <motion.div
          className="overflow-hidden border border-[#D3D5D8] rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="p-7">
            <div className="text-2xl font-bold">Fin</div>
            <div className="text-sm max-w-[25rem] font-normal">
              Our AI-powered bot automatically and accurately answers support
              questions with zero training required.
            </div>
          </div>
          <div className="p-0">
            <motion.img
              src={images.botchat}
              className="bg-muted w-full"
              alt="Bot chat interface"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="overflow-hidden border border-[#D3D5D8] rounded-2xl bg-gradient-to-b from-[#F3F9FF] to-[#C4E0FD] hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="p-7">
            <div className="text-2xl font-bold">Workflows</div>
            <div className="text-sm max-w-[25rem] font-normal">
              Easily build powerful no-code automations with bots, triggers,
              conditions, and rules—all in one place.
            </div>
          </div>
          <div className="p-0">
            <motion.img
              src={images.snoozo}
              className="bg-muted w-full"
              alt="Workflow interface"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Second row - 3 columns */}
      <motion.div
        ref={row2Ref}
        className="grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={row2InView ? "visible" : "hidden"}
      >
        <motion.div
          className="overflow-hidden border border-[#D3D5D8] rounded-2xl bg-gradient-to-b from-[#F3F9FF] to-[#C4E0FD] hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="p-7">
            <div className="text-2xl font-bold">AI-powered Inbox</div>
            <div className="text-sm max-w-[25rem] font-normal">
              Instantly generate replies, recap conversations for other agents,
              and create new help articles.
            </div>
          </div>
          <div className="p-0">
            <motion.img
              src={images.AI}
              className="bg-muted w-full"
              alt="AI-powered inbox"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="overflow-hidden border border-[#D3D5D8] rounded-2xl bg-gradient-to-b from-[#F3F9FF] to-[#C4E0FD] hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="p-7">
            <div className="text-2xl font-bold">Article suggestions</div>
            <div className="text-sm max-w-[25rem] font-normal">
              Immediately recommend helpful content with machine
              learning—directly in your product.
            </div>
          </div>
          <div className="p-0">
            <motion.img
              src={images.search}
              className="bg-muted w-full"
              alt="Article suggestions"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="overflow-hidden border border-[#D3D5D8] rounded-2xl bg-gradient-to-b from-[#F3F9FF] to-[#C4E0FD] hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="p-7">
            <div className="text-2xl font-bold">Conversation topics</div>
            <div className="text-sm max-w-[25rem] font-normal">
              Better understand your customers with AI-powered analysis of
              support conversations.
            </div>
          </div>
          <div className="pt-10">
            <motion.img
              src={images.topice}
              className="bg-muted aspect-video w-full"
              alt="Conversation topics"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Testimonial section */}
      <motion.div
        ref={testimonialRef}
        className="pt-10 text-center max-w-xl mx-auto space-y-8"
        variants={testimonialVariants}
        initial="hidden"
        animate={testimonialInView ? "visible" : "hidden"}
      >
        <motion.img
          src={images.Z}
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
              testimonialInView ? { color: "#3B82F6" } : { color: "#000" }
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
            src={images.avater}
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
}
