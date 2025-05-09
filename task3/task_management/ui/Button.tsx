import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "primary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex justify-center items-center font-medium text-center rounded-full focus:ring-4 cursor-pointer";

  const variants = {
    outline: clsx(
      "relative z-10 overflow-hidden text-white border border-outline",
      "gradient-primary-hover hover:gradient-slide-in",
      "hover:scale-105 transition-transform duration-300"
    ),
    primary:
      "bg-primary text-white hover:bg-primary-hover focus:ring-purple-900",
  };

  const sizes = {
    sm: "py-2 px-3 text-sm",
    md: "py-3 px-5 text-base",
    lg: "py-4 px-6 text-lg",
  };

  return (
    <button
      className={clsx(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
