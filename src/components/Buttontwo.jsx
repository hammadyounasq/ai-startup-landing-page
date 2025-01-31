import React from "react";

export function Button({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0e1622] disabled:opacity-50";

  const variants = {
    default: "bg-[#0052FF] hover:bg-[#0040CC] text-white focus:ring-blue-500",
    outline: "border border-current hover:bg-gray-800 focus:ring-gray-500",
    ghost: "hover:bg-gray-800 focus:ring-gray-500",
  };

  const variantStyles = variants[variant] || variants.default;

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
