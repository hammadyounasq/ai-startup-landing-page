import React, { useState } from "react";

export const NavigationMenu = ({ children }) => {
  return <nav>{children}</nav>;
};

export const NavigationMenuList = ({ children }) => {
  return <ul className="flex space-x-4">{children}</ul>;
};

export const NavigationMenuItem = ({ children }) => {
  return <li>{children}</li>;
};

export const NavigationMenuTrigger = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="text-gray-300 hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/* Content will be placed here */}
          </div>
        </div>
      )}
    </div>
  );
};

export const NavigationMenuContent = ({ children }) => {
  return (
    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      {children}
    </div>
  );
};

export const NavigationMenuLink = ({ children, className }) => {
  return (
    <a href="#" className={`text-gray-300 hover:text-white ${className}`}>
      {children}
    </a>
  );
};
