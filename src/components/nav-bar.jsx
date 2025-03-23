// import { Button } from "../components/Buttontwo";

import Intercom from "../assets/Intercom.svg";
// import { Dropdown } from "./Dropdown";

// import { useState } from "react";
// export function NavBar() {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const navItems = [
//     {
//       label: "Products",
//       hasDropdown: true,
//       dropdownContent: (
//         <ul className="space-y-3">
//           <li className="text-gray-300 hover:text-white cursor-pointer">
//             Product 1
//           </li>
//           <li className="text-gray-300 hover:text-white cursor-pointer">
//             Product 2
//           </li>
//         </ul>
//       ),
//     },
//     {
//       label: "Solutions",
//       hasDropdown: true,
//       dropdownContent: (
//         <ul className="space-y-3">
//           <li className="text-gray-300 hover:text-white cursor-pointer">
//             Solution 1
//           </li>
//           <li className="text-gray-300 hover:text-white cursor-pointer">
//             Solution 2
//           </li>
//         </ul>
//       ),
//     },
//     { label: "Customers", hasDropdown: false },
//     {
//       label: "Resources",
//       hasDropdown: true,
//       dropdownContent: (
//         <ul className="space-y-3">
//           <li className="text-gray-300 hover:text-white cursor-pointer">
//             Resource 1
//           </li>
//           <li className="text-gray-300 hover:text-white cursor-pointer">
//             Resource 2
//           </li>
//         </ul>
//       ),
//     },
//     { label: "Pricing", hasDropdown: false },
//   ];

//   return (
//     <header className="fixed top-0 w-full bg-[#0e1622]/95 backdrop-blur-md supports-[backdrop-filter]:bg-[#0e1622]/60 z-50 border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center">
//             <a href="/" className="flex-shrink-0">
//               <img
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-19%20at%209.27.22%E2%80%AFPM-ZBEFnGoiKpRUWARZ5PeWScPeOHTYuu.png"
//                 alt="Logo"
//                 className="h-8 w-auto"
//               />
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex md:space-x-8">
//             {navItems.map((item, index) => (
//               <div key={index} className="relative">
//                 <button
//                   className={`px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors ${
//                     activeDropdown === index ? "text-white" : ""
//                   }`}
//                   onMouseEnter={() =>
//                     setActiveDropdown(item.hasDropdown ? index : null)
//                   }
//                   onMouseLeave={() => setActiveDropdown(null)}
//                 >
//                   {item.label}
//                 </button>
//                 {item.hasDropdown && (
//                   <Dropdown isOpen={activeDropdown === index}>
//                     {item.dropdownContent}
//                   </Dropdown>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* CTA Buttons */}
//           <div className="hidden md:flex md:items-center md:space-x-4">
//             <Button variant="ghost" className="text-gray-300 hover:text-white">
//               Start free trial
//             </Button>
//             <Button
//               variant="outline"
//               className="border-gray-700 text-white hover:bg-gray-800"
//             >
//               View demo
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               onClick={() =>
//                 setActiveDropdown(activeDropdown === "mobile" ? null : "mobile")
//               }
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={
//                     activeDropdown === "mobile"
//                       ? "M6 18L18 6M6 6l12 12"
//                       : "M4 6h16M4 12h16M4 18h16"
//                   }
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {activeDropdown === "mobile" && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//           <div className="pt-4 pb-3 border-t border-gray-700">
//             <div className="flex items-center px-5 space-x-4">
//               <Button
//                 variant="ghost"
//                 className="w-full text-gray-300 hover:text-white"
//               >
//                 Start free trial
//               </Button>
//               <Button
//                 variant="outline"
//                 className="w-full border-gray-700 text-white hover:bg-gray-800"
//               >
//                 View demo
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
//-----
// import Logo from "../assets/logo1.svg";
// export default function Navbar() {
//   return (
//     <nav className="border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <img src={Logo} alt="Intercom" className="h-8 w-auto" />
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             <button className="text-gray-700 hover:text-gray-900 flex items-center space-x-1">
//               <span>Products</span>
//               {/* <ChevronDown className="h-4 w-4" /> */}
//             </button>
//             <button className="text-gray-700 hover:text-gray-900 flex items-center space-x-1">
//               <span>Solutions</span>
//               {/* <ChevronDown className="h-4 w-4" /> */}
//             </button>
//             <a href="#" className="text-gray-700 hover:text-gray-900">
//               Customers
//             </a>
//             <button className="text-gray-700 hover:text-gray-900 flex items-center space-x-1">
//               <span>Resources</span>
//               {/* <ChevronDown className="h-4 w-4" /> */}
//             </button>
//             <a href="#" className="text-gray-700 hover:text-gray-900">
//               Pricing
//             </a>
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <a
//               href="#"
//               className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
//             >
//               Start free trial
//               <svg
//                 className="ml-2 -mr-1 h-4 w-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </a>
//             <a
//               href="#"
//               className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
//             >
//               View demo
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
("use client");

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dropdown menu
  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation items with their dropdown content
  const navItems = [
    {
      name: "Products",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Messenger",
          description: "Chat with your customers",
          href: "#",
        },
        {
          name: "Inbox",
          description: "Manage customer conversations",
          href: "#",
        },
        {
          name: "Help Center",
          description: "Knowledge base for customers",
          href: "#",
        },
      ],
    },
    {
      name: "Solutions",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "For Marketing",
          description: "Engage with your audience",
          href: "#",
        },
        {
          name: "For Sales",
          description: "Convert leads to customers",
          href: "#",
        },
        {
          name: "For Support",
          description: "Provide excellent customer service",
          href: "#",
        },
      ],
    },
    {
      name: "Customers",
      hasDropdown: false,
      href: "#",
    },
    {
      name: "Resources",
      hasDropdown: true,
      dropdownItems: [
        { name: "Blog", description: "Latest news and updates", href: "#" },
        { name: "Guides", description: "Step-by-step tutorials", href: "#" },
        { name: "Webinars", description: "Learn from experts", href: "#" },
      ],
    },
    {
      name: "Pricing",
      hasDropdown: false,
      href: "#",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Intercom} alt="Intercom" className="h-8 w-auto" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.hasDropdown ? (
                  <motion.button
                    className="text-gray-700 hover:text-gray-900 flex items-center space-x-1 py-2"
                    onClick={() => toggleDropdown(item.name)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span>{item.name}</span>
                    <motion.div
                      animate={{
                        rotate: activeDropdown === item.name ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.button>
                ) : (
                  <motion.a
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 py-2 block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.name}
                  </motion.a>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="py-2 px-4 rounded-md bg-white">
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <motion.a
                            key={idx}
                            href={dropdownItem.href}
                            className="block px-4 py-3 hover:bg-gray-50 rounded-md transition-colors duration-150"
                            whileHover={{ x: 5 }}
                          >
                            <div className="font-medium text-gray-900">
                              {dropdownItem.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {dropdownItem.description}
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start free trial
              <svg
                className="ml-2 -mr-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View demo
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">
                {isOpen ? "Close menu" : "Open menu"}
              </span>
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex justify-between items-center"
                        onClick={() => toggleDropdown(item.name + "-mobile")}
                      >
                        {item.name}
                        <motion.div
                          animate={{
                            rotate:
                              activeDropdown === item.name + "-mobile"
                                ? 180
                                : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name + "-mobile" && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pl-4 overflow-hidden"
                          >
                            {item.dropdownItems.map((dropdownItem, idx) => (
                              <motion.a
                                key={idx}
                                href={dropdownItem.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                                whileHover={{ x: 5 }}
                              >
                                {dropdownItem.name}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4 space-x-3">
                  <motion.a
                    href="#"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    whileTap={{ scale: 0.95 }}
                  >
                    Start free trial
                  </motion.a>
                </div>
                <div className="mt-3 px-4">
                  <motion.a
                    href="#"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    whileTap={{ scale: 0.95 }}
                  >
                    View demo
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
