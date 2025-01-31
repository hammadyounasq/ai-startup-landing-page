import React from "react";
import clsx from "clsx"; // You can use clsx or classnames library for conditional class joining

const buttonVariants = ({
  variant = "default",
  size = "default",
  className = "",
} = {}) => {
  const baseClass =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

  const variantClasses = {
    default: "bg-[#0052FF] text-white hover:bg-[#0040CC]",
    outline:
      "border border-gray-700 bg-transparent text-white hover:bg-gray-800",
    ghost: "text-gray-300 hover:text-white hover:bg-gray-800",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizeClasses = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-11 rounded-md px-8",
    icon: "h-9 w-9",
  };

  return clsx(
    baseClass,
    variantClasses[variant] || variantClasses.default,
    sizeClasses[size] || sizeClasses.default,
    className
  );
};

const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
