// import React, { useState } from "react";

// export const NavigationMenu = ({ children }) => {
//   return <nav>{children}</nav>;
// };

// export const NavigationMenuList = ({ children }) => {
//   return <ul className="flex space-x-4">{children}</ul>;
// };

// export const NavigationMenuItem = ({ children }) => {
//   return <li>{children}</li>;
// };

// export const NavigationMenuTrigger = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//       <button
//         className="text-gray-300 hover:text-white"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {children}
//       </button>
//       {isOpen && (
//         <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//           <div
//             className="py-1"
//             role="menu"
//             aria-orientation="vertical"
//             aria-labelledby="options-menu"
//           >
//             {/* Content will be placed here */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export const NavigationMenuContent = ({ children }) => {
//   return (
//     <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//       {children}
//     </div>
//   );
// };

// export const NavigationMenuLink = ({ children, className }) => {
//   return (
//     <a href="#" className={`text-gray-300 hover:text-white ${className}`}>
//       {children}
//     </a>
//   );
// };

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="" alt="Intercom" className="h-8 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button className="text-gray-700 hover:text-gray-900 flex items-center space-x-1">
              <span>Products</span>
              {/* <ChevronDown className="h-4 w-4" /> */}
            </button>
            <button className="text-gray-700 hover:text-gray-900 flex items-center space-x-1">
              <span>Solutions</span>
              {/* <ChevronDown className="h-4 w-4" /> */}
            </button>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Customers
            </a>
            <button className="text-gray-700 hover:text-gray-900 flex items-center space-x-1">
              <span>Resources</span>
              {/* <ChevronDown className="h-4 w-4" /> */}
            </button>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Pricing
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
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
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              View demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
