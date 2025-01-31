// import Link from "next/link";
import { Button } from "../components/Buttontwo";
// import { Button } from "../components/ui/button";
import { Dropdown } from "./Dropdown";
// export function NavBar() {
//   return (
//     <header className="fixed top-0 w-full bg-[#0e1622]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0e1622]/60 z-50 border-b border-gray-800">
//       <div className="container flex h-16 items-center justify-between">
//         <div className="flex items-center gap-8">
//           <a href="/" className="flex items-center space-x-2">
//             <img
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-19%20at%209.27.22%E2%80%AFPM-ZBEFnGoiKpRUWARZ5PeWScPeOHTYuu.png"
//               alt="Intercom Logo"
//               className="h-8 w-auto"
//             />
//           </a>
//           <nav>
//             <ul className="flex space-x-4">
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white">
//                   Products
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white">
//                   Solutions
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white">
//                   Customers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white">
//                   Resources
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white">
//                   Pricing
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <div className="flex items-center gap-4">
//           <Button variant="ghost" className="text-gray-300 hover:text-white">
//             Start free trial
//           </Button>
//           <Button
//             variant="outline"
//             className="border-gray-700 text-white hover:bg-gray-800"
//           >
//             View demo
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }
import { useState } from "react";
export function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      label: "Products",
      hasDropdown: true,
      dropdownContent: (
        <ul className="space-y-3">
          <li className="text-gray-300 hover:text-white cursor-pointer">
            Product 1
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer">
            Product 2
          </li>
        </ul>
      ),
    },
    {
      label: "Solutions",
      hasDropdown: true,
      dropdownContent: (
        <ul className="space-y-3">
          <li className="text-gray-300 hover:text-white cursor-pointer">
            Solution 1
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer">
            Solution 2
          </li>
        </ul>
      ),
    },
    { label: "Customers", hasDropdown: false },
    {
      label: "Resources",
      hasDropdown: true,
      dropdownContent: (
        <ul className="space-y-3">
          <li className="text-gray-300 hover:text-white cursor-pointer">
            Resource 1
          </li>
          <li className="text-gray-300 hover:text-white cursor-pointer">
            Resource 2
          </li>
        </ul>
      ),
    },
    { label: "Pricing", hasDropdown: false },
  ];

  return (
    <header className="fixed top-0 w-full bg-[#0e1622]/95 backdrop-blur-md supports-[backdrop-filter]:bg-[#0e1622]/60 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-19%20at%209.27.22%E2%80%AFPM-ZBEFnGoiKpRUWARZ5PeWScPeOHTYuu.png"
                alt="Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  className={`px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors ${
                    activeDropdown === index ? "text-white" : ""
                  }`}
                  onMouseEnter={() =>
                    setActiveDropdown(item.hasDropdown ? index : null)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.label}
                </button>
                {item.hasDropdown && (
                  <Dropdown isOpen={activeDropdown === index}>
                    {item.dropdownContent}
                  </Dropdown>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Start free trial
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              View demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() =>
                setActiveDropdown(activeDropdown === "mobile" ? null : "mobile")
              }
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
                  d={
                    activeDropdown === "mobile"
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {activeDropdown === "mobile" && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5 space-x-4">
              <Button
                variant="ghost"
                className="w-full text-gray-300 hover:text-white"
              >
                Start free trial
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-700 text-white hover:bg-gray-800"
              >
                View demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
